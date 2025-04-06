import Swiper from 'swiper';
import 'swiper/css';

export function initSkillsSliderAbout() {
  const swiper = new Swiper('.skills-swiper-about-me', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next-about-me',
    },
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 6,
      },
    },
  });

  // ✅ Події — після створення swiper
  swiper.on('init', () => {
    setTimeout(() => updateActiveCircleAbout(swiper), 0);
  });

  swiper.on('slideChange', () => {
    updateActiveCircleAbout(swiper);
  });

  // 👉 Ручне перемикання при натисканні на іконку SVG
  const nextIcon = document.querySelector('.button-swiper-about-me');
  if (nextIcon) {
    nextIcon.addEventListener('click', e => {
      e.stopPropagation();
      swiper.slideNext();
    });
  }

  // 🔁 Вручну запускаємо init-подію (Swiper її не тригерить автоматично!)
  swiper.init();
}

// 🔧 Функція: активний кружечок + зробити його першим
function updateActiveCircleAbout(swiper) {
  const circles = document.querySelectorAll('.swiper-slide .circle-about-me');
  circles.forEach(circle => {
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

  // ⬅️ Зробити активний слайд першим
  setTimeout(() => {
    swiper.slideToLoop(swiper.realIndex, 0); // без анімації
  }, 10);
}
