import { refs } from './reference.js';



export function spinnerOn() {
    refs.spinner.classList.remove('visually-hidden')
};

export function spinnerOff() {
    refs.spinner.classList.add('visually-hidden');
}
