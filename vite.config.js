import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enabled by default
  ],
  meteor: {
    clientEntry: 'imports/main.js',
  },
  optimizeDeps: {
    exclude: ['vue-meteor-tracker'],
  },

})
