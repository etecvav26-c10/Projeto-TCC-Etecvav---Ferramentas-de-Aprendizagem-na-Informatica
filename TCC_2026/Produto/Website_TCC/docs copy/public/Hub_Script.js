/* Accordion */

const accordions =
document.querySelectorAll(".accordion-item");

accordions.forEach(item => {

    const header =
    item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        console.log(item);
        item.classList.toggle("active");

    });

});

const slides = document.querySelectorAll(".hero-slide");

let atual = 0;

function trocarSlide(){

    slides[atual].classList.remove("active");

    atual++;

    if(atual >= slides.length){
        atual = 0;
    }

    slides[atual].classList.add("active");
}

setInterval(trocarSlide, 5000);