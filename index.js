import{A as E,S as y,a as k}from"./assets/vendor-Bh3l_4O9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function S(){const e=document.getElementById("menu-btn"),t=document.querySelector(".icon-header"),s=document.getElementById("close-btn"),o=document.getElementById("nav"),r=document.querySelectorAll(".nav-link"),n=document.querySelector(".btn");e.addEventListener("click",()=>{o.classList.toggle("open")});const i=()=>{o.classList.add("open"),document.body.classList.add("menu-open")},g=()=>{o.classList.remove("open"),document.body.classList.remove("menu-open")};t.addEventListener("click",i),s.addEventListener("click",g),r.forEach(p=>{p.addEventListener("click",m=>{m.preventDefault();const x=p.getAttribute("href").substring(1),L=document.getElementById(x);L&&L.scrollIntoView({behavior:"smooth"}),g()})}),n.addEventListener("click",p=>{p.preventDefault();const m=document.getElementById("work-together");m&&m.scrollIntoView({behavior:"smooth"}),g()})}new E(".accordion-container-about-me",{duration:0,showMultiple:!1,openOnInit:[0]});const A=document.querySelectorAll(".ac-trigger-about-me");function I(){A.forEach(e=>{const t=e.querySelector(".open-arrow-about-me"),s=e.classList.contains("is-active");t.style.transform=s?"rotate(0deg)":"rotate(180deg)"})}setTimeout(I,10);function j(){document.querySelectorAll(".ac-trigger-about-me").forEach(t=>{t.addEventListener("click",()=>{const s=t.parentElement.nextElementSibling;s.classList.toggle("open");const o=t.querySelector(".open-arrow-about-me");setTimeout(()=>{s.classList.contains("open")?o.style.transform="rotate(0deg)":o.style.transform="rotate(180deg)"},0)})})}function q(){const e=new y(".skills-swiper-about-me",{slidesPerView:2,loop:!0,cssMode:!0,watchSlidesProgress:!0,navigation:{nextEl:".swiper-button-next-about-me"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}}});h(e),e.slideTo(0,0),e.on("slideChange",()=>{h(e)})}function h(e){document.querySelectorAll(".swiper-slide .circle-about-me").forEach(r=>{r.classList.remove("red-about-me"),r.classList.add("outline-about-me")});const o=e.slides[e.activeIndex].querySelector(".circle-about-me");o&&(o.classList.remove("outline-about-me"),o.classList.add("red-about-me"))}new E(".accordion-container-faq");function B(){document.querySelectorAll(".ac-trigger-faq").forEach(t=>{t.addEventListener("click",()=>{t.parentElement.nextElementSibling.classList.toggle("open"),t.querySelector(".open-arrow-icon").classList.toggle("rotated")})})}function C(){new y(".projects-mySwiper",{slidesPerView:1,spaceBetween:30,navigation:{nextEl:".projects-swiping-right-arrow",prevEl:".projects-swiping-left-arrow"},loop:!1,keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:!0,touchEventsTarget:".swiper",on:{init(t){e(t)},slideChange(t){e(t)}}});function e(t){const s=document.querySelector(".projects-swiping-left-arrow"),o=document.querySelector(".projects-swiping-right-arrow");s==null||s.classList.toggle("projects-disabled-arrow",t.isBeginning),o==null||o.classList.toggle("projects-disabled-arrow",t.isEnd)}}const P="/team-project-group-11/assets/covers1-CR1xvRFP.png",V="/team-project-group-11/assets/covers1@2x-BL0xUPGR.png",D="/team-project-group-11/assets/covers2-DpUGbD5x.png",M="/team-project-group-11/assets/covers2@2x-DFciJg1G.png",O="/team-project-group-11/assets/covers3-B1fTPEVS.png",F="/team-project-group-11/assets/covers3@2x-BUC7fPgh.png",R="/team-project-group-11/assets/covers4-Cag01H9W.png",T="/team-project-group-11/assets/covers4@2x-DSYhgCQ6.png",N="/team-project-group-11/assets/covers5-CAtl8RHa.png",U="/team-project-group-11/assets/covers5@2x-DTu9IaC4.png",W="/team-project-group-11/assets/covers6-DzYAjVNc.png",H="/team-project-group-11/assets/covers6@2x--pD9AALL.png",$="/team-project-group-11/assets/covers7-BbnqY6-9.png",G="/team-project-group-11/assets/covers7@2x-CWhNg3nH.png",z="/team-project-group-11/assets/covers8-BS4S0UFZ.png",Q="/team-project-group-11/assets/covers8@2x-BnJjWfZp.png",Y="/team-project-group-11/assets/covers9-s9_LuTb0.png",Z="/team-project-group-11/assets/covers9@2x-w0yqtcf_.png",_="/team-project-group-11/assets/covers10-Bc7rgnCL.png",J="/team-project-group-11/assets/covers10@2x-BQvKhZ6Q.png",c=[{src1x:P,src2x:V},{src1x:D,src2x:M},{src1x:O,src2x:F},{src1x:R,src2x:T},{src1x:N,src2x:U},{src1x:W,src2x:H},{src1x:$,src2x:G},{src1x:z,src2x:Q},{src1x:Y,src2x:Z},{src1x:_,src2x:J}],v=[c[7],c[5],c[9],c[0],c[4],c[6],c[3],c[1],c[2],c[8]],K=[...c,...c,...c],X=[...v,...v,...v],f=[...c.slice(2),...c.slice(0,2)],ee=[...f,...f,...f];function w(e,t){const s=document.querySelector(e);s&&t.forEach(({src1x:o,src2x:r})=>{const n=document.createElement("li"),i=document.createElement("img");i.setAttribute("src",o),i.setAttribute("srcset",`${o} 1x, ${r} 2x`),i.setAttribute("alt","cover"),i.setAttribute("loading","lazy"),i.setAttribute("decoding","async"),n.appendChild(i),s.appendChild(n)})}document.addEventListener("DOMContentLoaded",()=>{w(".animate-left",K),w(".animate-right",X),w(".animate-left-second",ee),te()});function te(){const e=document.querySelector("#covers");if(!e)return;new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting?e.classList.add("start-animation"):e.classList.remove("start-animation")})},{threshold:.2}).observe(e)}const se="https://portfolio-js.b.goit.study/api/reviews";async function oe(){try{return(await k.get(se)).data}catch(e){console.log("Помилка при отриманні даних:",e)}}function re(e){return e.map(t=>`<li class="item-reviews swiper-slide"> <img class="icon-reviews" src=${t.avatar_url} alt=${t.author} />
       <div class="div-reviews"> 
        <h3 class="list-title-reviews">${t.author}</h3>
        <p class="text-reviews">${t.review}</p>
      </div>
      </li>`).join("")}function ne(e){document.querySelector(".list-reviews").insertAdjacentHTML("beforeend",re(e))}const a=document.querySelector(".reviews-swiper-button-prev"),l=document.querySelector(".reviews-swiper-button-next"),u=document.createElement("p");u.textContent="Not found";u.classList.add("error-message");u.style.display="none";document.querySelector(".reviews").appendChild(u);let d;async function ce(){try{const e=await oe();if(!e||e.length===0){u.style.display="block",a.style.display="none",l.style.display="none";return}ne(e),d=new y(".swiper-reviews",{direction:"horizontal",loop:!1,slidesPerGroup:1,slidesPerGroupSkip:0,watchOverflow:!0,wrapperClass:"swiper-wrapper-reviews",keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{0:{slidesPerView:1},768:{slidesPerView:2},1440:{slidesPerView:4}}}),a.disabled=!0,a.classList.add("disabled"),d.on("slideChange",()=>{d.isBeginning?(a.disabled=!0,a.classList.add("disabled")):(a.disabled=!1,a.classList.remove("disabled")),d.isEnd?(l.disabled=!0,l.classList.add("disabled")):(l.disabled=!1,l.classList.remove("disabled"))})}catch(e){console.log("Помилка:",e)}a.addEventListener("click",()=>d.slidePrev()),l.addEventListener("click",()=>d.slideNext())}function ie(){document.getElementById("success-modal-work").classList.remove("is-hidden-work"),document.body.classList.add("modal-open-work")}function b(){document.getElementById("success-modal-work").classList.add("is-hidden-work"),document.body.classList.remove("modal-open-work")}function ae(){const e=document.getElementById("success-modal-work"),t=document.getElementById("close-modal-btn-work");t==null||t.addEventListener("click",b),e==null||e.addEventListener("click",s=>{s.target===e&&b()}),document.addEventListener("keydown",s=>{s.key==="Escape"&&b()})}function le(){const e=document.getElementById("email-input-work"),t=document.getElementById("email-error-work");!e||!t||e.addEventListener("input",()=>{e.validity.valid?(e.classList.remove("invalid"),t.style.display="none"):(e.classList.add("invalid"),t.style.display="block")})}document.addEventListener("DOMContentLoaded",()=>{j(),q(),B(),C(),ce(),le(),ae();const e=document.getElementById("contact-form-work");e&&e.addEventListener("submit",t=>{t.preventDefault(),document.getElementById("email-input-work").checkValidity()&&setTimeout(()=>{ie(),e.reset()},500)}),document.getElementById("btn-left"),document.getElementById("btn-right"),S()});
//# sourceMappingURL=index.js.map
