const COORDS_TO_CONTENT = document.documentElement.clientHeight;

export function scrollContent() {
  if (window.pageYOffset < COORDS_TO_CONTENT) {
    goToBot();
  }
  if (window.pageYOffset > COORDS_TO_CONTENT) {
    window.scrollBy(0, -80);
    setTimeout(goToTop, 10);
  }
}

function goToBot() {
  if (window.pageYOffset < COORDS_TO_CONTENT) {
    if (window.innerWidth >= 1024) {
      window.scrollBy({
        top: 700,
        behavior: 'smooth',
      });
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      window.scrollBy({
        top: 630,
        behavior: 'smooth',
      });
    } else if (window.innerWidth < 768) {
      window.scrollBy({
        top: 500,
        behavior: 'smooth',
      });
    }
  }
}

function goToTop() {
  if (window.pageYOffset > COORDS_TO_CONTENT) {
    if (window.innerWidth >= 1024) {
      window.scrollTo({
        top: 700,
        behavior: 'smooth',
      });
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      window.scrollTo({
        top: 600,
        behavior: 'smooth',
      });
    } else if (window.innerWidth < 768) {
      window.scrollTo({
        top: 500,
        behavior: 'smooth',
      });
    }
  }
}
