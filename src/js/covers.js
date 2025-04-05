import cover1 from '../img/covers/covers1.png';
import cover2 from '../img/covers/covers2.png';
import cover3 from '../img/covers/covers3.png';
import cover4 from '../img/covers/covers4.png';
import cover5 from '../img/covers/covers5.png';
import cover6 from '../img/covers/covers6.png';
import cover7 from '../img/covers/covers7.png';
import cover8 from '../img/covers/covers8.png';
import cover9 from '../img/covers/covers9.png';
import cover10 from '../img/covers/covers10.png';

const original = [
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
  cover8,
  cover9,
  cover10,
];
const shifted = [
  cover8,
  cover9,
  cover10,
  cover1,
  cover2,
  cover3,
  cover4,
  cover5,
  cover6,
  cover7,
];

const thirdStart = [...original.slice(2), ...original.slice(0, 2)];
const thirdRowImages = [...thirdStart, ...thirdStart];

const imagesLeft = [...original, ...original];
const imagesRight = [...shifted, ...shifted];

function populateRow(ulSelector, images) {
  const ul = document.querySelector(ulSelector);
  if (!ul) return;

  images.forEach(src => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'cover';
    li.appendChild(img);
    ul.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  populateRow('.animate-left', imagesLeft);
  populateRow('.animate-right', imagesRight);
  populateRow('.animate-left-second', thirdRowImages);
  startAnimationsInView();
});

function startAnimationsInView() {
  const section = document.querySelector('#covers');

  if (!section) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add('start-animation');
        } else {
          section.classList.remove('start-animation');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  observer.observe(section);
}
