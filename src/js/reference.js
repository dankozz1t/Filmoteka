export const refs = {
  contentList: document.querySelector('.content__list'),
  form: document.querySelector('#search-form'),

  openFilmBtn: document.querySelector('[data-film-modal-open]'),
  openTeamBtn: document.querySelector('[data-team-modal-open]'),
  backdropRef: document.querySelector('[data-backdrop]'),
  filmModalRef: document.querySelector('[data-film-modal]'),
  teamModalRef: document.querySelector('[data-team-modal]'),

  filmName: document.querySelector('.js-name'),
  filmImage: document.querySelector('.film-modal__img'),
  filmPopulation: document.querySelector('.js-rating'),
  filmTittle: document.querySelector('.js-title'),
  filmVoteFirst: document.querySelector('.js-accent-box'),
  filmVoteSecond: document.querySelector('.js-pale-box'),
  filmAbout: document.querySelector('.js-about'),
  filmGenres: document.querySelector('.js-genres'),

  paginationControls: document.querySelector('.pagination__controls'),
  currentPage: document.querySelector('.js-current'),
};
