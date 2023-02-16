<template>
  <v-form ref="refForm">
    <v-row>
      <v-col>
        <v-text-field
          v-model="form.name"
          :rules="rules.name"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          v-model="form.telephone"
          label="Telephone"
          required
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          v-model="form.address"
          label="Address"
          required
        ></v-text-field>
        <v-radio-group v-model="form.status" inline label="Status">
          <v-radio label="Active" value="active"></v-radio>
          <v-radio label="Inactive" value="inactive"></v-radio>
        </v-radio-group>
        <v-row>
          <v-col>
            <v-btn color="success" class="mr-4" @click="validate"> Save </v-btn>
            <v-btn color="error" @click="reset"> Cancel </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
</template>
<script setup>
import { ref } from 'vue'
const refForm = ref()
const form = ref({
  name: '',
  telephone: '',
  address: '',
  status: 'active',
})
const rules = {
  name: [
    (v) => !!v || 'Name is required',
    (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
}

const validate = async () => {
  const { valid } = await refForm.value.validate()

  if (valid) {
    Meteor.call('insertCustomer1', form.value, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        reset()
      }
    })
  }
}

const reset = () => {
  // refForm.value.resetValidation()
  refForm.value.reset()
}
</script>
