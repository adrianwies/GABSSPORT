(() => {
  const grid = document.querySelector(".proyectos-grid");
  const verMasBtn = document.getElementById("verMasProyectos");
  const filtros = [...document.querySelectorAll(".filtro-btn")];
  const proyectosAntiguos = [...document.querySelectorAll('[id^="modalProyecto"]')];

  if (!grid || !verMasBtn) return;

  let proyectos = [];
  let filtroActual = "all";
  let expanded = false;

  const escapar = (valor = "") =>
    String(valor)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const descripcionProyecto = (proyecto) =>
    proyecto.descripcion ||
    `${proyecto.ubicacion}. Proyecto desarrollado por GABSPORT con materiales de alta calidad, instalación profesional y acabados preparados para un uso deportivo exigente.`;

  const caracteristicasProyecto = (proyecto) =>
    proyecto.caracteristicas || [
      { icono: "fa-solid fa-medal", titulo: "Calidad garantizada", texto: "Materiales seleccionados para ofrecer resistencia y alto rendimiento." },
      { icono: "fa-solid fa-screwdriver-wrench", titulo: "Instalación profesional", texto: "Ejecución especializada y acabados precisos en cada etapa." },
      { icono: "fa-solid fa-shield-halved", titulo: "Máxima durabilidad", texto: "Soluciones diseñadas para soportar el uso continuo y el paso del tiempo." }
    ];

  const crearCard = (proyecto, indice) => {
    const card = document.createElement("button");
    card.type = "button";
    // La visibilidad ya la controla el renderizado del JSON. No usamos
    // `proyecto-extra` porque esa clase antigua aplica display:none desde CSS.
    card.className = "proyecto-card";
    card.style.transitionDelay = `${indice * 0.03}s`;
    card.dataset.category = proyecto.categoria;
    card.dataset.projectId = proyecto.id;
    card.setAttribute("aria-label", `Ver proyecto ${proyecto.titulo}`);
    card.innerHTML = `
      <img src="${escapar(proyecto.imagen)}" alt="${escapar(proyecto.titulo)}" loading="lazy" />
      <div class="proyecto-overlay">
        <h3>${escapar(proyecto.titulo)}</h3>
        <p>${escapar(proyecto.ubicacion)}</p>
        <div class="proyecto-arrow" aria-hidden="true"><i class="fa-solid fa-arrow-right"></i></div>
      </div>`;
    card.addEventListener("click", () => abrirModal(proyecto));
    return card;
  };

  const mostrarCards = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        grid.querySelectorAll(".proyecto-card").forEach((card) => card.classList.add("show"));
      });
    });
  };

  const modal = document.createElement("div");
  modal.className = "modal-overlay modal-proyecto-json";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-hidden", "true");
  document.body.append(modal);

  const cerrarModal = () => {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  function abrirModal(proyecto) {
    const cta = proyecto.cta || {
      icono: "fa-solid fa-trophy",
      titulo: "¿Tienes un proyecto similar?",
      texto: "Conversemos sobre tu próximo espacio deportivo."
    };
    const features = caracteristicasProyecto(proyecto)
      .map((item) => `
        <div class="feature-item">
          <i class="${escapar(item.icono)}" aria-hidden="true"></i>
          <div><h4>${escapar(item.titulo)}</h4><p>${escapar(item.texto)}</p></div>
        </div>`)
      .join("");

    modal.innerHTML = `
      <div class="modal-box">
        <div class="modal-scroll">
          <div class="modal-scroll-inner">
            <button class="modal-close" type="button" aria-label="Cerrar modal">×</button>
            <div class="modal-left">
              <div class="modal-img-wrapper"><img src="${escapar(proyecto.imagen)}" class="modal-main-img" alt="${escapar(proyecto.titulo)}" /></div>
            </div>
            <div class="modal-right">
              <h2>${escapar(proyecto.titulo)}</h2>
              <p class="modal-text">${escapar(descripcionProyecto(proyecto))}</p>
              <div class="modal-features">${features}</div>
            </div>
            <div class="modal-cta">
              <div class="modal-cta-text"><i class="${escapar(cta.icono)}" aria-hidden="true"></i><div><h4>${escapar(cta.titulo)}</h4><p>${escapar(cta.texto)}</p></div></div>
              <a href="https://wa.me/51983276061" target="_blank" rel="noopener noreferrer" class="modal-btn">COTIZAR ESTE PROYECTO <span>→</span></a>
            </div>
          </div>
        </div>
      </div>`;
    modal.querySelector(".modal-close").addEventListener("click", cerrarModal);
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.querySelector(".modal-close").focus();
  }

  const actualizarProyectos = () => {
    const visibles = proyectos.filter((proyecto) => filtroActual === "all" || proyecto.categoria === filtroActual);
    grid.replaceChildren();
    visibles.forEach((proyecto, indice) => {
      if (expanded || indice < 6) grid.append(crearCard(proyecto, indice));
    });
    mostrarCards();
    verMasBtn.hidden = visibles.length <= 6;
    verMasBtn.innerHTML = expanded ? "VER MENOS <span>↑</span>" : "VER MÁS PROYECTOS <span>→</span>";
  };

  filtros.forEach((btn) => {
    btn.addEventListener("click", () => {
      filtros.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");
      filtroActual = btn.dataset.filter;
      expanded = false;
      actualizarProyectos();
    });
  });

  verMasBtn.addEventListener("click", () => {
    expanded = !expanded;
    actualizarProyectos();
    if (!expanded) grid.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) cerrarModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("active")) cerrarModal();
  });

  const iniciar = async () => {
    grid.setAttribute("aria-busy", "true");
    try {
      const respuesta = await fetch("../data/proyectos.json");
      if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
      proyectos = await respuesta.json();
      proyectosAntiguos.forEach((item) => item.remove());
      actualizarProyectos();
    } catch (error) {
      console.error("No se pudieron cargar los proyectos:", error);
      grid.innerHTML = '<p class="proyectos-error">No fue posible cargar los proyectos. Inténtalo nuevamente.</p>';
      verMasBtn.hidden = true;
    } finally {
      grid.removeAttribute("aria-busy");
    }
  };

  iniciar();

  const scrollTopBtn = document.getElementById("scrollTop");
  window.addEventListener("scroll", () => scrollTopBtn?.classList.toggle("active", window.scrollY > 300));

  document.querySelector(".proyecto-content")?.classList.add("show");
  document.querySelector(".proyectos-header")?.classList.add("show");
})();
