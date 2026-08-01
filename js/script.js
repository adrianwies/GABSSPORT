const counters = document.querySelectorAll('.counter');

const speed = 200;

const startCounter = (counter) => {

    const updateCount = () => {

        const target = +counter.getAttribute('data-target');

        const count = +counter.innerText;

        const increment = target / speed;

        if(count < target){

            counter.innerText = Math.ceil(count + increment);

            setTimeout(updateCount, 10);

        }else{

            counter.innerText = target;
        }
    };

    updateCount();
};

/* OBSERVER */

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counters = entry.target.querySelectorAll('.counter');

            counters.forEach(counter => {

                counter.innerText = '0';

                startCounter(counter);
            });

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

observer.observe(document.querySelector('.stats'));



/* Recorrido Linea automatica */
const steps = document.querySelectorAll(".step");
const timeline = document.querySelector(".timeline");

let current = 0;

function updateStep() {

    steps.forEach(step => step.classList.remove("active"));

    steps[current].classList.add("active");

    let progress = (current) / (steps.length - 1) * 90;
    timeline.style.setProperty("--progress", progress + "%");

    current++;

    if (current >= steps.length) {
        current = 0;
    }
}

updateStep();
setInterval(updateStep, 2000);


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



/* =========================
   SCROLL ANIMATION ABOUT
========================= */

const hiddenElements = document.querySelectorAll(
  '.about-left, .about-right'
);

const showOnScroll = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });
}, {
  threshold: 0.2
});

hiddenElements.forEach((el) => {
  showOnScroll.observe(el);
});


/* =========================
   SCROLL STATS
========================= */

const statBoxes = document.querySelectorAll('.stat-box');

const statsObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }

  });

}, {
  threshold: 0.2
});

statBoxes.forEach((box) => {
  statsObserver.observe(box);
});


