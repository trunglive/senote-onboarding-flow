<template>
  <div class="creator-wrapper">
    <div class="creator-inner">
      <div class="text-3xl mb-8">
        Research Me
      </div>
      <div>
        <div>
          <div class="text-black-light font-medium">
            Phase 1 - Discover
          </div>
          <Phase
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="currentState"
            phase-name="discover"
            hide-step-info
            hide-switch-button-group
            hide-navigation-button-group
            step-hidden-on-switch-off
          />
        </div>
        <div>
          <div class="text-black-light font-medium">
            Phase 2 - Analyze
          </div>
          <Phase
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="currentState"
            phase-name="analyze"
            :blur-phase-step-label="currentState.value === 'discoverPhase'"
            hide-step-info
            hide-switch-button-group
            hide-navigation-button-group
            step-hidden-on-switch-off
          />
        </div>
        <div>
          <div class="text-black-light font-medium">
            Phase 3 - Prototype
          </div>
          <Phase
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="currentState"
            phase-name="prototype"
            :blur-phase-step-label="currentState.value === 'discoverPhase' || currentState.value === 'analyzePhase'"
            hide-step-info
            hide-switch-button-group
            hide-navigation-button-group
            step-hidden-on-switch-off
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Phase from "@/components/Phase"

export default {
  name: "Creator",
  props: {
    isPhaseStepLoaded: Boolean,
    currentState: Object
  },
  components: { Phase }
  // components: { Abstract },
}
</script>

<style scoped>
.creator-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("icons/Abstract.svg");
}

.creator-inner {
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 600px;
  padding: 30px 50px 50px 50px;
  background-color: #ffffff;
  border-radius: 0.6em;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2.2em 7.4em 0;
  transition: height 0.4s ease 0s, margin 0.4s ease 0s;
}
</style>
