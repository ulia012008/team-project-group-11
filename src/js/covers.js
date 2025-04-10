import cover1 from '../img/covers/covers1.png';
import cover1x2 from '../img/covers/covers1@2x.png';
import cover2 from '../img/covers/covers2.png';
import cover2x2 from '../img/covers/covers2@2x.png';
import cover3 from '../img/covers/covers3.png';
import cover3x2 from '../img/covers/covers3@2x.png';
import cover4 from '../img/covers/covers4.png';
import cover4x2 from '../img/covers/covers4@2x.png';
import cover5 from '../img/covers/covers5.png';
import cover5x2 from '../img/covers/covers5@2x.png';
import cover6 from '../img/covers/covers6.png';
import cover6x2 from '../img/covers/covers6@2x.png';
import cover7 from '../img/covers/covers7.png';
import cover7x2 from '../img/covers/covers7@2x.png';
import cover8 from '../img/covers/covers8.png';
import cover8x2 from '../img/covers/covers8@2x.png';
import cover9 from '../img/covers/covers9.png';
import cover9x2 from '../img/covers/covers9@2x.png';
import cover10 from '../img/covers/covers10.png';
import cover10x2 from '../img/covers/covers10@2x.png';

const original = [
  { src1x: cover1, src2x: cover1x2 },
  { src1x: cover2, src2x: cover2x2 },
  { src1x: cover3, src2x: cover3x2 },
  { src1x: cover4, src2x: cover4x2 },
  { src1x: cover5, src2x: cover5x2 },
  { src1x: cover6, src2x: cover6x2 },
  { src1x: cover7, src2x: cover7x2 },
  { src1x: cover8, src2x: cover8x2 },
  { src1x: cover9, src2x: cover9x2 },
  { src1x: cover10, src2x: cover10x2 },
];

const shifted = [
  original[7],
  original[5],
  original[9],
  original[0],
  original[4],
  original[6],
  original[3],
  original[1],
  original[2],
  original[8],
];

const imagesLeft = [...original, ...original, ...original];
const imagesRight = [...shifted, ...shifted, ...shifted];
const thirdStart = [...original.slice(2), ...original.slice(0, 2)];
const thirdRowImages = [...thirdStart, ...thirdStart, ...thirdStart];

function populateRow(ulSelector, images) {
  const ul = document.querySelector(ulSelector);
  if (!ul) return;

  images.forEach(({ src1x, src2x }) => {
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.setAttribute('src', src1x);
    img.setAttribute('srcset', `${src1x} 1x, ${src2x} 2x`);
    img.setAttribute('alt', 'cover');
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');

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
