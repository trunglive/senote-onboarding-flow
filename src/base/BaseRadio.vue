<template>
  <div class="flex items-center mr-8 mb-4">
    <input
      class="hidden"
      :id="value"
      type="radio"
      :checked="modelValue === value"
      :value="value"
      :name="name"
      v-bind="$attrs"
      @change="$emit('update:modelValue', $props.value)"
    >
    <label
      :for="value"
      v-if="label"
      class="flex items-center cursor-pointer"
    >
      <span
        class="w-4 h-4 mr-2 rounded-full border-1 flex-no-shrink"
      />
      {{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    value: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"]
}
</script>
<style>
input[type="radio"] + label span {
  transition: background 0.7s, transform 0.7s;
}

input[type="radio"] + label span:hover,
input[type="radio"] + label:hover span {
  transform: scale(1.05);
}

input[type="radio"]:checked + label span {
  background-color: #036f72;
  box-shadow: 0 0 0 2px white inset;
  border: 1px solid #036f72;
}

input[type="radio"]:checked + label {
  color: #036f72;
}
</style>
