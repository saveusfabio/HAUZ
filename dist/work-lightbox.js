(() => {
  const work = document.querySelector('.work');
  const copy = work?.querySelector('.work-copy');
  const shell = work?.querySelector('.project-shell');
  const note = work?.querySelector('.work-design-note');
  const card = shell?.querySelector('.project-window');
  if (!work || !copy || !shell || !note || !card) return;

  const description = document.createElement('p');
  description.className = 'work-invitation';
  description.textContent = 'Explore the same painting business website before and after a thoughtful redesign.';

  const openButton = document.createElement('button');
  openButton.type = 'button';
  openButton.className = 'work-open-cta';
  openButton.innerHTML = 'Explore the redesign <span aria-hidden="true"></span>';
  openButton.querySelector('span').append(window.studioIcon('arrow-up-right'));
  copy.querySelector('.work-heading').after(description, openButton);

  const previewButton = document.createElement('button');
  previewButton.type = 'button';
  previewButton.className = 'work-preview-open';
  previewButton.innerHTML = '<span>View comparison</span>';
  previewButton.append(window.studioIcon('arrow-up-right'));
  shell.append(previewButton);
  card.inert = true;

  const placeholder = document.createComment('comparison returns here');
  shell.before(placeholder);

  const dialog = document.createElement('dialog');
  dialog.className = 'work-lightbox';
  dialog.setAttribute('aria-labelledby', 'comparison-title');
  dialog.innerHTML = `<div class="work-lightbox-header"><div><span class="mono">CONCEPT REDESIGN / P&amp;D PAINTING</span><h2 id="comparison-title">Explore the before &amp; after.</h2></div><button class="work-lightbox-close" type="button" aria-label="Close comparison"></button></div><div class="work-lightbox-layout"><div class="work-lightbox-notes"></div></div><p class="work-lightbox-disclaimer">Uncommissioned concept based on a public website. This is not a client project.</p>`;
  dialog.querySelector('.work-lightbox-close').append(document.querySelector('.dialog-close .lucide').cloneNode(true));
  work.append(dialog);
  const layout = dialog.querySelector('.work-lightbox-layout');
  const notes = dialog.querySelector('.work-lightbox-notes');
  const toast = work.querySelector('.work-review-toast');

  const open = () => {
    previewButton.hidden = true;
    card.inert = false;
    layout.prepend(shell);
    notes.append(note);
    if (toast) dialog.append(toast);
    dialog.showModal();
    dialog.querySelector('.work-lightbox-close').focus();
  };
  const close = () => dialog.close();

  openButton.addEventListener('click', open);
  previewButton.addEventListener('click', open);
  dialog.querySelector('.work-lightbox-close').addEventListener('click', close);
  dialog.addEventListener('click', event => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener('close', () => {
    placeholder.after(shell);
    copy.querySelector('.work-transform-cta').after(note);
    if (toast) work.append(toast);
    card.inert = true;
    previewButton.hidden = false;
    openButton.focus();
  });
})();
