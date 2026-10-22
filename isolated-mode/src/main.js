import './site.css';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { withIsolation } from '@primevue/core/isolation';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import { definePreset } from '@primeuix/themes';
import ShopApp from './ShopApp.vue';
import StaffPanel from './StaffPanel.vue';

createApp(ShopApp)
    .use(PrimeVue, {
        theme: { preset: Aura }
    })
    .mount('#shop');

const StaffPreset = definePreset(Lara, {
    semantic: { primary: { 50: '{indigo.50}', 100: '{indigo.100}', 200: '{indigo.200}', 300: '{indigo.300}', 400: '{indigo.400}', 500: '{indigo.500}', 600: '{indigo.600}', 700: '{indigo.700}', 800: '{indigo.800}', 900: '{indigo.900}', 950: '{indigo.950}' } }
});

createApp(StaffPanel)
    .use(PrimeVue, {
        theme: { preset: StaffPreset },
        isolation: withIsolation({ key: 'staff' })
    })
    .mount('#staff');
