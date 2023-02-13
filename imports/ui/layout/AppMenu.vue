<template>
  <v-list class="side-bar">
    <v-list-item
      v-for="(item, i) in menu"
      :value="item"
      :key="i"
      rounded="shaped"
      :active="$route.name == item.name"
    >
      <template v-if="item.icon" v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>

      <v-list-item-title
        @click="routeClick(item)"
        v-text="item.label"
      ></v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const menu = [
  {
    name: 'dashboard',
    label: 'Dashboard',
    icon: 'fa-solid fa-gauge',
  },
  {
    name: 'home',
    label: 'Home',
    icon: 'fa-solid fa-house',
  },
  {
    name: 'about',
    label: 'About',
    icon: 'fa-solid fa-users',
  },
]

const routeClick = (it) => {
  router.push({ name: it.name })
}
</script>
<style>
.side-bar {
  padding: 10px 5px 0px 5px !important;
}
</style>
