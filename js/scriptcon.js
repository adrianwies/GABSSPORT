/* BOTÓN SUBIR */

const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if(window.scrollY > 300){
        scrollTopBtn.classList.add('active');
    }else{
        scrollTopBtn.classList.remove('active');
    }
});