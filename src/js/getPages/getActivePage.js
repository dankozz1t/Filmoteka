import { refs } from '../references/reference';

export function getActivePage() {
  if (refs.paginationControls.classList.contains('js-lib-pagination')) {
    return 'library';
  }
  return 'home';
}
