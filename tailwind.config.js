const colors = require("tailwindcss/colors")

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			ocean: {
				blur: "#abc0c8",
				// light: '',
				DEFAULT: "#059fa3",
				dark: "#1d5f75",
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
			black: {
				light: "#646464",
				DEFAULT: "#40474f",
				dark: "#212528",
			},
			white: {
				light: "#ebebeb",
				DEFAULT: colors.white,
			},
		},
		width: theme => ({
			...theme("spacing"),
			"navigation-button": "21.25rem",
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
