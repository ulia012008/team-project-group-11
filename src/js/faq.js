import Accordion from "accordion-js";
import "accordion-js/dist/accordion.min.css";

new Accordion(".accordion-container-faq");

export function AccordionFaq() {
    const buttonsFaq = document.querySelectorAll(".ac-trigger-faq");

    buttonsFaq.forEach(button => {
        button.addEventListener("click", () => {
            const panelFaq = button.parentElement.nextElementSibling;
            panelFaq.classList.toggle("open");
            
            //   console.log(panelFaq);  // Check the panel

            // if (panelFaq) {  // Make sure panel exists before toggling
            //     panelFaq.classList.toggle("open");
            // } else {
            //     console.error("Panel not found for button", button);
            // }

            const arrowFaq = button.querySelector(".open-arrow-icon");
            arrowFaq.classList.toggle("rotated");

        })
    })
}

