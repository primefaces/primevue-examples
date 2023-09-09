import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Panel from "primevue/panel";
import Tailwind from "primevue/passthrough/tailwind";

const app = createApp(App);
app.component('Panel', Panel);
app.use(PrimeVue, {unstyled: true, pt: Tailwind});
app.mount('#app');
