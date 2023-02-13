// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import '@fortawesome/fontawesome-free/js/all'

import { aliases, fa } from 'vuetify/iconsets/fa'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    }
  },
})

export default vuetify