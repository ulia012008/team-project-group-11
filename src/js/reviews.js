// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


import { backendData } from './getting-data-reviews';
import { renderElements } from './render-function-reviews';

const buttonElemLeft = document.querySelector('.reviews-swiper-button-prev');
const buttonElemRight = document.querySelector('.reviews-swiper-button-next');
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
    swiper = new Swiper('.swiper-reviews', {
      direction: 'horizontal',
      loop: false,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      watchOverflow: true,
      wrapperClass: 'swiper-wrapper-reviews',
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      

      // адаптивність 
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 4,
    },
  },
    });
    

    // Початковий стан кнопок
    buttonElemLeft.disabled = true;
    buttonElemLeft.classList.add('disabled'); 

swiper.on('slideChange', () => {

  if (swiper.isBeginning) {
    buttonElemLeft.disabled = true;
    buttonElemLeft.classList.add('disabled'); // додати клас для зміни стилю
  } else {
    buttonElemLeft.disabled = false;
    buttonElemLeft.classList.remove('disabled'); // видалити клас для активної кнопки
  }

  if (swiper.isEnd) {
    buttonElemRight.disabled = true;
    buttonElemRight.classList.add('disabled'); // додати клас для зміни стилю
  } else {
    buttonElemRight.disabled = false;
    buttonElemRight.classList.remove('disabled'); // видалити клас для активної кнопки
  }
});

  

  } catch (error) {
    console.log("Помилка:", error);
  }

  buttonElemLeft.addEventListener("click", () => swiper.slidePrev());
  buttonElemRight.addEventListener("click", () => swiper.slideNext());

}




