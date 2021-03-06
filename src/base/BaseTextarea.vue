<template>
  <textarea
    :id="id"
    :ref="id"
    :class="[
      error ? 'outline-red' : 'outline-none',
      customClass,
      disableInput && 'cursor-pointer bg-white',
      enableBackgroundOnHover && 'hover:bg-white-light',
    ]"
    class="appearance-none rounded-none px-4 py-3 rounded placeholder-gray-500 text-sm text-gray-900 focus:z-10 bg-white-light"
    v-bind="$attrs"
    rows="6"
    cols="50"
    :value="modelValue"
    :placeholder="placeholderHidden ? null : placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur')"
    @keyup.enter="$emit('enter', { value: $event.target.value, id })"
    @focusin="handleFocusin"
    @focusout="handleFocusout"
    :disabled="disableInput"
  />
</template>

<script>
import { ref } from "vue"

export default {
  name: "BaseTextarea",
  props: {
    customClass: {
      type: String,
      default: ""
    },
    error: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    disableInput: {
      type: Boolean,
      default: false
    },
    enableBackgroundOnHover: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "blur", "enter"],
  setup() {
    const placeholderHidden = ref(false)

    function handleFocusin() {
      placeholderHidden.value = true
    }

    function handleFocusout() {
      placeholderHidden.value = false
    }

    return {
      placeholderHidden,
      handleFocusin,
      handleFocusout
    }
  }
}
</script>

<style scoped></style>
