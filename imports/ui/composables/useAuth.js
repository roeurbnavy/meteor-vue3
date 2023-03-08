import Notify from '../lib/notify'
import { useRouter } from 'vue-router'
import { ref } from 'vue'


export default ()=>{
  const router = useRouter()

  const loading = ref(false)

  const login = ({username,password},inputRef) => {
    loading.value = true
    Meteor.loginWithPassword(username,password, (err) => {
      if (err) {
        Notify.error({ message: 'Username or password is incorrect' })
        inputRef.focus()
        closeLoading()
      } else {
        router.push({ name: 'Dashboard' })
        closeLoading()
      }
    })
  }

  const logout = () => {
    Meteor.logout((err) => {
      if (err) {
        Notify.error({ message: err.reason || err })

      } else {
        router.push('/login')
      }
    })
  }

  const closeLoading = () => {
    setTimeout(() => {
      loading.value = false
    }, 300)
  }

  return {loading,logout,login}
}