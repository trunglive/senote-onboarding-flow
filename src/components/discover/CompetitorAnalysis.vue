<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-10">
      <TitleWrapper
        :title="formData.summary.radioData.title"
        required
      >
        <BaseRadioGroup
          v-model="formData.summary.radioData.checked"
          :name="formData.summary.radioData.name"
          :options="formData.summary.radioData.options"
          :model-value="formData.summary.radioData.checked"
        />
      </TitleWrapper>
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
      <div class="flex space-x-6">
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
      <Switch
        :on="formData.seoEnabled"
        label="SEO Analysis"
        @handleToggleSwitch="handleToggleSwitch"
      />
      <TitleWrapper
        v-show="formData.seoEnabled"
        :title="formData.summary.checkboxData.title"
      >
        <BaseCheckboxGroup
          v-model="formData.summary.checkboxData.checked"
          :name="formData.summary.checkboxData.name"
          :options="formData.summary.checkboxData.options"
        />
      </TitleWrapper>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import TitleWrapper from "@/base/wrapper/TitleWrapper"
import BaseRadioGroup from "@/base/BaseRadioGroup"
import BaseInput from "@/base/BaseInput"
import Switch from "@/base/Switch"
import BaseCheckboxGroup from "@/base/BaseCheckboxGroup"

const radioData = {
  title: "Competitor Type",
  name: "userInterviewQuestions",
  checked: "",
  options: [
    {
      value: "direct",
      label: "Direct"
    },
    {
      value: "indirect",
      label: "Indirect"
    }
  ]
}

const checkboxData = {
  title: "Traffic",
  name: "traffic",
  checked: [],
  options: [
    {
      value: "visits",
      label: "Visits"
    },
    {
      value: "uniqueVisitors",
      label: "Unique Visitors"
    },
    {
      value: "pageViews",
      label: "Page Views"
    }
  ]
}

export default {
  name: "CompetitorAnalysis",
  components: { BaseCheckboxGroup, TitleWrapper, BaseRadioGroup, BaseInput, Switch },
  props: {
    send: Function
  },
  setup() {
    const formData = reactive({
      summary: {
        radioData,
        checkboxData,
        website: "",
        yearFounded: null,
        activeUsers: "",
        funding: ""
      },
      seoEnabled: true
    })

    const rules = {
      summary: {
        radioData: {
          checked: required
        },
        checkboxData: {
          checked: required
        },
        website: { required },
        yearFounded: { required },
        activeUsers: { required },
        funding: { required }
      }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    function handleToggleSwitch(value) {
      formData.seoEnabled = !formData.seoEnabled
    }

    return { formData, v$, handleToggleSwitch }
  }
}
</script>

<style scoped></style>
