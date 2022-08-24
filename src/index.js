import refs from './js/reference.js';
import ApiService from './js/api-service.js';
import { toggleBackdrop } from './js/backdrop.js';
import templateRenderFilms from './templates/template-film.js';

const apiService = new ApiService();

refs.contentList.addEventListener('click', onGetInfoClick);
refs.form.addEventListener('submit', onFormSubmit);

apiService.fetchFilms().then(({ data }) => {
  renderFilms(data);
});

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

  apiService.fetchImagesByName(query).then(({ data }) => {
    renderFilms(data);
  });
}

function renderFilms(arrayFilms) {
  if (!arrayFilms.results.length) {
    console.log('SORRY');
    //Сюди треба заглушку
  }

  refs.contentList.innerHTML = templateRenderFilms(arrayFilms.results);
}
