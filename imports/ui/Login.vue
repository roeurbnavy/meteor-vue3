<template>
  <!-- <h1>Login</h1> -->
  <v-btn @click="generate">Generate a new code</v-btn>
  <img :src="path" width="20" />
</template>
<script setup>
import { Accounts } from 'meteor/accounts-base'
import { ref } from 'vue'

const path = ref()
const qrCode = ref()

const generate = () => {
  Accounts.generate2faActivationQrCode('Rabbit', (err, svg) => {
    if (err) {
      console.error(err)
      return
    }

    qrCode.value = Buffer.from(svg).toString('base64')
    path.value = `data:image/svg+xml;base64,${qrCode.value}`
  })
}
</script>
