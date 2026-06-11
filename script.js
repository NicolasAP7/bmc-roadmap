const revealItems = document.querySelectorAll(".reveal, [data-animation]");
const heroGraphic = document.querySelector(".align-on-load");

window.addEventListener("load", () => {
  requestAnimationFrame(() => {
    heroGraphic?.classList.add("is-aligned");
    document.querySelector(".hero-content")?.classList.add("is-visible");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.24,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
