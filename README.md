# Cota Baja · Práctica 3.1

Landing y formulario responsive para un club ficticio de senderismo. El prototipo de Figma incluye ambas pantallas a 1440 y 390 px, con un flujo de navegación para cada ancho. [Ver el prototipo en Figma](https://www.figma.com/design/F77MmWw9TfOwpT6D1cWRyg?node-id=7-47).

## Desarrollo y compilación

Usa Node.js 20.19 o una versión compatible a partir de 22.12.

```bash
npm install
npm run dev
npm run build
npm run preview
```

Vite toma `src/` como raíz y compila `index.html` y `formulario.html` en `docs/`. Las rutas son relativas para poder servir el sitio bajo el nombre del repositorio. La copia estática incluida en `docs/` puede publicarse tal cual y se reemplaza al ejecutar `npm run build`.

## Maquetación

- `_variables.scss` incluye la paleta, el espaciado, la rejilla y la escala tipográfica exportados de Figma, junto con los tamaños necesarios para la web.
- `_mixins.scss` comparte reglas de rejilla, tipografía, paneles y foco. El mixin `respond-to` aplica el mapa de puntos de ruptura.
- `_globals.scss` reenvía variables y mixins con `@forward`. `_layout.scss` y `_components.scss` los cargan con `@use`.
- Las rejillas usan cuatro columnas a 390 px y doce a partir de 1024 px. Desde 640 px, las tarjetas de la landing se muestran en fila y ambas secciones de la inscripción siguen apiladas.
- Las tipografías se sirven desde el proyecto. Sus licencias están en `src/public/licenses/`.

El formulario valida los campos en el navegador. El botón muestra un mensaje de demostración y los datos permanecen en la página.

## GitHub Pages

Sube el contenido del proyecto a la raíz del repositorio. En **Settings → Pages**, selecciona **Deploy from a branch**, la rama `main` y la carpeta `/docs`. Guarda la configuración y abre la URL que muestra GitHub Pages.
