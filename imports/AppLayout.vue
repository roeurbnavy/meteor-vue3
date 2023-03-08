<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="layout"> </component>
    </transition>
  </div>
</template>

<script setup>
import { computed, watch, inject } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
// import { useI18n } from 'vue-i18n'
// import { subscribe, autoSubscribe, autoResult } from 'meteor/seamink:vue3'
// import Company from '/imports/api/company/company.js'
// import Branches from '/imports/api/branches/branches'
// Layouts
import layouts from './ui/layouts'

const route = useRoute()
const store = useStore()
// const i18n = useI18n()
// const $userIsInRole = inject(`$userIsInRole`)

// load current user
store.dispatch('app/loadCurrentUser')
// const currentUser = computed(() => store.state.app.currentUser)

// Dynamic layout
const layout = computed(() => {
  const layout = route?.meta?.layout || null

  return layouts[layout] || layouts['Main']
})

// Subscribe
// const { ready: companyReady } = subscribe('app.company')
// const company = autoResult(() => {
//   if (companyReady.value) return Company.findOne()
// })

// const branchSelector = computed(() => {
//   let allowedBranches = currentUser?.value?.profile?.allowedBranches || []
//   const selector = {}
//   const isSuper = $userIsInRole('super')

//   if (!isSuper) selector['_id'] = { $in: allowedBranches }

//   return selector
// })

// const { ready: branchReady } = autoSubscribe(() => [
//   'app.branches',
//   branchSelector.value,
// ])
// const branches = autoResult(() => {
//   if (branchReady.value) return Branches.find().fetch()
// })

// // Watch
// watch(company, (value) => {
//   // Set default Lang
//   i18n.locale.value = value?.setting?.lang || 'en'
//   store.dispatch('app/updateCompany', value)
// })

// watch(branches, (value) =>
//   store.dispatch('app/updateAllowedBranches', value)
// )
</script>

<style lang="scss" scope></style>
