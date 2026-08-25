const KEY = "theme";

export function initTheme() {
  const btn = document.getElementById("nut-nen-toi");
  if (!btn) return;

  const root = document.documentElement;
  const isDark = () => root.classList.contains("dark");

  function sync() {
    btn.setAttribute("aria-pressed", String(isDark()));
    btn.setAttribute(
      "aria-label",
      isDark() ? "Chuyển sang nền sáng" : "Chuyển sang nền tối",
    );
  }

  btn.addEventListener("click", () => {
    root.classList.toggle("dark");
    localStorage.setItem(KEY, isDark() ? "dark" : "light");
    sync();
  });

  sync();
}
