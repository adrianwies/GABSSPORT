

const abrirModal = document.getElementById("abrirModal");
const modal = document.getElementById("modalFutbol");
const cerrarModal = document.getElementById("cerrarModal");

abrirModal.addEventListener("click", (e)=>{
    e.preventDefault();

    modal.classList.add("active");
});

cerrarModal.addEventListener("click", ()=>{
    modal.classList.remove("active");
});

modal.addEventListener("click", (e)=>{
    if(e.target === modal){
        modal.classList.remove("active");
    }
});



const mainImg = document.getElementById("modalMainImg");
const thumbs = document.querySelectorAll("#modalFutbol .modal-thumbs img");
const prevBtn = document.getElementById("modalPrev");
const nextBtn = document.getElementById("modalNext");

let currentIndex = 0;

function changeImage(index){
    currentIndex = index;

    mainImg.src = thumbs[currentIndex].src;

    thumbs.forEach(img => img.classList.remove("active"));
    thumbs[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % thumbs.length;
    changeImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
    changeImage(currentIndex);
});

thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
        changeImage(index);
    });
});




const abrirModalPistas = document.getElementById("abrirModalPistas");
const modalPistas = document.getElementById("modalPistas");
const cerrarModalPistas = document.getElementById("cerrarModalPistas");

const pistasMainImg = document.getElementById("pistasMainImg");
const pistasThumbs = document.querySelectorAll(".pistas-thumbs img");
const pistasPrev = document.getElementById("pistasPrev");
const pistasNext = document.getElementById("pistasNext");

let pistasIndex = 0;

function cambiarImagenPistas(index){
    pistasIndex = index;
    pistasMainImg.src = pistasThumbs[pistasIndex].src;

    pistasThumbs.forEach(img => img.classList.remove("active"));
    pistasThumbs[pistasIndex].classList.add("active");
}

abrirModalPistas.addEventListener("click", (e)=>{
    e.preventDefault();
    modalPistas.classList.add("active");
});

cerrarModalPistas.addEventListener("click", ()=>{
    modalPistas.classList.remove("active");
});

modalPistas.addEventListener("click", (e)=>{
    if(e.target === modalPistas){
        modalPistas.classList.remove("active");
    }
});

pistasNext.addEventListener("click", ()=>{
    let next = (pistasIndex + 1) % pistasThumbs.length;
    cambiarImagenPistas(next);
});

pistasPrev.addEventListener("click", ()=>{
    let prev = (pistasIndex - 1 + pistasThumbs.length) % pistasThumbs.length;
    cambiarImagenPistas(prev);
});

pistasThumbs.forEach((thumb, index)=>{
    thumb.addEventListener("click", ()=>{
        cambiarImagenPistas(index);
    });
});




const abrirModalSuelos = document.getElementById("abrirModalSuelos");
const modalSuelos = document.getElementById("modalSuelos");
const cerrarModalSuelos = document.getElementById("cerrarModalSuelos");

const suelosMainImg = document.getElementById("suelosMainImg");
const suelosThumbs = document.querySelectorAll(".suelos-thumbs img");
const suelosPrev = document.getElementById("suelosPrev");
const suelosNext = document.getElementById("suelosNext");

let suelosIndex = 0;

function cambiarImagenSuelos(index){
    suelosIndex = index;
    suelosMainImg.src = suelosThumbs[suelosIndex].src;

    suelosThumbs.forEach(img => img.classList.remove("active"));
    suelosThumbs[suelosIndex].classList.add("active");
}

abrirModalSuelos.addEventListener("click", (e)=>{
    e.preventDefault();
    modalSuelos.classList.add("active");
});

cerrarModalSuelos.addEventListener("click", ()=>{
    modalSuelos.classList.remove("active");
});

modalSuelos.addEventListener("click", (e)=>{
    if(e.target === modalSuelos){
        modalSuelos.classList.remove("active");
    }
});

suelosNext.addEventListener("click", ()=>{
    let next = (suelosIndex + 1) % suelosThumbs.length;
    cambiarImagenSuelos(next);
});

