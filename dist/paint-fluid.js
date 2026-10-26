/* Continuous image refraction, inspired by React Bits' Ripple Distortion.
 * A tiny displacement pass and one image pass; no fluid solver or dependencies. */
(() => {
  'use strict';
  const field = document.querySelector('.paint-field');
  const image = field?.querySelector('.paint-field-texture');
  if (!image) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const MAX_WAVES = 16;
  const MAP_SIZE = 128;
  let initialized = false, ready = false, visible = false, failed = false;
  let canvas, gl, mapProgram, imageProgram, framebuffer, photo, displacement;
  let mapWaves, imageTime, imageActive, imageMomentum, imageTouch, buffer;
  const attributes = new Map();
  const momentum = {x: 0, y: 0, targetX: 0, targetY: 0, touchX: .5, touchY: .5};
  let timer = 0, frame = 0, previous = 0, time = 0, width = 1, textureRequest = 0;
  let waveIndex = 0, lastPointer = null, lastInput = 0, mapWasActive = false;
  const waves = Array.from({length: MAX_WAVES}, () => ({x: 0, y: 0, born: -100, power: 1}));
  const uniforms = new Float32Array(MAX_WAVES * 4);
  const vertex = `
    attribute vec2 aPosition;
    varying vec2 vUv;
    void main() { vUv = aPosition * .5 + .5; gl_Position = vec4(aPosition, 0., 1.); }
  `;
  const mapFragment = `
    precision mediump float;
    varying vec2 vUv;
    uniform vec4 uWaves[16];
    void main() {
      float height = 0.;
      for (int i = 0; i < 16; i++) {
        vec4 wave = uWaves[i];
        if (wave.w > .001) {
          vec2 relative = (vUv - wave.xy) / wave.z;
          float squaredRadius = dot(relative, relative);
          if (squaredRadius < 1.) {
            float radius = sqrt(squaredRadius);
            float bell = max(0., (exp(-5. * squaredRadius) - .006738) / .993262);
            float folds = .55 + .45 * cos(radius * 18.84956);
            height += bell * folds * wave.w;
          }
        }
      }
      gl_FragColor = vec4(vec3(height), 1.);
    }
  `;
  const imageFragment = `
    precision mediump float;
    varying vec2 vUv;
    uniform sampler2D uImage;
    uniform sampler2D uMap;
    uniform float uTime;
    uniform float uActive;
    uniform vec2 uMomentum;
    uniform vec2 uTouch;
    void main() {
      vec2 uv = vUv;
      // Two slow, overlapping flows bend the veins without moving a cutout.
      vec2 flow = vec2(
        sin(uv.y * 7. + uTime * .32) + .45 * cos(uv.x * 9. - uTime * .23),
        cos(uv.x * 6. - uTime * .27) + .45 * sin(uv.y * 8. + uTime * .20)
      ) * .026;
      vec2 carry = vec2(0.);
      if (dot(uMomentum, uMomentum) > .0000001) {
        vec2 delta = uv - uTouch;
        float influence = exp(-dot(delta, delta) * 5.);
        carry = -uMomentum * influence;
        carry += vec2(-uMomentum.y, uMomentum.x) * sin(delta.y * 6. + delta.x * 4.) * influence * .35;
      }
      vec2 refraction = vec2(0.);
      if (uActive > .5) {
        float height = texture2D(uMap, uv).r;
        float angle = height * 6.283185;
        refraction = vec2(sin(angle), cos(angle)) * height * .19;
      }
      vec2 sampleUv = (uv - .5) * .90 + .5 + flow + carry + refraction;
      // Mirror only at the outer texture edge, avoiding stretched border pixels.
      sampleUv = 1. - abs(mod(sampleUv, 2.) - 1.);
      gl_FragColor = vec4(texture2D(uImage, sampleUv).rgb, 1.);
    }
  `;
  function stop() {
    clearTimeout(timer); cancelAnimationFrame(frame);
    timer = frame = previous = 0;
  }
  function fallback() {
    failed = true; ready = false; stop();
    field.classList.remove('has-fluid');
    field.dataset.paintRenderer = 'static';
    field.dataset.paintState = 'static';
    canvas?.remove();
  }
  function program(fragment) {
    const result = gl.createProgram();
    for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]]) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source); gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      gl.attachShader(result, shader); gl.deleteShader(shader);
    }
    gl.linkProgram(result);
    if (!gl.getProgramParameter(result, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(result));
    attributes.set(result, gl.getAttribLocation(result, 'aPosition'));
    return result;
  }
  function texture() {
    const result = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, result);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return result;
  }
  function bind(programObject) {
    gl.useProgram(programObject); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const position = attributes.get(programObject);
    gl.enableVertexAttribArray(position); gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  }
  function resize() {
    width = Math.max(1, field.clientWidth);
    if (!canvas) return;
    const size = Math.min(400, Math.round(width * Math.min(devicePixelRatio || 1, 1.25)));
    if (canvas.width !== size) canvas.width = canvas.height = size;
  }
  function init() {
    initialized = true;
    try {
      canvas = document.createElement('canvas'); canvas.className = 'paint-fluid';
      canvas.setAttribute('aria-hidden', 'true');
      gl = canvas.getContext('webgl', {alpha: false, antialias: false, depth: false, stencil: false, powerPreference: 'low-power'});
      if (!gl) return fallback();
      mapProgram = program(mapFragment); imageProgram = program(imageFragment);
      buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 3,-1, -1,3]), gl.STATIC_DRAW);
      photo = texture(); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      displacement = texture();
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, MAP_SIZE, MAP_SIZE, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      framebuffer = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, displacement, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) return fallback();
      gl.clearColor(0,0,0,1); gl.clear(gl.COLOR_BUFFER_BIT);
      mapWaves = gl.getUniformLocation(mapProgram, 'uWaves[0]');
      imageTime = gl.getUniformLocation(imageProgram, 'uTime');
      imageActive = gl.getUniformLocation(imageProgram, 'uActive');
      imageMomentum = gl.getUniformLocation(imageProgram, 'uMomentum');
      imageTouch = gl.getUniformLocation(imageProgram, 'uTouch');
      gl.useProgram(imageProgram);
      gl.uniform1i(gl.getUniformLocation(imageProgram, 'uImage'), 0);
      gl.uniform1i(gl.getUniformLocation(imageProgram, 'uMap'), 1);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, photo);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, displacement);
      canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); fallback(); });
      field.insertBefore(canvas, field.querySelector('.paint-field-tint'));
      resize(); ready = true;
      field.dataset.paintRenderer = 'webgl';
      sync();
    } catch (error) { console.warn('Paint animation unavailable; showing static texture.', error); fallback(); }
  }
  function draw(now) {
    frame = 0;
    if (!ready || !visible || document.hidden || reduced.matches) return;
    const dt = previous ? Math.min((now - previous) / 1000, .1) : 0;
    time += dt;
    previous = now;
    // The surface catches up to the gesture, then coasts instead of snapping back.
    const drag = Math.exp(-dt * 1.05), follow = 1 - Math.exp(-dt * 5);
    momentum.targetX *= drag; momentum.targetY *= drag;
    momentum.x += (momentum.targetX - momentum.x) * follow;
    momentum.y += (momentum.targetY - momentum.y) * follow;
    let active = false;
    for (let i = 0; i < MAX_WAVES; i++) {
      const wave = waves[i], age = time - wave.born;
      const alive = age >= 0 && age < 3.2;
      const opacity = alive ? Math.exp(-age * 2.7) : 0;
      const j = i * 4;
      uniforms[j + 3] = opacity;
      if (alive) {
        uniforms[j] = wave.x; uniforms[j + 1] = wave.y;
        uniforms[j + 2] = (.16 + .52 * (1 - Math.exp(-age * 1.09))) * wave.power;
      }
      if (alive) active = true;
    }
    if (active || mapWasActive) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer); gl.viewport(0,0,MAP_SIZE,MAP_SIZE);
      bind(mapProgram); gl.uniform4fv(mapWaves, uniforms); gl.drawArrays(gl.TRIANGLES,0,3);
    }
    mapWasActive = active;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0,0,canvas.width,canvas.height);
    bind(imageProgram); gl.uniform1f(imageTime, time); gl.uniform1f(imageActive, active ? 1 : 0);
    gl.uniform2f(imageMomentum, momentum.x, momentum.y);
    gl.uniform2f(imageTouch, momentum.touchX, momentum.touchY);
    gl.drawArrays(gl.TRIANGLES,0,3);
    if (!field.classList.contains('has-fluid')) field.classList.add('has-fluid');
    // No uncapped RAF loop: schedule only 24 idle / 30 interactive frames per second.
    timer = setTimeout(() => { timer = 0; frame = requestAnimationFrame(draw); }, active ? 25 : 34);
  }
  function sync() {
    stop();
    field.dataset.paintState = 'idle';
    if (reduced.matches) field.classList.remove('has-fluid');
    if (failed || !visible || document.hidden || reduced.matches) return;
    if (!initialized && image.complete && image.naturalWidth) return init();
    if (ready) {
      field.dataset.paintState = 'running';
      frame = requestAnimationFrame(draw);
    }
  }
  function disturb(event, power = 1) {
    if (!ready || reduced.matches || !visible) return;
    if (event.type === 'pointermove' && event.pointerType === 'touch') return;
    const rect = field.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = 1 - (event.clientY - rect.top) / rect.height;
    if (Math.hypot(x - .5, y - .5) > .5) return;
    const stamp = performance.now();
    if (power === 1 && lastPointer && (stamp - lastInput < 38 || Math.hypot(x - lastPointer.x, y - lastPointer.y) * width < 9)) return;
    if (lastPointer && stamp - lastInput < 250) {
      const seconds = Math.max(.016, (stamp - lastInput) / 1000);
      const vx = (x - lastPointer.x) / seconds, vy = (y - lastPointer.y) / seconds;
      const gain = .045 / Math.max(1, Math.hypot(vx, vy) / 1.6);
      momentum.targetX = vx * gain; momentum.targetY = vy * gain;
    }
    momentum.touchX = x; momentum.touchY = y;
    const wave = waves[waveIndex++ % MAX_WAVES];
    Object.assign(wave, {x, y, born: time, power});
    lastPointer = {x,y}; lastInput = stamp;
  }
  field.addEventListener('pointermove', disturb, {passive:true});
  field.addEventListener('pointerdown', event => disturb(event, 1.65), {passive:true});
  field.addEventListener('pointerleave', () => { lastPointer = null; });
  new ResizeObserver(resize).observe(field);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting; sync();
  }).observe(field);
  else { visible = true; sync(); }
  reduced.addEventListener('change', () => {
    waves.forEach(w => { w.born = -100; });
    momentum.x = momentum.y = momentum.targetX = momentum.targetY = 0;
    sync();
  });
  document.addEventListener('visibilitychange', sync);
  window.addEventListener('pagehide', stop);
  window.addEventListener('pageshow', sync);
  window.addEventListener('paint-color-change', async event => {
    const source = event.detail?.texture;
    if (!source) return;
    const request = ++textureRequest;
    const expectedUrl = new URL(source, document.baseURI).href;
    try {
      // Decode the selected source before touching the existing WebGL texture.
      // This also prevents a quick second selection from uploading an older image.
      if (typeof image.decode === 'function') await image.decode();
      else if (!image.complete || !image.naturalWidth) await new Promise((resolve, reject) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', reject, { once: true });
      });
      if (request !== textureRequest || image.currentSrc !== expectedUrl || !image.naturalWidth) return;
      if (ready && gl && photo) {
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, photo);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, displacement);
        sync();
      }
    } catch (error) {
      if (request === textureRequest) {
        console.warn('Paint color texture could not be uploaded; showing the selected still image.', error);
        fallback();
      }
    }
  });
})();
