<template>
  <span
    class="base-input"
    :class="[invalid && 'base-input__invalid', valid && 'base-input__valid']"
  ><span
    class="icon icon--normal icon--check"
  ><svg
    viewBox="0 0 18 14"
    xmlns="http://www.w3.org/2000/svg"
    fill-rule="evenodd"
    clip-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    class=""
  >
    <path
      d="M6 11.17L1.83 7 .41 8.41 6 14 18 2 16.59.59 6 11.17z"
      fill-rule="nonzero"
    />
  </svg>
  </span>
  </span>
</template>

<script>
export default {
  name: "Checkmark",
  props: {
    valid: {
      type: Boolean,
    },
    invalid: {
      type: Boolean,
    }
  }
}
</script>

<style scoped>
.base-input {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 14px;
  color: #fff;
  pointer-events: none;
}

.base-input__valid {
  background-color: #67bf64;
}

.base-input__invalid {
  background-color: #f05454;
}

.icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  line-height: 1;
}

.icon img, .icon svg {
  width: 100%;
  height: 100%;
  fill: currentColor;
  vertical-align: top;
}
</style>
