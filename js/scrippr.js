/* =========================
   VER MÁS / FILTROS
========================= */

const verMasBtn = document.getElementById("verMasProyectos");
const proyectosGrid = document.querySelector(".proyectos-grid");
const filtros = document.querySelectorAll(".filtro-btn");
const proyectos = document.querySelectorAll(".proyecto-card");

let expanded = false;
let filtroActual = "all";

function actualizarProyectos() {
  proyectos.forEach((card) => {
    const categoria = card.getAttribute("data-category");
    const indexVisible = [...proyectos]
  .filter((c) => {
    const cat = c.getAttribute("data-category");
    return filtroActual === "all" || cat === filtroActual;
  })
  .indexOf(card);

const esExtra = indexVisible >= 6;


    const coincide = filtroActual === "all" || categoria === filtroActual;

    if (!coincide) {
      card.style.display = "none";
    } else if (esExtra && !expanded) {
      card.style.display = "none";
    } else {
      card.style.display = "block";
    }
  });

  verMasBtn.innerHTML = expanded
    ? `VER MENOS <span>↑</span>`
    : `VER MÁS PROYECTOS <span>→</span>`;
}

verMasBtn.addEventListener("click", () => {
  expanded = !expanded;

  actualizarProyectos();

  if (!expanded) {
    proyectosGrid.scrollIntoView({
      behavior: "smooth",
    });
  }
});

filtros.forEach((btn) => {
  btn.addEventListener("click", () => {
    filtros.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    filtroActual = btn.getAttribute("data-filter");
    expanded = false;

    actualizarProyectos();
  });
});

actualizarProyectos();






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
  if (e.target === modalProyecto1) {
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
  if (e.target === modalProyecto2) {
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
  if (e.target === modalProyecto3) {
    modalProyecto3.classList.remove("active");
  }
});

/* =========================
   CARD 4
========================= */

const abrirModalProyecto4 = document.getElementById("abrirModalProyecto4");
const modalProyecto4 = document.getElementById("modalProyecto4");
const cerrarModalProyecto4 = document.getElementById("cerrarModalProyecto4");

abrirModalProyecto4.addEventListener("click", () => {
  modalProyecto4.classList.add("active");
});

cerrarModalProyecto4.addEventListener("click", () => {
  modalProyecto4.classList.remove("active");
});

modalProyecto4.addEventListener("click", (e) => {
  if (e.target === modalProyecto4) {
    modalProyecto4.classList.remove("active");
  }
});

/* =========================
   CARD 5
========================= */

const abrirModalProyecto5 = document.getElementById("abrirModalProyecto5");
const modalProyecto5 = document.getElementById("modalProyecto5");
const cerrarModalProyecto5 = document.getElementById("cerrarModalProyecto5");

abrirModalProyecto5.addEventListener("click", () => {
  modalProyecto5.classList.add("active");
});

cerrarModalProyecto5.addEventListener("click", () => {
  modalProyecto5.classList.remove("active");
});

modalProyecto5.addEventListener("click", (e) => {
  if (e.target === modalProyecto5) {
    modalProyecto5.classList.remove("active");
  }
});

/* =========================
   CARD 6
========================= */

const abrirModalProyecto6 = document.getElementById("abrirModalProyecto6");
const modalProyecto6 = document.getElementById("modalProyecto6");
const cerrarModalProyecto6 = document.getElementById("cerrarModalProyecto6");

abrirModalProyecto6.addEventListener("click", () => {
  modalProyecto6.classList.add("active");
});

cerrarModalProyecto6.addEventListener("click", () => {
  modalProyecto6.classList.remove("active");
});

modalProyecto6.addEventListener("click", (e) => {
  if (e.target === modalProyecto6) {
    modalProyecto6.classList.remove("active");
  }
});

/* =========================
   CARD 7
========================= */

const abrirModalProyecto7 = document.getElementById("abrirModalProyecto7");
const modalProyecto7 = document.getElementById("modalProyecto7");
const cerrarModalProyecto7 = document.getElementById("cerrarModalProyecto7");

abrirModalProyecto7.addEventListener("click", () => {
  modalProyecto7.classList.add("active");
});

cerrarModalProyecto7.addEventListener("click", () => {
  modalProyecto7.classList.remove("active");
});

modalProyecto7.addEventListener("click", (e) => {
  if (e.target === modalProyecto7) {
    modalProyecto7.classList.remove("active");
  }
});

/* =========================
   CARD 8
========================= */

const abrirModalProyecto8 = document.getElementById("abrirModalProyecto8");
const modalProyecto8 = document.getElementById("modalProyecto8");
const cerrarModalProyecto8 = document.getElementById("cerrarModalProyecto8");

