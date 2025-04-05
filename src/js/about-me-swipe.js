import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

export function initSkillsSlider() {
  const swiper = new Swiper('.skills-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
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
    const slides = document.querySelectorAll('.swiper-slide .circle');
    slides.forEach(circle => {
      circle.classList.remove('red');
      circle.classList.add('outline');
    });

    const activeSlide = document.querySelector('.swiper-slide-active .circle');
    if (activeSlide) {
      activeSlide.classList.remove('outline');
      activeSlide.classList.add('red');
    }
  }

  updateActiveCircle();
}
