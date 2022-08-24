export default function topArrow() {
  'use strict';

  const refs = {
    goTopBtn: document.querySelector('.lift_up'),
  };

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    console.log(document.documentElement);
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

  window.addEventListener('scroll', trackScroll);
  refs.goTopBtn.addEventListener('click', backToTop);
}
