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
      window.scrollBy(0, 20);
      setTimeout(goToBot, 10);
    }
  }

  function goToTop() {
    if (window.pageYOffset > COORDS_TO_CONTENT) {
      window.scrollBy(0, -80);
      setTimeout(goToTop, 10);
    }
  }
}
