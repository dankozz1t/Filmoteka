import { apiService } from '../API/api-service.js';
import { renderFilms } from '../render/renderFilms.js';
import { refs } from '../references/reference.js';

export function onLibraryControls(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  if (e.target.classList.contains('js-btn-watched')) {
    refs.libWatchedBtn.classList.add('btn-js-active');
    refs.libQeueBtn.classList.remove('btn-js-active');

    renderFilms(apiService.fetchWatched(), true);
  }

  if (e.target.classList.contains('js-btn-qeue')) {
    refs.libQeueBtn.classList.add('btn-js-active');
    refs.libWatchedBtn.classList.remove('btn-js-active');

    renderFilms(apiService.fetchQeue(), true);
  }
}
