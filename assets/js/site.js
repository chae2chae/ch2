const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelector("[data-nav-links]");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-media-shell]").forEach((shell) => {
  const media = shell.querySelector("[data-media]");
  const fallback = shell.querySelector("[data-media-fallback]");

  if (!media || !fallback) return;

  const showMedia = () => {
    shell.classList.add("has-media");
    fallback.setAttribute("hidden", "");
  };

  const showFallback = () => {
    shell.classList.remove("has-media");
    media.setAttribute("hidden", "");
    fallback.removeAttribute("hidden");
  };

  if (media.tagName === "IMG") {
    if (media.complete && media.naturalWidth > 0) {
      showMedia();
    } else {
      media.addEventListener("load", showMedia, { once: true });
      media.addEventListener("error", showFallback, { once: true });
    }
  }
});
