<script setup>
import { ref } from 'vue'

const list = ref([])
const form = ref({
  name: 'dary',
  email: 'dary@gmail.com',
  imageUrl: 'dary.png',
})

const save = () => {}
const remove = () => {}
</script>

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.name"
            label="Name"
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.email"
            label="Email"
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-text-field
            v-model="form.imageUrl"
            label="Image Url"
            variant="solo"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="3">
          <v-btn @click="save" color="primary" size="large">Save</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-card class="mx-auto" max-width="800">
    <v-list>
      <v-list-subheader>Contact List</v-list-subheader>
      <v-list-item
        v-for="(it, index) in list"
        :key="index"
        :title="it.name"
        :subtitle="it.email"
      >
        <template v-slot:append>
          <v-btn @click="remove(it._id)" color="error">remove</v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
