<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="flex flex-col items-center mb-10">
        <div class="flex flex-col items-center justify-center w-16 h-16 rounded-md bg-blue-light font-bold text-2xl">S</div>
        <div class="text-black-dark font-bold text-xl mt-6">Create Account</div>
      </div>
      <div>
        <input v-model="emailInput" id="email" name="email" type="email" autocomplete="off" required class="appearance-none rounded-none w-full py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10" placeholder="Please input email">
        <div class="border-t border-dashed">
          <div class="flex flex-col mt-4">
            <div :class="{'cursor-not-allowed': showSpinner || !emailInput }">
              <a @click="handleClickContinue" href="#" :class="showSpinner || !emailInput ? 'bg-ocean-blur pointer-events-none' : 'bg-ocean hover:bg-ocean-dark'" class="w-80 h-12 flex flex-col items-center justify-center rounded-md text-white font-bold duration-200 ease-in-out">
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
import { ref } from 'vue';
import Spinner from "@/components/Spinner";
export default {
  name: 'AddEmail',
  components: { Spinner },
  props: {
    msg: String
  },
  setup() {
    const emailInput = ref('');
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

    return { emailInput, showSpinner, handleClickContinue }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
