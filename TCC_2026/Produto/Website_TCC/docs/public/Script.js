
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

bloco1.posX = 50;
bloco1.posY = 50;

bloco2.posX = 200;
bloco2.posY = 200;

bloco3.posX = 50;
bloco3.posY = 350;

bloco4.posX = 100;
bloco4.posY = 500;

// =======================
// APLICA POSIÇÕES
// =======================

// =======================
// VARIÁVEIS
// =======================

let blocoAtual = null;

let mouseX = 0;
let mouseY = 0;

let offsetX = 0;
let offsetY = 0;

let bloco12Criado = false;
let bloco123Criado = false;
let bloco1234Criado = false;

// =======================
// ARRASTAR
// =======================

blocos.forEach(bloco => {

bloco.addEventListener("mousedown",(e)=>{

blocoAtual = bloco;

offsetX = e.clientX - bloco.posX;
offsetY = e.clientY - bloco.posY;

});

});

// =======================
// MOUSE
// =======================

document.addEventListener("mousemove",(e)=>{

mouseX = e.clientX;
mouseY = e.clientY;

});

document.addEventListener("mouseup",()=>{

blocoAtual = null;

});

// =======================
// LOOP SUAVE
// =======================

function loop(){

if(blocoAtual){

  blocoAtual.posX = mouseX - offsetX;
  blocoAtual.posY = mouseY - offsetY;

  verificarColisoes();

}

blocos.forEach(bloco => {

  if(bloco.style.display !== "none"){

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