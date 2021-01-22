<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center mb-2">
      <div class="text-black-dark font-bold text-xl mt-6">Customize your first project</div>
      <div class="text-black-light text-sm mt-1">It takes only 45 seconds</div>
    </div>
    <NavigationButtonGroup />
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup";
export default {
  name: 'CustomizeFirstProject',
  components: { NavigationButtonGroup },
}
</script>

<style scoped>

</style>
