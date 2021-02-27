<template>
  <component
    v-for="option in options"
    :key="option.value"
    :is="vertical ? 'div' : 'span'"
    :class="{
      'horizontal': !vertical
    }"
  >
    <BaseCheckbox
      :label="option.label"
      :value="option.value"
      :model-value="modelValue"
      :name="name"
      @update:modelValue="$emit('update:modelValue', $event)"
    />
  </component>
</template>

<script>
import BaseCheckbox from "@/base/BaseCheckbox"
export default {
	name: "BaseCheckboxGroup",
	emits: ['update:modelValue'],
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
			required: true
		},
		vertical: {
			type: Boolean,
			default: false
		}
	},
	components: { BaseCheckbox },

}
</script>

<style scoped>

</style>
