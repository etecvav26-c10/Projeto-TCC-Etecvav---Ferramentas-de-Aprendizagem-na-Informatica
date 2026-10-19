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




/* animação de numeros */

function animateValue(obj, start, end, duration) {

    let startTimestamp = null;

    const step = (timestamp) => {

        if (!startTimestamp)
            startTimestamp = timestamp;

        const progress =
        Math.min((timestamp - startTimestamp) / duration, 1);

        const easeOut =
        1 - Math.pow(1 - progress, 40);

        const value =
        Math.floor(
            easeOut * (end - start) + start
        );

        obj.innerHTML =
        value.toLocaleString('pt-BR');

        if(progress < 1){
            requestAnimationFrame(step);
        }

    };

    requestAnimationFrame(step);

}


// Dados dos números
const numeros = [

{
elemento: document.getElementById("numero_scratch1"),
inicio:100000,
fim:103322111
},

{
elemento: document.getElementById("numero_scratch2"),
inicio:100000,
fim:135078559
},

{
elemento: document.getElementById("numero_scratch3"),
inicio:100000,
fim:34866300
}

];


// Observador
const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

    if(entry.isIntersecting){

        const item =
        numeros.find(
            n => n.elemento === entry.target
        );

        animateValue(
            item.elemento,
            item.inicio,
            item.fim,
            8000
        );

        // evita repetir
        observer.unobserve(entry.target);

    }

})

},

{
threshold:0.5
}

);


// observar elementos
numeros.forEach(item=>{

observer.observe(item.elemento);

});
/* ------- */

const slides = document.querySelectorAll('.hero-slide');

let current = 0;

function changeSlide() {

  slides[current].classList.remove('active');

  current = (current + 1) % slides.length;

  slides[current].classList.add('active');
}

setInterval(changeSlide, 4000);


const bloco1 = document.getElementById("bloco1");
const bloco2 = document.getElementById("bloco2");
const bloco3 = document.getElementById("bloco3");
const bloco4 = document.getElementById("bloco4");

const blocos = [bloco1, bloco2, bloco3, bloco4];

// =======================
// POSIÇÕES INICIAIS
// =======================

// valores provisórios (evita NaN antes das imagens carregarem)
blocos.forEach(bloco => {
    bloco.posX = 0;
    bloco.posY = 0;

    // não depende do CSS: o translate passa a contar do canto do container
    bloco.style.left = "0";
    bloco.style.top = "0";
});

// container com position: relative (a div .blocos)
const area = bloco1.offsetParent;

// mantém o bloco dentro do container
function limitar(bloco){

    const maxX = Math.max(0, area.clientWidth  - bloco.offsetWidth);
    const maxY = Math.max(0, area.clientHeight - bloco.offsetHeight);

    bloco.posX = Math.min(Math.max(0, bloco.posX), maxX);
    bloco.posY = Math.min(Math.max(0, bloco.posY), maxY);

}

// em tela pequena o bloco nunca passa de 85% da largura do container
function ajustarTamanho(){

    const pequeno = window.matchMedia("(max-width: 768px)").matches;

    blocos.forEach(bloco => {
        bloco.style.maxWidth = pequeno ? "85%" : "";
    });

}

// posições iniciais em % do tamanho do container
function posicionarBlocos(){

    ajustarTamanho();

    const w = area.clientWidth;
    const h = area.clientHeight;

    bloco1.posX = w * 0.05;  bloco1.posY = h * 0.05;
    bloco2.posX = w * 0.30;  bloco2.posY = h * 0.28;
    bloco3.posX = w * 0.05;  bloco3.posY = h * 0.52;
    bloco4.posX = w * 0.20;  bloco4.posY = h * 0.75;

    blocos.forEach(limitar);

}

// só depois das imagens carregarem (antes disso offsetWidth é 0)
window.addEventListener("load", posicionarBlocos);

// ao redimensionar, só garante que ninguém saiu da área
// (não reposiciona, senão a barra do navegador no celular resetaria os blocos)
window.addEventListener("resize", () => {
    ajustarTamanho();
    blocos.forEach(limitar);
});

ajustarTamanho();

// =======================
// VARIÁVEIS
// =======================

let blocoAtual = null;
let pointerIdAtual = null;   // qual dedo/mouse está arrastrando

let pointerX = 0;
let pointerY = 0;

let offsetX = 0;
let offsetY = 0;

