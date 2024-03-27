import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Teams from '@/views/Teams.vue'
import Mision from '@/views/Mision.vue'
import Operativo from '@/views/Operativo.vue'

const routes= [
  {path: '/', name: 'Home', component: Home},
  {path: '/teams', name: 'Teams', component: Teams},
  {path: '/mision', name: 'Mision', component: Mision},
  {path: '/operativo', name: 'Operativo', component: Operativo}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
