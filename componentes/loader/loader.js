class GabsLoader extends HTMLElement {
  connectedCallback() {
    if (this.dataset.initialized === "true") return;

    this.dataset.initialized = "true";
    const base = this.dataset.base || "./";
    const isDelayed = this.dataset.mode === "delayed";
    // El loader acompaña el arranque del HTML, pero nunca espera imágenes u otros
    // recursos de red. Así no bloquea la navegación en conexiones lentas.
    const minimumDuration = isDelayed ? 200 : 700;
    let shownAt = isDelayed ? 0 : performance.now();
    let isVisible = !isDelayed;

    this.classList.add("page-loader");
    if (isDelayed) this.classList.add("page-loader--delayed");

    this.setAttribute("role", "status");
    this.setAttribute("aria-label", "Cargando sitio");
    this.innerHTML = `
      <div class="page-loader__logo">
        <img src="${base}img/logofooter.png" alt="Gabsport" />
      </div>
    `;

    const show = () => {
      if (isVisible || !this.isConnected) return;

      isVisible = true;
      shownAt = performance.now();
      this.classList.add("is-visible");
    };

    const hide = () => {
      if (!isVisible) {
        this.remove();
        return;
      }

      const elapsed = performance.now() - shownAt;
      const remaining = Math.max(0, minimumDuration - elapsed);

      window.setTimeout(() => {
        if (!this.isConnected) return;
        this.classList.add("is-hidden");
        window.setTimeout(() => this.remove(), 500);
      }, remaining);
    };

    if (isDelayed) {
      window.setTimeout(() => {
        if (document.readyState !== "complete") show();
      }, 300);
    }

    const readyEvent = "DOMContentLoaded";
    const isReady = document.readyState !== "loading";

    if (isReady) {
      hide();
    } else {
      window.addEventListener(readyEvent, hide, { once: true });
    }
  }
}

if (!customElements.get("gabs-loader")) {
  customElements.define("gabs-loader", GabsLoader);
}
