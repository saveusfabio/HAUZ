(() => {
  'use strict';
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const fine = matchMedia('(hover:hover) and (pointer:fine)');
  // The hero uses the native cursor; the paint surface owns its interaction.

  const stars=document.querySelector('.studio-stars');
  if(stars) stars.replaceChildren(...Array.from({length:5},(_,i)=>{const star=document.createElement('span');star.append(window.studioIcon('star'));star.style.setProperty('--star-index',i);return star;}));

  const offer=document.querySelector('.offer');
  if(offer){
    let nearby=false, loaded=false;
    offer.querySelectorAll('.feature').forEach(feature=>{
      const type=[...feature.classList].find(name=>name.startsWith('feature--'))?.slice(9);
      if(!type)return;
      feature.addEventListener('pointerenter',event=>{if(fine.matches&&event.pointerType!=='touch')offer.dataset.activeFeature=type;},{passive:true});
      feature.addEventListener('pointerleave',()=>{if(offer.dataset.activeFeature===type)delete offer.dataset.activeFeature;},{passive:true});
    });
    const loadPhotos=()=>{
      if(!nearby || !fine.matches || loaded)return;
      loaded=true;
      offer.querySelectorAll('[data-background]').forEach(layer=>{layer.style.backgroundImage=`url("${layer.dataset.background}")`;});
    };
    new IntersectionObserver(entries=>{nearby=entries[0].isIntersecting;loadPhotos();},{rootMargin:'250px'}).observe(offer);
    fine.addEventListener('change',loadPhotos);
  }
  const closing=document.querySelector('.closing-wrap');
  if(closing){
    const loadClosing=new IntersectionObserver(entries=>{
      if(!entries[0].isIntersecting)return;
      const variant=matchMedia('(max-width:760px)').matches?'small':'display';
      closing.style.setProperty('--closing-image',`url("assets/closing-home-${variant}.webp")`);
      loadClosing.disconnect();
    },{rootMargin:'600px'});
    loadClosing.observe(closing);
  }

  const card = document.querySelector('.work .project-window');
  const button = document.querySelector('.work-transform-cta');
  if (!card || !button) return;
  const shell = document.createElement('div');
  shell.className = 'project-shell';
  card.before(shell);
  const previewToolbar=document.createElement('div');previewToolbar.className='work-preview-toolbar';previewToolbar.setAttribute('role','group');previewToolbar.setAttribute('aria-label','Choose website version');
  previewToolbar.innerHTML='<span class="mono">PREVIEW</span><button type="button" data-preview-mode="before" aria-pressed="true">Current site</button><button type="button" data-preview-mode="after" aria-pressed="false">Redesign</button>';
  shell.append(previewToolbar,card);
  const dots = card.querySelector('.browser-dots');
  dots.innerHTML = '<i></i><i></i><i></i>';
  const light = document.createElement('canvas');
  light.className = 'star-border-light';
  light.setAttribute('aria-hidden', 'true');
  const label = document.createElement('span');
  label.className = 'transform-label';
  label.textContent = 'Transform this website';
  const arrow = document.createElement('span');
  arrow.setAttribute('aria-hidden', 'true');
  arrow.append(window.studioIcon('arrow-up-right'));
  button.replaceChildren(light, label, arrow);
  // The transform control is hidden in this presentation; avoid starting its canvas effect.

  // HoloCard's pointer-normalized light and spring tilt, adapted for live DOM content.
  let frame = 0, tx = 0, ty = 0, x = 0, y = 0, vx = 0, vy = 0, last = 0;
  const tick = now => {
    frame = 0;
    const dt = Math.min((now-last)/1000 || .016, .032); last = now;
    vx += ((tx-x)*150-vx*23)*dt; vy += ((ty-y)*150-vy*23)*dt;
    x += vx*dt; y += vy*dt;
    card.style.rotate = `${-y} ${x} 0 ${Math.hypot(x,y)}deg`;
    if (Math.abs(tx-x)+Math.abs(ty-y)+Math.abs(vx)+Math.abs(vy)>.015) frame=requestAnimationFrame(tick);
    else if (!tx && !ty) card.style.rotate='none';
  };
  const wake = () => { if(!frame){last=performance.now();frame=requestAnimationFrame(tick);} };
  const reset = () => {tx=ty=0;card.classList.remove('holo-active');wake();};
  shell.addEventListener('pointermove',event=>{
    if(!fine.matches || reduced.matches || event.pointerType==='touch' || card.classList.contains('is-refining')) return;
    const box=shell.getBoundingClientRect();
    const px=Math.max(0,Math.min(1,(event.clientX-box.left)/box.width));
    const py=Math.max(0,Math.min(1,(event.clientY-box.top)/box.height));
    tx=(px-.5)*3.6;ty=(py-.5)*3.6;
    card.style.setProperty('--holo-x',`${px*100}%`);card.style.setProperty('--holo-y',`${py*100}%`);
    card.classList.add('holo-active');wake();
  },{passive:true});
  shell.addEventListener('pointerleave',reset);
  const stop = () => {cancelAnimationFrame(frame);frame=0;tx=ty=x=y=vx=vy=0;card.style.rotate='none';card.classList.remove('holo-active');};
  reduced.addEventListener('change',stop);fine.addEventListener('change',stop);
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();});
  new IntersectionObserver(entries=>{if(!entries[0].isIntersecting)stop();}).observe(shell);

  const status=document.createElement('div');
  status.className='refine-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');
  const sweep=document.createElement('div');sweep.className='refine-sweep';sweep.setAttribute('aria-hidden','true');
  card.append(sweep,status);
  const reward=document.createElement('div');
  reward.className='work-reward';reward.setAttribute('role','status');reward.setAttribute('aria-live','polite');reward.setAttribute('aria-atomic','true');
  button.after(reward);
  const celebrate=()=>{
    status.classList.remove('is-visible');
    reward.innerHTML='<div class="reward-content"><svg aria-hidden="true" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14"/><path d="m9 16 5 5 9-10"/></svg><div class="reward-copy"><span class="reward-eyebrow mono">REDESIGN COMPLETE</span><strong>A better first impression.</strong><p>Same painter. Same work. A clearer website.</p></div><span class="reward-spark" aria-hidden="true"></span></div>';
    reward.querySelector('.reward-spark').append(window.studioIcon('sparkles'));reward.classList.add('is-complete');card.classList.add('redesign-reward');
    later(()=>card.classList.remove('redesign-reward'),1500);
  };
  const before=document.querySelector('#before-demo'), after=document.querySelector('#after-demo');
  const previewModes=[...previewToolbar.querySelectorAll('[data-preview-mode]')];
  const noteIndex=document.querySelector('[data-review-index]'),noteTitle=document.querySelector('[data-review-title]'),noteCopy=document.querySelector('[data-review-copy]'),noteProgress=document.querySelector('[data-review-progress]');
  const noteState=document.querySelector('[data-review-state]'),noteBefore=document.querySelector('[data-review-before]');
  const syncReviewLive=()=>document.querySelector('.work-design-note').setAttribute('aria-live',innerWidth<=760?'off':'polite');
  syncReviewLive();addEventListener('resize',syncReviewLive,{passive:true});
  const noteChapters={
    before:[...before.querySelectorAll('.old-hero,.old-section,.old-work,.old-contact')],
    after:[...after.querySelectorAll('.modern-hero,.modern-services,.modern-work,.modern-contact')]
  };
  const reviewNotes=[
    ['FIRST IMPRESSION','A vague introduction.','The service and location get lost among competing messages.','Clarity from the first glance.','Service, location and one clear next step help homeowners recognize the right fit.'],
    ['SERVICES','Everything competes.','A dense list makes different services difficult to compare.','A place for every project.','Distinct painting services make it easier to find the right fit.'],
    ['THE WORK','The work deserves more room.','Repeated thumbnails give little context or detail.','Details worth a closer look.','Larger photos make prep, siding and finish easier to see.'],
    ['NEXT STEP','An unclear invitation.','Urgent messages compete without explaining what happens next.','A simple way to begin.','One clear invitation explains how to ask for an estimate.']
  ];
  const reviewToast=document.createElement('div');reviewToast.hidden=true;reviewToast.className='work-review-toast';reviewToast.setAttribute('role','status');reviewToast.setAttribute('aria-live','polite');reviewToast.setAttribute('aria-atomic','true');reviewToast.innerHTML='<span class="work-review-toast-mark" aria-hidden="true"></span><span class="work-review-toast-copy"><span class="mono" data-toast-index></span><span class="work-review-toast-state mono" data-toast-state></span><strong data-toast-title></strong><span data-toast-copy></span></span>';
  reviewToast.querySelector('.work-review-toast-mark').append(window.studioIcon('arrow-up-right'));document.querySelector('.work').append(reviewToast);
  let activeReview=0,reviewFrame=0,toastTimer=0;
  const updateReview=(index,notify=false)=>{
    activeReview=Math.max(0,Math.min(reviewNotes.length-1,index));
    const n=reviewNotes[activeReview],redesigned=!after.hidden;
    noteIndex.textContent=`0${activeReview+1} / ${n[0]}`;noteTitle.textContent=n[3];noteCopy.textContent=n[4];noteBefore.textContent=n[1];noteProgress.style.width=`${(activeReview+1)*25}%`;
    noteState.textContent=redesigned?'REDESIGN':'CURRENT SITE';
    previewModes.forEach(mode=>mode.setAttribute('aria-pressed',String(mode.dataset.previewMode===(redesigned?'after':'before'))));
    if(notify&&innerWidth<=760){
      reviewToast.querySelector('[data-toast-index]').textContent=`0${activeReview+1} / ${n[0]}`;
      reviewToast.querySelector('[data-toast-state]').textContent=redesigned?'REDESIGN':'CURRENT SITE';
      reviewToast.querySelector('[data-toast-title]').textContent=n[3];reviewToast.querySelector('[data-toast-copy]').textContent=n[4];
      reviewToast.hidden=false;reviewToast.classList.remove('is-visible');requestAnimationFrame(()=>reviewToast.classList.add('is-visible'));
      clearTimeout(toastTimer);toastTimer=setTimeout(()=>{reviewToast.classList.remove('is-visible');setTimeout(()=>{reviewToast.hidden=true;},220);},4200);
    }else if(!redesigned){reviewToast.classList.remove('is-visible');reviewToast.hidden=true;clearTimeout(toastTimer);}
  };
  const syncReviewToScroll=source=>{
    reviewFrame=0;const chapters=noteChapters[source];if(!chapters?.length)return;
    const demo=source==='before'?before:after;
    const box=demo.getBoundingClientRect(),line=box.top+Math.min(box.height*.38,220);let index=0;
    chapters.forEach((chapter,i)=>{if(chapter.getBoundingClientRect().top<=line)index=i;});
    if(index!==activeReview)updateReview(index,true);
  };
  [before,after].forEach(demo=>demo.addEventListener('scroll',()=>{if(!reviewFrame)reviewFrame=requestAnimationFrame(()=>syncReviewToScroll(demo===before?'before':'after'));},{passive:true}));
  let busy=false, timers=[];  const later=(fn,delay)=>timers.push(setTimeout(fn,delay));
  const setView=(showAfter,preserveChapter=false)=>{
    const chapterIndex=preserveChapter?activeReview:0;
    before.hidden=showAfter;after.hidden=!showAfter;
    before.inert=showAfter;after.inert=!showAfter;
    const demo=showAfter?after:before;
    demo.scrollTop=0;
    if(preserveChapter&&chapterIndex){
      const target=noteChapters[showAfter?'after':'before'][chapterIndex];
      demo.scrollTop=target.getBoundingClientRect().top-demo.getBoundingClientRect().top;
    }
    button.dataset.view=showAfter?'before':'after';
    button.setAttribute('aria-pressed',String(showAfter));
    label.textContent=showAfter?'See the original website':'Transform this website';
    arrow.replaceChildren(window.studioIcon(showAfter?'rotate-ccw':'arrow-up-right'));
    previewModes.forEach(mode=>mode.setAttribute('aria-pressed',String(mode.dataset.previewMode===(showAfter?'after':'before'))));
    reviewToast.classList.remove('is-visible');reviewToast.hidden=true;clearTimeout(toastTimer);updateReview(chapterIndex,false);
  };

  const finish=()=>{
    busy=false;card.classList.remove('is-refining');card.dataset.refine='complete';
    card.removeAttribute('aria-busy');button.removeAttribute('aria-disabled');
    before.inert=before.hidden;after.inert=after.hidden;
  };
  button.addEventListener('click',()=>{
    if(busy)return;
    timers.forEach(clearTimeout);timers=[];
    const showAfter=button.dataset.view==='after';
    reward.classList.remove('is-complete');reward.replaceChildren();card.classList.remove('redesign-reward');
    if(reduced.matches || !showAfter){setView(showAfter);finish();status.classList.remove('is-visible');if(showAfter)celebrate();return;}
    busy=true;stop();card.classList.add('is-refining');card.dataset.refine='queued';
    card.setAttribute('aria-busy','true');button.setAttribute('aria-disabled','true');
    before.inert=after.inert=true;
    status.classList.add('is-visible');status.textContent='Preparing the redesign';
    later(()=>{setView(true);after.inert=true;card.dataset.refine='generating';status.textContent='Bringing it into focus';},400);
    later(()=>{card.dataset.refine='refining';status.textContent='Refining the details';},800);
    later(()=>{finish();celebrate();},1200);
  });
  previewModes.forEach(mode=>mode.addEventListener('click',()=>{const showAfter=mode.dataset.previewMode==='after';if(showAfter===!after.hidden||busy)return;setView(showAfter,true);finish();}));
  updateReview(0,false);
  reduced.addEventListener('change',()=>{if(reduced.matches&&busy){timers.forEach(clearTimeout);setView(true);finish();celebrate();}});
})();
