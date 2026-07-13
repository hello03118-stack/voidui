(() => {
  const key = "mao-portfolio-theme";
  let theme = "light";

  try {
    const savedTheme = window.localStorage.getItem(key);
    if (savedTheme === "light" || savedTheme === "dark") theme = savedTheme;
  } catch {
    // The light theme remains the fallback when storage is unavailable.
  }

  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
