fetch('/src/img/icons.svg')
  .then(response => response.text())
  .then(data => {
    const div = document.createElement('div');
    div.style.display = 'none';
    div.innerHTML = data;
    document.body.prepend(div);
  })
  .catch(error => console.error('SVG спрайт не завантажився:', error));
// <svg width="" height="">
//  <use href="#icon-swiping-arrow"></use>
// </svg>;
