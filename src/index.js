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
    apiService.page += 1;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-previous')) {
    apiService.page -= 1;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-second-previous')) {
    apiService.page -= 2;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-second-next')) {
    apiService.page += 2;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-first')) {
    apiService.page = 1;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
  if (e.target.classList.contains('js-last')) {
    apiService.page = apiService.totalPages;
    apiService.fetchImagesByPage().then(({ data }) => console.log(data));
    renderPagination(apiService.page, apiService.totalPages);
  }
}

// function onGetInfoClick(e) {
//   const film = e.target.parentNode.parentNode;
//   if (film.nodeName !== 'LI') {
//     return;
//   }
//   const findId = apiService.films.find(({ id }) => id == film.id);
//   refs.filmName.textContent = findId.title;
//   refs.filmImage.alt = findId.title;
//   refs.filmImage.src = `https://image.tmdb.org/t/p/w500/${findId.poster_path}`;
//   refs.filmPopulation.textContent = findId.popularity.toFixed(2);
//   refs.filmTittle.textContent = findId.original_title;
//   refs.filmVoteFirst.textContent = findId.vote_average;
//   refs.filmVoteSecond.textContent = findId.vote_count;
//   refs.filmAbout.textContent = findId.overview;

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
  const query = e.target.elements.query.value;
  e.target.elements.query.value = '';

  apiService.searchName = query;

  apiService.fetchImagesByName().then(({ data }) => {
    console.log('QU FILM - ', data.results);

    renderFilms(data.results);
    renderPagination(apiService.page, apiService.totalPages);
  });
}

function renderFilms(arrayFilms) {
  if (!arrayFilms.length) {
    console.log('SORRY');
    refs.contentList.innerHTML = templatePlugEmpty();
    return;
  }

  console.log('RENDER - ', arrayFilms);
  refs.contentList.innerHTML = templateRenderFilms(arrayFilms);
}
