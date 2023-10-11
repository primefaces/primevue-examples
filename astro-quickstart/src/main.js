import Button from "primevue/button";
import PrimeVue from "primevue/config";

import InputText from "primevue/inputtext";
import "./assets/main.css";

import "primevue/resources/themes/lara-dark-teal/theme.css";

export default (app) => {
  app.use(PrimeVue);

  app.component("Button", Button);

  app.component("InputText", InputText);
};
