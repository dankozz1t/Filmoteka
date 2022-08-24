import { apiService } from '../API/api-service.js';
import { renderContentByPagination } from './renderContentByPagination.js';

export function onPaginationClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (e.target.classList.contains('js-next')) {
    renderContentByPagination((apiService.page += 1));
    return;
  }
  if (e.target.classList.contains('js-previous')) {
    renderContentByPagination((apiService.page -= 1));
    return;
  }
  if (e.target.classList.contains('js-second-previous')) {
    renderContentByPagination((apiService.page -= 2));
    return;
  }
  if (e.target.classList.contains('js-second-next')) {
    renderContentByPagination((apiService.page += 2));
    return;
  }
  if (e.target.classList.contains('js-first')) {
    renderContentByPagination(1);
    return;
  }
  if (e.target.classList.contains('js-last')) {
    renderContentByPagination(apiService.totalPages);
    return;
  }
}
