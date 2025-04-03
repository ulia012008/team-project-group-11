document.querySelectorAll('.ac-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.parentElement.nextElementSibling;
    const isOpen = panel.classList.contains('open');

    document.querySelectorAll('.ac-panel').forEach(acText => {
      acText.classList.remove('open');
      const icon = acText.previousElementSibling.querySelector('.toggle-icon');
      icon.querySelector('.arrow').style.transform = 'rotate(0deg)'; // Стрелка вниз
    });

    if (!isOpen) {
      panel.classList.add('open');
      const icon = button.querySelector('.toggle-icon');
      icon.querySelector('.arrow').style.transform = 'rotate(180deg)'; // Стрелка вверх
    }
  });
});
