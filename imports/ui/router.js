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
      path: '/home',
      name: 'home',
      component: Home,
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
