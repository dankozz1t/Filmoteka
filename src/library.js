import { refs } from './js/references/reference.js';
import { onTopArrow } from './js/components/lift-up.js';
import { onSwitch } from './js/components/switch.js';
import { onSmoothScroll } from './js/components/smoothScroll.js';

import { apiService } from './js/API/api-service.js';
import { renderFilms } from './js/render/renderFilms.js';

import { onLibraryControls } from './js/events/onLibraryControls.js';
import { onGetInfoClick } from './js/events/onGetInfoClick.js';
import { onPaginationClick } from './js/pagination/onPaginationClick.js';

import { toggleBackdrop } from './js/components/modal/backdrop.js';

onTopArrow();
onSwitch();
onSmoothScroll();

refs.libraryControls.addEventListener('click', onLibraryControls);
refs.contentList.addEventListener('click', onGetInfoClick);
refs.paginationControls.addEventListener('click', onPaginationClick, true);

renderFilms(apiService.fetchWatched(), true);

toggleBackdrop();
