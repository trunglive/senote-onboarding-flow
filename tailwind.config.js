const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ocean: {
        // light: '',
        DEFAULT: '#059fa3',
        dark: '#1d5f75',
      },
      blue: {
        light: '#a7c5eb',
        DEFAULT: '#51adcf',
        // dark: '',
      },
      black: {
        light: '#747474',
        DEFAULT: '#40474f',
        dark: '#212528',
      },
      white: {
        light: '#ebebeb',
        DEFAULT: colors.white,
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
