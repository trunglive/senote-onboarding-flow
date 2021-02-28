<template>
  <div
    v-for="option in options"
    :key="option.value"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :model-value="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </div>
</template>

<script>
import BaseRadio from "@/base/BaseRadio"

export default {
  components: { BaseRadio },
  props: {
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"]
}
</script>

<style scoped>
</style>
