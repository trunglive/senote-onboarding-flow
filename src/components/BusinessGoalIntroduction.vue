<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo :title="composeStepTitle()" />
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { brand } from "@/data/api"
import StepInfo from "@/components/StepIntro"

export default {
	name: "BusinessGoalIntroduction",
	props: {
		send: Function,
	},
	components: {
		StepInfo,
		NavigationButtonGroup
	},
	setup() {
		function composeStepTitle() {
			return `${brand.label} is designed for easy collaboration with your clients
        and team members on new product research.`
		}
		return {
			composeStepTitle,
		}
	}
}
</script>

<style scoped></style>
