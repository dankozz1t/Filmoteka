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

import { renederSlider } from './js/components/slider.js';

import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

onTopArrow();
onSwitch();

onSmoothScroll();

refs.contentList.addEventListener('click', onGetInfoClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.paginationControls.addEventListener('click', onPaginationClick);
refs.contentList.addEventListener('click', onGetInfoClick);

//finction fetch popular films
apiService.fetchFilms().then(({ data }) => {
  if (!apiService.allGenres) {
    apiService.fetchGenres();
  }

  renderFilms(data.results);
  renederSlider();
  renderPagination(apiService.page, apiService.totalPages);
});
// ----------

toggleBackdrop();

function onGetInfoClick(e) {
  const filmClick = e.target.parentNode.parentNode;
  if (filmClick.nodeName !== 'LI') {
    return;
  }
  const film = apiService.films.find(({ id }) => id == filmClick.id);

  fillModal(film);
}

function onFormSubmit(e) {
  e.preventDefault();

  spinnerOn();

  const query = e.target.elements.query.value;

  let currentName = '';
  apiService.searchName = query;
  e.target.elements.query.value = '';

  apiService.fetchImagesByName().then(({ data }) => {
    if (!data.results.length) {
      apiService.searchName = currentName;
      refs.failureMessage.innerHTML = 'Search result not successful';
      setTimeout(() => {
        refs.failureMessage.innerHTML = '';
      }, 900);
    } else {
      currentName = apiService.searchName;
      renderFilms(data.results);
    }
  });
  spinnerOff();
}
