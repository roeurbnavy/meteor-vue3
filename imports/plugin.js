// Quasar
import { Quasar, AppFullscreen, Notify, Dialog, LoadingBar } from 'quasar'

// Import icon libraries
// import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
// import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

export default (app) => {
  app.use(Quasar, {
    plugins: {
      AppFullscreen,
      Notify,
      Dialog,
      LoadingBar,
    },
  })
}
