<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-10">
      <TitleWrapper
        title="What are the main marketing messages?"
        required
      >
        <BaseInput
          v-model="state.marketingMessage"
          :error="v$.marketingMessage.$error"
          @blur="v$.marketingMessage.$touch"
          placeholder="Add Answer..."
        />
      </TitleWrapper>
      <TitleWrapper
        title="What's the worst thing that could happen in this project?"
        required
      >
        <BaseInput
          v-model="state.worstThingHappened"
          :error="v$.worstThingHappened.$error"
          @blur="v$.worstThingHappened.$touch"
          placeholder="Add Answer..."
        />
      </TitleWrapper>
    </div>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.marketingMessage.$invalid || v$.worstThingHappened.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { computed, reactive } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
import BaseInput from "@/base/BaseInput"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import TitleWrapper from "@/base/wrapper/TitleWrapper"

export default {
  components: { TitleWrapper, BaseInput, NavigationButtonGroup },
  props: {
    msg: String,
    send: Function,
    currentState: String
  },
  name: "StakeholderInterview",
  setup() {
    const state = reactive({
      marketingMessage: "",
      worstThingHappened: ""
    })

    const rules = {
      marketingMessage: {
        required
      },
      worstThingHappened: {
        required
      }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
}
</script>

<style scoped>

</style>
