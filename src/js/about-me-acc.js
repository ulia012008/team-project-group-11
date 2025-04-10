import AccordionAboutMe from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
const firstElement = new AccordionAboutMe('.accordion-container-about-me', {
  duration: 0, // без анимации (можно поставить 300 для плавности)
  showMultiple: false,
  openOnInit: [0], // первый элемент открыт по умолчанию
});
const triggersAbout = document.querySelectorAll('.ac-trigger-about-me');
function updateArrows() {
  triggersAbout.forEach(trigger => {
    const svg = trigger.querySelector('.open-arrow-about-me');
    const isOpen = trigger.classList.contains('is-active');
    svg.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
  });
}
setTimeout(updateArrows, 10);

export function AccordionAbout() {
  const arrowsAbout = document.querySelectorAll('.ac-trigger-about-me');

  arrowsAbout.forEach(arrowAbout => {
    arrowAbout.addEventListener('click', () => {
      const panelAbout = arrowAbout.parentElement.nextElementSibling;
      panelAbout.classList.toggle('open');

      const svgAbout = arrowAbout.querySelector('.open-arrow-about-me');

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
