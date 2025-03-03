import "./assets/styles/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primeuix/themes/aura";

const app = createApp(App);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: ".p-dark",
		}
	},
});

app.mount("#app");
