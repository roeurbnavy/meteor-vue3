import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./Dashboard.vue'),
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./CustomerForm.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./Login.vue'),
    },
  ],
})
