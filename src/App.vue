<template>
  <div class="flex">
    <div
      :class="
        isPhaseEntityLoaded ? (isPhaseStepLoaded ? 'w-3/5' : 'w-1/2') : 'w-full'
      "
    >
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
      <ConfirmTrial
        v-if="state.matches('confirmTrial')"
        :send="send"
      />
    </div>
    <div
      :class="
        isPhaseEntityLoaded ? (isPhaseStepLoaded ? 'w-2/5' : 'w-1/2') : 'hidden'
      "
    >
      <Creator
        :is-phase-step-loaded="isPhaseStepLoaded"
        :current-state="state.value"
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
import ProgressBar from "@/base/ProgressBar"
import ConfirmTrial from "@/components/ConfirmTrial"
import Creator from "@/components/Creator"
import StakeholderInterview from "@/components/discover/StakeholderInterview"
import UserInterview from "@/components/discover/UserInterview"
import CompetitorAnalysis from "@/components/discover/CompetitorAnalysis"
import Personas from "@/components/analyze/Personas"

export default {
  name: "App",
  components: {
    Personas,
    CompetitorAnalysis,
    ConfirmTrial,
    ProgressBar,
    BusinessGoalIntroduction,
    AddEmail,
    AddPassword,
    CustomizeFirstProject,
    AddProjectName,
    DesignThinkingProcess,
    Phase,
    Creator,
    StakeholderInterview,
    UserInterview
  },
  setup() {
    const { state, send } = useMachine(userDataMachine)

    const phaseMap = {
      discoverPhase: [
        "stakeholderInterview",
        "userInterview",
        "competitorAnalysis"
      ],
      analyzePhase: [
        "problemValuation",
        "personas",
        "solutionValuation",
        "flows"
      ],
      prototypePhase: ["paperPrototype", "interactivePrototype"]
    }

    // phase entity includes both phase & phase steps
    const isPhaseEntityLoaded = computed(() =>
      [
        ...Object.keys(phaseMap),
        ...Object.values(phaseMap).flat()
      ].some(entity => state.value.matches(entity))
    )

    const isPhaseStepLoaded = computed(() =>
      Object.values(phaseMap)
        .flat()
        .some(phaseStep => state.value.matches(phaseStep))
    )

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
        confirmTrial: 100
      }
      return mapping[currentState]
    }

    return {
      state,
      send,
      calculateProgressBarPercentage,
      isPhaseEntityLoaded,
      isPhaseStepLoaded
    }
  }
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
