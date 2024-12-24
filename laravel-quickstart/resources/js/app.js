import './bootstrap';
import { createApp } from 'vue';
import App from './components/App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app');