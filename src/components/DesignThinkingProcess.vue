<template>
  <navigation-progress-bar-wrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="flex flex-col items-center justify-center mt-16">
      <div class="flex flex-col w-navigation-button">
        <StepInfo :title="composeStepTitle()" />
        <div class="space-y-2.5 mt-6 mb-2">
          <div
            v-for="process in designThinkingProcesses"
            :key="process"
            class="flex items-center space-x-4"
          >
            <div
              :class="process.backgroundColor"
              class="flex items-center justify-center w-28 h-10 rounded-md font-bold text-lg text-white"
            >
              {{ process.label }}
            </div>
            <div class="text-lg text-black-light">
              {{ process.goal }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </navigation-progress-bar-wrapper>
</template>

<script>
import { brand, designThinkingProcesses } from "@/data/api"
import StepInfo from "@/components/StepIntro"
import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"

export default {
  name: "DesignThinkingProcess",
  props: {
    state: Object,
    send: Function,
  },
  components: {
    NavigationProgressBarWrapper,
    StepInfo,
  },
  setup(props) {
    function composeStepTitle() {
      return `${brand.label} is equipped with predefined design thinking processes
        divided into three phrases.`
    }

    const handleClickNext = () => {
      props.send("DESIGN_THINKING_PROCESS_NEXT");
    }

    return {
      brand,
      designThinkingProcesses,
      composeStepTitle,
      handleClickNext,
    }
  },
}
</script>

<style scoped></style>
