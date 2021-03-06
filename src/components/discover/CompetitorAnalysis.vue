<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-10">
      <TitleWrapper
        title="Website"
        required
      >
        <BaseInput
          v-model="formData.summary.website"
          :error="v$.summary.website.$error"
          @blur="v$.summary.website.$touch"
          placeholder="Add website..."
          custom-class="w-full"
        />
      </TitleWrapper>
      <div class="flex">
        <TitleWrapper
          title="Year Founded"
          required
        >
          <BaseInput
            v-model="formData.summary.yearFounded"
            :error="v$.summary.yearFounded.$error"
            @blur="v$.summary.yearFounded.$touch"
            placeholder="Add year founded..."
            custom-class="w-52"
          />
        </TitleWrapper>
        <TitleWrapper
          title="Active Users"
          required
        >
          <BaseInput
            v-model="formData.summary.activeUsers"
            :error="v$.summary.activeUsers.$error"
            @blur="v$.summary.activeUsers.$touch"
            placeholder="Add active users..."
            custom-class="w-52"
          />
        </TitleWrapper>
        <TitleWrapper
          title="Funding"
          required
        >
          <BaseInput
            v-model="formData.summary.funding"
            :error="v$.summary.funding.$error"
            @blur="v$.summary.funding.$touch"
            placeholder="Add funding..."
            custom-class="w-52"
          />
        </TitleWrapper>
      </div>
      <div class="flex justify-between">
        <TitleWrapper title="Strength">
          <BaseInput
            v-model="formData.strength"
            placeholder="Add strength..."
            custom-class="w-80"
          />
        </TitleWrapper>
        <TitleWrapper title="Weakness">
          <BaseInput
            v-model="formData.weakness"
            placeholder="Add weakness..."
            custom-class="w-80"
          />
        </TitleWrapper>
      </div>
    </div>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="v$.$invalid"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseInput from "@/base/BaseInput"

export default {
  name: "CompetitorAnalysis",
  components: { BaseInput, TitleWrapper, NavigationButtonGroup },
  props: {
    send: Function
  },
  setup() {
    const formData = reactive({
      summary: {
        website: "",
        yearFounded: null,
        activeUsers: "",
        funding: ""
      },
      strength: "",
      weakness: ""
    })

    const rules = {
      summary: {
        website: { required },
        yearFounded: { required },
        activeUsers: { required },
        funding: { required }
      }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, v$ }
  }
}
</script>

<style scoped></style>
