import { refs } from '../references/reference.js';

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

export function spinnerOn() {
  refs.spinner.classList.remove('visually-hidden');

  one.classList.add('one');
  two.classList.add('two');
  three.classList.add('three');
}

export function spinnerOff() {
  refs.spinner.classList.add('visually-hidden');

  one.classList.remove('one');
  two.classList.remove('two');
  three.classList.remove('three');
}
