import { createApp } from 'vue'
import App from './App.vue'
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'
import './style.css'

const app = createApp(App)

app.use(VueCookieComply)
app.mount('#app')

