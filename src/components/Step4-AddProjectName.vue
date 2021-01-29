<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col items-center w-80 mb-2">
      <div class="text-black-dark text-xl mt-6">
        What's the name of the project you want to use on {{ brand.label }}?
      </div>
    </div>
    <div>
      <input
        v-model="projectNameInput"
        id="email"
        name="email"
        type="email"
        autocomplete="off"
        required
        class="appearance-none rounded-none w-full py-2 placeholder-gray-500 text-center text-gray-900 focus:outline-none focus:z-10"
        placeholder="Research Project"
      >
      <div class="border-t border-dashed">
        <NavigationButtonGroup :send="send" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { brand } from "@/data/api"

export default {
	name: "AddProjectName",
	props: {
		send: Function
	},
	components: {
		NavigationButtonGroup
	},
	setup() {
		return {
			brand
		}
	}
}
</script>

<style scoped></style>
