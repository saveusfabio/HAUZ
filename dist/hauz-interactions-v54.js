(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');

  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
    reveals.forEach(element => observer.observe(element));
  } else reveals.forEach(element => element.classList.add('is-visible'));

  const copy = document.querySelector('[data-scroll-copy]');
  if (copy && !reduced.matches) {
    const parts = copy.textContent.match(/\S+|\s+/g) || [];
    copy.replaceChildren(...parts.map(part => {
      if (/^\s+$/.test(part)) return document.createTextNode(part);
      const word = document.createElement('span');
      word.className = 'studio-scroll-word';
      word.textContent = part;
      if (/^(tech|design|homebuilding)[.,—]?$/i.test(part)) word.classList.add('studio-keyword');
      return word;
    }));
    const words = [...copy.querySelectorAll('.studio-scroll-word')];
    let frame = 0;
    const update = () => {
      frame = 0;
      const threshold = innerHeight * .78;
      words.forEach(word => word.classList.toggle('is-scrolled', word.getBoundingClientRect().top <= threshold));
    };
    const request = () => { if (!frame && !document.hidden) frame = requestAnimationFrame(update); };
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request, { passive: true });
    request();
  }

  document.querySelectorAll('.roll').forEach(element => {
    [...element.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()).forEach(node => {
      const text = node.textContent.trim();
      const wrap = document.createElement('span');
      wrap.className = 'roll-text';
      wrap.setAttribute('aria-hidden', 'true');
      [...text].forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'roll-char';
        span.style.setProperty('--i', index);
        span.textContent = char;
        wrap.append(span);
      });
      const accessible = document.createElement('span');
      accessible.className = 'sr-only';
      accessible.textContent = text;
      node.replaceWith(wrap, accessible);
    });
  });

  const scramble = element => {
    if (reduced.matches) return;
    const original = element.textContent;
    const visible = document.createElement('span');
    visible.setAttribute('aria-hidden', 'true');
    const accessible = document.createElement('span');
    accessible.className = 'sr-only';
    accessible.textContent = original;
    element.replaceChildren(visible, accessible);
    const start = performance.now();
    const tick = now => {
      const progress = Math.min((now - start) / 480, 1);
      const resolved = Math.floor(progress * original.length);
      visible.textContent = [...original].map((char, index) => char === ' ' || index < resolved ? char : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)]).join('');
      if (progress < 1 && !reduced.matches) requestAnimationFrame(tick);
      else visible.textContent = original;
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const labels = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      scramble(entry.target);
      labels.unobserve(entry.target);
    }), { threshold: 1 });
    document.querySelectorAll('[data-scramble]').forEach(element => labels.observe(element));
  }

  const transform = document.querySelector('.work-transform-cta');
  const showcase = document.querySelector('.work-showcase');
  if (transform && showcase) {
    const observer = new IntersectionObserver(entries => {
      transform.classList.toggle('is-visible', entries[0].isIntersecting);
    }, { threshold: .12 });
    observer.observe(showcase);
  }
  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    const control = event.target.closest('.work .demo [data-demo-target]');
    if (!control) return;
    const demo = control.closest('.demo');
    const target = demo?.querySelector(control.dataset.demoTarget);
    if (!demo || !target) return;
    event.preventDefault();
    const top = target.getBoundingClientRect().top - demo.getBoundingClientRect().top + demo.scrollTop;
    demo.scrollTo({ top, behavior: reduced.matches ? 'instant' : 'smooth' });
  }, true);

  const sticker = document.querySelector('.craft-sticker');
  if (sticker) {
    let visible = false;
    let paused = false;
    const sync = () => sticker.classList.toggle('is-running', visible && !paused && !reduced.matches && !document.hidden);
    new IntersectionObserver(entries => { visible = entries[0].isIntersecting; sync(); }).observe(sticker);
    sticker.addEventListener('click', () => {
      paused = !paused;
      sticker.setAttribute('aria-pressed', String(paused));
      const label = paused ? 'Resume rotating sticker' : 'Pause rotating sticker';
      sticker.setAttribute('aria-label', label);
      sticker.title = label;
      sync();
    });
    reduced.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
  }

  const work = document.querySelector('#work');
  const shell = work?.querySelector('.work-showcase > .project-shell');
  if (!shell) return;
  const before = shell.querySelector('#before-demo');
  const after = shell.querySelector('#after-demo');
  if (!before || !after) return;

  const compare = document.createElement('div');
  compare.className = 'mobile-compare';
  compare.setAttribute('aria-label', 'Compare the current website and redesign');
  const bar = shell.querySelector('.browser-bar').cloneNode(true);
  compare.append(bar);
  const viewport = document.createElement('div');
  viewport.className = 'mobile-compare-viewport';
  for (const [source, name] of [[before, 'before'], [after, 'after']]) {
    const layer = document.createElement('div');
    layer.className = `mobile-compare-${name}`;
    layer.setAttribute('aria-hidden', 'true');
    const clone = source.cloneNode(true);
    clone.removeAttribute('hidden');
    clone.removeAttribute('inert');
    clone.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    clone.removeAttribute('id');
    clone.querySelectorAll('button,a,[tabindex]').forEach(element => element.setAttribute('tabindex', '-1'));
    layer.append(clone);
    viewport.append(layer);
  }
  const labels = document.createElement('div');
  labels.className = 'mobile-compare-labels';
  labels.innerHTML = '<span>Current site</span><span>Redesign</span>';
  const control = document.createElement('input');
  control.type = 'range';
  control.min = '0';
  control.max = '100';
  control.value = '50';
  control.setAttribute('aria-label', 'Reveal redesign');
  const divider = document.createElement('span');
  divider.className = 'mobile-compare-divider';
  divider.setAttribute('aria-hidden', 'true');
  divider.innerHTML = '<span>‹ ›</span>';
  const sync = () => {
    compare.style.setProperty('--compare-position', `${control.value}%`);
    control.setAttribute('aria-valuetext', `${control.value} percent of redesign visible`);
  };
  control.addEventListener('input', sync);
  sync();
  viewport.append(labels, control, divider);
  compare.append(viewport);
  shell.after(compare);
})();
