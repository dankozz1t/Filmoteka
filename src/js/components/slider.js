import Flickity from 'flickity';
import 'flickity/dist/flickity.css';
import { refs } from '../references/reference.js';
import { apiService } from '../API/api-service.js';

export function renederSlider() {
  console.log(apiService.trendingPosters);
  const markup = apiService.trendingPosters
    .map(
      el =>
        `<div class="slider__cell"><img class="slider__img" src="https://image.tmdb.org/t/p/w500/${el}" alt="" height="500"/></div>`
    )
    .join('');

  refs.slider.innerHTML = markup;

  const flkty = new Flickity('.slider', {
    contain: true,
    autoPlay: 2000,
    groupCells: true,
    wrapAround: true,
  });
}
