import{A as p,a as m,S as f}from"./assets/vendor-hBfE3c3x.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function d(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=d(e);fetch(e.href,r)}})();const g="/team-project-group-11/assets/my-photo-DYH2PWGj.png";function y(){document.querySelectorAll(".ac-trigger-about-me").forEach(t=>{t.addEventListener("click",()=>{const o=t.parentElement.nextElementSibling,d=o.classList.contains("open");if(console.log("Panel:",o),document.querySelectorAll(".ac-panel-about-me").forEach(s=>{var r;s.classList.remove("open");const e=(r=s.previousElementSibling)==null?void 0:r.querySelector(".toggle-icon-about-me");if(e){console.log("Icon found:",e);const i=e.querySelector(".arrow-about-me");i&&(console.log("Arrow found:",i),i.style.transform="rotate(180deg)")}}),!d){o.classList.add("open");const s=t.querySelector(".toggle-icon-about-me");if(s){const e=s.querySelector(".arrow-about-me");e&&(e.style.transform="rotate(0deg)")}}})})}const u=document.createElement("img");u.src=g;u.alt="my-photo";u.width=680;document.body.appendChild(u);new p(".accordion-container-faq");function w(){document.querySelectorAll(".ac-trigger-faq").forEach(o=>{o.addEventListener("click",()=>{o.parentElement.nextElementSibling.classList.toggle("open"),o.querySelector(".open-arrow-icon").classList.toggle("rotated")})})}const b="https://portfolio-js.b.goit.study/api/reviews";async function v(){try{const t=await m.get(b);return console.log(t),t.data}catch(t){console.log("Помилка при отриманні даних:",t)}}function L(t){return t.map(o=>`<li class="item-reviews swiper-slide"> <img class="icon-reviews" src=${o.avatar_url} alt=${o.author} />
       <div class="div-reviews"> 
        <h3 class="list-title-reviews">${o.author}</h3>
        <p class="text-reviews">${o.review}</p>
      </div>
      </li>`).join("")}function h(t){document.querySelector(".list-reviews").insertAdjacentHTML("beforeend",L(t))}const n=document.querySelector(".swiper-button-prev"),l=document.querySelector(".swiper-button-next"),c=document.createElement("p");c.textContent="Not found";c.classList.add("error-message");c.style.display="none";document.querySelector(".reviews").appendChild(c);let a;async function E(){try{const t=await v();if(!t||t.length===0){c.style.display="block",n.style.display="none",l.style.display="none";return}h(t),a=new f(".swiper-reviews",{direction:"horizontal",loop:!1,watchOverflow:!0,wrapperClass:"swiper-wrapper-reviews",keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1400:{slidesPerView:4}}}),n.disabled=!0,n.classList.add("disabled"),a.on("slideChange",()=>{a.isBeginning?(n.disabled=!0,n.classList.add("disabled")):(n.disabled=!1,n.classList.remove("disabled")),a.isEnd?(l.disabled=!0,l.classList.add("disabled")):(l.disabled=!1,l.classList.remove("disabled"))})}catch(t){console.log("Помилка:",t)}n.addEventListener("click",()=>a.slidePrev()),l.addEventListener("click",()=>a.slideNext())}document.addEventListener("DOMContentLoaded",()=>{y()});document.addEventListener("DOMContentLoaded",()=>{w()});document.addEventListener("DOMContentLoaded",()=>{E()});
//# sourceMappingURL=index.js.map
