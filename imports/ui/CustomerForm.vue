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
            <v-btn color="success" class="mr-4" @click="submit">
              Save
              <v-icon icon="fa-solid fa-floppy-disk"></v-icon>
            </v-btn>
            <v-btn color="error" @click="reset">
              Cancel
              <v-icon>
                <i class="fa-solid fa-rotate-right"></i>
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-form>
  <v-table class="mt-6">
    <thead>
      <tr>
        <th class="text-left">Name</th>
        <th class="text-left">Telephone</th>
        <th class="text-left">Address</th>
        <th class="text-left">Status</th>
        <th class="text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="it in list" :key="it.name">
        <td>{{ it.name }}</td>
        <td>{{ it.telephone }}</td>
        <td>{{ it.address }}</td>
        <td>{{ it.status }}</td>
        <td>
          <v-btn
            color="success"
            icon="fa-regular fa-pen-to-square"
            size="x-small"
            @click="edit(it)"
            class="mr-4"
          ></v-btn>
          <v-btn
            color="error"
            icon="fa-solid fa-trash"
            size="x-small"
            @click="remove(it._id)"
          ></v-btn>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
<script>
export default {
  name: 'ComA',
}
</script>

<script setup>
import { ref, onMounted, watch, computed } from 'vue'

// data properties
const refForm = ref()
const list = ref([])
const form = ref({
  name: '',
  telephone: '',
  address: '',
  // qty: 0,
  // price: 0,
  status: 'active',
})

const num = ref(0)
const str = ref('')
const obj = ref({})

const rules = {
  name: [
    (v) => !!v || 'Name is required',
    (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
}

// method
const fetchData = () => {
  Meteor.call('findCustomers', (err, res) => {
    if (err) {
      console.log('error', err)
    } else {
      // this.list = res
      list.value = res
    }
  })
}

const submit = async () => {
  console.log('refForm', refForm.value)
  const { valid } = await refForm.value.validate()
  console.log('valid', valid)
  if (valid) {
    if (form.value._id) {
      update()
    } else {
      insert()
    }
  }
}

const insert = () => {
  console.log('insert', form.value)
  // delete form.value.name
  // form.value.name = ''
  Meteor.call('insertCustomer', form.value, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      reset()
      fetchData()
    }
  })
}

const edit = (row) => {
  form.value = { ...row }
}

const update = () => {
  console.log('update', form.value)
  Meteor.call('updateCustomer', form.value, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      reset()
      fetchData()
    }
  })
}

const remove = (id) => {
  console.log(id)
  Meteor.call('removeCustomer', id, (err, res) => {
    if (err) {
      console.log(err)
    } else {
      fetchData()
    }
  })
}

const reset = () => {
  // refForm.value.resetValidation()
  delete form.value._id
  refForm.value.reset()
  form.value.status = 'active'
  // form.value = {
  //   name:'',
  //   telephone:'',
  //   address:'',
  //   status:'active'
  // }
}

// const status = ref('')
// watch(
//   () => form.value.name,
//   (value) => {
//     console.log('name change', value)
//   }
// )
// watch(
//   () => form.value.telephone,
//   (value) => {
//     console.log('telephone change', value)
//   }
// )

// life cycle
onMounted(() => {
  fetchData()
})
</script>
