<template>
  <div class="progress-bar w-navigation-button">
    <div
      class="progress-bar__bar"
      :style="{ width: `${percentage}%` }"
    />
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percentage: Number
  }
}
</script>

<style scoped>
div.progress-bar {
  height: 8px;
  background-color: rgba(241, 239, 239, 0.88);
  border-radius: 200px;
}

div.progress-bar__bar {
  width: 12.5%;
  height: 100%;
  background-color: #007b83;
  transition: all 0.2s ease 0s;
  border-radius: 200px;
}
</style>
