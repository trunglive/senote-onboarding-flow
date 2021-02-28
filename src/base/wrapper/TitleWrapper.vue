<template>
  <div>
    <div class="text-lg pl-4 pb-2">
      {{ title }} <span
        v-show="required"
        class="text-red"
      >*</span>
    </div>
    <div class="flex items-center justify-between pr-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "TitleWrapper",
  props: {
    title: {
      type: String,
      default: ""
    },
    required: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
