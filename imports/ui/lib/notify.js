import { Notify } from 'quasar'

export default {
  success({ message, position = 'top' }) {
    message = message || 'Your transaction is success'
    Notify.create({
      message,
      icon: 'check',
      textColor: 'white',
      color: 'positive',
      position,
      actions: [
        { icon: 'close', color: 'grey-3', size: 'xs', round: true, flat: true },
      ],
    })
  },
  warning({ message, position = 'top' }) {
    message = message || 'Warning'
    Notify.create({
      message,
      icon: 'warning',
      textColor: 'white',
      color: 'warning',
      position: 'top',
      actions: [
        { icon: 'close', color: 'grey-3', size: 'xs', round: true, flat: true },
      ],
    })
  },
  info({ message, position = 'top' }) {
    message = message || 'Info'
    Notify.create({
      message,
      icon: 'info',
      textColor: 'white',
      color: 'info',
      position: 'top',
      actions: [
        { icon: 'close', color: 'grey-3', size: 'xs', round: true, flat: true },
      ],
    })
  },
  error({ message, position = 'top' }) {
    message = message || 'Your transaction is error'
    Notify.create({
      message,
      icon: 'error',
      textColor: 'white',
      color: 'negative',
      position,
      actions: [
        { icon: 'close', color: 'grey-3', size: 'xs', round: true, flat: true },
      ],
    })
  },
}
