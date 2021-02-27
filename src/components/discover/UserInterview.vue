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
        :disable-continue-button="false"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "vue"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"

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
		const data = ref(userInterviewData)
		return {
			data,
		}
	}
}
</script>

<style scoped></style>
