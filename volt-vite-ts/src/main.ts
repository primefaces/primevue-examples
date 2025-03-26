import PrimeVue from 'primevue/config';
import StyleClass from 'primevue/styleclass';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(PrimeVue, { unstyled: true });
app.directive('styleclass', StyleClass);
app.mount('#app');

