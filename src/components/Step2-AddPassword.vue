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
        <NavigationButtonGroup />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import NavigationButtonGroup from "@/components/NavigationButtonGroup";

export default {
  name: 'AddPassword',
  components: { NavigationButtonGroup },
}
</script>

<style scoped>

</style>
