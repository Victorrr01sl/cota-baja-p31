# Cota Baja · Práctica 3.1

Landing y formulario responsive para un club ficticio de senderismo, desarrollados con HTML semántico, SASS y Vite a partir del sistema de diseño de la práctica 1.1.

- [Web publicada en GitHub Pages](https://victorrr01sl.github.io/cota-baja-p31/)
- [Diseño de escritorio y móvil en Figma](https://www.figma.com/design/F77MmWw9TfOwpT6D1cWRyg?node-id=7-47)

El prototipo incluye ambas pantallas a 1440 y 390 px, con un flujo de navegación para cada ancho.

## Desarrollo local

Se necesita una versión de Node.js que cumpla `^20.19.0 || >=22.12.0`, según `package.json`, y npm.

1. Descarga o clona el repositorio y abre una terminal dentro de la carpeta que contiene `package.json`.
2. Instala las dependencias.

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo.

   ```bash
   npm run dev
   ```

4. Abre la dirección que muestra la terminal. Vite actualiza la página al guardar cambios en `src/`.
5. Detén el servidor con `Ctrl + C` cuando termines.

## Compilación y vista previa

Desde la raíz del proyecto, genera la versión de producción.

```bash
npm run build
```

Vite toma `src/` como raíz y está configurado para compilar `index.html` y `formulario.html` en `docs/`. La configuración de entradas múltiples está en `build.rollupOptions.input`. La opción `base: './'` permite usar rutas relativas bajo el nombre del repositorio.

Después de compilar, revisa el resultado con este comando y abre la dirección que indique la terminal.

```bash
npm run preview
```

Edita los archivos de `src/` y vuelve a compilar para actualizar la versión publicada.

## Organización

| Archivo o carpeta | Función |
| --- | --- |
| `src/index.html` | Landing del club y próxima salida |
| `src/formulario.html` | Formulario y resumen de la ruta |
| `src/main.js` | Importación de SASS y respuesta del formulario |
| `src/styles/_variables.scss` | Valores del sistema de diseño y mapas |
| `src/styles/_mixins.scss` | Reglas reutilizables y gestor de media queries |
| `src/styles/_globals.scss` | Reenvío de variables y mixins |
| `src/styles/_layout.scss` | Distribución general y rejillas |
| `src/styles/_components.scss` | Botones, campos, tarjetas, cabecera y pie |
| `src/styles/main.scss` | Entrada de los estilos |
| `src/assets/` | Ilustraciones SVG y fuentes locales |
| `src/public/` | Licencias y archivos que se copian directamente a la salida |
| `docs/` | Sitio estático servido por GitHub Pages |
| `vite.config.js` | Raíz, entradas HTML y carpeta de salida |

## Maquetación y SASS

Los valores de color, espaciado, rejilla y escala tipográfica de Figma se trasladaron a `_variables.scss`. Este archivo contiene también los tamaños adicionales necesarios para la web.

- Los mapas `$breakpoints` y `$type-scale` organizan los puntos de ruptura y la tipografía.
- Los mixins `respond-to`, `type`, `grid`, `panel` y `focus-ring` reutilizan las reglas de media queries, tipografía, rejillas, superficies y foco.
- `_globals.scss` reenvía variables y mixins con `@forward`. Los parciales se cargan con `@use`.
- El anidamiento organiza los elementos de cada componente y los estados `:hover`, `:active` y `:focus-visible`.
- Los botones incluyen una transición de color que respeta la preferencia de movimiento reducido.

La implementación sigue un enfoque mobile first.

| Ancho | Comportamiento |
| --- | --- |
| Menos de 640 px | Rejillas de cuatro columnas, bloques a todo el ancho y tarjetas apiladas |
| Desde 640 px | Tarjetas de la landing en tres columnas; resumen y formulario apilados |
| Desde 1024 px | Rejillas de doce columnas; presentación y zonas de inscripción en paralelo |

La landing reparte su presentación en cinco columnas para el texto y siete para la ilustración en escritorio. En la inscripción, el formulario ocupa siete columnas y el resumen cinco. En móvil, el resumen aparece antes de los campos.

Las tipografías Bricolage Grotesque y DM Sans se sirven desde el proyecto. Sus licencias están en `src/public/licenses/`.

## Formulario y accesibilidad

El formulario utiliza `required`, `type="email"`, `min="1"` y `step="1"` para la validación del navegador. JavaScript evita el envío y muestra un mensaje de demostración. Los datos permanecen en la página.

Se incluyen etiquetas asociadas a los campos, foco visible, un enlace para saltar al contenido, textos alternativos y una región `role="status"` para el resultado.

## Comprobaciones realizadas

La versión estática incluida en `docs/` se revisó a 320, 390, 640, 768, 1024 y 1440 px. Se comprobó el ajuste del contenido, la navegación entre ambas páginas y la validación del formulario. También se verificó la navegación en la web pública.

Queda pendiente verificar el servidor de desarrollo y la compilación real con Vite. En el entorno de preparación falló la descarga de dependencias de npm. La copia estática de `docs/` se preparó mediante un proceso alternativo a partir de los archivos fuente. Ejecutar `npm run build` reemplazará esa copia por la salida de Vite.

## GitHub Pages

El repositorio publica la rama `main` y la carpeta `/docs`. Esta selección se configura en **Settings → Pages → Deploy from a branch**.

Después de modificar el proyecto, ejecuta `npm run build` y sube los cambios de `src/` y `docs/` al repositorio. GitHub Pages publicará la carpeta actualizada.
