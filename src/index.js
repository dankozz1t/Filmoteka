import ApiService from './js/api-service.js';
const apiService = new ApiService();

const openFilmBtn = document.querySelector('[data-film-modal-open]');
const openTeamBtn = document.querySelector('[data-team-modal-open]');
const closeFilmBtn = document.querySelector('[data-modal-close]');
const backdropRef = document.querySelector('[data-backdrop]');
const modalRef = document.querySelector('[data-modal]');
console.log(openFilmBtn);

apiService.fetchImages().then(({ data }) => {
  console.log(data);
});
