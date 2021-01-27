<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col w-80 mb-2">
      <div class="text-black-dark text-xl">
        Choose your methods for the {{ currentPhase.label }} Phase.
      </div>
      <div class="space-y-2.5 mt-6 mb-2">
        <div
          v-for="step in currentPhase.stepProcesses"
          :key="step.value"
          class="flex items-center justify-between"
        >
          <div class="flex items-center space-x-4">
            <AppIcon :icon="step.icon" />
            <div class="text-black-light font-medium">{{ step.label }}</div>
          </div>
          <div class="flex space-x-4">
            <Switch />
            <div>?</div>
          </div>
        </div>
      </div>
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import { computed } from "vue";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import AppIcon from "@/components/AppIcon";
import { designThinkingProcesses } from "@/data/api";
import Switch from "@/base/Switch";

export default {
  name: "Phase",
  props: {
    send: Function,
    phaseName: String,
  },
  components: {
    Switch,
    AppIcon,
    NavigationButtonGroup,
  },
  setup(props) {
    const currentPhase = computed(function () {
      return designThinkingProcesses[props.phaseName]; // discover, analyze, prototype
    });
    return {
      currentPhase,
    };
  },
};
</script>

<style scoped></style>
