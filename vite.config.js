import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {quasar,transformAssetUrls} from '@quasar/vite-plugin'
export default defineConfig({
  plugins: [
    vue({
      template: {transformAssetUrls}
    }),
    // quasar({
    //   // sassVariables:'imports/ui/styles/quasar.variables.sass'
    // })
  ],
  meteor: {
    clientEntry: 'imports/main.js',
  },
  optimizeDeps: {
    exclude: ['vue-meteor-tracker'],
  },

})
