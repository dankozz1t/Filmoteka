import { apiService } from '../API/api-service.js';
import { renderPagination } from '../pagination/pagination.js';
import { renderFilms } from './renderFilms.js';

export function renderContentByPagination(page) {
  apiService.page = page;
  apiService.fetchImagesByPage().then(({ data }) => renderFilms(data.results));
  renderPagination(apiService.page, apiService.totalPages);
}
