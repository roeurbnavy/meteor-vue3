import { createRouter, createWebHistory } from 'vue-router'

import routes from '/imports/ui/routes'

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some((record) => record.meta.public)

  if (isPublic) {
    next()
  } else {
    if (Meteor.userId()) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach((to, from) => {})

export default router