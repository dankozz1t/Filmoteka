import { refs } from '../references/reference.js';
import { apiService } from '../API/api-service.js';
import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

export function renderSlider() {
  const markup = apiService.sliderFilms
    .map(
      ({ id, poster_path, title }) =>
        `<div class="slider__cell"><img class="slider__img" src="${poster_path}" alt=${title} id=${id} loading="lazy" height="500"/></div>`
    )
    .join('');

  refs.slider.innerHTML = markup;

  new Flickity('.slider', {
    contain: true,
    autoPlay: 2000,
    groupCells: true,
    wrapAround: true,
    pageDots: false,
  });
}
