

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


/* BOTÓN SUBIR */

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollTopBtn.classList.add('active');
    }else{
        scrollTopBtn.classList.remove('active');
    }
});

