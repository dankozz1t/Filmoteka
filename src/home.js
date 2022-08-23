const openFilmBtn = document.querySelector('[data-film-modal-open]');
const openTeamBtn = document.querySelector('[data-team-modal-open]');
const closeFilmBtn = document.querySelector('[data-modal-close]');
const backdropRef = document.querySelector('[data-backdrop]');
const modalRef = document.querySelector('[data-modal]');
console.log(openFilmBtn);
openFilmBtn.addEventListener('click', toggleModal);

function toggleModal() {
  console.log(55555);
}