let bloco12Criado = false;
let bloco123Criado = false;
let bloco1234Criado = false;

// =======================
// ARRASTAR (mouse + toque + caneta)
// =======================

blocos.forEach(bloco => {

    // impede que o navegador role a página / arraste a imagem
    // enquanto o usuário move o bloco
    bloco.style.touchAction = "none";
    bloco.draggable = false;
    bloco.addEventListener("dragstart", (e) => e.preventDefault());

    bloco.addEventListener("pointerdown", (e) => {

        // ignora o botão direito do mouse e um segundo dedo
        if (e.pointerType === "mouse" && e.button !== 0) return;
        if (blocoAtual) return;

        blocoAtual = bloco;
        pointerIdAtual = e.pointerId;

        pointerX = e.clientX;
        pointerY = e.clientY;

        offsetX = e.clientX - bloco.posX;
        offsetY = e.clientY - bloco.posY;

        // continua recebendo os eventos mesmo se o dedo sair de cima do bloco
        bloco.setPointerCapture(e.pointerId);

        e.preventDefault();

    });

});

// =======================
// MOVIMENTO
// =======================

document.addEventListener("pointermove", (e) => {

    if (e.pointerId !== pointerIdAtual) return;

    pointerX = e.clientX;
    pointerY = e.clientY;

});

// =======================
// SOLTAR
// =======================

function soltarBloco(e) {

    if (e.pointerId !== pointerIdAtual) return;

    blocoAtual = null;
    pointerIdAtual = null;

}

document.addEventListener("pointerup", soltarBloco);
document.addEventListener("pointercancel", soltarBloco);

// =======================
// LOOP SUAVE
// =======================

function loop(){

if(blocoAtual){

  blocoAtual.posX = pointerX - offsetX;
  blocoAtual.posY = pointerY - offsetY;

  limitar(blocoAtual);   // o bloco não sai do container

  verificarColisoes();

}

blocos.forEach(bloco => {

  if(bloco.style.display !== "none"){

    // reajusta sempre: depois da união a imagem fica maior
    limitar(bloco);

    atualizarPosicao(bloco);

  }

});

requestAnimationFrame(loop);

}

blocos.forEach(bloco => {

bloco.floatOffset = Math.random() * Math.PI * 2;
bloco.floatAmplitude = 4 + Math.random() * 6;
bloco.floatSpeed = 0.001 + Math.random() * 0.002;

atualizarPosicao(bloco);

});

loop();

// =======================
// ATUALIZAR POSIÇÃO
// =======================


function atualizarPosicao(bloco){

let floatY = 0;
let rotacao = 0;

if(bloco !== blocoAtual){

  const tempo =
    performance.now() * bloco.floatSpeed +
    bloco.floatOffset;

  floatY =
    Math.sin(tempo) *
    bloco.floatAmplitude;

  rotacao =
    Math.sin(tempo * 0.7) * 2;
}

bloco.style.transform =
  `translate(${bloco.posX}px, ${bloco.posY + floatY}px)
  rotate(${rotacao}deg)`;

}



// =======================
// COLISÃO
// =======================

function estaColidindo(a,b){

const rect1 = a.getBoundingClientRect();
const rect2 = b.getBoundingClientRect();

return (

rect1.left < rect2.right &&
rect1.right > rect2.left &&
rect1.top < rect2.bottom &&
rect1.bottom > rect2.top

);

}

// =======================
// COLISÕES
// =======================

function verificarColisoes(){

// 1 + 2

if(
!bloco12Criado
&&
estaColidindo(bloco1,bloco2)
){

bloco12Criado = true;

bloco1.src =
"./materiais/Codigos_Scratch/Botao1-2.png";

bloco2.style.display = "none";

}

// (1+2) + 3

if(
bloco12Criado
&&
!bloco123Criado
&&
estaColidindo(bloco1,bloco3)
){

bloco123Criado = true;

bloco1.src =
"./materiais/Codigos_Scratch/Botao1-2-3.png";

bloco3.style.display = "none";

}

// (1+2+3) + 4

if(
bloco123Criado
&&
!bloco1234Criado
&&
estaColidindo(bloco1,bloco4)
){

bloco1234Criado = true;

bloco1.src =
"./materiais/Codigos_Scratch/Botao1-2-3-4.png";

bloco4.style.display = "none";

alert("Todos os blocos foram unidos!");

}

}