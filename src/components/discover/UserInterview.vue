<template>
  <div class="flex flex-col items-center justify-center">
    <TitleWrapper
      :title="formData.title"
      required
    >
      <div class="flex pl-4 pt-4 space-x-10">
        <BaseCheckboxGroup
          v-model="formData.checked"
          :name="formData.name"
          :options="formData.options"
        />
      </div>
    </TitleWrapper>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import TitleWrapper from "@/base/wrapper/TitleWrapper"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"

const userInterviewData = {
  title: "On a typical day, when do you get focused the most?",
  name: "userInterviewQuestions",
  checked: [],
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

export default {
  name: "UserInterview",
  components: { TitleWrapper, BaseCheckboxGroup, NavigationButtonGroup },
  props: {
    msg: String,
    send: Function,
    currentState: String
  },
  setup() {
    const formData = reactive(userInterviewData)

    const rules = {
      checked: {
        required
      }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return {
      formData,
      v$
    }
  }
}
</script>

<style scoped></style>
