<template>
  <div class="flex flex-col items-center space-y-10">
    <div class="space-y-10">
      <TitleWrapper
        :title="data.solutionValuationData.title"
        required
      >
        <div class="flex pt-4">
          <BaseRadioGroup
            v-model="data.solutionValuationData.selected"
            :name="data.solutionValuationData.name"
            :options="data.solutionValuationData.options"
            :model-value="data.solutionValuationData.selected"
          />
        </div>
      </TitleWrapper>
      <TitleWrapper
        :title="data.roles.title"
        required
      >
        <BaseSelect
          custom-class="w-72"
          :options="data.roles.options"
          @handleSelectSingleItem="handleSelectSingleItem"
        />
      </TitleWrapper>
    </div>
    <div class="pt-20 hidden">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.solutionValuationData.selected.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { reactive } from "vue"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseRadioGroup from "@/base/BaseRadioGroup"
import BaseSelect from "@/base/BaseSelect"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

const solutionValuationData = {
  title: "On a typical day, when do you get focused the most?",
  name: "userInterviewQuestions",
  selected: "",
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

const roles = {
  title: "What is your current role?",
  name: "roleQuestions",
  selected: [],
  options: [
    {
      value: "productManager",
      label: "Product Manager",
      selected: false,
      color: "bg-ocean-dark"
    },
    {
      value: "machineLearningEngineer",
      label: "Machine Learning Engineer",
      selected: false,
      color: "bg-blue"
    },
    {
      value: "webDeveloper",
      label: "Web Developer",
      selected: false,
      color: "bg-black"
    },
    {
      value: "businessAnalyst",
      label: "Business Analyst",
      selected: true,
      color: "bg-white-dark-2"
    },
    {
      value: "designer",
      label: "Designer",
      selected: false,
      color: "bg-purple-dark"
    },
  ]
}

export default {
  name: "SolutionValuation",
  props: {
    send: Function
  },
  components: {
    BaseSelect,
    BaseRadioGroup,
    TitleWrapper,
    NavigationButtonGroup
  },
  setup() {
    const data = reactive({ solutionValuationData, roles })

    const rules = {
      solutionValuationData: {
        selected: {
          required
        }
      }
    }

    const v$ = useVuelidate(rules, data)

    function handleSelectSingleItem(updatedOptions) {
      data.roles.options = updatedOptions
    }

    return {
      data,
      v$,
      handleSelectSingleItem
    }
  }
}
</script>

<style scoped></style>
