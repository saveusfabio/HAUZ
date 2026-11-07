(() => {
  'use strict';

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = matchMedia('(hover:hover) and (pointer:fine)');
  let smoothScroll;
  function syncSmoothScroll() {
    smoothScroll?.destroy();
    smoothScroll = !reducedMotion.matches && finePointer.matches && window.Lenis
      ? new window.Lenis({ autoRaf: true, anchors: true, lerp: .085 })
      : null;
  }
  syncSmoothScroll();
  reducedMotion.addEventListener('change', syncSmoothScroll);
  finePointer.addEventListener('change', syncSmoothScroll);

  const luminance = hex => {
    const channels = hex.slice(1).match(/../g).map(channel => {
      const value = parseInt(channel, 16) / 255;
      return value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4;
    });
    return channels[0] * .2126 + channels[1] * .7152 + channels[2] * .0722;
  };
  const contrast = (a, b) => (Math.max(luminance(a), luminance(b)) + .05) / (Math.min(luminance(a), luminance(b)) + .05);
  const shade = (hex, factor) => '#' + hex.slice(1).match(/../g).map(channel => Math.round(parseInt(channel, 16) * factor).toString(16).padStart(2, '0')).join('');

  const tint = (hex, amount) => '#' + hex.slice(1).match(/../g).map(channel => {
    const value = parseInt(channel, 16);
    return Math.round(value + (255 - value) * amount).toString(16).padStart(2, '0');
  }).join('');

  function applyPaintTheme(color) {
    let background = color;
    const ink = contrast(color, '#ffffff') >= contrast(color, '#252824') ? '#ffffff' : '#252824';
    if (ink === '#ffffff') {
      for (let factor = .98; contrast(background, ink) < 5.2; factor -= .02) background = shade(color, factor);
    } else {
      for (let amount = .02; contrast(background, ink) < 5.2; amount += .02) background = tint(color, amount);
    }
    let textColor = color;
    for (let factor = .98; contrast(textColor, '#e4e4e0') < 4.5; factor -= .02) textColor = shade(color, factor);
    const root = document.documentElement.style;
    root.setProperty('--paint-pigment', color);
    root.setProperty('--action-accent', background);
    root.setProperty('--accent-ink', ink);
    root.setProperty('--accent-text', textColor);
    root.setProperty('--selection-ink', textColor);
    document.querySelector('.craft-sticker img').style.filter = ink === '#ffffff' ? 'none' : 'brightness(.25)';
  }

  const picker = document.querySelector('[data-paint-picker]');
  const swatches = [...picker.querySelectorAll('.paint-swatch')];
  const miniSite = document.querySelector('.site-mini');
  const miniImage = miniSite.querySelector('.paint-field-texture');
  const paintName = picker.querySelector('[data-paint-name]');
  applyPaintTheme(picker.querySelector('.is-selected').dataset.paint);

  swatches.forEach((swatch, index) => {
    swatch.addEventListener('click', () => {
      if (swatch.classList.contains('is-selected')) return;
      applyPaintTheme(swatch.dataset.paint);
      paintName.textContent = swatch.dataset.name;
      miniSite.dataset.layout = swatch.dataset.layout;
      miniImage.src = swatch.dataset.image;
      miniSite.classList.remove('is-building');
      void miniSite.offsetWidth;
      miniSite.classList.add('is-building');
      swatches.forEach(button => {
        const selected = button === swatch;
        button.classList.toggle('is-selected', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
    });
    swatch.addEventListener('keydown', event => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      let next = (index + (event.key === 'ArrowRight' ? 1 : swatches.length - 1)) % swatches.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = swatches.length - 1;
      swatches[next].focus();
      swatches[next].click();
    });
  });

  const menu = document.querySelector('#mobile-menu');
  const menuToggle = document.querySelector('.menu-toggle');
  function closeMenu() {
    menu.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
  }
  menuToggle.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    menuToggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      closeMenu();
      menuToggle.focus();
    }
  });
  matchMedia('(min-width:761px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });

  const privacy = document.querySelector('#privacy-dialog');
  document.querySelector('#privacy-button').addEventListener('click', () => privacy.showModal());
  privacy.querySelectorAll('.dialog-close,.dialog-close-text').forEach(button => button.addEventListener('click', () => privacy.close()));
  privacy.addEventListener('click', event => {
    if (event.target === privacy) {
      const box = privacy.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) privacy.close();
    }
  });
})();
