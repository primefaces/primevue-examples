import Button from "primevue/button"
import PrimeVue from "primevue/config"
import Toast from "primevue/toast"
import ToastService from "primevue/toastservice"
import InputText from "primevue/inputtext"



export default (app) => {
  app.use(PrimeVue)
  app.use(ToastService)

  app.component("Button", Button)
  app.component("Toast", Toast)
  app.component("InputText", InputText)
}