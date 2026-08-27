const speed = 200;

/* CARRUSEL DE PORTADA */
const heroCarousel = document.querySelector('.hero-carousel');

if (heroCarousel) {
  const heroSlides = [...heroCarousel.querySelectorAll('.hero-slide')];
  const heroDots = [...heroCarousel.querySelectorAll('.hero-dot')];
  const previousButton = heroCarousel.querySelector('.hero-prev');
  const nextButton = heroCarousel.querySelector('.hero-next');
  let heroIndex = 0;
  let heroTimer;

  const showHeroSlide = (newIndex) => {
    heroIndex = (newIndex + heroSlides.length) % heroSlides.length;

    heroSlides.forEach((slide, index) => {
      const isActive = index === heroIndex;
      slide.classList.toggle('active', isActive);
      slide.setAttribute('aria-hidden', String(!isActive));
    });

    heroDots.forEach((dot, index) => {
      const isActive = index === heroIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };

  const startHeroCarousel = () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 6000);
  };

  previousButton.addEventListener('click', () => {
    showHeroSlide(heroIndex - 1);
    startHeroCarousel();
  });

  nextButton.addEventListener('click', () => {
    showHeroSlide(heroIndex + 1);
    startHeroCarousel();
  });

  heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showHeroSlide(index);
      startHeroCarousel();
    });
  });

  heroCarousel.addEventListener('mouseenter', () => clearInterval(heroTimer));
  heroCarousel.addEventListener('mouseleave', startHeroCarousel);
  heroCarousel.addEventListener('focusin', () => clearInterval(heroTimer));
  heroCarousel.addEventListener('focusout', startHeroCarousel);
  startHeroCarousel();
}

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

    const firstCircle = steps[0].querySelector(".circle");
    const activeCircle = steps[current].querySelector(".circle");
    const firstCenter = steps[0].offsetLeft + firstCircle.offsetLeft + firstCircle.offsetWidth / 2;
    const activeCenter = steps[current].offsetLeft + activeCircle.offsetLeft + activeCircle.offsetWidth / 2;
    timeline.style.setProperty("--progress", `${activeCenter - firstCenter}px`);

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


