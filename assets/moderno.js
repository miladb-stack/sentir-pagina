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

// Carrusel de bienestar: flechas, puntos y avance automático (se detiene al interactuar o si el usuario prefiere menos movimiento).
(() => {
  const root = document.querySelector("[data-carousel]");
  if (!root) return;
  const track = root.querySelector(".slides");
  const slides = [...track.children];
  const dots = root.querySelector(".dots");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let timer = null;

  const index = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = (i) => track.scrollTo({ left: ((i + slides.length) % slides.length) * track.clientWidth });
  const mark = () => dots.querySelectorAll("button").forEach((b, n) => b.setAttribute("aria-current", String(n === index())));

  slides.forEach((_, n) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Ir a la imagen ${n + 1} de ${slides.length}`);
    b.addEventListener("click", () => { stop(); go(n); });
    dots.appendChild(b);
  });

  root.querySelector("[data-prev]").addEventListener("click", () => { stop(); go(index() - 1); });
  root.querySelector("[data-next]").addEventListener("click", () => { stop(); go(index() + 1); });
  track.addEventListener("scroll", () => requestAnimationFrame(mark), { passive: true });

  const start = () => { if (!reduce && !timer) timer = setInterval(() => go(index() + 1), 6000); };
  const stop = () => { clearInterval(timer); timer = null; };
  root.addEventListener("pointerenter", stop);
  root.addEventListener("focusin", stop);
  root.addEventListener("touchstart", stop, { passive: true });
  root.addEventListener("pointerleave", start);
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  mark();
  start();
})();
