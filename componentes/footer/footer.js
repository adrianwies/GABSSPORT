(() => {
  const scriptUrl = document.currentScript.src;
  const container = document.getElementById("site-footer");

  if (!container) return;

  const loadFooter = async () => {
    try {
      const response = await fetch(new URL("footer.html", scriptUrl));
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const base = container.dataset.base || "./";
      const template = await response.text();
      container.innerHTML = template.replaceAll("{{base}}", base);
    } catch (error) {
      console.error("No se pudo cargar el footer:", error);
    }
  };

  loadFooter();
})();
