import { refs } from './js/reference.js';
import { renderFilms } from './js/renderFilms.js';
import { apiService } from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
import { renderPagination } from './js/pagination.js';
import { onSmoothScroll } from './js/smoothScroll';

onSmoothScroll();

refs.contentList.addEventListener('click', onGetInfoClick);
refs.form.addEventListener('submit', onFormSubmit);
refs.paginationControls.addEventListener('click', onPaginationClick);
refs.contentList.addEventListener('click', onGetInfoClick);

apiService.fetchFilms().then(({ data }) => {
  if (!apiService.allGenres) {
    apiService.fetchGenres();
  }

  renderFilms(data.results);

  renderPagination(apiService.page, apiService.totalPages);
});

function onPaginationClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('js-next')) {
    apiService.page += 1;
    apiService
      .fetchImagesByPage()
      .then(({ data }) => renderFilms(data.results));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-previous')) {
    apiService.page -= 1;
    apiService
      .fetchImagesByPage()
      .then(({ data }) => renderFilms(data.results));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-second-previous')) {
    apiService.page -= 2;
    apiService
      .fetchImagesByPage()
      .then(({ data }) => renderFilms(data.results));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-second-next')) {
    apiService.page += 2;
    apiService
      .fetchImagesByPage()
      .then(({ data }) => renderFilms(data.results));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-first')) {
    apiService.page = 1;
    apiService
      .fetchImagesByPage()
      .then(({ data }) => renderFilms(data.results));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-last')) {
    apiService.page = apiService.totalPages;
    apiService
      .fetchImagesByPage()
      .then(({ data }) => renderFilms(data.results));
    renderPagination(apiService.page, apiService.totalPages);
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

function fillModal(film) {
  refs.filmName.textContent = film.title;
  refs.filmImage.alt = film.title;
  refs.filmImage.src = film.poster_path;
  refs.filmPopulation.textContent = film.popularity.toFixed(2);
  refs.filmTittle.textContent = film.original_title;
  refs.filmVoteFirst.textContent = film.vote_average;
  refs.filmVoteSecond.textContent = film.vote_count;
  refs.filmAbout.textContent = film.overview;
  refs.filmGenres.textContent = film.genre_ids;
}

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  e.target.elements.query.value = '';

  apiService.searchName = query;

  apiService.fetchImagesByName().then(({ data }) => {
    console.log('QU FILM - ', data.results);

    renderFilms(data.results);
    renderPagination(apiService.page, apiService.totalPages);
  });
}
