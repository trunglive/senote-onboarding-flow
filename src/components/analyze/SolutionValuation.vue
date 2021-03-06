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
        title="What is your favorite color?"
        required
      >
        <BaseSelect
          custom-class="w-72"
          :options="data.colorData2.options"
          @handleSelectSingleItem="handleSelectSingleItem"
        />
      </TitleWrapper>
    </div>
    <div class="pt-20">
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

const colorData2 = {
  title: "What are your favorite colors?",
  name: "colorQuestions",
  selected: [],
  options: [
    {
      value: "black",
      label: "Black",
      selected: false,
      color: "bg-black"
    },
    {
      value: "silver",
      label: "Silver",
      selected: false,
      color: "bg-white-dark-2"
    },
    {
      value: "ocean",
      label: "Ocean",
      selected: true,
      color: "bg-ocean-dark"
    },
    {
      value: "blue",
      label: "Blue",
      selected: false,
      color: "bg-blue"
    },
    {
      value: "purple",
      label: "Purple",
      selected: false,
      color: "bg-purple-dark"
    },
    {
      value: "red",
      label: "Red",
      selected: false,
      color: "bg-red"
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
    const data = reactive({ solutionValuationData, colorData2 })

    const rules = {
      solutionValuationData: {
        selected: {
          required
        }
      }
    }

    const v$ = useVuelidate(rules, data)

    function handleSelectSingleItem(updatedOptions) {
      data.colorData2.options = updatedOptions
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
