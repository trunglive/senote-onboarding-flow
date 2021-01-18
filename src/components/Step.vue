<template>
    <div class="min-h-screen flex flex-col items-center justify-center">
      <div class="flex flex-col items-center mb-10">
        <div class="flex flex-col items-center justify-center w-16 h-16 rounded-md bg-blue-light font-bold text-2xl">S</div>
        <div class="text-black-dark font-bold text-xl mt-6">Create Account</div>
      </div>
      <div>
        <input id="email" name="email" type="email" autocomplete="off" required class="appearance-none rounded-none w-full py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10" placeholder="Please input email">
        <div class="border-t border-dashed">
          <div class="flex flex-col mt-4">
            <a href="#" class="px-36 py-3 rounded-md text-white font-bold bg-ocean hover:bg-ocean-dark duration-100 ease-in-out">
              Continue
            </a>
            <a href="#" class="text-black mt-3.5 hover:text-black-light duration-100 ease-in-out">
              Back
            </a>
          </div>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
