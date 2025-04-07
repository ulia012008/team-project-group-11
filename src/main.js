import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import '@fontsource/inter-tight/800.css';
import '@fontsource/inter-tight/900.css';

// зайві потім приберем

// about me Accordion start

import { initAccordion } from './js/about-me-acc';

document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
});
import { AccordionFaq } from './js/faq.js';

document.addEventListener('DOMContentLoaded', () => {
  AccordionFaq();
});

// finish about me Accordion

// projects swiper start
 import { initSwiper } from './js/projects';

document.addEventListener('DOMContentLoaded', () => {
  initSwiper();
});
// projects swiper end

import './js/covers.js';

import { init } from './js/reviews.js';

document.addEventListener('DOMContentLoaded', () => {
  init();
});

