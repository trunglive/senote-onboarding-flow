<template>
  <div class="flex flex-col items-center space-y-10">
    <TitleWrapper
      :title="data.title"
      required
    >
      <div class="flex pl-4 pt-4">
        <BaseRadioGroup
          v-model="data.selected"
          :name="data.name"
          :options="data.options"
          :model-value="data.selected"
        />
      </div>
    </TitleWrapper>
    <TitleWrapper
      title="What is your favorite color?"
      required
    >
      <div class="pl-4 pt-4">
        <BaseSelect custom-class="w-72" />
      </div>
    </TitleWrapper>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.selected.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"

const solutionValuationData = {
	title: "On a typical day, when do you get focused the most?",
	name: "userInterviewQuestions",
	selected: "",
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

import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseRadioGroup from "@/base/BaseRadioGroup"
import BaseSelect from "@/base/BaseSelect"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
export default {
	name: "SolutionValuation",
	props: {
		send: Function,
	},
	components: {
		BaseSelect,
		BaseRadioGroup,
		TitleWrapper,
		NavigationButtonGroup,
	},
	setup() {
		const data = reactive(solutionValuationData)

		const rules = {
			selected: {
				required,
			},
		}

		const v$ = useVuelidate(rules, data)

		return {
			data,
			v$,
		}
	},
}
</script>

<style scoped></style>
