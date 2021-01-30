<template>
  <ProgressBar :percentage="calculateProgressBarPercentage(state.value)" />
  <AddEmail
    v-if="state.matches('addEmail')"
    :send="send"
  />
  <AddPassword
    v-if="state.matches('addPassword')"
    :send="send"
  />
  <CustomizeFirstProject
    v-if="state.matches('customizeFirstProject')"
    :send="send"
  />
  <AddProjectName
    v-if="state.matches('addProjectName')"
    :send="send"
  />
  <BusinessGoalIntroduction
    v-if="state.matches('businessGoalIntroduction')"
    :send="send"
  />
  <DesignThinkingProcess
    v-if="state.matches('designThinkingProcesses')"
    :send="send"
  />
  <Phase
    v-if="state.matches('discoverPhase')"
    :send="send"
    phase-name="discover"
  />
  <Phase
    v-if="state.matches('analyzePhase')"
    :send="send"
    phase-name="analyze"
  />
  <Phase
    v-if="state.matches('prototypePhase')"
    :send="send"
    phase-name="prototype"
  />
</template>
<script>
import { ref } from "vue"
import { useMachine } from "@xstate/vue"
import { userDataMachine } from "@/machines/userDataMachine"
import { UserDataStates } from "@/machines/userDataMachine.types"
import AddEmail from "@/components/AddEmail"
import AddPassword from "@/components/AddPassword"
import CustomizeFirstProject from "@/components/CustomizeFirstProject"
import AddProjectName from "@/components/AddProjectName"
import BusinessGoalIntroduction from "@/components/BusinessGoalIntroduction"
import DesignThinkingProcess from "@/components/DesignThinkingProcess"
import Phase from "@/components/Phase"
import ProgressBar from "@/base/ProgressBar"

export default {
	name: "App",
	components: {
		ProgressBar,
		BusinessGoalIntroduction,
		AddEmail,
		AddPassword,
		CustomizeFirstProject,
		AddProjectName,
		DesignThinkingProcess,
		Phase,
	},
	setup() {
		const { state, send } = useMachine(userDataMachine)

		const calculateProgressBarPercentage = currentState => {
			const mapping = {
				addEmail: 10,
				addPassword: 20,
				customizeFirstProject: 30,
				addProjectName: 40,
				businessGoalIntroduction: 50,
				designThinkingProcesses: 60,
				discoverPhase: 70,
				analyzePhase: 80,
				prototypePhase: 90,
			}
			return mapping[currentState]
		}

		return {
			state,
			send,
			calculateProgressBarPercentage,
		}
	},
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");
#app {
	font-family: Lato, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
