import { apiService } from '../API/api-service.js';
import { renderPagination } from '../pagination/pagination.js';
import { refs } from '../references/reference.js';
import { renderFilms } from './renderFilms.js';

export function renderLibraryByPagination(page) {
  if (refs.libWatchedBtn.classList.contains('btn-js-active')) {
    if (!page) {
      apiService.watchedPage = 1;
    } else if (page > 2) {
      apiService.watchedPage = apiService.totalWatchedPages;
    } else {
      apiService.watchedPage += page;
    }
    renderFilms(apiService.fetchWatched(), true);
  } else {
    if (!page) {
      apiService.qeuePage = 1;
    } else if (page > 2) {
      apiService.qeuePage = apiService.totalQeuePages;
    } else {
      apiService.qeuePage += page;
    }
    renderFilms(apiService.fetchQeue(), true);
  }
  //   renderPagination(apiService.libPage, 100);
}
