export function initHeader() {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('close-btn');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const orderBtn = document.querySelector('.btn');

  // Відкриття меню
  menuBtn.addEventListener('click', () => {
    nav.classList.add('open');
    document.body.classList.add('menu-open');
  });

  // Закриття по кнопці закриття
  closeBtn.addEventListener('click', () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });

  // Закриття по кліку на пункт меню
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      nav.classList.remove('open');
      document.body.classList.remove('menu-open');
    });
  });

  // Плавний скрол до секції "Order the project"
  orderBtn.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById('work-together');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
}
