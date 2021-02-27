<template>
  <div>
    <div class="text-lg pl-4 pb-2">
      {{ title }}
    </div>
    <div class="flex items-center justify-between pr-4 z-40">
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
      default: '',
    }
  }
}
</script>

<style scoped>

</style>
