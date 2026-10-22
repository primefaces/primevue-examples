import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Shell from './Shell.vue';
import './shell.css';

createApp(Shell)
    .use(PrimeVue, { theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })
    .mount('#shell');
