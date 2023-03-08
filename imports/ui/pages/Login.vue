<template>
  <div class="login-form">
    <div class="login-form-wrapper">
      <div class="login-form-item">
        <q-input
          ref="usernameRef"
          v-model="form.username"
          :autofocus="true"
          dense
          placeholder="Username"
          outlined
          bg-color="white"
          class="login-textbox"
          @focus="selectAll"
        >
          <template #prepend>
            <i class="login-icon fa fa-user" />
          </template>
        </q-input>
      </div>
      <div class="login-form-item">
        <q-input
          v-model="form.password"
          :type="passwordInput.type"
          dense
          placeholder="Password"
          style="border: none"
          outlined
          bg-color="white"
          class="login-textbox"
          @focus="selectAll"
          @keyup.enter="submit(usernameRef)"
        >
          <template #prepend>
            <i class="login-icon fas fa-lock" />
          </template>

          <template #append>
            <i
              :class="['login-icon', passwordInput.visibilityIcon]"
              style="cursor: pointer"
              @click="togglePasswordVisibility"
            />
          </template>
        </q-input>
      </div>

      <div class="login-btn-panel">
        <q-btn
          :loading="loading"
          :size="windowSize"
          type="primary"
          class="login-btn"
          @click="submit(usernameRef)"
        >
          Log in
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '../composables/useAuth'

const { loading, login } = useAuth()

// State
const form = ref({
  username: '',
  password: '',
})
const usernameRef = ref(null)
const windowSize = ref('default')
const passwordInput = ref({
  type: 'password',
  visibilityIcon: 'fas fa-eye',
})

// Method
const submit = (inputRef) => {
  const username = form.value.username
  const password = form.value.password
  login({ username, password }, inputRef)
}

const closeLoading = () => {
  setTimeout(() => {
    loading.value = false
  }, 300)
}

const resizeWindow = () => {
  if (!window) windowSize.value = 'default'

  // Check screen width
  if (window.innerWidth > 1025) {
    windowSize.value = 'default'
  } else {
    windowSize.value = 'small'
  }
}
const selectAll = (event) => {
  if (!event || !event.target || !event.target.select) return
  event.target.select()
}
const togglePasswordVisibility = () => {
  if (passwordInput.value.type === 'password') {
    passwordInput.value.type = 'text'
    passwordInput.value.visibilityIcon = 'fas fa-eye-slash'
  } else {
    passwordInput.value.type = 'password'
    passwordInput.value.visibilityIcon = 'fas fa-eye'
  }
}

onMounted(() => {
  // Get init window size
  resizeWindow()
  // Track window size
  window.addEventListener('resize', resizeWindow)
})

onUnmounted(() => {
  // Remove window resize event
  window.removeEventListener('resize', resizeWindow)
})
</script>

<style lang="scss" scoped>
// Variable
$small-screen: 'only screen and (min-width: 0px) and (max-width: 1025px)';

.login-form {
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  @media #{$small-screen} {
    padding: 16px 8px;
  }

  .login-form-wrapper {
    display: flex;
    flex-flow: column wrap;

    .login-form-item {
      margin-bottom: 16px;
      @media #{$small-screen} {
        margin-bottom: 12px;
      }

      .login-icon {
        font-size: 14px;
      }
    }

    .login-btn-panel {
      margin-top: 16px;
      @media #{$small-screen} {
        margin-top: 8px;
      }

      .q-btn {
        width: 100%;
        min-height: 32px;
        background-color: #ff782c;
        border-color: #ff782c;
        color: #fff;
        font-size: 1em;
        line-height: 1;
        letter-spacing: 0.05em;
        font-weight: 700;
        text-transform: uppercase;

        @media #{$small-screen} {
          font-size: 0.8em;
          letter-spacing: 0.02em;
        }

        &:hover,
        &:focus,
        &:active {
          border-color: #ff8623;
          background-color: #ff8623;
        }
      }
    }
  }
}
</style>
