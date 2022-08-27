import { refs } from '../references/reference.js';
import { apiService } from '../API/api-service.js';
import { scrollToContent } from '../components/scrollToContent.js';
import { spinnerOn } from '../components/spinner.js';
import { spinnerOff } from '../components/spinner.js';
import { renderFilms } from '../render/renderFilms.js';

export function onFormSubmit(e) {
  e.preventDefault();

  spinnerOn();

  const query = e.target.elements.query.value;

  e.target.elements.query.value = '';

  apiService
    .fetchImagesByName(query)
    .then(({ data }) => {
      if (!data.results.length) {
        refs.failureMessage.innerHTML = 'Search result not successful';
        setTimeout(() => {
          refs.failureMessage.innerHTML = '';
        }, 900);
      } else {
        apiService.searchName = query;
        renderFilms(data.results);
        scrollToContent();
      }
    })
    .finally(() => {
      spinnerOff();
    });
}
