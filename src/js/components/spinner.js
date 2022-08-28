import { refs } from '../references/reference.js';

export function spinnerOn() {
  refs.spinner.classList.remove('visually-hidden');
}

export function spinnerOff() {
  refs.spinner.classList.add('visually-hidden');
  const one = document.querySelector('.inner one');
  const two  =document.querySelector('.inner two');
  const three = document.querySelector('.inner three');
  one.classList.remove('inner one')
  two.classList.remove('inner two')
  three.classList.remove('inner three')
}
