import { refs } from './js/references/reference.js';
import { onTopArrow } from './js/components/lift-up.js';
import { fillModal } from './js/components/modal/fillModal.js';
import { onSwitch } from './js/components/switch.js';
import { onPaginationClick } from './js/pagination/onPaginationClick.js';
import { renderFilms } from './js/render/renderFilms.js';
import { apiService } from './js/API/api-service.js';
import { toggleBackdrop } from './js/components/modal/backdrop.js';
import { renderPagination } from './js/pagination/pagination.js';
import { spinnerOn } from './js/components/spinner.js';
import { spinnerOff } from './js/components/spinner.js';
import { onSmoothScroll } from './js/components/smoothScroll.js';
import templatePlugEmpty from './templates/template-plug-empty.hbs';

onTopArrow();
onSwitch();

onSmoothScroll();

refs.libraryControls.addEventListener('click', onLibraryControls);
refs.contentList.addEventListener('click', onGetInfoClick);
refs.paginationControls.addEventListener('click', onPaginationClick, true);

renderFilms(apiService.fetchWatched(), true);
console.log(apiService);

function onLibraryControls(e) {
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

toggleBackdrop();

function onGetInfoClick(e) {
  const filmClick = e.target.parentNode.parentNode;
  if (filmClick.nodeName !== 'LI') {
    return;
  }
  const film = apiService.films.find(({ id }) => id == filmClick.id);

  fillModal(film);
}
