<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo
        v-show="!hideStepInfo"
        :title="composeStepTitle()"
      />
      <div
        class="mb-2"
        :class="!hideSwitchButtonGroup ? 'space-y-2.5 mt-6' : 'mt-2'"
      >
        <div
          v-for="step in currentPhase?.stepProcesses"
          :key="step.value"
          class="flex items-center justify-between"
        >
          <div
            v-if="step.enabled || !stepHiddenOnSwitchOff"
            class="flex items-center space-x-4"
          >
            <AppIcon :icon="step.icon" />
            <div class="text-black-light text-sm">
              <div
                class="m-2"
                :class="blurPhaseStepLabel && 'creator__item-name'"
              >
                {{ step.label }}
              </div>
            </div>
          </div>
          <div
            v-show="!hideSwitchButtonGroup"
            class="flex space-x-4"
          >
            <Switch
              :enabled="step.enabled"
              :value="step.value"
              @handleToggleSwitch="handleToggleSwitch"
            />
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
import { useStore } from "vuex"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AppIcon from "@/components/AppIcon"
import Switch from "@/base/Switch"
import StepInfo from "@/components/StepIntro"

export default {
	name: "Phase",
	props: {
		send: Function,
		phaseName: String,
		blurPhaseStepLabel: Boolean,
		hideStepInfo: Boolean,
		hideSwitchButtonGroup: Boolean,
		hideNavigationButtonGroup: Boolean,
		stepHiddenOnSwitchOff: Boolean,
	},
	components: {
		StepInfo,
		Switch,
		AppIcon,
		NavigationButtonGroup
	},
	setup(props) {
		const store = useStore()
		const designThinkingProcesses = computed(() => store.getters.designThinkingProcesses)
		const currentPhase = computed(() => designThinkingProcesses.value?.[props.phaseName]) // discover, analyze, prototype

		function composeStepTitle() {
			return `Choose your methods for the ${currentPhase.value?.label} Phase.`
		}

		function handleToggleSwitch(value) {
			store.dispatch("toggleSwitch", { phaseName: props.phaseName, value })
		}

		return {
			currentPhase,
			composeStepTitle,
			handleToggleSwitch,
		}
	}
}
</script>

<style scoped>
.creator__item-name {
	color: #646464;
	display: inline-block;
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
