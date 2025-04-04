import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSwiper() {

    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiping-right-arrow",
        prevEl: ".swiping-left-arrow",
      },
      loop: false,
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
    const prevBtn = document.querySelector(".swiping-left-arrow");
    const nextBtn = document.querySelector(".swiping-right-arrow");

    prevBtn?.classList.toggle("disabled-arrow", swiper.isBeginning);
    nextBtn?.classList.toggle("disabled-arrow", swiper.isEnd);
  }

}