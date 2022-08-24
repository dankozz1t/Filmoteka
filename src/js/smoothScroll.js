export function onSmoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.content')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
