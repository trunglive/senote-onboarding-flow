<template>
  <svg
    class="svgResultStatus"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    focusable="false"
  ><title>success</title>
    <g transform="translate(12 12)">
      <g class="svgResultStatus">
        <circle
          cx="0"
          cy="0"
          r="12"
          class="circle-bg success"
        />
        <g class="result-status-glyph">
          <polygon points="-2.00 2.80 -4.80 0.00 -5.73 0.933 -2.00 4.67 6.00 -3.33 5.07 -4.27" />
        </g>
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "Checkmark",
  props: {
    valid: {
      type: Boolean
    },
    invalid: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
.svgResultStatus > circle.success {
  fill: #67bf64;
}

.result-status-glyph {
  stroke: none;
  fill: #fff;
}
</style>
