<template>
  <NavigationProgressBarWrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="space-y-10">
        <TitleWrapper
          title="What are the main marketing messages?"
          required
        >
          <BaseInput
            v-model="formData.marketingMessage"
            :error="v$.marketingMessage.$error"
            @blur="v$.marketingMessage.$touch"
            placeholder="Add Answer..."
          />
        </TitleWrapper>
        <TitleWrapper
          :title="formData.checkboxData.title"
          required
        >
          <BaseCheckboxGroup
            v-model="formData.checkboxData.checked"
            :name="formData.checkboxData.name"
            :options="formData.checkboxData.options"
            box-style
            dynamic
          />
        </TitleWrapper>
      </div>
    </div>
  </NavigationProgressBarWrapper>
</template>

<script>
import { reactive, toRefs } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import BaseInput from "@/base/BaseInput"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"
import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"
import TitleWrapper from "@/base/wrapper/TitleWrapper"

const checkboxData = {
  title: "Which type of creative work used in this project?",
  name: "creativeWorkQuestions",
  checked: [],
  options: [
    {
      value: "productDesign",
      label: "Product Design",
    },
    {
      value: "development",
      label: "Development",
    },
    {
      value: "branding",
      label: "Branding",
    },
    {
      value: "marketing",
      label: "Marketing",
    },
    {
      value: "copyWriting",
      label: "Copywriting",
    },
  ],
}

export default {
  components: {
    NavigationProgressBarWrapper,
    TitleWrapper,
    BaseInput,
    BaseCheckboxGroup,
  },
  props: {
    msg: String,
    state: Object,
    send: Function,
    currentState: String,
  },
  name: "StakeholderInterview",
  setup(props) {
    const formData = reactive({
      marketingMessage: "",
      checkboxData,
    })

    const rules = {
      marketingMessage: {
        required,
      },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    const handleClickNext = () => {
      props.send({ type: "STAKEHOLDER_INTERVIEW_NEXT", validation: v$ });
    }

    return { formData, v$, handleClickNext }
  },
}
</script>

<style scoped></style>
