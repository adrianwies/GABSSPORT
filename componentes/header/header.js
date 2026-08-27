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

      const setMenuState = (isOpen) => {
        navLinks.classList.toggle("active", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
        menuIcon.classList.toggle("fa-bars", !isOpen);
        menuIcon.classList.toggle("fa-xmark", isOpen);
      };

      const closeMenu = () => setMenuState(false);

      menuButton.addEventListener("click", () => {
        setMenuState(!navLinks.classList.contains("active"));
      });

      navLinks.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeMenu();
      });

      document.addEventListener("pointerdown", (event) => {
        if (
          navLinks.classList.contains("active") &&
          !navLinks.contains(event.target) &&
          !menuButton.contains(event.target)
        ) {
          closeMenu();
        }
      });

      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && navLinks.classList.contains("active")) {
          closeMenu();
          menuButton.focus();
        }
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 1024) closeMenu();
      });
    } catch (error) {
      console.error("No se pudo cargar el header:", error);
    }
  };

  loadHeader();
})();
