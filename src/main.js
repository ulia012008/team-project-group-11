import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import '@fontsource/inter-tight/800.css';
import '@fontsource/inter-tight/900.css';
// зайві потім приберем

// about me Accordion start
import { initAccordion } from './js/about-me';

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
});
// finish about me Accordion

import './js/covers';
