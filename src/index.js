import { refs } from './js/references/reference.js';
import { onTopArrow } from './js/components/lift-up.js';
import { onSwitch } from './js/components/switch.js';
import { onSmoothScroll } from './js/components/smoothScroll.js';

import { onFormSubmit } from './js/components/onFormSubmit.js';
import { onGetInfoClick } from './js/components/onGetInfoClick.js';
import { onPaginationClick } from './js/pagination/onPaginationClick.js';

import { toggleBackdrop } from './js/components/modal/backdrop.js';
import { onPopularFilms } from './js/components/onPopularFilms.js';

onTopArrow();
onSwitch();
onSmoothScroll();

refs.form.addEventListener('submit', onFormSubmit);
refs.contentList.addEventListener('click', onGetInfoClick);
refs.paginationControls.addEventListener('click', onPaginationClick);

onPopularFilms();

toggleBackdrop();
