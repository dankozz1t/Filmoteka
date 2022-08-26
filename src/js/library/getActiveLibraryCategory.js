import { refs } from '../references/reference';

export function getActiveLibraryCategory() {
  if (refs.libQeueBtn.classList.contains('btn-js-active')) {
    return 'qeue';
  } else if (refs.libWatchedBtn.classList.contains('btn-js-active')) {
    return 'watched';
  }
}
