<template>
  <input
    :class="[error ? 'outline-red' : 'outline-none', customClass]"
    class="appearance-none rounded-none px-4 py-3 placeholder-gray-500 text-gray-900 focus:z-10 hover:bg-white-light"
    type="text"
    autocomplete="off"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur')"
  >
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    customClass: {
      type: String,
      default: 'w-long-input',
    },
    error: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ["update:modelValue", 'blur']
}
</script>

<style scoped>

</style>
