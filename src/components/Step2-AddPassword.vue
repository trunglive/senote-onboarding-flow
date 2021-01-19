<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center mb-10">
      <div class="flex flex-col items-center justify-center w-16 h-16 rounded-md bg-blue-light font-bold text-2xl">S</div>
      <div class="text-black-dark font-bold text-xl mt-6">Set your password</div>
    </div>
    <div>
      <input v-model="passwordInput" id="password" name="password" type="password" autocomplete="off" required class="appearance-none rounded-none w-full py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10" placeholder="Enter your password">
      <div class="border-t border-dashed">
        <div class="mt-4 text-sm text-left">
          <span>Password should be at least</span>
          <span class="font-bold"> 8 characters long</span>
        </div>
        <div class="flex flex-col mt-4">
          <div :class="{'cursor-not-allowed': showSpinner || !passwordInput }">
            <a @click="handleClickContinue" href="#" :class="showSpinner || !passwordInput ? 'bg-ocean-blur cursor-not-allowed' : 'bg-ocean hover:bg-ocean-dark'" class="w-80 h-12 flex flex-col items-center justify-center rounded-md text-white font-bold duration-200 ease-in-out">
              <Spinner v-show="showSpinner" class="w-6 h-6" :class="showSpinner && 'opacity-100'" />
              <span v-show="!showSpinner">Continue</span>
            </a>
          </div>
          <a href="#" class="text-black w-80 h-12 flex flex-col items-center justify-center hover:text-black-light duration-100 ease-in-out">
            Back
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: 'AddPassword',
  setup() {
    const passwordInput = ref('');
    const showSpinner = ref(false);

    function handleClickContinue() {
      showSpinner.value = true;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('success')
          showSpinner.value = false;
        }, 1000)
      })
    }

    return { passwordInput, showSpinner, handleClickContinue }
  }
}
</script>

<style scoped>

</style>
