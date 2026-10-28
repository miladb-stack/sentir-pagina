// Menú móvil. Sin JS, el menú queda visible (la clase .js solo la agrega el script del <head>).
(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu");
  if (!btn || !nav) return;

  const set = (open) => {
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.dataset.open = String(open);
  };

  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { set(false); btn.focus(); } });
})();
