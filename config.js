/* ============================================================
   CONFIGURACIÓN — editá solo este archivo
   ============================================================
   Cambiá los valores de abajo cuando tengas la info.
   Lo que dejes vacío ("") simplemente no se muestra en la página.
*/

const CONFIG = {
  // --- Datos de la defensa ---------------------------------
  titulo:    "✨Defensa de Tesis✨",
  subtitulo: "Licenciatura en Ciencias de la Computación — FCEN, UBA",
  nombre:    "Valeria Arrosio",            // tu nombre
  // tituloTesis: "Acerca de cuestiones de distribución uniforme",   // título del trabajo

  // --- Fecha y hora de la defensa --------------------------
  // Formato: "AAAA-MM-DDTHH:MM:SS" (hora local de Buenos Aires).
  // Ej: 15 de agosto de 2026 a las 14:30 -> "2026-08-15T14:30:00"
  fecha: "2026-06-25T12:30:00",
  zonaHoraria: "America/Argentina/Buenos_Aires",
  duracionMinutos: 60, // duración estimada (para el "Agregar al calendario")

  // --- Lugar -----------------------------------------------
  lugar: "Aula a confirmar — Pabellón 0+inf, Ciudad Universitaria",

  // --- Enlaces (dejá "" si todavía no los tenés) -----------
  youtubeUrl: "",          // ej: "https://www.youtube.com/watch?v=XXXXXXXX"

  // Embed de Google Calendar.
  // Pegá SOLO la URL que va en el src del iframe (la que da Google al compartir).
  // Si lo dejás "", la sección del calendario no se muestra.
  googleCalendarEmbedUrl: "https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FArgentina%2FBuenos_Aires&showPrint=0&src=ZjgzZDhlNTg0ZTkyMDQxZjA4ZGM1MWQ4Y2Q4ZmU2NDFjYjdmMmFlMmU4MjljZThjODk1M2ExZmQyMDU0YjVjMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%238e24aa",

  // --- Mapa del aula (imagen) ------------------------------
  // Cuando tengas la imagen, ponela en esta carpeta y escribí su nombre.
  // Ej: "mapa-aula.png". Dejá "" para mostrar un cartel de "próximamente".
  mapaImagen: "PlanoCeroMasInf.png",
  // mapaAlt: "Cómo llegar al aula de la defensa",
  mapaAlt: "Cuando se asigne el aula, se marcará en la imagen",
  
  // Link a Google Maps con el pin del lugar.
  // Abrí Google Maps, ubicá el lugar, tocá "Compartir" y pegá el link acá.
  // Dejá "" para no mostrar el botón.
  googleMapsUrl: "https://maps.app.goo.gl/mZCkCC37JxLR7ASM7",
};
