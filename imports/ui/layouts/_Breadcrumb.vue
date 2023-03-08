<template>
  <div class="breadcrumb">
    <q-breadcrumbs separator="/">
      <q-breadcrumbs-el
        v-for="(bc, index) in breadcrumbs"
        :key="`bc-${index}`"
        :to="bc.route"
        class="breadcrumb-item"
        active-class="is-active"
      >
        <span v-if="bc.icon">
          <i :class="bc.icon" />
        </span>
        {{ bc.title }}
        <!-- {{ $t(`breadcrumb.${bc.title}`) }} -->
      </q-breadcrumbs-el>
    </q-breadcrumbs>
  </div>
</template>

<script setup>
import { pick, concat } from 'lodash'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const currentRoute = computed(() => {
  return route
})

const breadcrumbs = computed(() => {
  let crumbList = []
  let parents = addParentRoute(currentRoute.value)
  parents.forEach((route) => {
    crumbList.push(getBreadcrumbs(route))
  })
  // Add last current route
  crumbList.push(getBreadcrumbs(currentRoute.value))

  return crumbList
})

const addParentRoute = (route) => {
  let parent = getParentRoute(route)
  // Check parent exist
  if (parent) {
    return concat(addParentRoute(parent), parent)
  }

  return []
}

const getParentRoute = (route) => {
  const parent = route.meta?.breadcrumb && route.meta?.breadcrumb?.parent
  if (parent) {
    return router.resolve({ name: parent })
  }

  return null
}

const getBreadcrumbs = (route) => {
  let crumb = {
    route: {},
    title: route.meta?.title || 'No-Title',
    icon: (route.meta?.breadcrumb && route.meta?.breadcrumb?.icon) || null,
  }
  // Check name
  if (route.name) {
    crumb.route.name = route.name
  } else {
    crumb.route.path = route.path
  }

  // Check params
  if (route.meta?.breadcrumb && route.meta?.breadcrumb?.params) {
    crumb.route.params = pick(
      currentRoute.value.params,
      route.meta?.breadcrumb?.params
    )
  }

  // Check query
  if (route.meta?.breadcrumb && route.meta?.breadcrumb?.query) {
    crumb.route.query = pick(
      currentRoute.value.query,
      route.meta.breadcrumb.query
    )
  }

  return crumb
}
</script>

<style lang="scss">
.breadcrumb-item {
  font-weight: bold;
  &.is-active {
    font-weight: normal;
  }
}
</style>
