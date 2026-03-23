/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css' 
import { aliases, fa } from 'vuetify/iconsets/fa'

// Styles
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    // defaultSet: 'mdi',
    defaultSet: 'fa',
    aliases: {
      ...aliases,
      // web: 'mdi-web',
      // colorThemeDark: 'mdi-theme-light-dark',
      // colorThemeLight: 'mdi-theme-light-dark',
      web: 'fas fa-globe',
      colorThemeDark: 'fas fa-moon',
      colorThemeLight: 'far fa-moon',
    },
    sets: { fa },
  },
  theme: {
    defaultTheme: 'system',
    themes: {
      dark: {
        colors: {
          background: '#121212',
          "on-background": '#e4e4e4',
          surface: '#1e1e1e',
          "on-surface": '#4479ec',
        },
        variables: {
          'border-color': '#3f3f3f',
          'border-opacity': 1,
        },
      },
      light: {
        dark: false,
        colors: {
          background: '#f0f0f0',
          "on-background": '#292929',
          surface: '#ececec',
          "on-surface": '#e25151',
        },
        variables: {
          'border-color': '#cfcfcf',
          'border-opacity': 1,
        },
      },
    },
  },
  defaults: {
    global: { flat: true, hideDetails: 'auto' },
    VCard: { rounded: 'xl', class: 'pa-4' },
    VSheet: { rounded: 'xl', class: 'pa-4' },
    VTextField: {  rounded: 'lg', variant: 'outlined' },
    VTextarea: { rounded: 'lg', variant: 'outlined' },
  }
})

