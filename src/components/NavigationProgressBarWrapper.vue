<template>
  <div>
    <slot />
    <NavigationProgressBar
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
  },
  emits: ["next"]
}
</script>

<style scoped></style>
