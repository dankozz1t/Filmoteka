import { refs } from './reference.js';

export function toggleBackdrop() {
  refs.openFilmBtn.addEventListener('click', onOpenFilmBtnClick);
  refs.openTeamBtn.addEventListener('click', onOpenTeamBtnClick);

  function onEscapeKeyDown(e) {
    if (e.code === 'Escape') {
      refs.backdropRef.classList.add('visually-hidden');
      refs.teamModalRef.classList.add('visually-hidden');
      refs.filmModalRef.classList.add('visually-hidden');
      document.body.style.overflowY = 'scroll';

      window.removeEventListener('keydown', onEscapeKeyDown);
    }
  }

  function onOpenFilmBtnClick(e) {
    const film = e.target.parentNode.parentNode;
    if (film.nodeName !== 'LI') {
      return;
    }
    refs.backdropRef.classList.remove('visually-hidden');
    refs.filmModalRef.classList.remove('visually-hidden');
    document.body.style.overflowY = 'hidden';

    refs.backdropRef.addEventListener('click', onCloseClick);

    window.addEventListener('keydown', onEscapeKeyDown);
  }

  function onOpenTeamBtnClick() {
    refs.backdropRef.classList.remove('visually-hidden');
    refs.teamModalRef.classList.remove('visually-hidden');
    document.body.style.overflowY = 'hidden';

    refs.backdropRef.addEventListener('click', onCloseClick);
    window.addEventListener('keydown', onEscapeKeyDown);
  }

  function onCloseClick(e) {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('js-btn-close')
    ) {
      refs.backdropRef.classList.add('visually-hidden');
      refs.filmModalRef.classList.add('visually-hidden');
      refs.teamModalRef.classList.add('visually-hidden');

      document.body.style.overflowY = 'scroll';

      window.removeEventListener('keydown', onEscapeKeyDown);
      refs.backdropRef.removeEventListener('click', onCloseClick);
    }
  }
}
