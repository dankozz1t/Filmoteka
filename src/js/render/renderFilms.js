import { apiService } from '../API/api-service.js';
import { refs } from '../references/reference.js';
import templateRenderFilms from '../../templates/template-film.hbs';
import { renderPagination } from '../pagination/pagination.js';
import { getActiveLibraryCategory } from '../library/getActiveLibraryCategory.js';
import templatePlugEmpty from '../../templates/template-plug-empty.hbs';

export async function renderFilms(arrayFilms, isLibrary = false) {
  if (!arrayFilms.length) {
    refs.contentList.innerHTML = templatePlugEmpty();
    refs.paginationControls.innerHTML = '';
    return;
  }

  arrayFilms.forEach(film => {
    let genresArray = [];
    let genresArrayFull = [];

    if (typeof film.genre_ids === 'object') {
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
        genresArray = genresArray.splice(
          genresArray.length - 2,
          genresArray.length - 1
        );
        genresArray.push('Other');
      }

      film.genre_ids = genresArray.join(', ');
      film.genre_ids_full = genresArrayFull.join(', ');
    }

    //-------------------

    //-------------------
    if (!film.release_date) {
      film.release_date = '----';
    } else {
      film.release_date = film.release_date.slice(0, 4);
    }
    //-------------------
    //-------------------
    let newPosterPath = '';
    if (film.poster_path) {
      newPosterPath = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
    } else {
      newPosterPath = `https://i.imgur.com/klRNrKS.png`;
    }
    film.poster_path = newPosterPath;
    //-------------------
  });
  refs.contentList.innerHTML = templateRenderFilms(arrayFilms);

  if (isLibrary) {
    if (getActiveLibraryCategory() === 'qeue') {
      renderPagination(apiService.qeuePage, apiService.totalQeuePages);
      return;
    }
    renderPagination(apiService.watchedPage, apiService.totalWatchedPages);
    return;
  }
  renderPagination(apiService.page, apiService.totalPages);
}
