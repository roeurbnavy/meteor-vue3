<template>
  <q-dialog
    v-model="visibleDialog"
    no-esc-dismiss
    no-backdrop-dismiss
    @hide="cancel()"
  >
    <q-card style="width: 70%; max-width: 80vw">
      <q-card-section>
        <div class="text-h6">Customer</div>
      </q-card-section>

      <q-card-section>
        <q-form ref="refForm">
          <div class="row q-col-gutter-sm">
            <div class="col">
              <q-input
                v-model="form.name"
                :rules="rules.name"
                label="Name *"
              ></q-input>

              <q-input
                v-model="form.telephone"
                label="Telephone"
                required
              ></q-input>
            </div>
            <div class="col">
              <q-input
                v-model="form.address"
                label="Address"
                required
              ></q-input>
              <div label="Status">
                <fieldset>
                  <legend>Sale type</legend>
                  <q-radio
                    v-model="form.status"
                    label="Active"
                    val="active"
                  ></q-radio>
                  <q-radio
                    v-model="form.status"
                    label="Inactive"
                    val="inactive"
                  ></q-radio>
                </fieldset>
              </div>
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-teal">
        <div class="text-right q-gutter-x-md">
          <q-btn color="primary" class="mr-4" @click="submit"> Save </q-btn>
          <q-btn v-if="showId" color="red" @click="remove"> Remove </q-btn>
          <q-btn outline color="primary" @click="cancel"> Cancel </q-btn>
        </div>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
export default {
  name: 'ComA',
}
</script>

<script setup>
import Notify from '/imports/ui/lib/notify'
import { ref, watch } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const props = defineProps({
  dialog: {
    type: Boolean,
    default: true,
  },
  showId: {
    type: String,
    default: null,
  },
})

const emit = defineEmits(['closed'])

// data properties
const refForm = ref()
const form = ref({
  name: '',
  telephone: '',
  address: '',
  status: 'active',
})
const visibleDialog = ref(false)

const rules = {
  name: [
    (v) => !!v || 'Name is required',
    (v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
  ],
}

const submit = async () => {
  const valid = await refForm.value.validate()

  if (valid) {
    if (form.value._id) {
      update()
    } else {
      insert()
    }
  }
}

const insert = () => {
  Meteor.call('insertCustomer', form.value, (err, res) => {
    if (err) {
      console.log(err)
      Notify.error({ message: err.reason || err })
    } else {
      Notify.success({ message: 'Success' })
      reset()
      cancel()
    }
  })
}

const update = () => {
  Meteor.call('updateCustomer', form.value, (err, res) => {
    if (err) {
      Notify.error({ message: err.reason || err })
    } else {
      Notify.success({ message: 'Success' })
      reset()
      cancel()
    }
  })
}

//remove
const remove = () => {
  $q.dialog({
    title: 'Confirm',
    message: `Do you want to remove [${form.value.name}] ?`,
    cancel: true,
    ok: {
      push: true,
    },
  }).onOk(() => {
    Meteor.call('removeCustomer', props.showId, (err, res) => {
      if (err) {
        Notify.error({ message: err.reason || err })
      } else {
        Notify.success({ message: 'Success' })
        cancel()
      }
    })
    //
  })
}

const reset = () => {
  // refForm.value.resetValidation()
  delete form.value._id
  refForm.value.reset()
  form.value.status = 'active'
}

// cancel
const cancel = () => {
  emit('closed', false)
}

watch(
  () => props.dialog,
  (value) => {
    visibleDialog.value = value
  }
)

watch(
  () => props.showId,
  (value) => {
    if (value) {
      Meteor.call('getCustomerById', value, (err, res) => {
        form.value = res
      })
    }
  }
)
</script>
