import { refs } from './js/reference.js';
import ApiService from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
import { renderPagination } from './js/pagination.js';
import templateRenderFilms from './templates/template-film.js';
import templatePlugEmpty from './templates/template-plug-empty.hbs';

const apiService = new ApiService();

refs.contentList.addEventListener('click', onGetInfoClick);
refs.form.addEventListener('submit', onFormSubmit);

apiService.fetchFilms().then(({ data }) => {
  renderFilms(data.results);

  renderPagination(apiService.page, apiService.totalPages);
});

refs.paginationControls.addEventListener('click', onPaginationClick);
refs.contentList.addEventListener('click', onGetInfoClick);

function onPaginationClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('js-next')) {
    renderContentByPagination((apiService.page += 1));
    return;
  }
  if (e.target.classList.contains('js-previous')) {
    renderContentByPagination((apiService.page -= 1));
    return;
  }
  if (e.target.classList.contains('js-second-previous')) {
    renderContentByPagination((apiService.page -= 2));
    return;
  }
  if (e.target.classList.contains('js-second-next')) {
    renderContentByPagination((apiService.page += 2));
    return;
  }
  if (e.target.classList.contains('js-first')) {
    renderContentByPagination(1);
    return;
  }
  if (e.target.classList.contains('js-last')) {
    renderContentByPagination(apiService.totalPages);
    return;
  }
}

function renderContentByPagination(page) {
  apiService.page = page;
  apiService.fetchImagesByPage().then(({ data }) => renderFilms(data.results));
  renderPagination(apiService.page, apiService.totalPages);
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
  refs.filmImage.src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
  refs.filmPopulation.textContent = film.popularity.toFixed(2);
  refs.filmTittle.textContent = film.original_title;
  refs.filmVoteFirst.textContent = film.vote_average;
  refs.filmVoteSecond.textContent = film.vote_count;
  refs.filmAbout.textContent = film.overview;
}

function onFormSubmit(e) {
  e.preventDefault();
  refs.failureMessage.innerHTML = '';

  const query = e.target.elements.query.value;
  apiService.searchName = query;
  e.target.elements.query.value = '';

  apiService.fetchImagesByName().then(({ data }) => {
    if (!data.results.length) {
      apiService.searchName = '';
      refs.failureMessage.innerHTML = 'Search result not successful';
    } else {
      renderFilms(data.results);
    }
  });
}

function renderFilms(arrayFilms) {
  refs.contentList.innerHTML = templateRenderFilms(arrayFilms);
  renderPagination(apiService.page, apiService.totalPages);
}
