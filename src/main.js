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

// swipe
import { initSkillsSliderAbout } from './js/about-me-swipe';

document.addEventListener('DOMContentLoaded', () => {
  initSkillsSliderAbout();
});
// finishswipe

// FAQ

// import Swiper JS
// import Swiper from 'swiper';
// // import Swiper styles
// import 'swiper/css';

// import { backendData } from './js/getting-data-reviews';
// import { renderElements } from './js/render-function-reviews';

// const buttonElemLeft = document.querySelector('.swiper-button-next');
// const buttonElemRight = document.querySelector('.swiper-button-prev');
// const errorMessage = document.createElement('p');

// errorMessage.textContent = 'Not found';
// errorMessage.classList.add('error-message');
// errorMessage.style.display = 'none'; // Спочатку прихований

// document.querySelector('.reviews').appendChild(errorMessage);

// let swiper;

// async function init() {
//   try {
//     const data = await backendData();
//     if (!data || data.length === 0) {
//       errorMessage.style.display = 'block'; // Показуємо помилку
//       buttonElemLeft.style.display = 'none';
//       buttonElemRight.style.display = 'none';
//       return;
//     }

//     renderElements(data);

//     // Ініціалізація Swiper
//     swiper = new Swiper('.swiper', {
//       direction: 'horizontal',
//       loop: false,
//       slidesPerView: 4, // Показуємо 4 слайди одночасно
//       spaceBetween: 20, // Відстань між слайдами
//       keyboard: {
//         enabled: true,
//         onlyInViewport: true,
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     });
//   } catch (error) {
//     console.log('Помилка:', error);
//   }
// }

// buttonElemLeft.addEventListener('click', () => swiper.slidePrev());
// buttonElemRight.addEventListener('click', () => swiper.slideNext());

// init();

// // finish reviews
