<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center mb-2">
      <div class="text-black-dark font-bold text-xl mt-6">Customize your first project</div>
      <div class="text-black-light text-sm mt-1">It takes only 45 seconds</div>
    </div>
    <div class="flex flex-col mt-4">
      <a @click="handleClickContinue" href="#" class="w-80 h-12 flex flex-col items-center justify-center rounded-md text-white font-bold duration-200 bg-ocean hover:bg-ocean-dark ease-in-out">
        <span>Continue</span>
      </a>
      <a href="#" class="text-black w-80 h-12 flex flex-col items-center justify-center hover:text-black-light duration-100 ease-in-out">
        Skip
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizeFirstProject',
  setup() {
    function handleClickContinue() {
      console.log('continue...');
    }

    return {  handleClickContinue }
  }
}
</script>

<style scoped>

</style>
