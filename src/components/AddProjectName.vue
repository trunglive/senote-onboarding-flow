<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo :title="composeStepTitle()" />
    </div>
    <div>
      <BaseInput
        v-model="formData.projectName"
        @blur="v$.projectName.$touch"
        placeholder="Research Project"
        custom-class="w-navigation-button text-center pl-0 pr-0"
        :enable-background-on-hover="false"
      />
      <div class="border-t border-dashed">
        <NavigationButtonGroup
          hidden
          :send="send"
          :disable-continue-button="v$.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import StepInfo from "@/components/StepIntro"
import BaseInput from "@/base/BaseInput"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { brand } from "@/data/api"
import { required } from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"

export default {
  name: "AddProjectName",
  props: {
    send: Function
  },
  components: {
    BaseInput,
    StepInfo,
    NavigationButtonGroup
  },
  setup(props) {
    const formData = reactive({
      projectName: ""
    })

    const rules = {
      projectName: {
        required
      }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    function composeStepTitle() {
      return `What's the name of the project you want to use on ${brand.label}?`
    }

    return {
      composeStepTitle,
      formData,
      v$
    }
  }
}
</script>

<style scoped></style>
