const COORDS_TO_CONTENT = 800;

export function scrollToContent() {
  if (window.pageYOffset < COORDS_TO_CONTENT) {
    goToBot();
  }
  if (window.pageYOffset > COORDS_TO_CONTENT) {
    goToTop();
  }

  function goToBot() {
    if (window.pageYOffset < COORDS_TO_CONTENT) {
      window.scrollBy({
        top: COORDS_TO_CONTENT,
        behavior: 'smooth',
      });
    }
  }

  function goToTop() {
    if (window.pageYOffset > COORDS_TO_CONTENT) {
      window.scrollTo({
        top: COORDS_TO_CONTENT,
        behavior: 'smooth',
      });

  }
}
