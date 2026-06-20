/* ============================================================
   Lógica de la página. Normalmente no necesitás tocar esto:
   todo se controla desde config.js
   ============================================================ */

(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const target = new Date(CONFIG.fecha); // fecha objetivo de la defensa

  // ---------- Texto fijo desde config ----------
  function setText(id, value) {
    const el = $(id);
    if (!el) return;
    if (value) { el.textContent = value; }
    else { el.hidden = true; }
  }

  setText("subtitulo", CONFIG.subtitulo);
  setText("titulo", CONFIG.titulo);
  setText("tituloTesis", CONFIG.tituloTesis);
  setText("nombre", CONFIG.nombre);
  setText("lugar", CONFIG.lugar);
  setText("footerLugar", CONFIG.lugar);

  // Fecha en formato legible en español
  try {
    const fmt = new Intl.DateTimeFormat("es-AR", {
      weekday: "long", day: "numeric", month: "long", year: "numeric",
      hour: "2-digit", minute: "2-digit", timeZone: CONFIG.zonaHoraria,
    });
    let texto = fmt.format(target);
    texto = texto.charAt(0).toUpperCase() + texto.slice(1) + " hs";
    setText("fechaLegible", texto);
  } catch (e) {
    setText("fechaLegible", CONFIG.fecha);
  }

  // ---------- YouTube ----------
  if (CONFIG.youtubeUrl) {
    const yt = $("youtubeBtn");
    yt.href = CONFIG.youtubeUrl;
    yt.hidden = false;
  } else {
    // Sin link de transmisión: ocultamos la sección para no dejar un hueco.
    $("actions").hidden = true;
  }

  // ---------- Google Calendar embed ----------
  if (CONFIG.googleCalendarEmbedUrl) {
    $("calendarIframe").src = CONFIG.googleCalendarEmbedUrl;
    $("calendarBlock").hidden = false;
  }

  // ---------- Mapa del aula ----------
  if (CONFIG.mapaImagen) {
    const img = $("mapaImg");
    img.src = CONFIG.mapaImagen;
    img.alt = CONFIG.mapaAlt || "";
    img.hidden = false;
    $("mapaPlaceholder").hidden = true;
    if (CONFIG.mapaAlt) {
      const cap = $("mapaCaption");
      cap.textContent = CONFIG.mapaAlt;
      cap.hidden = false;
    }
  }

  if (CONFIG.googleMapsUrl) {
    const maps = $("mapsBtn");
    maps.href = CONFIG.googleMapsUrl;
    maps.hidden = false;
  }

  // ---------- Cuenta regresiva ----------
  function pad(n) { return String(n).padStart(2, "0"); }
  const end = new Date(target.getTime() + (CONFIG.duracionMinutos || 60) * 60000);
  const liveBanner = $("liveBanner");
  const countdown = document.querySelector(".countdown");

  function render() {
    const diff = target.getTime() - Date.now();

    if (diff <= 0) {
      // Ya pasó la hora de inicio
      const stillRunning = Date.now() < end.getTime();
      countdown.hidden = true;
      liveBanner.hidden = false;
      liveBanner.textContent = stillRunning
        ? "¡La defensa está ocurriendo ahora! 🎓"
        : "La defensa ya se realizó. ¡Gracias por acompañar! 🎓";
      $("dias").textContent = $("horas").textContent =
        $("min").textContent = $("seg").textContent = "00";
      return;
    }

    const s = Math.floor(diff / 1000);
    $("dias").textContent  = pad(Math.floor(s / 86400));
    $("horas").textContent = pad(Math.floor((s % 86400) / 3600));
    $("min").textContent   = pad(Math.floor((s % 3600) / 60));
    $("seg").textContent   = pad(s % 60);
  }

  render();
  setInterval(render, 1000);
})();
