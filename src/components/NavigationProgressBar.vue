<template>
  <div class="navigation-progress-bar">
    <div class="text-black-light text-sm">
      {{ calculateProgressBarPercentage(state.value) }}% completed
    </div>
    <ProgressBar :percentage="calculateProgressBarPercentage(state.value)" />
    <NavigationButtonGroup
      :current-state="state.value"
      :disable-back-button="state.value === 'addEmail'"
      :send="send"
      custom-width="w-28"
      horizontal
    />
  </div>
</template>

<script>
import ProgressBar from "@/base/ProgressBar"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"

export default {
  name: "NavigationProgressBar",
  components: {
    NavigationButtonGroup,
    ProgressBar,
  },
  props: {
    state: Object,
    send: Function,
  },
  setup() {
    const calculateProgressBarPercentage = currentState => {
      // console.log(currentState, "current state::")
      const mapping = [
        "addEmail",
        "designThinkingProcesses",
        "discoverPhase",
        "analyzePhase",
        "prototypePhase",
        "stakeholderInterview",
        "userInterview",
        "competitorAnalysis",
        "personas",
        "solutionValuation",
        "flows",
        "confirmTrial",
      ]
      const percentageCompleted = (mapping.indexOf(currentState) / 11) * 100
      return Number(percentageCompleted).toFixed(0)
    }

    return {
      calculateProgressBarPercentage,
    }
  }
}
</script>

<style scoped>

</style>
