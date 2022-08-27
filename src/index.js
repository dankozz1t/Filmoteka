import { refs } from './js/references/reference.js';
import { onFormSubmit } from './js/components/onFormSubmit.js';
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

import { renderSlider } from './js/components/slider.js';
import { scrollToContent } from './js/components/scrollToContent.js';

onTopArrow();
onSwitch();
onSmoothScroll();

refs.contentList.addEventListener('click', onGetInfoClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.paginationControls.addEventListener('click', onPaginationClick);
refs.contentList.addEventListener('click', onGetInfoClick);

//function fetch popular films
spinnerOn();
apiService
  .fetchFilms()
  .then(({ data }) => {
    if (!apiService.allGenres) {
      apiService.fetchGenres().then(() => {
        renderFilms(data.results);
        renderSlider();
        renderPagination(apiService.page, apiService.totalPages);
      });
    }
  })
  .finally(() => {
    spinnerOff();
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
