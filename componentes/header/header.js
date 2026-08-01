(() => {
  const scriptUrl = document.currentScript.src;
  const container = document.getElementById("site-header");

  if (!container) return;

  const loadHeader = async () => {
    try {
      const response = await fetch(new URL("header.html", scriptUrl));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const base = container.dataset.base || "./";
      const activePage = container.dataset.active || "inicio";
      const template = await response.text();
      container.innerHTML = template.replaceAll("{{base}}", base);

      const activeLink = container.querySelector(`[data-page="${activePage}"]`);
      activeLink?.setAttribute("aria-current", "page");

      const menuButton = container.querySelector("#menuToggle");
      const navLinks = container.querySelector(".nav-links");
      const menuIcon = menuButton.querySelector("i");

      menuButton.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
      });
    } catch (error) {
      console.error("No se pudo cargar el header:", error);
    }
  };

  loadHeader();
})();
