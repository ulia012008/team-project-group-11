export function initAccordion() {
  document.querySelectorAll('.ac-trigger-about-me').forEach(button => {
    button.addEventListener('click', () => {
      const panel = button.parentElement.nextElementSibling;
      const isOpen = panel.classList.contains('open');

      console.log('Panel:', panel);

      document.querySelectorAll('.ac-panel-about-me').forEach(acText => {
        acText.classList.remove('open');
        const icon = acText.previousElementSibling?.querySelector(
          '.toggle-icon-about-me'
        );

        if (icon) {
          console.log('Icon found:', icon);
          const arrow = icon.querySelector('.arrow-about-me');
          if (arrow) {
            console.log('Arrow found:', arrow);
            arrow.style.transform = 'rotate(0deg)';
          }
        }
      });

      if (!isOpen) {
        panel.classList.add('open');
        const icon = button.querySelector('.toggle-icon-about-me');

        if (icon) {
          const arrow = icon.querySelector('.arrow-about-about-me');
          if (arrow) {
            arrow.style.transform = 'rotate(180deg)';
          }
        }
      }
    });
  });
}
