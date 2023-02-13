<script setup>
import AppMenu from './AppMenu.vue'
</script>

<template>
  <v-layout>
    <v-navigation-drawer>
      <AppMenu />
    </v-navigation-drawer>

    <v-app-bar :elevation="2" title="Application">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>
    </v-app-bar>

    <v-main style="min-height: 300px">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-layout>
</template>
