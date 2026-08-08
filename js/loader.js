(() => {
  const loader = document.getElementById("pageLoader");
  if (!loader) return;

  const isDelayed = loader.dataset.mode === "delayed";
  const minimumDuration = isDelayed ? 650 : 850;
  let shownAt = isDelayed ? 0 : performance.now();
  let isVisible = !isDelayed;

  const showLoader = () => {
    if (isVisible) return;

    isVisible = true;
    shownAt = performance.now();
    loader.classList.add("is-visible");
  };

  const hideLoader = () => {
    if (!isVisible) {
      loader.remove();
      return;
    }

    const remaining = Math.max(0, minimumDuration - (performance.now() - shownAt));

    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      window.setTimeout(() => loader.remove(), 500);
    }, remaining);
  };

  if (isDelayed) {
    window.setTimeout(() => {
      if (document.readyState !== "complete") showLoader();
    }, 300);
  }

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
  }
})();
