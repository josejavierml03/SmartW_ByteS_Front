/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

import { createPinia } from 'pinia'

import router from '@/router'

const pinia = createPinia()
const app = createApp(App)

.use(pinia)

.use(router)

registerPlugins(app)

app.mount('#app')

