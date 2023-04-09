import { createApp } from "vue";
import App from "./App.vue";
import i18n from "./i18n";
import PrimeVue from "primevue/config";
import Dropdown from "primevue/dropdown";
import ConfirmDialog from "primevue/confirmdialog";
import ConfirmationService from "primevue/confirmationservice";
import Button from "primevue/button";

import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);
app.use(ConfirmationService);

app.component("ConfirmDialog", ConfirmDialog);
app.component("Dropdown", Dropdown);
app.component("Button", Button);

app.mount("#app");
