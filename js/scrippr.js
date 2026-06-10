

/* =========================
VER MÁS / VER MENOS
========================= */

const verMasBtn = document.getElementById("verMasProyectos");
const proyectosGrid = document.querySelector(".proyectos-grid");

let expanded = false;

verMasBtn.addEventListener("click", () => {

if(!expanded){

proyectosGrid.classList.add("show-all");

verMasBtn.innerHTML = `
VER MENOS
<span>↑</span>
`;

expanded = true;

}else{

proyectosGrid.classList.remove("show-all");

verMasBtn.innerHTML = `
VER MÁS PROYECTOS
<span>→</span>
`;

expanded = false;

proyectosGrid.scrollIntoView({
behavior: "smooth"
});

}

});





/* =========================
   FILTROS
========================= */

const filtros = document.querySelectorAll(".filtro-btn");
const proyectos = document.querySelectorAll(".proyecto-card");

filtros.forEach(btn => {

    btn.addEventListener("click", () => {

        /* ACTIVE */
        filtros.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        /* FILTRO */
        const filtro = btn.getAttribute("data-filter");

        proyectos.forEach(card => {

            const categoria = card.getAttribute("data-category");

            if(filtro === "all"){

                card.style.display = "block";

            }else{

                if(categoria === filtro){

                    card.style.display = "block";

                }else{

                    card.style.display = "none";

                }

            }

        });

    });

});

/* =========================
   CARD 1
========================= */

const abrirModalProyecto1 = document.getElementById("abrirModalProyecto1");
const modalProyecto1 = document.getElementById("modalProyecto1");
const cerrarModalProyecto1 = document.getElementById("cerrarModalProyecto1");

abrirModalProyecto1.addEventListener("click", () => {
    modalProyecto1.classList.add("active");
});

cerrarModalProyecto1.addEventListener("click", () => {
    modalProyecto1.classList.remove("active");
});

modalProyecto1.addEventListener("click", (e) => {
    if(e.target === modalProyecto1){
        modalProyecto1.classList.remove("active");
    }
});

/* =========================
   CARD 2
========================= */


const abrirModalProyecto2 = document.getElementById("abrirModalProyecto2");
const modalProyecto2 = document.getElementById("modalProyecto2");
const cerrarModalProyecto2 = document.getElementById("cerrarModalProyecto2");


abrirModalProyecto2.addEventListener("click", () => {
    modalProyecto2.classList.add("active");
});


cerrarModalProyecto2.addEventListener("click", () => {
    modalProyecto2.classList.remove("active");
});


modalProyecto2.addEventListener("click", (e) => {
    if(e.target === modalProyecto2){
        modalProyecto2.classList.remove("active");
    }
});

/* =========================
   CARD 3
========================= */


const abrirModalProyecto3 = document.getElementById("abrirModalProyecto3");
const modalProyecto3 = document.getElementById("modalProyecto3");
const cerrarModalProyecto3 = document.getElementById("cerrarModalProyecto3");


abrirModalProyecto3.addEventListener("click", () => {
    modalProyecto3.classList.add("active");
});


cerrarModalProyecto3.addEventListener("click", () => {
    modalProyecto3.classList.remove("active");
});


modalProyecto3.addEventListener("click", (e) => {
    if(e.target === modalProyecto3){
        modalProyecto3.classList.remove("active");
    }
});









/* BOTÓN SUBIR */

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollTopBtn.classList.add('active');
    }else{
        scrollTopBtn.classList.remove('active');
    }
});

