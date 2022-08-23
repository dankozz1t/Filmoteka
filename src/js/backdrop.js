export function toggleBackdrop() {
  const openFilmBtn = document.querySelector('[data-film-modal-open]');
  const openTeamBtn = document.querySelector('[data-team-modal-open]');
  const backdropRef = document.querySelector('[data-backdrop]');
  const filmModalRef = document.querySelector('[data-film-modal]');
  const teamModalRef = document.querySelector('[data-team-modal]');

  openFilmBtn.addEventListener('click', onOpenFilmBtnClick);
  openTeamBtn.addEventListener('click', onOpenTeamBtnClick);

  function onEscapeKeyDown(e) {
    if (e.code === 'Escape') {
      backdropRef.classList.add('visually-hidden');
      teamModalRef.classList.add('visually-hidden');
      filmModalRef.classList.add('visually-hidden');
      document.body.style.overflowY = 'scroll';

      window.removeEventListener('keydown', onEscapeKeyDown);
    }
  }

  function onOpenFilmBtnClick(e) {
    const film = e.target.parentNode.parentNode;
  if (film.nodeName !== 'LI') {
    return; 
  }   
    backdropRef.classList.remove('visually-hidden');
    filmModalRef.classList.remove('visually-hidden');
    document.body.style.overflowY = 'hidden';

    backdropRef.addEventListener('click', onCloseClick);

    window.addEventListener('keydown', onEscapeKeyDown);

  }

  function onOpenTeamBtnClick() {
    backdropRef.classList.remove('visually-hidden');
    teamModalRef.classList.remove('visually-hidden');
    document.body.style.overflowY = 'hidden';

    backdropRef.addEventListener('click', onCloseClick);
    window.addEventListener('keydown', onEscapeKeyDown);
  }

  function onCloseClick(e) {
    if (
      e.target.classList.contains('backdrop') ||
      e.target.classList.contains('js-btn-close')
    ) {
      backdropRef.classList.add('visually-hidden');
      filmModalRef.classList.add('visually-hidden');
      teamModalRef.classList.add('visually-hidden');

      document.body.style.overflowY = 'scroll';

      window.removeEventListener('keydown', onEscapeKeyDown);
      backdropRef.removeEventListener('click', onCloseClick);
    }
  }
}
