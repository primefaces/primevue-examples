import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [vue()],
    publicDir: false,
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: {
        lib: { entry: 'src/orders/mount.js', formats: ['es'], fileName: () => 'orders.js' },
        outDir: 'public/mfe',
        emptyOutDir: false
    }
});
