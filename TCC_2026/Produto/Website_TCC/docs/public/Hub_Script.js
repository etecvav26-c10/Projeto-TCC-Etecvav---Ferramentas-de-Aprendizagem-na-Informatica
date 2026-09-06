/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function (event) {

    event.stopPropagation();

    navLinks.classList.toggle("active");

});


/* =========================
   ACCORDION
========================= */

const dropdown = document.querySelector(".dropdown");
const dropdownBtn = document.querySelector(".dropdown-btn");

dropdownBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    dropdown.classList.toggle("active");

});




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