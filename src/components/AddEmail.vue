<template>
  <div class="">
    <div class="text-5xl font-bold">
      Welcome!
    </div>
    <div class="pt-12 pb-8 text-black">
      First, we'd like to get to know about you
    </div>
    <div class="space-y-10">
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
      <TitleWrapper
        title="What is your project about?"
      >
        <BaseTextarea
          v-model="formData.projectSummary"
          placeholder="Hey team, I'd love to share with you about Milrx project that I am working on..."
          custom-class="w-72"
        />
      </TitleWrapper>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue"
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseInput from "@/base/BaseInput"
import BaseTextarea from "@/base/BaseTextarea"

export default {
  name: "AddEmail",
  components: {
    TitleWrapper,
    BaseInput,
    BaseTextarea,
  },
  props: {
    msg: String,
    send: Function,
  },
  setup() {
    const formData = reactive({
      fullName: "",
      emailAddress: "",
      projectSummary: "",
    })

    const avatarLetter = computed(() => formData.emailAddress?.[0])

    const rules = {
      fullName: { required },
      emailAddress: { required, email },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, avatarLetter, v$ }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
