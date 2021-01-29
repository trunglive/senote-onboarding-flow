module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		// add more generic rule sets here, such as:
		// "plugin:vue/vue3-essential",
		"plugin:vue/vue3-strongly-recommended",
		// 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
		// 'eslint:recommended',
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		// override/add rules settings here, such as:
		"vue/no-unused-vars": "error",
	},
}
