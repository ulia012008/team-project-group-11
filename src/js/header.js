export function initHeader() {
  const menuBtn = document.getElementById('menu-btn');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const orderBtn = document.querySelector('.btn');

  // Відкриття/закриття меню по натисканню на кнопку Menu
  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Закриття меню по кліку на пункт навігації та плавний скрол
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }

      nav.classList.remove('open');
    });
  });

  // Плавний скрол при натисканні на Order the project
  orderBtn.addEventListener('click', e => {
    e.preventDefault();

    const target = document.getElementById('work-together');

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    nav.classList.remove('open');
  });
}
