import { apiService } from '../API/api-service.js';
import { fillModal } from '../components/modal/fillModal.js';

export function onGetInfoClick(e) {
  const filmClick = e.target.parentNode.parentNode;
  if (filmClick.nodeName !== 'LI') {
    return;
  }
  const film = apiService.films.find(({ id }) => id == filmClick.id);

  fillModal(film);
}
