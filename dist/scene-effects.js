(() => {
  'use strict';

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const work = document.querySelector('#work');
  const stage = document.querySelector('#work-stage');
  const slider = stage.querySelector('input[type="range"]');
  const openButton = work.querySelector('.work-open-cta');
  const before = stage.querySelector('#before-demo');
  const after = stage.querySelector('#after-demo');
  const hero = document.querySelector('.hero-paint');
  const process = document.querySelector('#process');
  const offer = document.querySelector('#offer');
  const sticker = document.querySelector('.craft-sticker');
  let userCompared = false;
  let exploring = false;
  let frame = 0;
  let stickerVisible = false;
  let stickerPaused = false;

  const slot = document.createElement('div');
  slot.className = 'comparison-slot';
  slot.hidden = true;
  stage.before(slot);

  const dialog = document.createElement('dialog');
  dialog.id = 'redesign-lightbox';
  dialog.className = 'redesign-lightbox';
  dialog.setAttribute('aria-labelledby', 'redesign-lightbox-title');
  dialog.setAttribute('data-lenis-prevent', '');
  dialog.innerHTML = `
    <header class="redesign-header">
      <div><h2 id="redesign-lightbox-title">A closer look.</h2><p>P&amp;D Painting / a concept by Hauz</p></div>
      <button type="button" class="redesign-close" aria-label="Close comparison"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m6 6 12 12M6 18 18 6"/></svg></button>
    </header>
    <div class="redesign-layout">
      <div class="redesign-browser">
        <div class="redesign-toolbar">
          <div class="explore-tabs" role="group" aria-label="Choose website version"><button type="button" data-view="before" aria-pressed="false">Original</button><button type="button" data-view="after" aria-pressed="true">Redesign</button></div>
          <p>Scroll inside the website to explore.</p>
        </div>
      </div>
      <aside class="redesign-feedback" aria-label="Design feedback">
        <div class="feedback-heading"><span>Behind the design</span><span data-review-state>REDESIGN</span></div>
        <nav class="feedback-chapters" aria-label="Explore project sections">
          <button type="button" data-chapter="0" aria-current="step">01 <span>First impression</span></button>
          <button type="button" data-chapter="1">02 <span>Services</span></button>
          <button type="button" data-chapter="2">03 <span>The work</span></button>
          <button type="button" data-chapter="3">04 <span>Next step</span></button>
        </nav>
        <div class="feedback-copy" role="status" aria-live="polite" aria-atomic="true"><h3 data-review-title></h3><p data-review-copy></p></div>
        <div class="feedback-original"><span>Original website</span><p data-review-before></p></div>
      </aside>
    </div>`;
  work.append(dialog);
  const browser = dialog.querySelector('.redesign-browser');
  const viewButtons = [...dialog.querySelectorAll('[data-view]')];
  const chapterButtons = [...dialog.querySelectorAll('[data-chapter]')];
  const closeButton = dialog.querySelector('.redesign-close');
  const chapters = {
    before: [...before.querySelectorAll('.old-hero,.old-section,.old-work,.old-contact')],
    after: [...after.querySelectorAll('.modern-hero,.modern-services,.modern-work,.modern-contact')]
  };
  const notes = [
    ['A vague introduction.', 'The service and location get lost among competing messages.', 'Clarity from the first glance.', 'Service, location and one clear next step help homeowners recognize the right fit.'],
    ['Everything competes.', 'A dense list makes different services difficult to compare.', 'A place for every project.', 'Distinct painting services make it easier to find the right fit.'],
    ['The work deserves more room.', 'Repeated thumbnails give little context or detail.', 'Details worth a closer look.', 'Larger photos make prep, siding and finish easier to see.'],
    ['An unclear invitation.', 'Urgent messages compete without explaining what happens next.', 'A simple way to begin.', 'One clear invitation explains how to ask for an estimate.']
  ];
  let activeChapter = 0;
  let activeView = 'after';
  let reviewFrame = 0;
  let pageOverflow = '';
  openButton.setAttribute('aria-controls', dialog.id);
  openButton.setAttribute('aria-haspopup', 'dialog');

  function setComparison(value) {
    const position = Math.max(0, Math.min(100, value));
    slider.value = String(100 - position);
    slider.setAttribute('aria-valuetext', `${Math.round(100 - position)} percent of redesign visible`);
    stage.style.setProperty('--compare-position', position + '%');
  }
  slider.addEventListener('input', () => {
    userCompared = true;
    setComparison(100 - Number(slider.value));
  });
  slider.addEventListener('pointerdown', () => { userCompared = true; });
  slider.addEventListener('keydown', () => { userCompared = true; });

  function updateFeedback(index) {
    activeChapter = index;
    const note = notes[index];
    const redesigned = activeView === 'after';
    dialog.querySelector('[data-review-state]').textContent = redesigned ? 'REDESIGN' : 'ORIGINAL';
    dialog.querySelector('[data-review-title]').textContent = note[redesigned ? 2 : 0];
    dialog.querySelector('[data-review-copy]').textContent = note[redesigned ? 3 : 1];
    dialog.querySelector('[data-review-before]').textContent = note[0];
    dialog.querySelector('.feedback-original').hidden = !redesigned;
    chapterButtons.forEach((button, chapter) => {
      if (chapter === index) button.setAttribute('aria-current', 'step');
      else button.removeAttribute('aria-current');
    });
  }
  function scrollToChapter(index, behavior = 'instant') {
    const demo = activeView === 'after' ? after : before;
    const target = chapters[activeView][index];
    const top = index === 0 ? 0 : target.offsetTop;
    demo.scrollTo({ top, behavior });
    updateFeedback(index);
  }
  function setView(view, preserveChapter = true) {
    const chapter = preserveChapter ? activeChapter : 0;
    activeView = view;
    const showAfter = view === 'after';
    before.hidden = showAfter;
    after.hidden = !showAfter;
    before.inert = showAfter;
    after.inert = !showAfter;
    before.setAttribute('aria-hidden', String(showAfter));
    after.setAttribute('aria-hidden', String(!showAfter));
    viewButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.view === view)));
    scrollToChapter(chapter);
  }
  function openPreview() {
    exploring = true;
    slot.hidden = false;
    browser.append(stage);
    openButton.setAttribute('aria-expanded', 'true');
    pageOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    dialog.showModal();
    setView('after', false);
    closeButton.focus({ preventScroll: true });
    requestUpdate();
  }
  function closePreview() {
    dialog.close();
    restorePreview();
  }
  openButton.addEventListener('click', openPreview);
  closeButton.addEventListener('click', closePreview);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) closePreview();
  });
  function restorePreview() {
    if (!exploring) return;
    exploring = false;
    cancelAnimationFrame(reviewFrame);
    reviewFrame = 0;
    slot.after(stage);
    slot.hidden = true;
    document.documentElement.style.overflow = pageOverflow;
    openButton.setAttribute('aria-expanded', 'false');
    [before, after].forEach(demo => {
      demo.hidden = false;
      demo.inert = true;
      demo.setAttribute('aria-hidden', 'true');
      demo.scrollTop = 0;
    });
    userCompared = true;
    setComparison(50);
    updateScroll();
    openButton.focus({ preventScroll: true });
  }
  dialog.addEventListener('close', restorePreview);
  dialog.addEventListener('cancel', event => {
    event.preventDefault();
    closePreview();
  });
  viewButtons.forEach(button => button.addEventListener('click', () => setView(button.dataset.view)));
  chapterButtons.forEach(button => button.addEventListener('click', () => scrollToChapter(Number(button.dataset.chapter), reducedMotion.matches ? 'instant' : 'smooth')));
  [before, after].forEach(demo => demo.addEventListener('scroll', () => {
    if (!exploring || reviewFrame) return;
    reviewFrame = requestAnimationFrame(() => {
      reviewFrame = 0;
      const current = activeView === 'after' ? after : before;
      const threshold = current.scrollTop + current.clientHeight * .3;
      let index = 0;
      chapters[activeView].forEach((chapter, i) => {
        if (chapter.offsetTop <= threshold) index = i;
      });
      if (index !== activeChapter) updateFeedback(index);
    });
  }, { passive: true }));
  work.addEventListener('click', event => {
    const control = event.target.closest('[data-demo-target]');
    if (!control || !exploring) return;
    const demo = control.closest('.demo');
    const target = document.querySelector(control.dataset.demoTarget);
    if (!demo || !target) return;
    event.preventDefault();
    demo.scrollTo({
      top: Math.max(0, target.getBoundingClientRect().top - demo.getBoundingClientRect().top + demo.scrollTop),
      behavior: reducedMotion.matches ? 'instant' : 'smooth'
    });
  });

  function syncSticker() {
    sticker.classList.toggle('is-running', stickerVisible && !stickerPaused && !reducedMotion.matches && !document.hidden);
  }
  new IntersectionObserver(entries => {
    stickerVisible = entries[0].isIntersecting;
    syncSticker();
  }).observe(sticker);
  sticker.addEventListener('click', () => {
    stickerPaused = !stickerPaused;
    sticker.setAttribute('aria-pressed', String(stickerPaused));
    const label = stickerPaused ? 'Resume rotating sticker' : 'Pause rotating sticker';
    sticker.setAttribute('aria-label', label);
    sticker.title = label;
    syncSticker();
  });

  // Scroll reveals the new design like a fresh coat of paint across the original.
  function updateScroll() {
    frame = 0;
    const viewport = window.innerHeight;
    const stageBox = (exploring ? slot : stage).getBoundingClientRect();
    const workBox = work.getBoundingClientRect();
    const processBox = process.getBoundingClientRect();
    const heroBox = hero.getBoundingClientRect();
    const offerBox = offer.getBoundingClientRect();
    const visible = stageBox.top < viewport * .91 && stageBox.bottom > viewport * .5 && workBox.bottom > viewport * .78;
    openButton.classList.toggle('is-visible', visible && !exploring);
    if (!reducedMotion.matches) {
      if (!userCompared && !exploring) {
        const progress = Math.max(0, Math.min(1, (viewport * .85 - stageBox.top) / (viewport * .8)));
        setComparison(88 - progress * 72);
      }
      if (heroBox.bottom > 0 && innerWidth > 760) hero.style.setProperty('--hero-drift', Math.min(24, Math.max(0, -heroBox.top * .07)) + 'px');
      const processProgress = Math.max(0, Math.min(1, (viewport * .9 - processBox.top) / (viewport * .6)));
      process.style.setProperty('--process-progress', String(processProgress));
      if (offerBox.top < viewport && offerBox.bottom > 0) offer.style.setProperty('--offer-shift', Math.max(-18, Math.min(18, (viewport / 2 - offerBox.top) * .035)) + 'px');
    }
  }
  function requestUpdate() {
    if (!frame && !document.hidden) frame = requestAnimationFrame(updateScroll);
  }
  addEventListener('scroll', requestUpdate, { passive: true });
  addEventListener('resize', requestUpdate, { passive: true });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches && !exploring) setComparison(50);
    syncSticker();
    requestUpdate();
  });
  document.addEventListener('visibilitychange', () => {
    syncSticker();
    requestUpdate();
  });
  setComparison(50);
  requestUpdate();

  const closing = document.querySelector('.closing-wrap');
  const closingObserver = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;
    const variant = matchMedia('(max-width:760px)').matches ? 'small' : 'display';
    closing.style.setProperty('--closing-image', `url("assets/closing-home-${variant}.webp")`);
    closingObserver.disconnect();
  }, { rootMargin: '600px' });
  closingObserver.observe(closing);
})();
