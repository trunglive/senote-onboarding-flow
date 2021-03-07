<template>
  <div class="flex space-x-10">
    <div
      class="checkbox-wrapper"
      :class="[ boxStyle ? 'space-x-0' : 'space-x-10', boxStyle && 'checkbox-wrapper__box-style' ]"
    >
      <BaseCheckbox
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        :model-value="modelValue"
        :name="name"
        :box-style="boxStyle"
        @update:modelValue="$emit('update:modelValue', $event)"
      />
    </div>
  </div>
</template>

<script>
import BaseCheckbox from "@/base/BaseCheckbox"

export default {
  name: "BaseCheckboxGroup",
  emits: ["update:modelValue"],
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
      type: Array,
      default: () => []
    },
    boxStyle: {
      type: Boolean,
      default: false,
    },
  },
  components: { BaseCheckbox }

}
</script>

<style scoped>
.checkbox-wrapper {
  display: flex;
  padding-top: 8px;
}

.checkbox-wrapper.checkbox-wrapper__box-style {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px;
}
</style>
