import { refs } from './reference.js';

export function toggleBackdrop() {
  refs.openFilmBtn.addEventListener('click', onOpenFilmBtnClick);
  refs.openTeamBtn.addEventListener('click', onOpenTeamBtnClick);

  function onOpenFilmBtnClick(e) {
    const film = e.target.parentNode.parentNode;
    if (film.nodeName !== 'LI') {
      return;
    }
    showBackdrop(refs.filmModalRef);
  }

  function onOpenTeamBtnClick() {
    showBackdrop(refs.teamModalRef);
  }

  function showBackdrop(modal) {
    removeVisuallyHidden(modal, refs.backdropRef);

    refs.backdropRef.addEventListener('click', onCloseClick);
    window.addEventListener('keydown', onEscapeKeyDown);
  }
  function hideBackdrop() {
    addVisuallyHidden(refs.backdropRef, refs.filmModalRef, refs.teamModalRef);

    window.removeEventListener('keydown', onEscapeKeyDown);
    refs.backdropRef.removeEventListener('click', onCloseClick);
  }

  function onEscapeKeyDown(e) {
    if (e.code === 'Escape') {
      hideBackdrop();
    }
  }

  function onCloseClick(e) {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('js-btn-close')
    ) {
      hideBackdrop();
    }
  }
}

function addVisuallyHidden(...args) {
  args.forEach(el => el.classList.add('visually-hidden'));
  document.body.style.overflowY = 'scroll';
}
function removeVisuallyHidden(...args) {
  args.forEach(el => el.classList.remove('visually-hidden'));
  document.body.style.overflowY = 'hidden';
}