abrirModalProyecto8.addEventListener("click", () => {
  modalProyecto8.classList.add("active");
});

cerrarModalProyecto8.addEventListener("click", () => {
  modalProyecto8.classList.remove("active");
});

modalProyecto8.addEventListener("click", (e) => {
  if (e.target === modalProyecto8) {
    modalProyecto8.classList.remove("active");
  }
});

/* =========================
   CARD 9
========================= */

const abrirModalProyecto9 = document.getElementById("abrirModalProyecto9");
const modalProyecto9 = document.getElementById("modalProyecto9");
const cerrarModalProyecto9 = document.getElementById("cerrarModalProyecto9");

abrirModalProyecto9.addEventListener("click", () => {
  modalProyecto9.classList.add("active");
});

cerrarModalProyecto9.addEventListener("click", () => {
  modalProyecto9.classList.remove("active");
});

modalProyecto9.addEventListener("click", (e) => {
  if (e.target === modalProyecto9) {
    modalProyecto9.classList.remove("active");
  }
});

/* =========================
   CARD 10
========================= */

const abrirModalProyecto10 = document.getElementById("abrirModalProyecto10");
const modalProyecto10 = document.getElementById("modalProyecto10");
const cerrarModalProyecto10 = document.getElementById("cerrarModalProyecto10");

abrirModalProyecto10.addEventListener("click", () => {
  modalProyecto10.classList.add("active");
});

cerrarModalProyecto10.addEventListener("click", () => {
  modalProyecto10.classList.remove("active");
});

modalProyecto10.addEventListener("click", (e) => {
  if (e.target === modalProyecto10) {
    modalProyecto10.classList.remove("active");
  }
});

/* =========================
   CARD 11
========================= */

const abrirModalProyecto11 = document.getElementById("abrirModalProyecto11");
const modalProyecto11 = document.getElementById("modalProyecto11");
const cerrarModalProyecto11 = document.getElementById("cerrarModalProyecto11");

abrirModalProyecto11.addEventListener("click", () => {
  modalProyecto11.classList.add("active");
});

cerrarModalProyecto11.addEventListener("click", () => {
  modalProyecto11.classList.remove("active");
});

modalProyecto11.addEventListener("click", (e) => {
  if (e.target === modalProyecto11) {
    modalProyecto11.classList.remove("active");
  }
});

/* =========================
   CARD 12
========================= */

const abrirModalProyecto12 = document.getElementById("abrirModalProyecto12");
const modalProyecto12 = document.getElementById("modalProyecto12");
const cerrarModalProyecto12 = document.getElementById("cerrarModalProyecto12");

abrirModalProyecto12.addEventListener("click", () => {
  modalProyecto12.classList.add("active");
});

cerrarModalProyecto12.addEventListener("click", () => {
  modalProyecto12.classList.remove("active");
});

modalProyecto12.addEventListener("click", (e) => {
  if (e.target === modalProyecto12) {
    modalProyecto12.classList.remove("active");
  }
});

/* =========================
   CARD 13
========================= */

const abrirModalProyecto13 = document.getElementById("abrirModalProyecto13");
const modalProyecto13 = document.getElementById("modalProyecto13");
const cerrarModalProyecto13 = document.getElementById("cerrarModalProyecto13");

abrirModalProyecto13.addEventListener("click", () => {
  modalProyecto13.classList.add("active");
});

cerrarModalProyecto13.addEventListener("click", () => {
  modalProyecto13.classList.remove("active");
});

modalProyecto13.addEventListener("click", (e) => {
  if (e.target === modalProyecto13) {
    modalProyecto13.classList.remove("active");
  }
});

/* =========================
   CARD 14
========================= */

const abrirModalProyecto14 = document.getElementById("abrirModalProyecto14");
const modalProyecto14 = document.getElementById("modalProyecto14");
const cerrarModalProyecto14 = document.getElementById("cerrarModalProyecto14");

abrirModalProyecto14.addEventListener("click", () => {
  modalProyecto14.classList.add("active");
});

cerrarModalProyecto14.addEventListener("click", () => {
  modalProyecto14.classList.remove("active");
});

modalProyecto14.addEventListener("click", (e) => {
  if (e.target === modalProyecto14) {
    modalProyecto14.classList.remove("active");
  }
});

/* =========================
   CARD 15
========================= */

const abrirModalProyecto15 = document.getElementById("abrirModalProyecto15");
const modalProyecto15 = document.getElementById("modalProyecto15");
const cerrarModalProyecto15 = document.getElementById("cerrarModalProyecto15");

