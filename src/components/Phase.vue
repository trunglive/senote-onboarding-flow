<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo
        v-show="!hideStepInfo"
        :title="composeStepTitle()"
      />
      <div
        class="mt-6 mb-2"
        :class="!hideSwitchButtonGroup && 'space-y-2.5'"
      >
        <div
          v-for="step in currentPhase.stepProcesses"
          :key="step.value"
          class="flex items-center justify-between"
        >
          <div class="flex items-center space-x-4">
            <AppIcon :icon="step.icon" />
            <div class="text-black-light text-sm">
              <div
                class="creator__item-name"
              >
                {{ step.label }}
              </div>
            </div>
          </div>
          <div
            v-show="!hideSwitchButtonGroup"
            class="flex space-x-4"
          >
            <Switch />
            <div>?</div>
          </div>
        </div>
      </div>
    </div>
    <NavigationButtonGroup
      v-show="!hideNavigationButtonGroup"
      :send="send"
    />
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
		phaseName: String,
		hideStepInfo: Boolean,
		hideSwitchButtonGroup: Boolean,
		hideNavigationButtonGroup: Boolean,
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

<style scoped>
.creator__item-name {
	color: #646464;
	display: inline-block;
	margin: 0.5rem 0;
	outline: none;
	position: relative;
	right: 0;
	top: 0;
	transform: translateX(0px);
	transition: all 1s ease 0s;
	vertical-align: top;
}
.creator__item-name::after {
	background-color: #f6f8f9;
	content: "";
	height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	transition: all 0.4s ease 0s;
	width: 100%;
}
</style>
