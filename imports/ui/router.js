import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('./pages/Dashboard.vue'),
    },
    {
      path: '/customer',
      name: 'customer',
      component: () => import('./pages/Customers.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('./About.vue'),
    // },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('./Login.vue'),
    // },
  ],
})
