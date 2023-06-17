// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import theme from './theme'
import defaults from './defaults'

export default createVuetify({
  defaults,
  theme
})
