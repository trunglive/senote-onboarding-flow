<template>
  <div
    class="flex flex-col items-center justify-center"
  >
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
  selected: '',
  options: [
    {
      value: "morning",
      label: "Morning"
    },
    {
      value: "afternoon",
      label: "Afternoon"
    },
    {
      value: "night",
      label: "Night"
    }
  ]
}

import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseRadioGroup from "@/base/BaseRadioGroup"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
export default {
  name: "SolutionValuation",
  props: {
    send: Function
  },
  components: { BaseRadioGroup, TitleWrapper, NavigationButtonGroup },
  setup() {
    const data = reactive(solutionValuationData)

    const rules = {
      selected: {
        required
      }
    }

    const v$ = useVuelidate(rules, data)

    return {
      data,
      v$
    }
  }
}
</script>

<style scoped>

</style>
