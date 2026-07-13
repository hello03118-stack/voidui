const root = document.documentElement;
const pages = [...document.querySelectorAll("[data-case-page]")];
const current = document.querySelector("[data-current-page]");
const backLink = document.querySelector("[data-case-back]");
let ticking = false;

backLink?.addEventListener("click", (event) => {
  if (!document.referrer) return;

  try {
    const referrer = new URL(document.referrer);
    const cameFromPortfolio = referrer.origin === window.location.origin && !referrer.pathname.includes("/cases/");

    if (cameFromPortfolio) {
      event.preventDefault();
      window.history.back();
    }
  } catch {
    // The regular #work link remains available as a fallback.
  }
});

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0;
  root.style.setProperty("--progress", progress.toFixed(4));
  ticking = false;
};

window.addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateProgress);
  },
  { passive: true },
);

if (current && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

      if (visible) current.textContent = visible.target.dataset.casePage;
    },
    { rootMargin: "-28% 0px -52%", threshold: [0, 0.2, 0.5, 0.8] },
  );

  pages.forEach((page) => observer.observe(page));
}

updateProgress();
