import Swiper from 'swiper';
import 'swiper/css';

export function initSkillsSliderAbout() {
  const swiperAbout = new Swiper('.swiper-about-me', {
    slidesPerView: 2,
    loop: true,
    cssMode: true,
    watchSlidesProgress: true,
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

  updateActiveCircleAbout(swiperAbout);
  swiperAbout.slideTo(0, 0);

  swiperAbout.on('slideChange', () => {
    updateActiveCircleAbout(swiperAbout);
  });
}

function updateActiveCircleAbout(swiperAbout) {
  const circlesAbout = document.querySelectorAll('.circle-about-me');

  circlesAbout.forEach(circleAbout => {
    circleAbout.classList.remove('red-about-me');
    circleAbout.classList.add('outline-about-me');
  });

  // Отримуємо активний слайд
  const activeSlideAbout = swiperAbout.slides[swiperAbout.activeIndex];
  const activeCircleAbout = activeSlideAbout.querySelector('.circle-about-me');

  // Додаємо червоний клас активному елементу
  if (activeCircleAbout) {
    activeCircleAbout.classList.remove('outline-about-me');
    activeCircleAbout.classList.add('red-about-me');
  }
}
