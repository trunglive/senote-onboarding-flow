<template>
  <div class="main-app-wrapper">
    <div class="main-content-wrapper">
      <div
        :class="
          isPhaseEntityLoaded
            ? isPhaseStepLoaded
              ? 'w-4/5'
              : 'w-1/2'
            : 'w-full'
        "
      >
        <div class="px-32 py-20">
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
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <Phase
            v-if="state.matches('analyzePhase')"
            :send="send"
            phase-name="analyze"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <Phase
            v-if="state.matches('prototypePhase')"
            :send="send"
            phase-name="prototype"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <StakeholderInterview
            v-if="state.matches('stakeholderInterview')"
            :send="send"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <UserInterview
            v-if="state.matches('userInterview')"
            :send="send"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <CompetitorAnalysis
            v-if="state.matches('competitorAnalysis')"
            :send="send"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <Personas
            v-if="state.matches('personas')"
            :send="send"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <SolutionValuation
            v-if="state.matches('solutionValuation')"
            :send="send"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <Flows
            v-if="state.matches('flows')"
            :send="send"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="state.value"
          />
          <ConfirmTrial
            v-if="state.matches('confirmTrial')"
            :send="send"
          />
        </div>
      </div>
      <div
        :class="
          isPhaseEntityLoaded
            ? isPhaseStepLoaded
              ? 'w-2/5'
              : 'w-1/2'
            : 'hidden'
        "
      >
        <Creator
          :is-phase-entity-loaded="isPhaseEntityLoaded"
          :is-phase-step-loaded="isPhaseStepLoaded"
          :current-state="state.value"
        />
      </div>
    </div>
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
  </div>
</template>
<script>
import { computed } from "vue"
import { useMachine } from "@xstate/vue"
import { userDataMachine } from "@/machines/userDataMachine"
import AddEmail from "@/components/AddEmail"
import AddPassword from "@/components/AddPassword"
import CustomizeFirstProject from "@/components/CustomizeFirstProject"
import AddProjectName from "@/components/AddProjectName"
import BusinessGoalIntroduction from "@/components/BusinessGoalIntroduction"
import DesignThinkingProcess from "@/components/DesignThinkingProcess"
import Phase from "@/components/Phase"
import Creator from "@/components/Creator"
import StakeholderInterview from "@/components/discover/StakeholderInterview"
import UserInterview from "@/components/discover/UserInterview"
import CompetitorAnalysis from "@/components/discover/CompetitorAnalysis"
import Personas from "@/components/analyze/Personas"
import SolutionValuation from "@/components/analyze/SolutionValuation"
import Flows from "@/components/analyze/Flows"
import ConfirmTrial from "@/components/ConfirmTrial"
import ProgressBar from "@/base/ProgressBar"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"

export default {
  name: "App",
  components: {
    NavigationButtonGroup,
    ProgressBar,
    AddEmail,
    AddPassword,
    CustomizeFirstProject, // skip
    AddProjectName,
    BusinessGoalIntroduction, // skip
    DesignThinkingProcess,
    Phase,
    Creator,
    StakeholderInterview,
    UserInterview,
    CompetitorAnalysis,
    Personas,
    SolutionValuation,
    Flows,
    ConfirmTrial,
  },
  setup() {
    const { state, send } = useMachine(userDataMachine)

    const phaseMap = {
      discoverPhase: [
        "stakeholderInterview",
        "userInterview",
        "competitorAnalysis",
      ],
      analyzePhase: [
        "problemValuation",
        "personas",
        "solutionValuation",
        "flows",
      ],
      prototypePhase: ["paperPrototype", "interactivePrototype"],
    }

    // phase entity includes both phase & phase steps
    const isPhaseEntityLoaded = computed(() =>
      [
        ...Object.keys(phaseMap),
        ...Object.values(phaseMap).flat(),
      ].some(entity => state.value.matches(entity))
    )

    const isPhaseStepLoaded = computed(() =>
      Object.values(phaseMap)
        .flat()
        .some(phaseStep => state.value.matches(phaseStep))
    )

    const calculateProgressBarPercentage = currentState => {
      console.log(currentState, "current state::")
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
      state,
      send,
      calculateProgressBarPercentage,
      isPhaseEntityLoaded,
      isPhaseStepLoaded,
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

.main-app-wrapper {
  position: relative;
}

.main-content-wrapper {
  display: flex;
  /*height: calc(100vh - 5rem);*/
}

.navigation-progress-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 5rem;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8rem;
  background-color: #fff;
  border-top: 1px solid #ddd;
}
</style>
