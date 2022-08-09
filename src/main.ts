import { createApp } from 'vue'
import App from './App.vue'
import VueCookieComply from 'vue-cookie-comply'
import 'vue-cookie-comply/dist/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* import fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

const app = createApp(App)

app.use(VueCookieComply)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

