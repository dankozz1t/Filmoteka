import { apiService } from '../API/api-service.js';
import { renderPagination } from '../pagination/pagination.js';
import { renderFilms } from './renderFilms.js';

export function renderContentByPagination(page) {
  if (!page) {
    apiService.page = 1;
  } else if (page > 2) {
    apiService.page = apiService.totalPages;
  } else {
    apiService.page += page;
  }

  apiService.fetchFilmsByPage().then(({ data }) => renderFilms(data.results));
  renderPagination(apiService.page, apiService.totalPages);
}
