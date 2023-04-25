import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
// import ToastService from 'primevue/toastservice';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import Toast from "vue-toastification";
import type { PluginOptions } from "vue-toastification";

import './assets/main.css'
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';          
import { createPinia } from 'pinia';
import router from './router/router';
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const Fa = Object.values({...FaIcons})
addIcons(...Fa);
const pinia = createPinia()
const app = createApp(App);

const option:PluginOptions = {}
app.use(router);
app.use(PrimeVue);
// app.use(ToastService);
app.use(pinia)
app.use(Toast,option)
app.component("v-icon", OhVueIcon);
app.mount('#app');
