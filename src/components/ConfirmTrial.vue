<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo :title="composeStepTitle()" />
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import StepInfo from "@/components/StepIntro"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"

export default {
	name: "ConfirmTrial",
	props: {
		send: Function,
	},
	components: { StepInfo, NavigationButtonGroup },
	setup() {
		function composeStepTitle() {
			return "That’s it! You’re ready to go. Start your free 7-days trial."
		}
		return {
			composeStepTitle,
		}
	},
}
</script>

<style scoped></style>
