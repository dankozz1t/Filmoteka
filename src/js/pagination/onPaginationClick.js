import { apiService } from '../API/api-service.js';
import { renderContentByPagination } from '../render/renderContentByPagination.js';
import { renderLibraryByPagination } from '../render/renderLibraryByPagination.js';
import { renderFilms } from '../render/renderFilms.js';
import { scrollContent } from '../components/scrollContent.js';

export function onPaginationClick(e) {
  if (e.currentTarget.classList.contains('js-lib-pagination')) {
    managePaginationType(e, 'library');
    return;
  }

  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  managePaginationType(e, 'home');
  scrollContent();
}

function managePaginationType(e, paginationCategory) {
  if (e.target.classList.contains('js-next')) {
    if (paginationCategory === 'home') {
      renderContentByPagination(+1);
      return;
    }
    if (paginationCategory === 'library') {
      renderLibraryByPagination(+1);
    }
  }
  if (e.target.classList.contains('js-previous')) {
    if (paginationCategory === 'home') {
      renderContentByPagination(-1);
      return;
    }
    if (paginationCategory === 'library') {
      renderLibraryByPagination(-1);
    }
  }
  if (e.target.classList.contains('js-second-previous')) {
    if (paginationCategory === 'home') {
      renderContentByPagination(-2);
      return;
    }
    if (paginationCategory === 'library') {
      renderLibraryByPagination(-2);
    }
  }
  if (e.target.classList.contains('js-second-next')) {
    if (paginationCategory === 'home') {
      renderContentByPagination(+2);
      return;
    }
    if (paginationCategory === 'library') {
      renderLibraryByPagination(+2);
    }
  }
  if (e.target.classList.contains('js-first')) {
    if (paginationCategory === 'home') {
      renderContentByPagination(0);
      return;
    }
    if (paginationCategory === 'library') {
      renderLibraryByPagination(0);
    }
  }
  if (e.target.classList.contains('js-last')) {
    if (paginationCategory === 'home') {
      renderContentByPagination(5);
      return;
    }
    if (paginationCategory === 'library') {
      renderLibraryByPagination(5);
    }
  }
}
