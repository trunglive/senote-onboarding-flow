<template>
  <NavigationProgressBarWrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="flex flex-col items-center space-y-10">
      <div class="space-y-10">
        <TitleWrapper
          :title="data.solutionValuationData.title"
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
        >
          <BaseSelect
            custom-class="w-72"
            :options="data.roles.options"
            @handleSelectSingleItem="handleSelectSingleItem"
          />
        </TitleWrapper>
      </div>
    </div>
  </NavigationProgressBarWrapper>
</template>

<script>
import { reactive } from "vue"
import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"
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

const roles = {
  title: "What is your current role?",
  name: "roleQuestions",
  selected: [],
  options: [
    {
      value: "productManager",
      label: "Product Manager",
      selected: false,
      color: "bg-ocean-dark",
    },
    {
      value: "machineLearningEngineer",
      label: "Machine Learning Engineer",
      selected: false,
      color: "bg-blue",
    },
    {
      value: "webDeveloper",
      label: "Web Developer",
      selected: false,
      color: "bg-black",
    },
    {
      value: "businessAnalyst",
      label: "Business Analyst",
      selected: true,
      color: "bg-white-dark-2",
    },
    {
      value: "designer",
      label: "Designer",
      selected: false,
      color: "bg-purple-dark",
    },
  ],
}

export default {
  name: "SolutionValuation",
  props: {
    send: Function,
  },
  components: {
    NavigationProgressBarWrapper,
    TitleWrapper,
    BaseSelect,
    BaseRadioGroup,
  },
  setup(props) {
    const data = reactive({ solutionValuationData, roles })

    const rules = {
      solutionValuationData: {
        selected: {
          required,
        },
      },
    }

    const v$ = useVuelidate(rules, data)

    function handleSelectSingleItem(updatedOptions) {
      data.roles.options = updatedOptions
    }

    const handleClickNext = () => {
      // disable validation for now
      // props.send({ type: "SOLUTION_VALUATION_NEXT", validation: v$ })
      props.send("SOLUTION_VALUATION_NEXT")
    }

    return {
      data,
      v$,
      handleSelectSingleItem,
      handleClickNext,
    }
  },
}
</script>

<style scoped></style>
