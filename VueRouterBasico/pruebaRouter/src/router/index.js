import Hello from '@/components/Hello.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Hello',
        component: Hello,
    }, {
        path: '/bye',
        name: 'ByeBye',
        component: () => import('@/components/ByeBye.vue'),
    }
  ],
})

export default router