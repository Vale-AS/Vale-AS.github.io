# Sitio de cuenta regresiva — Defensa de Tesis

Sitio estático, sin dependencias. Se abre con doble clic en `index.html`.

## Cómo editarlo

**Todo lo que tenés que cambiar está en [`config.js`](config.js).** No hace falta tocar el resto.

- **Fecha y hora** → campo `fecha` (formato `"AAAA-MM-DDTHH:MM:SS"`, hora de Buenos Aires).
- **Link de YouTube** → campo `youtubeUrl`. Si lo dejás vacío (`""`), el botón no aparece.
- **Embed de Google Calendar** → campo `googleCalendarEmbedUrl`. Pegá la URL que Google te da
  para el `src` del iframe. Si lo dejás vacío, la sección del calendario no se muestra.
- **Mapa del aula** → guardá la imagen en esta carpeta y poné su nombre en `mapaImagen`
  (ej: `"mapa-aula.png"`). Mientras esté vacío, se muestra un cartel de "próximamente".
- **Color de acento** → variable `--accent` en [`style.css`](style.css).

## Estados automáticos

- Cuenta regresiva en vivo (días : horas : min : seg).
- Cuando llega la hora, muestra "La defensa está ocurriendo ahora".
- Cuando termina (según `duracionMinutos`), muestra un mensaje de agradecimiento.

## Publicación (GitHub Pages)

El sitio ya está publicado en: **https://vale-as.github.io/**
(repositorio: `Vale-AS/Vale-AS.github.io`, rama `main`, carpeta raíz).

### Para actualizar el sitio

Después de editar `config.js` (o cualquier archivo), abrí una terminal en esta
carpeta y corré:

```
git add -A
git commit -m "descripción del cambio"
git push
```

En ~1 minuto GitHub Pages publica los cambios. Si no ves la actualización,
refrescá con Ctrl+F5 (o Cmd+Shift+R) para saltear la caché del navegador.

> Nota: GitHub Pages distingue mayúsculas y minúsculas en los nombres de archivo.
> Si agregás una imagen, escribí el nombre en `config.js` **exactamente** igual
> (incluyendo mayúsculas) a como se llama el archivo.
