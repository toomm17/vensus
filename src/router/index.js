import { createRouter, createWebHistory } from 'vue-router'
import RouletteView from '@/views/RouletteView.vue'
import PlinkoView from '@/views/PlinkoView.vue'
import CrashView from '@/views/CrashView.vue'

const routes = [
  {
    path: '/',
    name: 'Roulette',
    component: RouletteView
  },
  {
    path: '/plinko',
    name: 'Plinko',
    component: PlinkoView
  },
  {
    path: '/crash',
    name: 'Crash',
    component: CrashView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
