import { refs } from './reference.js';

export function onTopArrow() {
  window.addEventListener('scroll', trackScroll);
  refs.goTopBtn.addEventListener('click', backToTop);

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      refs.goTopBtn.classList.add('lift_up-show');
    }
    if (scrolled < coords) {
      refs.goTopBtn.classList.remove('lift_up-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 10);
    }
  }
}
