import Flickity from 'flickity';
import 'flickity/dist/flickity.css';
import { refs } from './reference';
import { apiService } from './api-service';

export function renederSlider() {
  const markup = apiService.trendingPosters
    .map(
      el =>
        `<div class="slider__cell"><img class="slider__img" src="https://image.tmdb.org/t/p/w500${el}" alt="" height="500"/></div>`
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
