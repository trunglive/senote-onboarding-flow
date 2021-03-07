<template>
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
    <div class="pt-20 hidden">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import BaseInput from "@/base/BaseInput"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import TitleWrapper from "@/base/wrapper/TitleWrapper"

const checkboxData = {
  title: "Which type of creative work used in this project?",
  name: "creativeWorkQuestions",
  checked: [],
  options: [
    {
      value: "productDesign",
      label: "Product Design"
    },
    {
      value: "development",
      label: "Development"
    },
    {
      value: "branding",
      label: "Branding"
    },
    {
      value: "marketing",
      label: "Marketing"
    },
    {
      value: "copyWriting",
      label: "Copywriting"
    }
  ]
}

export default {
  components: { TitleWrapper, BaseInput, BaseCheckboxGroup, NavigationButtonGroup },
  props: {
    msg: String,
    send: Function,
    currentState: String
  },
  name: "StakeholderInterview",
  setup() {
    const formData = reactive({
      marketingMessage: "",
      checkboxData
    })

    const rules = {
      marketingMessage: {
        required
      },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, v$ }
  }
}
</script>

<style scoped>

</style>
