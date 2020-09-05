import 'destyle.css'
import 'remixicon/fonts/remixicon.css'

import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import {router} from './plugins/router'

const app = createApp(App)
app.use(router)
app.mount('#app')
