import ApiService from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
import renderItem from './templates/template-item.js';
import { renderPagination } from './js/pagination.js';

const refs = {
  contentList: document.querySelector('.content__list'),
  form: document.querySelector('#search-form'),
  filmName: document.querySelector('.js-name'),
  filmImage: document.querySelector('.film-modal__img'),
  filmPopulation: document.querySelector('.js-rating'),
  filmTittle: document.querySelector('.js-title'),
  filmVoteFirst: document.querySelector('.js-accent-box'),
  filmVoteSecond: document.querySelector('.js-pale-box'),
  filmAbout: document.querySelector('.js-about'),
  paginationControls: document.querySelector('.pagination__controls'),
};

const apiService = new ApiService();

apiService.fetchFilms().then(({ data }) => {
  console.log(data);
  refs.contentList.insertAdjacentHTML('beforeend', renderItem(data.results));

  renderPagination(apiService.page, apiService.totalPages);

  // console.log(apiService.films);
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

function onGetInfoClick(e) {
  const film = e.target.parentNode.parentNode;
  if (film.nodeName !== 'LI') {
    return;
  }
  const findId = apiService.films.find(({ id }) => id == film.id);
  refs.filmName.textContent = findId.title;
  refs.filmImage.alt = findId.title;
  refs.filmImage.src = `https://image.tmdb.org/t/p/w500/${findId.poster_path}`;
  refs.filmPopulation.textContent = findId.popularity.toFixed(2);
  refs.filmTittle.textContent = findId.original_title;
  refs.filmVoteFirst.textContent = findId.vote_average;
  refs.filmVoteSecond.textContent = findId.vote_count;
  refs.filmAbout.textContent = findId.overview;
}

refs.form.addEventListener('submit', onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  e.target.elements.query.value = '';
  apiService.searchName = query;
  // console.log(apiService.searchQuery);
  apiService.fetchImagesByName().then(({ data }) => {
    // console.log(data.results);

    refs.contentList.innerHTML = renderItem(data.results);
    renderPagination(apiService.page, apiService.totalPages);
  });
}

toggleBackdrop();
