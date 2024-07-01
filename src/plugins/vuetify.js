/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const customColors = {
  dark: true,
  colors: {
    'alphabeta-red': '#ed3237',
    'alphabeta-grey': '#373435',
  },
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customColors',
    themes: {
      customColors,
    }
  },
})
