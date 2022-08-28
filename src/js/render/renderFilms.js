import { apiService } from '../API/api-service.js';
import { refs } from '../references/reference.js';
import { renderPagination } from '../pagination/pagination.js';
import { getActiveLibraryCategory } from '../getPages/getActiveLibraryCategory.js';

import templateRenderFilms from '../../templates/template-film.hbs';
import templatePlugEmpty from '../../templates/template-plug-empty.hbs';

export async function renderFilms(arrayFilms, isLibrary = false) {
  if (!arrayFilms) {
    return;
  }

  if (!arrayFilms.length) {
    refs.contentList.innerHTML = templatePlugEmpty();
    refs.paginationControls.innerHTML = '';
    return;
  }

  arrayFilms.forEach((film = {}) => {
    checkTitle(film);

    checkGenres(film);

    checkDate(film);

    checkPoster(film);

    checkAbout(film);
  });

  refs.contentList.innerHTML = templateRenderFilms(arrayFilms);

  if (isLibrary) {
    if (getActiveLibraryCategory() === 'qeue') {
      renderPagination(apiService.qeuePage, apiService.totalQeuePages);
      // console.log('qeue after', apiService.qeuePage, apiService.totalQeuePages);
      return;
    } else if (refs.libWatchedBtn.classList.contains('btn-js-active')) {
      renderPagination(apiService.watchedPage, apiService.totalWatchedPages);
      return;
    }
    renderPagination(apiService.watchedPage, apiService.totalWatchedPages);
    return;
  }

  renderPagination(apiService.page, apiService.totalPages);
}

function checkAbout(film) {
  if (!film.overview) {
    film.overview = 'no info';
  }
}

function checkPoster(film) {
  let newPosterPath = '';
  if (film.poster_path) {
    newPosterPath = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
  } else {
    newPosterPath = `https://i.imgur.com/klRNrKS.png`;
  }
  film.poster_path = newPosterPath;
}

function checkDate(film) {
  if (!film.release_date) {
    film.release_date = '----';
  } else {
    film.release_date = film.release_date.slice(0, 4);
  }
}

function checkGenres(film) {
  if (typeof film.genre_ids === 'object') {
    let genresArray = [];
    let genresArrayFull = [];

    film.genre_ids.forEach(id => {
      apiService.allGenres.forEach(genre => {
        if (id === genre.id) {
          genresArray.push(genre.name);
          genresArrayFull.push(genre.name);
        }
      });
    });

    if (!film.genre_ids.length) {
      genresArray.push('---');
      genresArrayFull.push('---');
    } else if (film.genre_ids.length >= 3) {
      genresArray.splice(2, genresArray.length - 1);
      genresArray.push('Other...');
    }

    film.genre_ids = genresArray.join(', ');
    film.genre_ids_full = genresArrayFull.join(', ');
  }
}

function checkTitle(film) {
  if (!film.original_title) {
    film.original_title = '---';
  }
}
