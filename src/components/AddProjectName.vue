<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo :title="composeStepTitle()" />
    </div>
    <div>
      <input
        v-model="projectNameInput"
        id="email"
        name="email"
        type="email"
        autocomplete="off"
        required
        class="appearance-none rounded-none w-navigation-button py-2 placeholder-gray-500 text-center text-black-light focus:outline-none focus:z-10"
        placeholder="Research Project"
      >
      <div class="border-t border-dashed">
        <NavigationButtonGroup :send="send" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { brand } from "@/data/api"
import StepInfo from "@/components/StepIntro"

export default {
	name: "AddProjectName",
	props: {
		send: Function,
	},
	components: {
		StepInfo,
		NavigationButtonGroup
	},
	setup(props) {
		function composeStepTitle() {
			return `What's the name of the project you want to use on ${brand.label}?`
		}
		return {
			composeStepTitle,
		}
	}
}
</script>

<style scoped></style>
