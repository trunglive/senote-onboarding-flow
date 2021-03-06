<template>
  <div class="flex items-center space-x-4">
    <div class="text-black">
      {{ label }}
    </div>
    <div
      class="base-switch base-switch--main"
      :class="{ 'base-switch--main__on': on, 'opacity-30': disabled }"
      @click="handleToggleSwitch"
    />
  </div>
</template>

<script>

export default {
  name: "Switch",
  props: {
    label: {
      type: String,
      default: ""
    },
    on: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["handleToggleSwitch"],
  setup(props, { emit }) {
    function handleToggleSwitch() {
      if (!props.disabled) {
        emit("handleToggleSwitch", props.value)
      }
    }

    return {
      handleToggleSwitch
    }
  }
}
</script>

<style scoped>
.base-switch {
  display: inline-block;
  cursor: pointer;
}

.base-switch--main {
  position: relative;
  width: 51px;
  height: 31px;
  background-color: #edf0f2;
  transition: all 0.2s ease 0s;
  border-radius: 50px;
}

.base-switch--main::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 25px;
  height: 25px;
  background-color: #ffffff;
  transition: all 0.2s ease 0s;
  border-radius: 50%;
}

.base-switch--main.base-switch--main__on {
  background-color: #007b83;
}

.base-switch--main.base-switch--main__on::after {
  transform: translateX(20px);
}
</style>
