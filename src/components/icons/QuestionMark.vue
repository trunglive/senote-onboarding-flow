<template>
  <div
    class="question-mark question-mark__info"
    @mouseover="handleMouseover"
    @mouseleave="handleMouseleave"
  >
    <div
      class="question-mark__icon"
    >
      <span
        class="icon icon--normal icon--question-mark"
      ><svg
        viewBox="0 0 8 12"
        xmlns="http://www.w3.org/2000/svg"
        fill-rule="evenodd"
        clip-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
      >
        <path
          d="M2.293 5.335c.873-.045 1.541-.218 2-.524.46-.304.69-.822.69-1.554v-.299c0-.631-.173-1.111-.517-1.437-.345-.327-.794-.491-1.345-.491-.426 0-.747.05-.966.15v.1c.183.088.336.227.457.415.121.188.181.394.181.615 0 .377-.118.696-.353.956-.236.259-.578.39-1.026.39-.426 0-.767-.129-1.026-.39C.129 3.006 0 2.659 0 2.227c0-.311.083-.601.25-.872.167-.272.408-.507.724-.707A4.033 4.033 0 012.129.175 6.304 6.304 0 013.69 0c1.494 0 2.586.283 3.276.848C7.655 1.413 8 2.182 8 3.158c0 .543-.109 1.019-.328 1.429-.217.409-.53.765-.913 1.039-.421.297-.89.524-1.388.673a8.293 8.293 0 01-1.733.332v1.313H2.293V5.335zm.69 6.664c-.507 0-.891-.141-1.155-.423a1.445 1.445 0 01-.397-1.022v-.067c0-.399.133-.74.397-1.022.264-.283.649-.424 1.155-.424s.891.141 1.155.424c.264.282.396.623.396 1.022v.067c0 .398-.132.739-.396 1.022-.264.282-.65.423-1.155.423z"
          fill-rule="nonzero"
        /></svg></span>
    </div>
    <div class="tooltip">
      <div
        class="tooltip__main"
        :class="tooltipIsHidden && 'hidden'"
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
  name: "QuestionMark",
  props: {
    hidden: {
      type: Boolean,
      default: true
    },
    label: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  },
  setup() {
    let tooltipIsHidden = ref(true)

    function handleMouseover() {
      tooltipIsHidden.value = false;
    }

    function handleMouseleave() {
      tooltipIsHidden.value = true;
    }

    return {
      tooltipIsHidden,
      handleMouseover,
      handleMouseleave,
    }
  }
}
</script>

<style scoped>
.question-mark {
  /* use position relative to help position tooltip */
  position: relative;
  cursor: pointer;
}

.question-mark__info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 10px;
  color: #acaeaf;
  background-color: #edf0f2;
  border-radius: 50%;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1;
}

.icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  vertical-align: top;
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
