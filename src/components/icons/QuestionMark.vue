<template>
  <div class="onb-method-switcher">
    <div class="tooltip onb-method-switcher__info tooltip--light tooltip--visible">
      <div
        class="tooltip__trigger"
        @mouseover="handleMouseover('enter')"
        @mouseleave="handleMouseover('leave')"
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
      <div class="tooltip__tip-position">
        <div
          class="tooltip__tip slide-up-enter slide-up-enter-active"
          :class="tooltipIsHidden && 'hidden'"
        >
          <div class="tooltip__tip-title tooltip-title">
            {{ label }}
          </div><div class="tooltip__tip-content">
            {{ content }}
          </div><div class="tooltip__arrow" />
        </div>
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
    function handleMouseover(mouseStatus) {
      tooltipIsHidden.value = mouseStatus !== 'enter';
    }

    return {
      tooltipIsHidden,
      handleMouseover
    }
  }
}
</script>

<style scoped>
.onb-method-switcher {
  position: relative;
}

.onb-method-switcher__info {
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

.tooltip--light > .tooltip__tip-position {
  width: 300px;
  max-width: 100vw;
}

.tooltip__tip-position {
  position: absolute;
  left: 0;
  top: 0;
  transform: translate3d(34px, -64px, 0px);
  z-index: 970;
  cursor: default;
  pointer-events: none;
  font-family: Lato, Helvetica, Tahoma, Arial, sans-serif;
  font-weight: 400;
  text-align: left;
}

.tooltip-title {
  color: #414141;
  text-align: center;
  padding: 12px;
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 0;
}

.tooltip--light > .tooltip__tip-position > .tooltip__tip {
  border-radius: 3px;
  box-shadow: 0 15px 18px 0 rgba(0, 0, 0, 0.06);
  border: 1px solid hsla(0, 0%, 92.9%, .62);
  background-color: #fff;
  color: #3b3b3b;
  padding: 20px;
  font-size: 0.9rem;
  line-height: 1.5;
}

.slide-down-enter, .slide-down-leave-active, .slide-up-enter, .slide-up-leave-active {
  /*opacity: 0;*/
  transform: translateY(10px);
}

.slide-down-enter-active, .slide-down-leave-active, .slide-up-enter-active, .slide-up-leave-active {
  transition-duration: .3s;
  transition-property: opacity,transform;
  transition-timing-function: cubic-bezier(.55,0,.1,1);
}

.tooltip__tip {
  position: relative;
}

.tooltip--light > .tooltip__tip-position > .tooltip__tip > .tooltip__tip-title {
  color: #171717;
}

.tooltip__tip-position[x-placement^=right] > .tooltip__tip > .tooltip__arrow {
  left: -13px;
  transform: rotate(
    90deg
  );
}

/*.tooltip--visible .tooltip__arrow {*/
/*  opacity: 1;*/
/*}*/

.tooltip__arrow {
  position: absolute;
  /*opacity: 0;*/
  pointer-events: none;
  transition: opacity .3s;
  height: 16px;
  width: 16px;
}

.tooltip--light > .tooltip__tip-position > .tooltip__tip > .tooltip__arrow:before {
  border-top-color: hsla(0, 0%, 92.9%, .62);
  transform: translateY(2px);
}

.tooltip--light > .tooltip__tip-position > .tooltip__tip > .tooltip__arrow:after, .tooltip--light > .tooltip__tip-position > .tooltip__tip > .tooltip__arrow:before {
  content: "";
  border: 5px solid transparent;
  position: absolute;
  left: 3px;
  top: 3px;
}

.tooltip--light > .tooltip__tip-position > .tooltip__tip > .tooltip__arrow:after {
  border-top-color: #fff;
}
</style>
