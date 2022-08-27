import { refs } from '../references/reference.js';
import { apiService } from '../API/api-service.js';

import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

export function renderSlider() {
  const markup = apiService.trendingPosters
    .map(
      el =>
        `<div class="slider__cell"><img class="slider__img" src="https://image.tmdb.org/t/p/w500/${el}" alt="Film poster" loading="lazy" height="500"/></div>`
    )
    .join('');

  refs.slider.innerHTML = markup;

  new Flickity('.slider', {
    contain: true,
    autoPlay: 2000,
    groupCells: true,
    wrapAround: true,
  });
}
