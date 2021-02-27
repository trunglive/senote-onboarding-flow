<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-4">
      <div class="text-lg">
        {{ data.title }}
      </div>
      <div class="flex space-x-8">
        <BaseCheckbox
          v-for="question in data.questions"
          :key="question.value"
          :value="question.value"
          :label="question.label"
          name="userInterviewQuestions"
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
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import BaseCheckbox from "@/base/BaseCheckbox"

const data = {
	title: "On a typical day, when do you get focused the most?",
	questions: [
		{
			value: "morning",
			label: "Morning",
			checked: false,
		},
		{
			value: "afternoon",
			label: "Afternoon",
			checked: false,
		},
		{
			value: "night",
			label: "Night",
			checked: false,
		},
	],
}

export default {
	name: "UserInterview",
	components: { BaseCheckbox, NavigationButtonGroup },
	props: {
		msg: String,
		send: Function,
		currentState: String,
	},
	setup() {
		return {
			data,
		}
	},
}
</script>

<style scoped></style>
