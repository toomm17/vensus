import { createRouter, createWebHistory } from 'vue-router';
import PlinkoView from '@/views/PlinkoView.vue';
import CrashView from '@/views/CrashView.vue';
import Promocode from '@/components/promocode/Promocode';

const routes = [
  {
    path: '/',
    name: 'Plinko',
    component: PlinkoView,
    meta: {
      title: 'Plinko',
    },
  },
  {
    path: '/crash',
    name: 'Crash',
    component: CrashView,
    meta: {
      title: 'Crash',
    },
  },
  {
    path: '',
    name: 'Promocode',
    component: Promocode,
    meta: {
      title: 'Vensus',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
