export const refs = {
  content: document.querySelector('.content'),

  contentList: document.querySelector('.content__list'),
  form: document.querySelector('#search-form'),
  failureMessage: document.querySelector('.failure-message'),

  openFilmBtn: document.querySelector('[data-film-modal-open]'),
  openTeamBtn: document.querySelector('[data-team-modal-open]'),
  backdropRef: document.querySelector('[data-backdrop]'),
  filmModalRef: document.querySelector('[data-film-modal]'),
  redirectBtn: document.querySelector('.redirect'),
  teamModalRef: document.querySelector('[data-team-modal]'),

  filmName: document.querySelector('.js-name'),
  filmImage: document.querySelector('.film-modal__img'),
  filmPopulation: document.querySelector('.js-rating'),
  filmTittle: document.querySelector('.js-title'),
  filmVoteFirst: document.querySelector('.js-accent-box'),
  filmVoteSecond: document.querySelector('.js-pale-box'),
  filmAbout: document.querySelector('.js-about'),
  filmGenres: document.querySelector('.js-genre'),

  paginationControls: document.querySelector('.pagination__controls'),
  currentPage: document.querySelector('.js-current'),

  toggle: document.getElementById('toggleDark'),
  body: document.querySelector('body'),

  switchBtn: document.querySelector('.switch__btn'),
  switchIcon: document.querySelector('.switch__btn__icon'),

  spinner: document.querySelector('.loader'),

  goTopBtn: document.querySelector('.lift_up'),

  slider: document.querySelector('.slider'),
  sliderImage: document.querySelector('.slider__img'),

  watched: document.querySelector('.js-add-watched'),
  qeue: document.querySelector('.js-add-qeue'),

  filmControls: document.querySelector('.js-film-controls'),
  libraryControls: document.querySelector('.js-library-controls'),

  libWatchedBtn: document.querySelector('.js-btn-watched'),
  libQeueBtn: document.querySelector('.js-btn-qeue'),
};
