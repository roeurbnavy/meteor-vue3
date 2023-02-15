<template>
  <v-list class="side-bar">
    <template v-for="(item, i) in menu" :key="i">
      <v-list-item
        :value="item"
        rounded="shaped"
        :active="$route.name == item.name"
        @click="routeClick(item)"
      >
        <template v-if="item.icon" v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>

        <v-list-item-title v-text="item.label"></v-list-item-title>
      </v-list-item>
    </template>
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
    name: '',
    label: 'Customer',
    icon: 'fa-solid fa-people-group',
  },
  {
    name: '',
    label: 'Sale',
    icon: 'fa-solid fa-house',
  },
  {
    name: '',
    label: 'Receipt',
    icon: 'fa-solid fa-users',
  },
  {
    name: '',
    label: 'Vendor',
    icon: 'fa-solid fa-truck',
  },
  {
    name: '',
    label: 'Purchase',
    icon: 'fa-solid fa-house',
  },
  {
    name: '',
    label: 'Payment',
    icon: 'fa-solid fa-users',
  },
  {
    name: '',
    label: 'Setting',
    icon: 'fa-solid fa-gears',
  },
]

const routeClick = (it) => {
  if (!it.name) return false
  router.push({ name: it.name })
}
</script>
<style>
.side-bar {
  padding: 10px 5px 0px 5px !important;
}
</style>
