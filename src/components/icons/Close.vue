<template>
  <svg
    class="svgResultStatus"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
  ><title>failure</title><g transform="translate(12 12)"><g class="svgResultStatus"><circle
    cx="0"
    cy="0"
    r="12"
    class="circle-bg failure"
  /><g class="result-status-glyph"><polygon points="4.67 -3.73 3.73 -4.67 0 -0.94 -3.73 -4.67 -4.67 -3.73 -0.94 0 -4.67 3.73 -3.73 4.67 0 0.94 3.73 4.67 4.67 3.73 0.94 0" /></g></g></g></svg>
</template>

<script>
export default {
  name: "Close"
}
</script>

<style scoped>
.svgResultStatus > circle.failure {
  fill: #f05454;
}

.result-status-glyph {
  stroke: none;
  fill: #fff;
}
</style>
