<template>
  <div>
    <slot />
    <NavigationProgressBar
      :state="state"
      :send="send"
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
}
</script>

<style scoped></style>
