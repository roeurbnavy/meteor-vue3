import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'

import App from './ui/layout/App.vue'
import { router } from './ui/router'

// Vuetify
import vuetify from './plugin/vuetify'

Meteor.startup(() => {


  const app = createApp(App)
  app.use(vuetify)
  app.use(router)
  app.use(VueMeteor)
  app.mount('#app')

})
