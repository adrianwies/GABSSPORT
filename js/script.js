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
