/* =========================
   CARRUSEL NOSOTROS
========================= */


document.addEventListener('DOMContentLoaded', () => {

    const carouselImages = document.querySelectorAll('.carousel-img');

    let carouselIndex = 0;

    if(carouselImages.length <= 1){
        return;
    }

    carouselImages.forEach(img => {
        img.classList.remove('active');
    });

    carouselImages[0].classList.add('active');

    setInterval(() => {

        carouselImages[carouselIndex].classList.remove('active');

        carouselIndex = (carouselIndex + 1) % carouselImages.length;

        carouselImages[carouselIndex].classList.add('active');

    }, 3000);

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


/* =========================
   SCROLL NOSOTROS
========================= */

const nosotrosElements = document.querySelectorAll(
  '.nosotros-left, .nosotros-right'
);

const nosotrosObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.2
});

nosotrosElements.forEach((el) => {
  nosotrosObserver.observe(el);
});

/* =========================
   SCROLL CERTIFICACIONES
========================= */

const certTitle = document.querySelector('.certificaciones-section h2');
const certSlider = document.querySelector('.certificaciones-slider');

const certObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.2
});

certObserver.observe(certTitle);
certObserver.observe(certSlider);

/* =========================
   SCROLL MISIÓN VISIÓN
========================= */

const mvBoxes = document.querySelectorAll('.mv-box');

const mvObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.2
});

mvBoxes.forEach((box) => {
  mvObserver.observe(box);
});

/* =========================
   MENU HAMBURGUESA
========================= */










