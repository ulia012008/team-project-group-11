import Swiper from 'swiper';
import 'swiper/css'; // Імпортуємо стилі для Swiper

export function initSkillsSliderAbout() {
  const swiper = new Swiper('.skills-swiper-about-me', {
    slidesPerView: 3, // Кількість слайдів, які будуть відображатися
    spaceBetween: 20, // Простір між слайдами
    loop: true, // Зациклюємо слайдер
    navigation: {
      nextEl: '.swiper-button-next-about-me', // Кнопка для переходу до наступного слайду
    },
    breakpoints: {
      768: {
        slidesPerView: 4, // Кількість слайдів для ширини екрану понад 768px
      },
      1024: {
        slidesPerView: 6, // Кількість слайдів для ширини екрану понад 1024px
      },
    },
  });

  function updateActiveCircleAbout() {
    const slides = document.querySelectorAll('.swiper-slide .circle-about-me');
    slides.forEach(circle => {
      circle.classList.remove('red-about-me');
      circle.classList.add('outline-about-me');
    });

    const activeSlide = document.querySelector(
      '.swiper-slide-active .circle-about-me'
    );
    if (activeSlide) {
      activeSlide.classList.remove('outline-about-me');
      activeSlide.classList.add('red-about-me');
    }
  }

  updateActiveCircleAbout();
}
