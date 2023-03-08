import { Meteor } from 'meteor/meteor'
import { reactive, toRefs } from 'vue'
/**
 *
 * @param {*} methodName
 * @param {*} defaultValue
 *
 */
export default function useMethod(
  methodName,
  defaultValue = null
) {
  const state = reactive({
    loading: false,
    error: null,
    result: defaultValue,
  })

  const call = (...args) => {
    state.loading = true
    state.error = null
    state.result = defaultValue


    // Check args
    const newArgs = args.length ? args : []

    return new Promise((resolve, reject) => {
      Meteor.call(methodName, ...newArgs, (error, result) => {
        state.loading = false

        if (error) {
          state.error = error

          reject(error)
        } else {
          state.result = result

          resolve(result)
        }
      })
    })
  }


  return {
    // ...toRefs(state),
    call,
  }
}
