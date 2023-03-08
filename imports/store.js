import { createStore } from 'vuex'

// Modules
import app from '/imports/ui/store'

const store = createStore({
  modules: {
    ...app,
  },
})

export default store
