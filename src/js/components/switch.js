import { refs } from '../references/reference.js';

function store(value) {
  localStorage.setItem('darkmode', value);
}

export function onSwitch() {
  const darkmode = localStorage.getItem('darkmode');

  if (!darkmode) {
    store(false);
    refs.switchIcon.classList.add('fa-sun');
  } else if (darkmode == 'true') {
    refs.body.classList.add('darkmode');
    refs.switchIcon.classList.add('fa-moon');
  } else if (darkmode == 'false') {
    refs.switchIcon.classList.add('fa-sun');
  }
}

refs.switchBtn.addEventListener('click', () => {
  refs.body.classList.toggle('darkmode');
  refs.switchIcon.classList.add('animated');

  store(refs.body.classList.contains('darkmode'));

  if (refs.body.classList.contains('darkmode')) {
    refs.switchIcon.classList.remove('fa-sun');
    refs.switchIcon.classList.add('fa-moon');
  } else {
    refs.switchIcon.classList.remove('fa-moon');
    refs.switchIcon.classList.add('fa-sun');
  }

  setTimeout(() => {
    refs.switchIcon.classList.remove('animated');
  }, 500);
});
