<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-10">
      <TitleWrapper
        :title="formData.radioData.title"
        required
      >
        <div class="flex pt-4">
          <BaseRadioGroup
            v-model="formData.radioData.checked"
            :name="formData.radioData.name"
            :options="formData.radioData.options"
            :model-value="formData.radioData.checked"
          />
        </div>
      </TitleWrapper>
      <TitleWrapper
        title="What are your favorite colors?"
        required
      >
        <div class="min-h-80">
          <BaseSelect
            custom-class="w-64"
            :options="formData.colorData.options"
            @handleToggleSelectItem="handleToggleSelectItem"
            mode="multiple"
          />
        </div>
      </TitleWrapper>
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
import BaseSelect from "@/base/BaseSelect"
import BaseRadioGroup from "@/base/BaseRadioGroup"

const radioData = {
  title: "On a typical day, when do you get focused the most?",
  name: "userInterviewQuestions",
  checked: "",
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

const colorData = {
  title: "What are your favorite colors?",
  name: "colorQuestions",
  selected: [],
  options: [
    {
      value: "black",
      label: "Black",
      selected: true,
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
      selected: true,
      color: "bg-red"
    }
  ]
}

export default {
  name: "UserInterview",
  components: { BaseRadioGroup, BaseSelect, TitleWrapper },
  props: {
    msg: String,
    send: Function,
    currentState: String
  },
  setup() {
    const formData = reactive({ radioData, colorData })

    const rules = {
      radioData: {
        checked: required
      },
      colorData: {
        checked: {
          required
        }
      }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    function handleToggleSelectItem(updatedOptions) {
      formData.colorData.options = updatedOptions
    }

    return {
      formData,
      v$,
      handleToggleSelectItem
    }
  }
}
</script>

<style scoped></style>
