import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  appType: 'mpa',
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        proyectos: resolve(__dirname, 'proyectos.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        javascriptEnabled: true
      }
    }
  },
  optimizeDeps: {
    include: ['less']
  }
});