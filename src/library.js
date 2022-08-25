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
refs.paginationControls.addEventListener('click', onPaginationClick);

async function filmRender() {
  const data = await apiService.fetchWatched();

  const render = await renderFilms(data);
  if (!apiService.watched.length) {
    refs.contentList.innerHTML = templatePlugEmpty();
  }
  return render;
}

filmRender();

function onLibraryControls(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('js-btn-watched')) {
    reverseBtnStyle(e.currentTarget.children[1].firstElementChild);
    reverseBtnStyle(e.currentTarget.children[0].firstElementChild);

    renderFilms(apiService.fetchWatched());
    if (!apiService.watched.length) {
      refs.contentList.innerHTML = templatePlugEmpty();
    }
  }
  if (e.target.classList.contains('js-btn-qeue')) {
    reverseBtnStyle(e.currentTarget.children[1].firstElementChild);
    reverseBtnStyle(e.currentTarget.children[0].firstElementChild);

    renderFilms(apiService.fetchQeue());
    if (!apiService.qeue.length) {
      refs.contentList.innerHTML = templatePlugEmpty();
    }
  }
}

renderPagination;
function reverseBtnStyle(btn) {
  if (btn.classList.contains('btn--accent')) {
    btn.classList.replace('btn--accent', 'btn--white');

    return;
  }
  btn.classList.replace('btn--white', 'btn--accent');
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
