import { renderContentByPagination } from '../render/renderContentByPagination.js';
import { renderLibraryByPagination } from '../render/renderLibraryByPagination.js';
import { getActivePage } from '../getPages/getActivePage.js';
import { scrollToContent } from '../components/scrollToContent.js';

export function onPaginationClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  if (getActivePage() === 'library') {
    managePaginationType(e, 'library');
    return;
  }
  managePaginationType(e, 'home');
  scrollToContent();
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
