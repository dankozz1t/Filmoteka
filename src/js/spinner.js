import { refs } from './reference.js';

// refs.spinner.addEventListener('load', onSpinnerOnLoad);
// refs.spinner.addEventListener('load', onSpinnerOffLoad);

export function onSpinnerOnLoad() {
    refs.spinner.classList.remove('visually-hidden')
};

export function onSpinnerOffLoad() {
    refs.spinner.classList.add('visually-hidden');
}
