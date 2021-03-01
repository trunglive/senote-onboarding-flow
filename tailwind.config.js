const colors = require("tailwindcss/colors")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ocean: {
        light: "#abc0c8",
        DEFAULT: "#059fa3",
        dark: "#036f72",
        "dark-2": "#1b4962",
      },
      blue: {
        light: "#a7c5eb",
        DEFAULT: "#51adcf",
        // dark: '',
      },
      navyBlue: {
        light: "",
        DEFAULT: "",
        dark: "#192361",
      },
      purple: {
        light: "",
        DEFAULT: "",
        dark: "#4f1a62",
      },
      red: {
        DEFAULT: "#d0021b",
      },
      black: {
        light: "#646464",
        DEFAULT: "#40474f",
        dark: "#212528",
      },
      white: {
        light: "#f8f9fa",
        "light-2": "#f2f4f6",
        DEFAULT: colors.white,
        dark: "#e6edf0",
        "dark-2": "hsla(0, 0%, 92.9%, .92)",
      },
    },
    width: theme => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      min: "min-content",
      max: "max-content",
      "navigation-button": "21.25rem",
      "long-input": "30rem",
    }),
    height: theme => ({
      auto: "auto",
      ...theme("spacing"),
      "base-select-input": "2.6rem",
      full: "100%",
      screen: "100vh",
      "navigation-button": "3.25rem",
    }),
    borderWidth: theme => ({
      1: "1px",
    }),
    extend: {
      outline: {
        red: "1px solid #d0021b",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
