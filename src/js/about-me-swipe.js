import Swiper from 'swiper';
import 'swiper/css';

export function initSkillsSliderAbout() {
  const swiperAbout = new Swiper('.skills-swiper-about-me', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true, // цикличность
    // loopAdditionalSlides: 1, //
    centeredSlides: false, // Отключаем центрирование слайда
    initialSlide: 0, // Активный слайд — первый
    navigation: {
      nextEl: '.swiper-button-next-about-me',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
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

  const nextIconAbout = document.querySelector('.swiper-button-next-about-me');
  if (nextIconAbout) {
    nextIconAbout.addEventListener('click', e => {
      e.stopPropagation();
      swiperAbout.slideNext();
    });
  }
}

function updateActiveCircleAbout(swiperAbout) {
  const circlesAbout = document.querySelectorAll(
    '.swiper-slide .circle-about-me'
  );
  circlesAbout.forEach(circleAbout => {
    circleAbout.classList.remove('red-about-me');
    circleAbout.classList.add('outline-about-me');
  });

  const activeSlideAbout = document.querySelector(
    '.swiper-slide-active .circle-about-me'
  );
  if (activeSlideAbout) {
    activeSlideAbout.classList.remove('outline-about-me');
    activeSlideAbout.classList.add('red-about-me');
  }
}
