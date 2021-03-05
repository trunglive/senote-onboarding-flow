<template>
  <div class="tooltip__wrapper">
    <div
      @mouseover="handleMouseover"
      @mouseleave="handleMouseleave"
    >
      <slot />
    </div>
    <div
      class="tooltip"
      :class="tooltipHidden && 'hidden'"
    >
      <div
        class="tooltip__main"
      >
        <div class="tooltip__title">
          {{ label }}
        </div>
        <div class="tooltip__content">
          {{ content }}
        </div>
        <div class="tooltip__arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  name: "Tooltip",
  props: {
    label: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
  },
  setup() {
    let tooltipHidden = ref(true)

    function handleMouseover() {
      tooltipHidden.value = false
    }

    function handleMouseleave() {
      tooltipHidden.value = true
    }

    return {
      tooltipHidden,
      handleMouseover,
      handleMouseleave,
    }
  },
}
</script>

<style scoped>
.tooltip__wrapper {
  /* use position relative to help position tooltip */
  position: relative;
}

.tooltip {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate3d(34px, -64px, 0px);
  z-index: 970;
  width: 300px;
  max-width: 100vw;
  text-align: left;
  font-weight: 400;
}

.tooltip__main {
  /* use position relative to help position tooltip arrow */
  position: relative;
  padding: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 15px 18px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid hsla(0, 0%, 92.9%, .62);
}

.tooltip__title {
  margin-bottom: 0;
  padding: 12px;
  text-align: center;
  color: #171717;
  font-size: 1.1rem;
  font-weight: 400;
}

.tooltip__content {
  color: #414141;
}

.tooltip__arrow {
  position: absolute;
  left: -13px;
  top: calc(50% - 10px);
  transform: rotate(
    90deg
  );
  height: 16px;
  width: 16px;
  opacity: 1;
}

.tooltip__arrow:before {
  transform: translateY(2px);
  border-top-color: hsla(0, 0%, 92.9%, .62);
}

.tooltip__arrow:after,
.tooltip__arrow:before {
  content: "";
  position: absolute;
  left: 3px;
  top: 3px;
  border: 5px solid transparent;
}

.tooltip__arrow:after {
  border-top-color: #fff;
}
</style>
