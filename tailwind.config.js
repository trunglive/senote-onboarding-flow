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
		height: theme => ({
			...theme("spacing"),
			"navigation-button": "3.25rem",
		}),
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
