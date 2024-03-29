<template>
  <NavigationProgressBarWrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="space-y-10">
        <TitleWrapper
          :title="formData.summary.radioData.title"
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
            placeholder="https://www.google.com"
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
              placeholder="2009"
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
              placeholder="5000"
              custom-class="w-52"
            />
          </TitleWrapper>
          <TitleWrapper
            title="Funding (in USD)"
            required
          >
            <BaseInput
              v-model="formData.summary.funding"
              :error="v$.summary.funding.$error"
              @blur="v$.summary.funding.$touch"
              placeholder="1000000"
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
  </NavigationProgressBarWrapper>
</template>

<script>
import { reactive, toRefs } from "vue"
import { required, url, numeric, between } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"
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
      label: "Direct",
    },
    {
      value: "indirect",
      label: "Indirect",
    },
  ],
}

const checkboxData = {
  title: "Traffic",
  name: "traffic",
  checked: [],
  options: [
    {
      value: "visits",
      label: "Visits",
    },
    {
      value: "uniqueVisitors",
      label: "Unique Visitors",
    },
    {
      value: "pageViews",
      label: "Page Views",
    },
  ],
}

export default {
  name: "CompetitorAnalysis",
  components: {
    NavigationProgressBarWrapper,
    TitleWrapper,
    BaseCheckboxGroup,
    BaseRadioGroup,
    BaseInput,
    Switch,
  },
  props: {
    state: Object,
    send: Function,
  },
  setup(props) {
    const formData = reactive({
      summary: {
        radioData,
        checkboxData,
        website: "",
        yearFounded: null,
        activeUsers: "",
        funding: "",
      },
      seoEnabled: true,
    })

    const rules = {
      summary: {
        radioData: {
          checked: required,
        },
        checkboxData: {
          checked: required,
        },
        website: { required, url },
        yearFounded: { required, between: between(1000, 2021) },
        activeUsers: { required, numeric },
        funding: { required, numeric },
      },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    function handleToggleSwitch(value) {
      formData.seoEnabled = !formData.seoEnabled
    }

    const handleClickNext = () => {
      props.send({ type: "COMPETITOR_ANALYSIS_NEXT", validation: v$ })
    }

    return { formData, v$, handleToggleSwitch, handleClickNext }
  },
}
</script>

<style scoped></style>
