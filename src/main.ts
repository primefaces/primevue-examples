import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';

import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primeflex/primeflex.css'
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          
import { createPinia } from 'pinia';
import router from './router/router';
const pinia = createPinia()
const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.use(pinia)
app.component('Button', Button);
app.component('Toast', Toast);

app.mount('#app');
