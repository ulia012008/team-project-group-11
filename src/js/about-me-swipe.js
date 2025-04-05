import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export function initSkillsSlider() {
  const swiper = new Swiper('.skills-swiper-about-me', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-about-me',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 6,
      },
    },
    on: {
      slideChangeTransitionEnd: function () {
        updateActiveCircle();
      },
    },
  });

  function updateActiveCircle() {
    const slides = document.querySelectorAll(
      '.swiper-slide-about-me .circle-about-me'
    );
    slides.forEach(circle => {
      circle.classList.remove('red-about-me');
      circle.classList.add('outline-about-me');
    });

    const activeSlide = document.querySelector(
      '.swiper-slide-active-about-me .circle-about-me'
    );
    if (activeSlide) {
      activeSlide.classList.remove('outline-about-me');
      activeSlide.classList.add('red-about-me');
    }
  }

  updateActiveCircle();
}
