import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-teal/theme.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app');
