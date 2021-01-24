<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col w-80 mb-2">
      <div class="text-black-dark text-xl">
        {{ brand.label }} is equipped with predefined design thinking processes
        divided into three phrases.
      </div>
      <div class="space-y-2.5 mt-6 mb-2">
        <div v-for="process in designThinkingProcesses" :key="process" class="flex items-center space-x-4">
          <div class="flex items-center justify-center w-28 h-10 bg-blue rounded-md font-bold text-lg text-white">{{process.label}}</div>
          <div class="text-lg text-black-light">{{process.goal}}</div>
        </div>
      </div>
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import { brand, designThinkingProcesses } from "@/data/api";

export default {
  name: "DesignThinkingProcess",
  props: {
    send: Function,
  },
  components: {
    NavigationButtonGroup,
  },
  setup() {
    return {
      brand,
      designThinkingProcesses,
    };
  },
};
</script>

<style scoped></style>
