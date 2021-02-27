<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-10">
      <div>
        <div class="text-lg pl-4 pb-2">
          What are the main marketing messages?
        </div>
        <div class="flex items-center justify-between pr-4 z-40">
          <input
            v-model="state.marketingMessage"
            @blur="v$.marketingMessage.$touch"
            :class="v$.marketingMessage.$error ? 'outline-red' : 'outline-none'"
            name="marketingMessage"
            type="text"
            autocomplete="off"
            class="w-long-text appearance-none rounded-none px-4 py-3 placeholder-gray-500 text-gray-900 focus:z-10 hover:bg-white-light"
            placeholder="Add answer..."
          >
        </div>
      </div>
      <div>
        <div class="text-lg pl-4 pb-2">
          What's the worst thing that could happen in this project?
        </div>
        <div class="flex items-center justify-between">
          <input
            v-model="state.worstThingHappened"
            @blur="v$.worstThingHappened.$touch"
            :class="v$.worstThingHappened.$error ? 'outline-red' : 'outline-none'"
            name="worstThingHappened"
            type="text"
            autocomplete="off"
            class="w-long-text appearance-none rounded-none px-4 py-3 placeholder-gray-500 text-gray-900 focus:z-10 hover:bg-white-light"
            placeholder="Add answer..."
          >
        </div>
      </div>
    </div>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.marketingMessage.$invalid || v$.worstThingHappened.$invalid"
      />
    </div>
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { computed, reactive } from "vue"
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

export default {
	components: { NavigationButtonGroup },
	props: {
		msg: String,
		send: Function,
		currentState: String,
	},
	name: "StakeholderInterview",
	setup() {
		const state = reactive({
			marketingMessage: '',
			worstThingHappened: '',
		})

		const rules = {
			marketingMessage: {
				required
			},
			worstThingHappened: {
				required
			}
		}

		const v$ = useVuelidate(rules, state)

		return { state, v$ }
	}
}
</script>

<style scoped>

</style>
