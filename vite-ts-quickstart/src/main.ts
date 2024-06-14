import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import Button from "primevue/button";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import App from "./App.vue";

import "./assets/main.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});
app.use(ToastService);

app.component("Button", Button);
app.component("Toast", Toast);

app.mount("#app");
