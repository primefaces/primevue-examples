import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";

import "./assets/tailwind.css";
import "./style.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
    theme: "none"
});

app.mount("#app");
