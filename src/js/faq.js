import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

new Accordion(".accordion-container-faq");

export function AccordionFaq() {
    const buttonsFaq = document.querySelectorAll(".ac-trigger-faq");

    buttonsFaq.forEach(button => {
        button.addEventListener("click", () => {
            const panelFaq = button.parentElement.nextElementSibling;
            panelFaq.classList.toggle("open");
            
            const arrowFaq = button.querySelector(".open-arrow-icon");
            arrowFaq.classList.toggle("rotated");

        })
    })
}

