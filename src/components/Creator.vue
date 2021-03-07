<template>
  <div class="creator-wrapper">
    <div
      class="creator-inner"
      :class="isPhaseStepLoaded && 'creator-inner__small'"
    >
      <div class="mb-8 text-3xl font-medium text-black-dark">
        Research Me
      </div>
      <div>
        <div>
          <div class="text-black font-medium">
            Phase 1 - Discover
          </div>
          <Phase
            :is-phase-entity-loaded="isPhaseEntityLoaded"
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
          <div class="text-black font-medium">
            Phase 2 - Analyze
          </div>
          <Phase
            :is-phase-entity-loaded="isPhaseEntityLoaded"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="currentState"
            phase-name="analyze"
            :blur-phase-step-label="currentState === 'discoverPhase'"
            hide-step-info
            hide-switch-button-group
            hide-navigation-button-group
            step-hidden-on-switch-off
          />
        </div>
        <div>
          <div class="text-black font-medium">
            Phase 3 - Prototype
          </div>
          <Phase
            :is-phase-entity-loaded="isPhaseEntityLoaded"
            :is-phase-step-loaded="isPhaseStepLoaded"
            :current-state="currentState"
            phase-name="prototype"
            :blur-phase-step-label="currentState === 'discoverPhase' || currentState === 'analyzePhase'"
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
    isPhaseEntityLoaded: Boolean,
    isPhaseStepLoaded: Boolean,
    currentState: {
      type: String,
      default: ""
    }
  },
  components: { Phase }
  // components: { Abstract },
}
</script>

<style scoped>
.creator-wrapper {
  position: relative;
  width: 100%;
  height: calc(100vh - 5rem);
  background-image: url("icons/Abstract.svg");
}

.creator-inner {
  overflow: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  /*height: 600px;*/
  padding: 30px 50px 50px 50px;
  background-color: #ffffff;
  border-radius: 0.6em;
  box-shadow: rgba(0, 0, 0, 0.2) 0 2.2em 7.4em 0;
  transition: height 0.4s ease 0s, margin 0.4s ease 0s;
}

.creator-inner__small {
  max-width: 380px;
  padding: 30px 0 30px 40px;
}
</style>
