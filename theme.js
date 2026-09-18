/* ============================================================
   الوضع الليلي / النهاري
   ============================================================ */

const THEME_KEY = "almustafa_theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const toggleBtn = document.querySelector(".theme-toggle");
  if (toggleBtn) {
    toggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "التبديل للوضع النهاري" : "التبديل للوضع الليلي"
    );
  }
}

function getPreferredTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function initTheme() {
  applyTheme(getPreferredTheme());
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

/* طبّق الثيم فورًا قبل رسم الصفحة لتفادي أي "وميض" لوني */
initTheme();
