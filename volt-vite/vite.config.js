import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  resolve: {
    alias: [
      { find: /^@\/volt\/(.*)(?<!\.vue)$/, replacement: path.resolve(__dirname, './src/volt/$1/index.vue') },
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  }
});
