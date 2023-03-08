import { Meteor } from 'meteor/meteor'
import { createApp } from 'vue'
import { VueMeteor } from 'vue-meteor-tracker'

// @ts-ignore
import AppLayout from './AppLayout.vue'

// Plugin
import plugin from './plugin'

Meteor.startup(() => {
  const app = createApp(AppLayout)
  plugin(app)
  app.use(VueMeteor)
  app.mount('#app')
})
