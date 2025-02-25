import "./assets/styles/main.css";

import { createApp } from "vue";
import PrimeVue from "primevue/config";
import App from "./App.vue";
import Aura from "@primevue/themes/aura";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import FloatLabel from "primevue/floatlabel";
import Toolbar from "primevue/toolbar";
import ToggleSwitch from "primevue/toggleswitch";
import SelectButton from "primevue/selectbutton";
import StyleClass from "primevue/styleclass";

const app = createApp(App);

app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			darkModeSelector: ".p-dark",
		},
	},
});

app.component("Button", Button);
app.component("InputText", InputText);
app.component("FloatLabel", FloatLabel);
app.component("Toolbar", Toolbar);
app.component("ToggleSwitch", ToggleSwitch);
app.component("SelectButton", SelectButton);
app.directive("styleclass", StyleClass);

app.mount("#app");
