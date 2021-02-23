export default {
	getAll(state, data) {
		setAll(state, data)
	},
}

function setAll(state, data) {
	state.designThinkingProcesses = data
}
