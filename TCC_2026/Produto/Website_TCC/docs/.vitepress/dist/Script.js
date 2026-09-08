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


/* =========================
   CLIQUE FORA
========================= */

document.addEventListener("click", function () {

    dropdown.classList.remove("active");

});


/* =========================
   FECHAR MENU AO CLICAR EM UM LINK
========================= */

const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");
        dropdown.classList.remove("active");

    });

});


/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".hero-slide");

let atual = 0;

function trocarSlide() {

    if (slides.length === 0) return;

    slides[atual].classList.remove("active");

    atual++;

    if (atual >= slides.length) {
        atual = 0;
    }

    slides[atual].classList.add("active");
}

setInterval(trocarSlide, 5000);