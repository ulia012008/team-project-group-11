import{A as u,a as p,S as f}from"./assets/vendor-hBfE3c3x.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();function m(){document.querySelectorAll(".ac-trigger-about-me").forEach(t=>{t.addEventListener("click",()=>{const o=t.parentElement.nextElementSibling,c=o.classList.contains("open");if(console.log("Panel:",o),document.querySelectorAll(".ac-panel-about-me").forEach(n=>{var r;n.classList.remove("open");const e=(r=n.previousElementSibling)==null?void 0:r.querySelector(".toggle-icon-about-me");if(e){console.log("Icon found:",e);const s=e.querySelector(".arrow-about-me");s&&(console.log("Arrow found:",s),s.style.transform="rotate(0deg)")}}),!c){o.classList.add("open");const n=t.querySelector(".toggle-icon-about-me");if(n){const e=n.querySelector(".arrow-about-about-me");e&&(e.style.transform="rotate(180deg)")}}})})}new u(".accordion-container-faq");function g(){document.querySelectorAll(".ac-trigger-faq").forEach(o=>{o.addEventListener("click",()=>{o.parentElement.nextElementSibling.classList.toggle("open"),o.querySelector(".open-arrow-icon").classList.toggle("rotated")})})}const y="https://portfolio-js.b.goit.study/api/reviews";async function w(){try{const t=await p.get(y);return console.log(t),t.data}catch(t){console.log("Помилка при отриманні даних:",t)}}function v(t){return t.map(o=>`<li class="item-reviews swiper-slide"> <img class="icon-reviews" src=${o.avatar_url} alt=${o.author} />
       <div class="div-reviews"> 
        <h3 class="list-title-reviews">${o.author}</h3>
        <p class="text-reviews">${o.review}</p>
      </div>
      </li>`).join("")}function b(t){document.querySelector(".list-reviews").insertAdjacentHTML("beforeend",v(t))}document.addEventListener("DOMContentLoaded",()=>{m()});document.addEventListener("DOMContentLoaded",()=>{g()});const a=document.querySelector(".swiper-button-next"),d=document.querySelector(".swiper-button-prev"),i=document.createElement("p");i.textContent="Not found";i.classList.add("error-message");i.style.display="none";document.querySelector(".reviews").appendChild(i);let l;async function q(){try{const t=await w();if(!t||t.length===0){i.style.display="block",a.style.display="none",d.style.display="none";return}b(t),l=new f(".swiper",{direction:"horizontal",loop:!1,slidesPerView:4,spaceBetween:20,keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}catch(t){console.log("Помилка:",t)}}a.addEventListener("click",()=>l.slidePrev());d.addEventListener("click",()=>l.slideNext());q();
//# sourceMappingURL=index.js.map
