import Swiper from 'swiper';
import 'swiper/css';

export function initSkillsSliderAbout() {
  new Swiper('.skills-swiper-about-me', {
    slidesPerView: 2,
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next-about-me',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 6,
      },
    },
  });
}
