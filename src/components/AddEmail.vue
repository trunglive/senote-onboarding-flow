<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarGroup
      avatar-title="S"
      avatar-text="Create Account"
    />
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <input
          v-model="state.emailAddress"
          id="email"
          name="email"
          type="email"
          autocomplete="off"
          required
          class="appearance-none rounded-none py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10"
          placeholder="Please input email"
        >
        <Checkmark v-if="!v$.emailAddress.$invalid" />
      </div>
      <div class="border-t border-dashed">
        <NavigationButtonGroup
          :send="send"
          :disable-continue-button="v$.emailAddress.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AvatarGroup from "@/components/AvatarGroup"
import Checkmark from "@/components/icons/Checkmark"
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'

export default {
	name: "AddEmail",
	components: {
		AvatarGroup,
		NavigationButtonGroup,
		Checkmark,
	},
	props: {
		msg: String,
		send: Function
	},
	setup() {
		const state = reactive({
			emailAddress: ''
		})
		const rules = {
			emailAddress: { required, email }
		}
		const v$ = useVuelidate(rules, state)
		return { state, v$ }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
