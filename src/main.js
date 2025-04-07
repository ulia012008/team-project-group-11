import '@fontsource/inter-tight/400.css';
import '@fontsource/inter-tight/500.css';
import '@fontsource/inter-tight/600.css';
import '@fontsource/inter-tight/700.css';
import '@fontsource/inter-tight/800.css';
import '@fontsource/inter-tight/900.css';
import { defineConfig } from 'vite';
import svgSprite from 'vite-plugin-svg-sprite';

export default defineConfig({
  plugins: [
    svgSprite({
      include: 'src/img/svg/**/*.svg',
    }),
  ],
});
// зайві потім приберем

import { initAccordion } from './js/about-me-acc';
import { AccordionFaq } from './js/faq.js';
import { initSwiper } from './js/projects';
import './js/covers.js';
import { init } from './js/reviews.js';

import {
  showSuccessModalWork,
  initModalHandlersWork,
  initEmailValidationWork,
} from './js/work-together.js';
// Один DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initAccordion();
  AccordionFaq();
  initSwiper();
  init();
  initEmailValidationWork();
  initModalHandlersWork();

  const form = document.getElementById('contact-form-work');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      const emailInput = document.getElementById('email-input-work');
      if (!emailInput.checkValidity()) return;

      setTimeout(() => {
        showSuccessModalWork();
        form.reset();
      }, 500);
    });
  }
});
