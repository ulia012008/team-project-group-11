// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


import { backendData } from './getting-data-reviews';
import { renderElements } from './render-function-reviews';


const buttonElemLeft = document.querySelector('.swiper-button-next');
const buttonElemRight = document.querySelector('.swiper-button-prev');
const errorMessage = document.createElement('p');

errorMessage.textContent = 'Not found';
errorMessage.classList.add('error-message');
errorMessage.style.display = 'none'; // Спочатку прихований

document.querySelector('.reviews').appendChild(errorMessage);

let swiper;

export async function init() {

  try {
    const data = await backendData();
    if (!data || data.length === 0) {
      errorMessage.style.display = "block"; // Показуємо помилку
      buttonElemLeft.style.display = "none";
      buttonElemRight.style.display = "none";
      return;
    }


    renderElements(data);


    // Ініціалізація Swiper
    swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,  
      watchOverflow: true, 
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // адаптивність 
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1400: {
      slidesPerView: 4,
    },
  },
});
    


  } catch (error) {
    console.log("Помилка:", error);
  }

   buttonElemLeft.addEventListener("click", () => swiper.slidePrev());
   buttonElemRight.addEventListener("click", () => swiper.slideNext());

}




