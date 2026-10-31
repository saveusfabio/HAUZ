(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.classList.add('js');
  const paintFieldIntro = document.querySelector('.paint-field');
  if (paintFieldIntro && !reduced.matches) {
    document.documentElement.classList.add('paint-intro');
    window.setTimeout(() => document.documentElement.classList.remove('paint-intro'), 1050);
  }
  let smoothScroll = null;
  const smoothPointer = matchMedia('(hover:hover) and (pointer:fine)');
  const syncSmoothScroll = () => {
    smoothScroll?.destroy();
    smoothScroll = !reduced.matches && smoothPointer.matches && window.Lenis ? new window.Lenis({ autoRaf: true, anchors: true, lerp: .085 }) : null;
  };
  syncSmoothScroll();
  reduced.addEventListener('change', syncSmoothScroll);
  smoothPointer.addEventListener('change', syncSmoothScroll);
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('is-visible'));

  const scrollCopy = document.querySelector('[data-scroll-copy]');
  if (scrollCopy && !reduced.matches) {
    const text = scrollCopy.textContent;
    const words = text.match(/\S+|\s+/g) || [];
    scrollCopy.replaceChildren(...words.map(part => {
      if (/^\s+$/.test(part)) return document.createTextNode(part);
      const word = document.createElement('span');
      word.className = 'studio-scroll-word';
      word.textContent = part;
      return word;
    }));
    const scrollWords = [...scrollCopy.querySelectorAll('.studio-scroll-word')];
    scrollWords.forEach(word => { if (/^(tech|design|homebuilding)[.,—]?$/i.test(word.textContent)) word.classList.add('studio-keyword'); });
    let textFrame = 0, textVisible = false;
    const updateScrollCopy = () => {
      textFrame = 0;
      const threshold = window.innerHeight * .78;
      const positions = scrollWords.map(word => word.getBoundingClientRect().top);
      scrollWords.forEach((word,i) => word.classList.toggle('is-scrolled', reduced.matches || positions[i] <= threshold));
    };
    const requestTextUpdate = () => { if (textVisible && !textFrame && !document.hidden) textFrame = requestAnimationFrame(updateScrollCopy); };
    new IntersectionObserver(entries => { textVisible=entries[0].isIntersecting; requestTextUpdate(); },{rootMargin:'100px'}).observe(scrollCopy);
    window.addEventListener('scroll', requestTextUpdate, { passive: true });
    window.addEventListener('resize', requestTextUpdate, { passive: true });
    requestTextUpdate();
  }

  document.querySelectorAll('.roll').forEach(el => {
    [...el.childNodes].filter(node => node.nodeType === Node.TEXT_NODE && node.textContent.trim()).forEach(node => {
      const text = node.textContent.trim();
      const wrap = document.createElement('span'); wrap.className = 'roll-text'; wrap.setAttribute('aria-hidden','true');
      [...text].forEach((char,i) => { const span=document.createElement('span'); span.className='roll-char';span.style.setProperty('--i',i);span.textContent=char;wrap.append(span); });
      const accessible=document.createElement('span');accessible.textContent=text;accessible.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
      node.replaceWith(wrap,accessible);
    });
  });

  const scramble = el => {
    if (reduced.matches) return;
    const original=el.textContent; const visible=document.createElement('span');visible.setAttribute('aria-hidden','true');
    const accessible=document.createElement('span');accessible.textContent=original;accessible.style.cssText='position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap';
    el.replaceChildren(visible,accessible);const start=performance.now();
    const tick = now => { const progress=Math.min((now-start)/480,1);const resolved=Math.floor(progress*original.length);visible.textContent=[...original].map((c,i)=>c===' '||i<resolved?c:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*26)]).join(''); if(progress<1&&!reduced.matches) requestAnimationFrame(tick);else visible.textContent=original; };requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {const labels=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){scramble(e.target);labels.unobserve(e.target)}}),{threshold:1});document.querySelectorAll('[data-scramble]').forEach(el=>labels.observe(el));}

  const dot=document.querySelector('.cursor-dot');const fine=matchMedia('(hover: hover) and (pointer: fine)');let targetX=0,targetY=0,x=0,y=0,cursorFrame=0;
  function animateCursor(){x+=(targetX-x)*.22;y+=(targetY-y)*.22;dot.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;if(Math.abs(targetX-x)+Math.abs(targetY-y)>.15)cursorFrame=requestAnimationFrame(animateCursor);else cursorFrame=0;}
  document.addEventListener('pointermove',event=>{if(!fine.matches||reduced.matches||event.pointerType==='touch')return;if(event.target.closest('.hero-paint')){dot.classList.remove('active');return;}targetX=event.clientX+13;targetY=event.clientY+13;if(!dot.classList.contains('active')){x=targetX;y=targetY;}dot.classList.add('active');dot.classList.toggle('over-link',Boolean(event.target.closest('a,button,summary')));if(!cursorFrame)cursorFrame=requestAnimationFrame(animateCursor);},{passive:true});
  document.addEventListener('pointerleave',()=>dot.classList.remove('active'));
  document.addEventListener('visibilitychange',()=>{if(document.hidden){dot.classList.remove('active');cancelAnimationFrame(cursorFrame);cursorFrame=0;}});

  const hero=document.querySelector('.hero'); const photo=document.querySelector('.hero-photo');let scrollFrame=0;
  function updatePhoto(){scrollFrame=0;if(reduced.matches||!photo)return;const y=window.scrollY;if(y<hero.offsetHeight)photo.style.transform=`translate3d(0,${Math.min(y*.12,90)}px,0)`;}
  if(photo) window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updatePhoto);},{passive:true});
  reduced.addEventListener('change',()=>{if(reduced.matches){if(photo)photo.style.transform='none';dot.classList.remove('active');cancelAnimationFrame(cursorFrame);cursorFrame=0;}});

  const picker = document.querySelector('[data-paint-picker]');
  const luminanceOf = hex => {
    const channels = hex.replace('#','').match(/../g).map(c=>parseInt(c,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);
    return channels[0]*.2126+channels[1]*.7152+channels[2]*.0722;
  };
  const contrast = (a,b) => (Math.max(luminanceOf(a),luminanceOf(b))+.05)/(Math.min(luminanceOf(a),luminanceOf(b))+.05);
  const shade = (hex,factor) => '#'+hex.slice(1).match(/../g).map(c=>Math.round(parseInt(c,16)*factor).toString(16).padStart(2,'0')).join('');
  const applyActionTone = color => {
    let background=color;
    // The orange pigment needs a deeper terracotta surface to support clear white type.
    if(color==='#d87843') for(let f=.98;contrast(background,'#ffffff')<5.2;f-=.02) background=shade(color,f);
    const ink=contrast(background,'#ffffff')>=contrast(background,'#20231f')?'#ffffff':'#20231f';
    if(ink==='#ffffff') for(let f=.98;contrast(background,ink)<5.2;f-=.02) background=shade(color,f);
    let textColor=color;
    for(let f=.98;contrast(textColor,'#f4f4f0')<4.5;f-=.02) textColor=shade(color,f);
    const root=document.documentElement.style;
    root.setProperty('--action-accent',background);root.setProperty('--accent-ink',ink);root.setProperty('--accent-text',textColor);root.setProperty('--selection-ink',shade(textColor,.48));
  };
  applyActionTone('#56664e');
  if (picker) {
    const swatches = [...picker.querySelectorAll('.paint-swatch')];
    let paintPulseTimer = 0;
    swatches.forEach((swatch, index) => {
      swatch.addEventListener('click', () => {
        picker.style.setProperty('--paint-color', swatch.dataset.paint);
        const fieldImage = document.querySelector('.paint-field-texture');
        if (fieldImage && swatch.dataset.texture) fieldImage.src = swatch.dataset.texture;
        hero.style.setProperty('--hero-paint-color', swatch.dataset.paint);
        document.querySelector('[data-paint-field-name]').textContent = swatch.dataset.name;
        document.documentElement.style.setProperty('--site-accent', swatch.dataset.paint);
        applyActionTone(swatch.dataset.paint);
        const hex = swatch.dataset.paint.slice(1);
        const red = parseInt(hex.slice(0,2),16)/255, green = parseInt(hex.slice(2,4),16)/255, blue = parseInt(hex.slice(4,6),16)/255;
        const high = Math.max(red,green,blue), low = Math.min(red,green,blue), light = (high+low)/2;
        let hue = 0, saturation = 0;
        if (high !== low) { const delta = high-low; saturation = delta/(1-Math.abs(2*light-1)); hue = high===red ? ((green-blue)/delta)%6 : high===green ? (blue-red)/delta+2 : (red-green)/delta+4; hue = (hue*60+360)%360; }
        const complementaryHue = (hue+180)%360;
        hero.style.setProperty('--hero-paint-tint', 'hsl(' + hue + ' ' + Math.max(saturation * 100, 42) + '% ' + Math.max(light * 100, 34) + '%)');
        hero.style.setProperty('--hero-ground', 'hsl(' + complementaryHue + ' ' + Math.min(17,saturation*100*.2) + '% 96.5%)');
        hero.classList.remove('is-painting');
        void hero.offsetWidth;
        hero.classList.add('is-painting');
        window.clearTimeout(paintPulseTimer);
        paintPulseTimer = window.setTimeout(() => hero.classList.remove('is-painting'), 780);
        picker.querySelector('[data-paint-name]').textContent = swatch.dataset.name;
        picker.querySelector('[data-paint-count]').textContent = String(index + 1).padStart(2, '0') + ' / 05';
        swatches.forEach(button => {
          const selected = button === swatch;
          button.classList.toggle('is-selected', selected);
          button.setAttribute('aria-pressed', String(selected));
        });
        window.dispatchEvent(new CustomEvent('paint-color-change', { detail: { texture: swatch.dataset.texture } }));
      });
      swatch.addEventListener('keydown', event => {
        if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? swatches.length - 1 : (index + (event.key === 'ArrowRight' ? 1 : swatches.length - 1)) % swatches.length;
        swatches[next].focus();
      });
    });
    picker.addEventListener('pointermove', event => {
      if (event.pointerType === 'touch') return;
      const rect = picker.getBoundingClientRect();
      picker.style.setProperty('--paint-x', `${event.clientX - rect.left}px`);
      picker.style.setProperty('--paint-y', `${event.clientY - rect.top}px`);
    }, { passive: true });
  }

  const paintCard = document.querySelector('.paint-sample-card');
  if (paintCard && matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    paintCard.addEventListener('pointermove', event => {
      const rect = paintCard.getBoundingClientRect();
      paintCard.style.setProperty('--glint-x', `${((event.clientX - rect.left) / rect.width * 100).toFixed(1)}%`);
      paintCard.style.setProperty('--glint-y', `${((event.clientY - rect.top) / rect.height * 100).toFixed(1)}%`);
      paintCard.classList.add('tilt-active');
    }, { passive: true });
    paintCard.addEventListener('pointerleave', () => paintCard.classList.remove('tilt-active'));
  }
  const viewToggle=document.querySelector('.work-transform-cta');
  const workMockup=document.querySelector('.work-showcase');
  if(viewToggle&&workMockup){
    const setCtaVisible=visible=>{viewToggle.classList.toggle('is-visible',visible);};
    if('IntersectionObserver' in window){new IntersectionObserver(entries=>{for(const entry of entries)setCtaVisible(entry.isIntersecting);},{threshold:0.12}).observe(workMockup);}
    else setCtaVisible(true);
  }
  document.addEventListener('click',event=>{if(!(event.target instanceof Element))return;const control=event.target.closest('.work .demo [data-demo-target]');if(!control)return;const demo=control.closest('.demo');const target=demo?.querySelector(control.dataset.demoTarget);if(!demo||!target)return;event.preventDefault();const top=target.getBoundingClientRect().top-demo.getBoundingClientRect().top+demo.scrollTop;demo.scrollTo({top,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});},true);
  const menu=document.querySelector('#mobile-menu');const toggle=document.querySelector('.menu-toggle');
  const closeMenu=()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.hidden=!open;});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
  matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

  const dialog=document.querySelector('#privacy-dialog');document.querySelector('#privacy-button').addEventListener('click',()=>dialog.showModal());dialog.querySelectorAll('.dialog-close,.dialog-close-text').forEach(b=>b.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();
