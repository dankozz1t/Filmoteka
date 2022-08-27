import { apiService } from '../../API/api-service.js';
import { refs } from '../../references/reference.js';
import { getActiveLibraryCategory } from '../../library/getActiveLibraryCategory.js';
import { renderFilms } from '../../render/renderFilms.js';

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
    removeVisuallyHidden(refs.teamModalRef, refs.backdropRef);

    refs.backdropRef.addEventListener('click', onCloseClick);
    window.addEventListener('keydown', onEscapeKeyDown);
    refs.filmControls.addEventListener('click', onFilmControls);
  }

  function showBackdrop(modal) {
    refs.watched.textContent = `Add to watched`;
    refs.qeue.textContent = `Add to qeue`;

    if (apiService.watched.some(film => film.id == refs.filmModalRef.id)) {
      refs.watched.textContent = `Remove from watched`;
    }
    if (apiService.qeue.some(film => film.id == refs.filmModalRef.id)) {
      refs.qeue.textContent = `Remove from qeue`;
    }

    removeVisuallyHidden(modal, refs.backdropRef);

    refs.backdropRef.addEventListener('click', onCloseClick);
    window.addEventListener('keydown', onEscapeKeyDown);
    refs.filmControls.addEventListener('click', onFilmControls);
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

function onFilmControls(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('js-add-watched')) {
    manageAdd(e, 'watched');

    if (refs.paginationControls.classList.contains('js-lib-pagination')) {
      if (getActiveLibraryCategory() === 'watched') {
        renderFilms(apiService.fetchWatched(), true);
      } else {
        renderFilms(apiService.fetchQeue(), true);
      }
    }
  }
  if (e.target.classList.contains('js-add-qeue')) {
    manageAdd(e, 'qeue');
    if (refs.paginationControls.classList.contains('js-lib-pagination')) {
      if (getActiveLibraryCategory() === 'watched') {
        renderFilms(apiService.fetchWatched(), true);
      } else {
        renderFilms(apiService.fetchQeue(), true);
      }
    }
  }
}

function manageAdd(e, content) {
  if (apiService[content]) {
    if (
      !apiService[content].some(
        film => film.id === Number(refs.filmModalRef.id)
      )
    ) {
      const watchedFilm = apiService.films.find(
        ({ id }) => id === Number(refs.filmModalRef.id)
      );
      if (!watchedFilm) {
        console.log('oops');
        return;
      }
      apiService[content].push(watchedFilm);
      localStorage.setItem(content, JSON.stringify(apiService[content]));

      refs[content].textContent = `Remove from ${content}`;
      return;
    }

    refs[content].textContent = `Add to ${content}`;

    let indexToDelete = 0;
    apiService[content].forEach((film, index) => {
      if (film.id === Number(refs.filmModalRef.id)) {
        indexToDelete = index;
      }
    });

    apiService[content].splice(indexToDelete, 1);
    localStorage.setItem(content, JSON.stringify(apiService[content]));
  }
}
