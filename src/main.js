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
// finish about me Accordion

// swipe
import { initSkillsSlider } from './js/about-me-swipe';

document.addEventListener('DOMContentLoaded', () => {
  initSkillsSlider();
});
// finishswipe
