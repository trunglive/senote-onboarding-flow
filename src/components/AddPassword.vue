<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarGroup
      avatar-title="S"
      avatar-text="Set your password"
    />
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <BaseInput
          v-model="formData.password"
          @blur="v$.password.$touch"
          placeholder="Enter your password"
          custom-class="w-72"
          :enable-background-on-hover="false"
        />
        <Checkmark v-if="!v$.password.$invalid" />
      </div>
      <div class="border-t border-dashed">
        <div class="mt-4 text-sm text-left">
          <span>Password should be at least </span>
          <span class="font-bold"> {{ passwordMinLength }} characters long</span>
        </div>
        <NavigationButtonGroup
          :send="send"
          :disable-continue-button="v$.password.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import BaseInput from "@/base/BaseInput"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AvatarGroup from "@/components/AvatarGroup"
import Checkmark from "@/components/icons/Checkmark"
import { minLength, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

const passwordMinLength = 5

export default {
  name: "AddPassword",
  props: {
    send: Function
  },
  setup() {
    const formData = reactive({
      password: ""
    })

    const rules = {
      password: { required, minLength: minLength(passwordMinLength) }
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, v$, passwordMinLength }
  },
  components: { BaseInput, AvatarGroup, NavigationButtonGroup, Checkmark }
}
</script>

<style scoped></style>
