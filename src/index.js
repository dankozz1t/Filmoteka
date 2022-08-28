import { refs } from './js/references/reference.js';
import { onTopArrow } from './js/components/lift-up.js';
import { onSwitch } from './js/components/switch.js';
import { onSmoothScroll } from './js/components/smoothScroll.js';

import { onFormSubmit } from './js/events/onFormSubmit.js';
import { onGetInfoClick } from './js/events/onGetInfoClick.js';
import { onPaginationClick } from './js/pagination/onPaginationClick.js';

import { toggleBackdrop } from './js/components/modal/backdrop.js';
import { getPopularFilms } from './js/components/getPopularFilms.js';

onTopArrow();
onSwitch();
onSmoothScroll();

refs.form.addEventListener('submit', onFormSubmit);
refs.contentList.addEventListener('click', onGetInfoClick);
refs.paginationControls.addEventListener('click', onPaginationClick);

// <<<<<<< HEAD
//function fetch popular films
// spinnerOn();
// apiService
//   .fetchFilms()
//   .then(({ data }) => {
//     if (!apiService.allGenres) {
//       apiService.fetchGenres().then(() => {
//         renderFilms(data.results);
//         renederSlider();
//         // renderPagination(apiService.page, apiService.totalPages);
//       });
//     }
//   })
//   .finally(() => {
//     spinnerOff();
//   });
// ----------

// toggleBackdrop();

// function onGetInfoClick(e) {
//   const filmClick = e.target.parentNode.parentNode;
//   if (filmClick.nodeName !== 'LI') {
//     return;
//   }
//   const film = apiService.films.find(({ id }) => id == filmClick.id);

//   fillModal(film);
// }

// function onFormSubmit(e) {
//   e.preventDefault();

//   spinnerOn();

//   const query = e.target.elements.query.value;

//   e.target.elements.query.value = '';
//   apiService.searchName = query;
//   apiService
//     .fetchFilmsByName()
//     .then(results => {
//       renderFilms(results);
//       scrollToContent();
//     })

//     .finally(() => {
//       spinnerOff();
//     });
// }
// =======
getPopularFilms();

toggleBackdrop();
// >>>>>>> main
