import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

export default router
