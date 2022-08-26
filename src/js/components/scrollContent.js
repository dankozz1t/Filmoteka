// import { refs } from '../references/reference';

export function scrollContent() {
  //   let windowCoords = refs.content.getBoundingClientRect().y;
  //   console.log(windowCoords);

  let windowCoords = document.documentElement.offsetHeight;

  function scroll() {
    if (window.pageYOffset < windowCoords) {
      window.scrollBy(0, 20);
      setTimeout(scroll, 20);
    }
    if (window.pageYOffset > windowCoords) {
      window.scrollTo(0, windowCoords);
    }
  }
  scroll();
}
