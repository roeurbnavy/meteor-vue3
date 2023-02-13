<script setup>
import { ref } from 'vue'
import { subscribe, autorun } from 'vue-meteor-tracker'
import { ContactCollection } from '../api/contact'

subscribe('contacts')
const list = autorun(() => ContactCollection.find({}).fetch()).result

const form = ref({
  name: 'dary',
  email: 'dary@gmail.com',
  imageUrl: 'dary.png',
})
const called = ref(0)

const save = () => {
  called.value++
  Meteor.apply(
    'contact.insert',

    [{ ...form.value, called: called.value }],
    {
      throwStubExceptions: true,
      returnStubValue: true,
    },
    (err, res) => {
      console.log('error', err)
      console.log('res', res)
      called.value = 0
    }
  )

  // console.log('start')
  // for (let i = 0; i < 10; i++) {
  //   Meteor.call('a', i, function (err, res) {
  //     console.log('Result of a:', res)
  //     Meteor.call('b', i, function (e, r) {
  //       console.log('Result of b:', r)
  //     })
  //     console.log('After b is called. Have we seen the result of b yet?')
  //   })
  // }
  // console.log('finish')

  // console.log('start')
  // for (let i = 0; i < 10; i++) {
  //   Meteor.call('a', i, function (err, res) {
  //     console.log('Result of a:', res)
  //     Meteor.call('b', i, function (e, r) {
  //       console.log('Result of b:', r)
  //     })
  //     console.log('After b is called. Have we seen the result of b yet?')
  //   })
  // }
  // console.log('finish')
}

const remove = (id) => {
  Meteor.call('contact.remove', { contactId: id }, (err) => {
    console.log('err', err)
  })
}
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
