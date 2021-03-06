<template>
  <div class="checkbox-item-container">
    <div class="price-checkbox__less-than-ten checkbox-item">
      <input
        type="checkbox"
        :name="name"
        :id="value"
        :value="value"
        :checked="modelValue.includes(value)"
        v-bind="$attrs"
        @change="updateCheckbox"
      ><label :for="value" />
    </div>
    <label
      :for="value"
      class="label-text"
    >{{ label }}</label>
  </div>
</template>

<script>

export default {
  name: "BaseCheckbox",
  emits: ["update:modelValue"],
  props: {
    name: {
      type: String, // use name for grouping all checkboxes in same group together
      default: ""
    },
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: Array,
      required: true
    }
  },
  setup(props, { emit }) {
    function updateCheckbox() {
      let currentChecked
      if (props.modelValue.includes(props.value)) {
        currentChecked = props.modelValue.filter(currentValue => currentValue !== props.value)
      } else {
        currentChecked = [...props.modelValue, props.value]
      }
      emit("update:modelValue", currentChecked)
    }

    return {
      updateCheckbox
    }
  }
}
</script>

<style scoped>
.checkbox-item-container {
  display: flex;
}

.label-text {
  margin-left: 1rem;
  font-size: 14px;
  color: #40474f;
}

.label-text:hover {
  color: #808080;
  cursor: pointer;
}

.checkbox-item {
  position: relative;
}

.checkbox-item label {
  position: absolute;
  top: 10%;
  left: -12%;
  width: 18px;
  height: 18px;
  background-color: #fff;
  border: 2px solid #eee;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}

.checkbox-item label:after {
  position: absolute;
  width: 10px;
  height: 5px;
  top: 20%;
  left: 20%;
  transform: rotate(-45deg);
  background: transparent;
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  opacity: 0;
}

.checkbox-item label:hover::after {
  opacity: 0.4;
}

.checkbox-item input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

input[type="checkbox"]:checked ~ label {
  color: #808080;
  background-color: #036f72;
  border: 1px solid #036f72;
}
</style>
