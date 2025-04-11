export function initHeader() {
  const menuBtn = document.getElementById('menu-btn');
  const burgerIcon = document.querySelector('.icon-header');
  const closeBtn = document.getElementById('close-btn');
  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const orderBtnDesktop = document.querySelector('.btn');
  const orderBtnMobile = document.querySelector('.btn-mobile');

  const openMenu = () => {
    nav.classList.add('open');
    document.body.classList.add('menu-open');
  };

  const closeMenu = () => {
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuBtn.addEventListener('click', openMenu);
  burgerIcon.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    });
  });

  [orderBtnDesktop, orderBtnMobile].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById('work-together');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
        closeMenu();
      });
    }
  });
}
