<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center w-80 mb-2">
      <div class="text-black-dark text-xl mt-6">
        {{ brand.label }} is equipped with predefined design thinking processes
        divided into three phrases.
      </div>
      <div>
        <div>Discover</div>
        <div>Analyze</div>
        <div>Prototype</div>
      </div>
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
import { brand } from "@/data/api";

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
    };
  },
};
</script>

<style scoped></style>
