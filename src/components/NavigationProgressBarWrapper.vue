<template>
  <div>
    <slot />
    <NavigationProgressBar
      :hide-navigation-button-group="hideNavigationButtonGroup"
      :state="state"
      :send="send"
      @next="$emit('next')"
    />
  </div>
</template>

<script>
import NavigationProgressBar from "@/components/NavigationProgressBar"
export default {
  name: "NavigationProgressBarWrapper",
  components: { NavigationProgressBar },
  props: {
    state: Object,
    send: Function,
    hideNavigationButtonGroup: Boolean,
  },
  emits: ["next"],
}
</script>

<style scoped></style>
