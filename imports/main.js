import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'

import App from '/imports/ui/layout/App.vue'
import { router } from './ui/router'

// Plugin
import plugin from './plugin'

Meteor.startup(() => {
  const app = createApp(App)
  plugin(app)
  app.use(router)
  app.use(VueMeteor)
  app.mount('#app')
})
