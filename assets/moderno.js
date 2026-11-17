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

// Conversión de WhatsApp para Google Ads (vía Google Tag Manager, contenedor GTM-T3HGC3J).
// En ese contenedor la conversión de Ads "Whatsapp" se dispara con el evento "JoinChat" o con enlaces cuyo
// texto es "Citas Por WhatsApp" (el botón del sitio anterior). Los botones nuevos tienen otro texto, así que
// avisamos a GTM con el mismo evento cuando alguien hace clic en cualquier enlace de WhatsApp.
(() => {
  document.addEventListener("click", (e) => {
    const a = e.target.closest && e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
    if (!a) return;
    (window.dataLayer = window.dataLayer || []).push({ event: "JoinChat" });
  }, true);
})();
