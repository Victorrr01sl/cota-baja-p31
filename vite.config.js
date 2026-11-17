import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const pathFromConfig = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  root: pathFromConfig('./src'),
  base: './',
  build: {
    outDir: pathFromConfig('./docs'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        landing: pathFromConfig('./src/index.html'),
        formulario: pathFromConfig('./src/formulario.html'),
      },
    },
  },
});
