import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from './common/router';
import naive from 'naive-ui'
import { createDiscreteApi } from 'naive-ui'
import axios from 'axios';
import { AdminStore } from './stores/AdminStore'

axios.defaults.baseURL = 'http://localhost:8080'

const { message, dialog, notification } = createDiscreteApi(["message", "dialog", "notification"])

const app = createApp(App)

app.provide('axios', axios)
app.provide('server_url', axios.defaults.baseURL)
app.provide('message', message)
app.provide('dialog', dialog)
app.provide('notification', notification)

app.use(createPinia())
app.use(router)
app.use(naive)

// // Make BootstrapVue available throughout your project
// app.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// app.use(IconsPlugin)
const adminStore = AdminStore()

axios.interceptors.request.use((config) => {
  config.headers.token = adminStore.token

  return config
})

app.mount('#app')
