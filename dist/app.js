(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  document.documentElement.classList.add('js');
  const smoothScroll = window.Lenis ? new window.Lenis({ autoRaf: true, anchors: true, lerp: .085 }) : null;
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .08, rootMargin: '0px 0px -25px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('is-visible'));

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
  document.addEventListener('pointermove',event=>{if(!fine.matches||reduced.matches||event.pointerType==='touch')return;targetX=event.clientX+13;targetY=event.clientY+13;if(!dot.classList.contains('active')){x=targetX;y=targetY;}dot.classList.add('active');dot.classList.toggle('over-link',Boolean(event.target.closest('a,button,summary')));if(!cursorFrame)cursorFrame=requestAnimationFrame(animateCursor);},{passive:true});
  document.addEventListener('pointerleave',()=>dot.classList.remove('active'));
  document.addEventListener('visibilitychange',()=>{if(document.hidden){dot.classList.remove('active');cancelAnimationFrame(cursorFrame);cursorFrame=0;}});

  const hero=document.querySelector('.hero'); const photo=document.querySelector('.hero-photo');let scrollFrame=0;
  function updatePhoto(){scrollFrame=0;if(reduced.matches)return;const y=window.scrollY;if(y<hero.offsetHeight)photo.style.transform=`translate3d(0,${Math.min(y*.12,90)}px,0)`;}
  window.addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updatePhoto);},{passive:true});
  reduced.addEventListener('change',()=>{if(reduced.matches){photo.style.transform='none';dot.classList.remove('active');cancelAnimationFrame(cursorFrame);cursorFrame=0;}});

  document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{const after=button.dataset.view==='after';document.querySelector('#after-demo').hidden=!after;document.querySelector('#before-demo').hidden=after;document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));}));
  const menu=document.querySelector('#mobile-menu');const toggle=document.querySelector('.menu-toggle');
  const closeMenu=()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');};
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.hidden=!open;});
  menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!menu.hidden){closeMenu();toggle.focus();}});
  matchMedia('(min-width: 761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});

  document.querySelector('#enquiry-form').addEventListener('submit',event=>{event.preventDefault();const data=new FormData(event.currentTarget);const result=document.querySelector('#form-result');result.hidden=false;result.textContent=`Enquiry preview — nothing has been sent.\n\n${data.get('name')} · ${data.get('company')}\n${data.get('email')}${data.get('website')?'\n'+data.get('website'):''}${data.get('message')?'\n\n'+data.get('message'):''}\n\nThanks for exploring the V1. Contact delivery will be connected before launch.`;});
  const dialog=document.querySelector('#privacy-dialog');document.querySelector('#privacy-button').addEventListener('click',()=>dialog.showModal());dialog.querySelectorAll('.dialog-close,.dialog-close-text').forEach(b=>b.addEventListener('click',()=>dialog.close()));dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
})();
