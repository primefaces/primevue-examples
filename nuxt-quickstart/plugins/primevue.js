import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("InputText", InputText);

  //other components that you need
});
