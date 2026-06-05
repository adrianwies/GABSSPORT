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