abrirModalProyecto15.addEventListener("click", () => {
  modalProyecto15.classList.add("active");
});

cerrarModalProyecto15.addEventListener("click", () => {
  modalProyecto15.classList.remove("active");
});

modalProyecto15.addEventListener("click", (e) => {
  if (e.target === modalProyecto15) {
    modalProyecto15.classList.remove("active");
  }
});

/* =========================
   CARD 16
========================= */

const abrirModalProyecto16 = document.getElementById("abrirModalProyecto16");
const modalProyecto16 = document.getElementById("modalProyecto16");
const cerrarModalProyecto16 = document.getElementById("cerrarModalProyecto16");

abrirModalProyecto16.addEventListener("click", () => {
  modalProyecto16.classList.add("active");
});

cerrarModalProyecto16.addEventListener("click", () => {
  modalProyecto16.classList.remove("active");
});

modalProyecto16.addEventListener("click", (e) => {
  if (e.target === modalProyecto16) {
    modalProyecto16.classList.remove("active");
  }
});

/* =========================
   CARD 17
========================= */

const abrirModalProyecto17 = document.getElementById("abrirModalProyecto17");
const modalProyecto17 = document.getElementById("modalProyecto17");
const cerrarModalProyecto17 = document.getElementById("cerrarModalProyecto17");

abrirModalProyecto17.addEventListener("click", () => {
  modalProyecto17.classList.add("active");
});

cerrarModalProyecto17.addEventListener("click", () => {
  modalProyecto17.classList.remove("active");
});

modalProyecto17.addEventListener("click", (e) => {
  if (e.target === modalProyecto17) {
    modalProyecto17.classList.remove("active");
  }
});

/* =========================
   CARD 18
========================= */

const abrirModalProyecto18 = document.getElementById("abrirModalProyecto18");
const modalProyecto18 = document.getElementById("modalProyecto18");
const cerrarModalProyecto18 = document.getElementById("cerrarModalProyecto18");

abrirModalProyecto18.addEventListener("click", () => {
  modalProyecto18.classList.add("active");
});

cerrarModalProyecto18.addEventListener("click", () => {
  modalProyecto18.classList.remove("active");
});

modalProyecto18.addEventListener("click", (e) => {
  if (e.target === modalProyecto18) {
    modalProyecto18.classList.remove("active");
  }
});

/* =========================
   CARD 19
========================= */

const abrirModalProyecto19 = document.getElementById("abrirModalProyecto19");
const modalProyecto19 = document.getElementById("modalProyecto19");
const cerrarModalProyecto19 = document.getElementById("cerrarModalProyecto19");

abrirModalProyecto19.addEventListener("click", () => {
  modalProyecto19.classList.add("active");
});

cerrarModalProyecto19.addEventListener("click", () => {
  modalProyecto19.classList.remove("active");
});

modalProyecto19.addEventListener("click", (e) => {
  if (e.target === modalProyecto19) {
    modalProyecto19.classList.remove("active");
  }
});

/* =========================
   CARD 20
========================= */

const abrirModalProyecto20 = document.getElementById("abrirModalProyecto20");
const modalProyecto20 = document.getElementById("modalProyecto20");
const cerrarModalProyecto20 = document.getElementById("cerrarModalProyecto20");

abrirModalProyecto20.addEventListener("click", () => {
  modalProyecto20.classList.add("active");
});

cerrarModalProyecto20.addEventListener("click", () => {
  modalProyecto20.classList.remove("active");
});

modalProyecto20.addEventListener("click", (e) => {
  if (e.target === modalProyecto20) {
    modalProyecto20.classList.remove("active");
  }
});

/* BOTÓN SUBIR */

const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("active");
  } else {
    scrollTopBtn.classList.remove("active");
  }
});

/* =========================
   ANIMACION BANNER PROYECTOS
========================= */

const proyectoBanner = document.querySelector('.proyecto-content');

const proyectoBannerObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.3
});

proyectoBannerObserver.observe(proyectoBanner);


/* =========================
   ANIMACION PROYECTOS
========================= */

/* TITULO */

const proyectosHeader = document.querySelector('.proyectos-header');

const headerObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.3
});

headerObserver.observe(proyectosHeader);


/* CARDS */

const proyectoCards = document.querySelectorAll('.proyecto-card');

const cardsObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add('show');

      cardsObserver.unobserve(entry.target);
    }

  });

}, {
  threshold: 0.15
});


proyectoCards.forEach((card, index) => {

  card.style.transitionDelay = `${index * 0.03}s`;

  cardsObserver.observe(card);

});


/* =========================
   MENU HAMBURGUESA
========================= */


const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");


menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



