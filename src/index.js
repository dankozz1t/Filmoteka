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

onTopArrow();
onSwitch();

onSmoothScroll();

refs.contentList.addEventListener('click', onGetInfoClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.paginationControls.addEventListener('click', onPaginationClick);
refs.contentList.addEventListener('click', onGetInfoClick);

//finction fetch popular films
spinnerOn();
apiService
  .fetchFilms()
  .then(({ data }) => {
    if (!apiService.allGenres) {
      apiService.fetchGenres().then(() => {
        renderFilms(data.results);
        renederSlider();
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

function onFormSubmit(e) {
  e.preventDefault();

  spinnerOn();

  const query = e.target.elements.query.value;

  let currentName = '';
  apiService.searchName = query;
  e.target.elements.query.value = '';

  apiService
    .fetchImagesByName()
    .then(({ data }) => {
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
    })
    .finally(() => {
      spinnerOff();
    });
}
(function scrollDownBySubmit() {
const btnScrollDown = document.querySelector('.header__form-btn');
  function scrollDown() {
    // const windowCoords = document.documentElement.offsetHeight;
    // const windowCoords = document.getElementById('.container').clientHeight;
  const windowCoords = document.querySelector('.content')
    .firstElementChild.getBoundingClientRect();
    console.log(windowCoords);
    (function scroll() {
        if (window.pageYOffset < windowCoords.top) {
          window.scrollBy(0, 8);
          setTimeout(scroll, 8);
        }
        if (window.pageYOffset > windowCoords.top) {
          window.scrollTo(0, windowCoords);
        }
    })(); 
  }
  btnScrollDown.addEventListener('click', scrollDown);
})()
