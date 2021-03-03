<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col w-navigation-button mb-2">
      <StepInfo :title="composeStepTitle()" />
    </div>
    <div>
      <input
        v-model="formData.projectName"
        id="projectName"
        name="projectName"
        type="text"
        autocomplete="off"
        required
        class="appearance-none rounded-none w-navigation-button py-2 placeholder-gray-500 text-center text-black-light focus:outline-none focus:z-10"
        placeholder="Research Project"
      >
      <div class="border-t border-dashed">
        <NavigationButtonGroup
          :send="send"
          :disable-continue-button="v$.projectName.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { brand } from "@/data/api"
import StepInfo from "@/components/StepIntro"
import { required } from "@vuelidate/validators"
import useVuelidate from "@vuelidate/core"

export default {
  name: "AddProjectName",
  props: {
    send: Function
  },
  components: {
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
