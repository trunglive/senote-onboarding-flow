<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo :title="composeStepTitle()" />
      <div class="space-y-2.5 mt-6 mb-2">
        <div
          v-for="step in currentPhase.stepProcesses"
          :key="step.value"
          class="flex items-center justify-between"
        >
          <div class="flex items-center space-x-4">
            <AppIcon :icon="step.icon" />
            <div class="text-black-light font-medium">
              {{ step.label }}
            </div>
          </div>
          <div class="flex space-x-4">
            <Switch />
            <div>?</div>
          </div>
        </div>
      </div>
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import { computed } from "vue"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AppIcon from "@/components/AppIcon"
import { brand, designThinkingProcesses } from "@/data/api"
import Switch from "@/base/Switch"
import StepInfo from "@/components/StepIntro"

export default {
	name: "Phase",
	props: {
		send: Function,
		phaseName: String
	},
	components: {
		StepInfo,
		Switch,
		AppIcon,
		NavigationButtonGroup
	},
	setup(props) {
		const currentPhase = computed(function() {
			return designThinkingProcesses[props.phaseName] // discover, analyze, prototype
		})

		function composeStepTitle() {
			return `Choose your methods for the ${currentPhase.value.label} Phase.`
		}

		return {
			currentPhase,
			composeStepTitle,
		}
	}
}
</script>

<style scoped></style>
