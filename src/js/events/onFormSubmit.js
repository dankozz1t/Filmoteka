import { apiService } from '../API/api-service.js';
import { spinnerOn } from '../components/spinner.js';
import { spinnerOff } from '../components/spinner.js';
import { renderFilms } from '../render/renderFilms.js';

export function onFormSubmit(e) {
  e.preventDefault();

  spinnerOn();

  const query = e.target.elements.query.value;

  e.target.elements.query.value = '';
  apiService.searchName = query;
  apiService
    .fetchFilmsByName()
    .then(results => {
      renderFilms(results);
    })
    .finally(() => {
      spinnerOff();
    });
}
