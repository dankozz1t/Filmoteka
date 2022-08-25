import { apiService } from '../API/api-service.js';
import { refs } from '../references/reference.js';
import templateRenderFilms from '../../templates/template-film.hbs';
import { renderPagination } from '../pagination/pagination.js';

export function renderFilms(arrayFilms) {
  if (!arrayFilms.length) {
    console.log(apiService.watched);
    // refs.contentList.innerHTML = templatePlugEmpty();
    return;
  }
  arrayFilms.forEach(film => {
    let genresArray = [];
    // film.genre_ids.forEach(id => {
    //   apiService.allGenres.forEach(genre => {
    //     if (id === genre.id) {
    //       genresArray.push(genre.name);
    //     }
    //   });
    // });
    //-------------------
    if (!film.genre_ids.length) {
      genresArray.push('---');
    } else if (film.genre_ids.length >= 3) {
      genresArray = genresArray.splice(1, genresArray.length - 1);
      genresArray.push('Other');
    }
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
      newPosterPath = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_epAIe4gfBz_nm87nThUhz4RS9jX1NY4jWQ&usqp=CAU`;
    }
    film.poster_path = newPosterPath;
    //-------------------

    film.genre_ids = genresArray.join(', ');
  });
  refs.contentList.innerHTML = templateRenderFilms(arrayFilms);
  renderPagination(apiService.page, apiService.totalPages);
}