suelosPrev.addEventListener("click", ()=>{
    let prev = (suelosIndex - 1 + suelosThumbs.length) % suelosThumbs.length;
    cambiarImagenSuelos(prev);
});

suelosThumbs.forEach((thumb, index)=>{
    thumb.addEventListener("click", ()=>{
        cambiarImagenSuelos(index);
    });
});




const abrirModalLuces = document.getElementById("abrirModalLuces");
const modalLuces = document.getElementById("modalLuces");
const cerrarModalLuces = document.getElementById("cerrarModalLuces");

const lucesMainImg = document.getElementById("lucesMainImg");
const lucesThumbs = document.querySelectorAll(".luces-thumbs img");
const lucesPrev = document.getElementById("lucesPrev");
const lucesNext = document.getElementById("lucesNext");

let lucesIndex = 0;

function cambiarImagenLuces(index){
    lucesIndex = index;
    lucesMainImg.src = lucesThumbs[lucesIndex].src;

    lucesThumbs.forEach(img => img.classList.remove("active"));
    lucesThumbs[lucesIndex].classList.add("active");
}

abrirModalLuces.addEventListener("click", (e)=>{
    e.preventDefault();
    modalLuces.classList.add("active");
});

cerrarModalLuces.addEventListener("click", ()=>{
    modalLuces.classList.remove("active");
});

modalLuces.addEventListener("click", (e)=>{
    if(e.target === modalLuces){
        modalLuces.classList.remove("active");
    }
});

lucesNext.addEventListener("click", ()=>{
    let next = (lucesIndex + 1) % lucesThumbs.length;
    cambiarImagenLuces(next);
});

lucesPrev.addEventListener("click", ()=>{
    let prev = (lucesIndex - 1 + lucesThumbs.length) % lucesThumbs.length;
    cambiarImagenLuces(prev);
});

lucesThumbs.forEach((thumb, index)=>{
    thumb.addEventListener("click", ()=>{
        cambiarImagenLuces(index);
    });
});


const abrirModalMantenimiento = document.getElementById("abrirModalMantenimiento");
const modalMantenimiento = document.getElementById("modalMantenimiento");
const cerrarModalMantenimiento = document.getElementById("cerrarModalMantenimiento");

const mantenimientoMainImg = document.getElementById("mantenimientoMainImg");
const mantenimientoThumbs = document.querySelectorAll(".mantenimiento-thumbs img");
const mantenimientoPrev = document.getElementById("mantenimientoPrev");
const mantenimientoNext = document.getElementById("mantenimientoNext");

let mantenimientoIndex = 0;

function cambiarImagenMantenimiento(index){
    mantenimientoIndex = index;
    mantenimientoMainImg.src = mantenimientoThumbs[mantenimientoIndex].src;

    mantenimientoThumbs.forEach(img => img.classList.remove("active"));
    mantenimientoThumbs[mantenimientoIndex].classList.add("active");
}

abrirModalMantenimiento.addEventListener("click", (e)=>{
    e.preventDefault();
    modalMantenimiento.classList.add("active");
});

cerrarModalMantenimiento.addEventListener("click", ()=>{
    modalMantenimiento.classList.remove("active");
});

modalMantenimiento.addEventListener("click", (e)=>{
    if(e.target === modalMantenimiento){
        modalMantenimiento.classList.remove("active");
    }
});

mantenimientoNext.addEventListener("click", ()=>{
    let next = (mantenimientoIndex + 1) % mantenimientoThumbs.length;
    cambiarImagenMantenimiento(next);
});

mantenimientoPrev.addEventListener("click", ()=>{
    let prev = (mantenimientoIndex - 1 + mantenimientoThumbs.length) % mantenimientoThumbs.length;
    cambiarImagenMantenimiento(prev);
});

mantenimientoThumbs.forEach((thumb, index)=>{
    thumb.addEventListener("click", ()=>{
        cambiarImagenMantenimiento(index);
    });
});





