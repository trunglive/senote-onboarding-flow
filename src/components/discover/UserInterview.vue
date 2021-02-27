<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-4">
      <div class="text-lg">
        {{ data.title }}
      </div>
      <div class="flex space-x-8">
        <BaseCheckboxGroup
          v-model="data.checked"
          :name="data.name"
          :options="data.options"
        />
      </div>
    </div>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.checked.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

const userInterviewData = {
	title: "On a typical day, when do you get focused the most?",
	name: "userInterviewQuestions",
	checked: [],
	options: [
		{
			value: "morning",
			label: "Morning",
		},
		{
			value: "afternoon",
			label: "Afternoon",
		},
		{
			value: "night",
			label: "Night",
		},
	],
}

export default {
	name: "UserInterview",
	components: { BaseCheckboxGroup,  NavigationButtonGroup },
	props: {
		msg: String,
		send: Function,
		currentState: String,
	},
	setup() {
		const data = reactive(userInterviewData)

		const rules = {
			checked: {
				required
			},
		}

		const v$ = useVuelidate(rules, data)

		return {
			data,
			v$,
		}
	}
}
</script>

<style scoped></style>
