import { apiService } from '../API/api-service.js';
import { renderPagination } from './pagination.js';
import { renderFilms } from '../render/renderFilms.js';

export function renderContentByPagination(page) {
  apiService.page = page;
  apiService.fetchImagesByPage().then(({ data }) => renderFilms(data.results));
  renderPagination(apiService.page, apiService.totalPages);
}
