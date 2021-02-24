export default {
	getAll(state, data) {
		setAll(state, data)
	},
	toggleSwitch(state, { phaseName, value }) {
		state.designThinkingProcesses = {
			...state.designThinkingProcesses,
			[phaseName]: {
				...state.designThinkingProcesses[phaseName],
				stepProcesses: state.designThinkingProcesses[
					phaseName
				].stepProcesses.map(step => {
					if (step.value === value) {
						return {
							...step,
							enabled: !step.enabled,
						}
					}
					return step
				}),
			},
		}
	},
}

function setAll(state, data) {
	state.designThinkingProcesses = data
}
