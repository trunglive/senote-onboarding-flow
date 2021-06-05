<template>
  <NavigationProgressBarWrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="flex flex-col items-center space-y-10">
      <div class="space-y-10">
        <TitleWrapper
          title="What is your favorite color?"
        >
          <BaseSelect
            custom-class="w-72"
            :options="data.colorData2.options"
            @handleToggleSelectItem="handleToggleSelectItem"
            mode="multiple"
          />
        </TitleWrapper>
      </div>
    </div>
  </NavigationProgressBarWrapper>
</template>

<script>
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseSelect from "@/base/BaseSelect"
import { reactive } from "vue"
import { useVuelidate } from "@vuelidate/core"
import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"

const colorData2 = {
  title: "What are your favorite colors?",
  name: "colorQuestions",
  selected: [],
  options: [
    {
      value: "black",
      label: "Black",
      selected: false,
      color: "bg-black",
    },
    {
      value: "silver",
      label: "Silver",
      selected: false,
      color: "bg-white-dark-2",
    },
    {
      value: "ocean",
      label: "Ocean",
      selected: true,
      color: "bg-ocean-dark",
    },
    {
      value: "blue",
      label: "Blue",
      selected: false,
      color: "bg-blue",
    },
    {
      value: "purple",
      label: "Purple",
      selected: false,
      color: "bg-purple-dark",
    },
    {
      value: "red",
      label: "Red",
      selected: false,
      color: "bg-red",
    },
  ],
}

export default {
  name: "Flows",
  props: {
    send: Function,
  },
  components: { NavigationProgressBarWrapper, TitleWrapper, BaseSelect },
  setup(props) {
    const data = reactive({ colorData2 })

    const rules = {}

    const v$ = useVuelidate(rules, data)

    function handleToggleSelectItem(updatedOptions) {
      data.colorData2.options = updatedOptions
    }

    const handleClickNext = () => {
      // disable validation for now
      // props.send({ type: "FLOWS_NEXT", validation: v$ })
      props.send("FLOWS_NEXT")
    }

    return {
      data,
      v$,
      handleToggleSelectItem,
      handleClickNext,
    }
  },
}
</script>

<style scoped></style>
