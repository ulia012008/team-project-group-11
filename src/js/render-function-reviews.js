
function createElements(element) {
  
return element.map(data => {
        return `<li class="item-reviews swiper-slide"> <img class="icon-reviews" src=${data.avatar_url} alt=${data.author} />
       <div class="div-reviews"> 
        <h3 class="list-title-reviews">${data.author}</h3>
        <p class="text-reviews">${data.review}</p>
      </div>
      </li>`
    }).join("");
    

}


export function renderElements(elements) {
    const galleryUl = document.querySelector('.list-reviews');

     galleryUl.insertAdjacentHTML("beforeend", createElements(elements));

}

