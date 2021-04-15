<template>
  <div class="flex flex-col items-center space-y-10">
    <div class="space-y-10">
      <TitleWrapper
        title="What is your favorite color?"
        required
      >
        <BaseSelect
          custom-class="w-72"
          :options="data.colorData2.options"
          @handleToggleSelectItem="handleToggleSelectItem"
          mode="multiple"
        />
      </TitleWrapper>
    </div>
    <div class="pt-20 hidden">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="false"
      />
    </div>
  </div>
</template>

<script>
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseSelect from "@/base/BaseSelect"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import { reactive } from "vue"
import { useVuelidate } from "@vuelidate/core"

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
    }
  ]
}

export default {
  name: "Flows",
  props: {
    send: Function
  },
  components: { TitleWrapper, BaseSelect, NavigationButtonGroup },
  setup() {
    const data = reactive({ colorData2 })

    const rules = {}

    const v$ = useVuelidate(rules, data)

    function handleToggleSelectItem(updatedOptions) {
      data.colorData2.options = updatedOptions
    }

    return {
      data,
      v$,
      handleToggleSelectItem
    }
  }
}
</script>

<style scoped>

</style>
