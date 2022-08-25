import { refs } from './js/references/reference.js';
import { onTopArrow } from './js/components/lift-up.js';
import { onSwitch } from './js//components/switch.js';
import templatePlugEmpty from './templates/template-plug-empty.hbs';

onTopArrow();
onSwitch();

refs.contentList.innerHTML = templatePlugEmpty();
