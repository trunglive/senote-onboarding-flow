<template>
  <input
    :id="id"
    :ref="id"
    :class="[
      error ? 'outline-red' : 'outline-none',
      customClass,
      disableInput && 'cursor-pointer',
      dynamic && !placeholderHidden ? 'rounded border-1 border-dashed' : 'bg-white-light'
    ]"
    class="appearance-none px-4 py-3 rounded placeholder-gray-500 text-black focus:z-10"
    type="text"
    autocomplete="off"
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholderHidden ? null : placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
    @blur="$emit('blur')"
    @keyup.enter="$emit('enter', { value: $event.target.value, id })"
    @focusin="handleFocusin"
    @focusout="handleFocusout"
    :disabled="disableInput"
  >
</template>

<script>
import { ref } from "vue"

export default {
  name: "BaseInput",
  props: {
    customClass: {
      type: String,
      default: "w-long-input"
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
    },
    dynamic: {
      type: Boolean,
      default: false
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
