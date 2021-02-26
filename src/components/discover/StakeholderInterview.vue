<template>
  <div class="flex flex-col items-center justify-center">
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <input
          v-model="state.emailAddress"
          id="email"
          name="email"
          type="email"
          autocomplete="off"
          required
          class="w-navigation-button appearance-none rounded-none py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10"
          placeholder="Enter email"
        >
        <Checkmark />
      </div>
      <div class="border-t border-dashed">
        <NavigationButtonGroup :send="send" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import Checkmark from "@/components/icons/Checkmark"
import { computed, reactive } from "vue"
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

export default {
	components: { NavigationButtonGroup, Checkmark },
	props: {
		msg: String,
		send: Function,
		currentState: String,
	},
	name: "StakeholderInterview",
	setup() {
		const state = reactive({
			emailAddress: ''
		})

		return { state }
	}
}
</script>

<style scoped>

</style>
