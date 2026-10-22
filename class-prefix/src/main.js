import './site.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import App from './App.vue';

createApp(App)
    .use(PrimeVue, {
        theme: {
            preset: Aura,
            options: { classPrefix: 'nr' }
        }
    })
    .mount('#app');
