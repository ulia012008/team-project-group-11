import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSwiper() {
    const swiper = new Swiper(".projects-mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".projects-swiping-right-arrow",
        prevEl: ".projects-swiping-left-arrow",
      },
      loop: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: true,
      touchEventsTarget: '.swiper',
      on: {
        init(swiper) {
          updateArrowClasses(swiper);
        },
        slideChange(swiper) {
          updateArrowClasses(swiper);
        }
      }
  });

  function updateArrowClasses(swiper) {
    const prevBtn = document.querySelector(".projects-swiping-left-arrow");
    const nextBtn = document.querySelector(".projects-swiping-right-arrow");

    prevBtn?.classList.toggle("projects-disabled-arrow", swiper.isBeginning);
    nextBtn?.classList.toggle("projects-disabled-arrow", swiper.isEnd);
  }
}
