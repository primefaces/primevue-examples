import PrimeVue from "primevue/config";

// components
import Button from "primevue/button";

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;
  app.use(PrimeVue);

  // components
  app.component("Button", Button);
});
