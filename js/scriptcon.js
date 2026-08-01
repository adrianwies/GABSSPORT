/* BOTÓN SUBIR */

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollTopBtn.classList.add('active');
    }else{
        scrollTopBtn.classList.remove('active');
    }
});

/* =========================
   SCROLL CONTACTO
========================= */

const contactoElements = document.querySelectorAll(
  '.contact-info, .contact-form-box'
);

const contactoObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.2
});

contactoElements.forEach((el) => {
  contactoObserver.observe(el);
});

/* =========================
   TOAST NOTIFICACIÓN
========================= */

function mostrarToast(mensaje, tipo = "success") {
  const toast = document.getElementById("toast");

  toast.textContent = mensaje;
  toast.className = "toast show " + tipo;

  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}


/* =========================
   MENU HAMBURGUESA
========================= */


