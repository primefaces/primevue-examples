import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'primevue/resources/themes/lara-dark-teal/theme.css'

import PrimeVue from 'primevue/config'

import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
const app = createApp(App)

app.use(PrimeVue, { ripple: true })

app.component('Button', Button)
app.component('InputText', InputText)
app.mount('#app')
