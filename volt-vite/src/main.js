import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import StyleClass from 'primevue/styleclass';

const app = createApp(App);
app.use(PrimeVue, { unstyled: true });
app.directive('styleclass', StyleClass);
app.mount('#app');
