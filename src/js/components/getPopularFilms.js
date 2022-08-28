import { apiService } from '../API/api-service.js';
import { renderFilms } from '../render/renderFilms.js';
import { spinnerOn } from './spinner.js';
import { spinnerOff } from './spinner.js';
import { renderSlider } from './slider.js';
import { renderPagination } from '../pagination/pagination.js';

export function getPopularFilms() {
  spinnerOn();
  apiService
    .fetchFilms()
    .then(({ data }) => {
      if (!apiService.allGenres) {
        apiService.fetchGenres().then(() => {
          renderFilms(data.results);
          renderSlider();
        });
      }
    })
    .finally(() => {
      spinnerOff();
    });
}
