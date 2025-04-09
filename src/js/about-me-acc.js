import AccordionAboutMe from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new AccordionAboutMe('.accordion-container-about-me');

export function AccordionAbout() {
  const arrowsAbout = document.querySelectorAll('.ac-trigger-about-me');

  arrowsAbout.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const panelAbout = arrow.parentElement.nextElementSibling;
      panelAbout.classList.toggle('open');

      const svgAbout = arrow.querySelector('.open-arrow-about-me');
      setTimeout(() => {
        if (panelAbout.classList.contains('open')) {
          svgAbout.style.transform = 'rotate(0deg)';
        } else {
          svgAbout.style.transform = 'rotate(180deg)';
        }
      }, 0);
    });
  });
}
// import imgAboutMeUrl from '../img/about-me/my-photo.png';

// const img = document.createElement('img');
// img.src = imgAboutMeUrl;
// img.alt = 'my-photo';
// img.width = 680;

// document.body.appendChild(img);
