# Cota Baja · Práctica 3.1

Esta es mi práctica 3.1 de Diseño de Interfaces Web (2.º de DAW). El objetivo era maquetar una landing y un formulario responsive con HTML, SASS y Vite, partiendo del diseño que hice en Figma para Cota Baja.

Cota Baja es un club de senderismo inventado. En la página principal se presenta el club y su próxima salida, y con el botón «Reservar plaza» se llega al formulario de inscripción.

## Enlaces

- [Ver la web publicada](https://victorrr01sl.github.io/cota-baja-p31/)
- [Ver el diseño en Figma](https://www.figma.com/design/F77MmWw9TfOwpT6D1cWRyg)

## Cómo ejecutarlo

Necesitas Node.js instalado, en una versión que sea compatible con Vite 7.

Abre una terminal en la carpeta del proyecto e instala las dependencias:

```bash
npm install
```

Luego arranca el servidor de desarrollo:

```bash
npm run dev
```

En la terminal aparecerá la dirección que tienes que abrir en el navegador.

## Versión de producción

Para generar la versión final:

```bash
npm run build
```

Así se crean los archivos de las dos páginas dentro de la carpeta `docs`.

Si quieres ver esa versión en local antes de subirla:

```bash
npm run preview
```

Lo he probado en mi ordenador y `npm run build` termina sin errores.

## Cómo está organizado

- `src/index.html`: la página principal.
- `src/formulario.html`: el formulario.
- `src/main.js`: carga los estilos y gestiona el mensaje que aparece al enviar el formulario.
- `src/assets`: imágenes, fuentes y sus licencias.
- `src/styles`: los parciales de SASS.
- `docs`: la versión que está publicada.
- `vite.config.js`: aquí configuro las dos entradas HTML y la carpeta de salida.

He separado los estilos en variables, mixins, estilos globales, layout y componentes, y `main.scss` los carga todos con `@use`.

## Cómo he usado SASS

En las variables están los colores, las fuentes, los tamaños y los espacios que salen en el diseño.

Uso dos mapas: uno para los breakpoints y otro para la escala tipográfica. Con los mixins evito repetir las reglas de las rejillas, la tipografía, los paneles y las media queries.

También he usado anidamiento para ordenar cada componente junto con sus estados, por ejemplo, el cambio de color de los botones al pasar el ratón por encima.

## Responsive

Empecé por la versión móvil y fui ampliando desde ahí:

- En pantallas pequeñas todo va en una sola columna.
- A partir de 640 px, las tarjetas de la página principal se ponen en fila.
- A partir de 1024 px, paso a una rejilla de doce columnas y el formulario se coloca al lado del resumen de la ruta.

En móvil he puesto el resumen de la salida antes del formulario, para que se vea primero qué estás reservando.

## El formulario

El formulario comprueba que estén rellenos los campos obligatorios, que el correo tenga un formato válido y que el número de personas sea un número entero mayor que cero.

Si todo está bien, aparece un mensaje de confirmación. Es solo una demostración: no se hace ninguna reserva real ni se envían los datos a ningún servidor.

## Publicación

La web está en GitHub Pages y se sirve desde la carpeta `docs` de la rama `main`. En esa carpeta está la compilación que genero con Vite y que subo al repositorio.

## GitHub Pages

El repositorio publica la rama `main` y la carpeta `/docs`. Esta selección se configura en **Settings → Pages → Deploy from a branch**.

Después de modificar el proyecto, ejecuta `npm run build` y sube los cambios de `src/` y `docs/` al repositorio. GitHub Pages publicará la carpeta actualizada.
