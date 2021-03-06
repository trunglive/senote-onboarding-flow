<template>
  <div class="">
    <div class="text-5xl font-bold">
      Welcome!
    </div>
    <div class="pt-12 pb-8 text-black">
      First, we'd like to get to know about you
    </div>
    <div class="flex space-x-6">
      <TitleWrapper
        title="What is your full name?"
        required
      >
        <BaseInput
          v-model="formData.fullName"
          @blur="v$.fullName.$touch"
          placeholder="John Doe"
          custom-class="w-72"
        />
      </TitleWrapper>
      <TitleWrapper
        title="What is your email?"
        required
      >
        <BaseInput
          v-model="formData.emailAddress"
          @blur="v$.emailAddress.$touch"
          placeholder="john.doe@gmail.com"
          custom-class="w-72"
        />
      </TitleWrapper>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue"
import BaseInput from "@/base/BaseInput"
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
import TitleWrapper from "@/base/wrapper/TitleWrapper"

export default {
  name: "AddEmail",
  components: {
    TitleWrapper,
    BaseInput,
  },
  props: {
    msg: String,
    send: Function,
  },
  setup() {
    const formData = reactive({
      fullName: "",
      emailAddress: "",
    })

    const avatarLetter = computed(() => formData.emailAddress?.[0])

    const rules = {
      fullName: { required, email },
      emailAddress: { required, email },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, avatarLetter, v$ }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
