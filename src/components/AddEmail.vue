<template>
  <navigation-progress-bar-wrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="">
      <div class="text-4xl font-bold opacity-80">
        Welcome to Senote
      </div>
      <div class="pt-12 pb-8 text-black">
        First, we'd like to get to know about you
      </div>
      <div class="space-y-10">
        <div class="flex space-x-6">
          <TitleWrapper
            title="What is your name?"
            required
          >
            <BaseInput
              v-model="formData.name"
              :error="v$.name.$error"
              @blur="v$.name.$touch"
              placeholder="Daniel"
              custom-class="w-72"
            />
          </TitleWrapper>
          <TitleWrapper
            title="What is your email?"
            required
          >
            <BaseInput
              v-model="formData.emailAddress"
              :error="v$.emailAddress.$error"
              @blur="v$.emailAddress.$touch"
              placeholder="daniel@gmail.com"
              custom-class="w-72"
            />
          </TitleWrapper>
        </div>
        <TitleWrapper title="What is your project about?">
          <BaseTextarea
            v-model="formData.projectSummary"
            placeholder="Hey team, I'd love to share with you about Milrx project that I am working on..."
            custom-class="w-72"
          />
        </TitleWrapper>
      </div>
    </div>
  </navigation-progress-bar-wrapper>
</template>

<script>
import { reactive, computed, toRefs } from "vue"
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseInput from "@/base/BaseInput"
import BaseTextarea from "@/base/BaseTextarea"

export default {
  name: "AddEmail",
  components: {
    NavigationProgressBarWrapper,
    TitleWrapper,
    BaseInput,
    BaseTextarea,
  },
  props: {
    msg: String,
    state: Object,
    send: Function,
  },
  setup(props) {
    const formData = reactive({
      name: "",
      emailAddress: "",
      projectSummary: "",
    })

    const avatarLetter = computed(() => formData.emailAddress?.[0])

    const rules = {
      name: { required },
      emailAddress: { required, email },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    const handleClickNext = () => {
      props.send({ type: "ADD_EMAIL_NEXT", validation: v$ });
    }

    return { formData, avatarLetter, v$, handleClickNext }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
