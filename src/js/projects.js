import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initSwiper() {

  const projectsSwiper = new Swiper(".projects-my-swiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      navigation: {
        nextEl: ".projects-swiping-right-arrow",
        prevEl: ".projects-swiping-left-arrow",
      },
      loop: false,
      on: {
    
      init(projectsSwiper) {
        updateArrowClasses(projectsSwiper);
      },
      slideChange(projectsSwiper) {
        updateArrowClasses(projectsSwiper);
      }
    }
  });

  function updateArrowClasses(projectsSwiper) {
    const prevBtn = document.querySelector(".projects-swiping-left-arrow");
    const nextBtn = document.querySelector(".projects-swiping-right-arrow");

    prevBtn?.classList.toggle("projects-disabled-arrow", projectsSwiper.isBeginning);
    nextBtn?.classList.toggle("projects-disabled-arrow", projectsSwiper.isEnd);
  }

}