<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarGroup
      avatar-text="Set your password"
      title="Create password"
    />
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <BaseInput
          v-model="formData.password"
          @blur="v$.password.$touch"
          placeholder="Enter your password"
          custom-class="w-72 pl-0 pr-0"
          :enable-background-on-hover="false"
        />
        <AppIcon
          icon="Checkmark"
          width="28"
          height="28"
          v-show="formData.password.length > 0 && !v$.password.$invalid"
        />
        <AppIcon
          icon="Close"
          width="28"
          height="28"
          v-show="formData.password.length > 0 && v$.password.$invalid"
        />
      </div>
      <div class="border-t border-dashed">
        <div class="mt-4 text-sm text-left">
          <span>Password should be at least </span>
          <span class="font-bold">
            {{ passwordMinLength }} characters long</span>
        </div>
        <NavigationButtonGroup
          :send="send"
          :disable-continue-button="v$.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import BaseInput from "@/base/BaseInput"
import AppIcon from "@/components/AppIcon"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AvatarGroup from "@/components/AvatarGroup"
import { minLength, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

const passwordMinLength = 5

export default {
  name: "AddPassword",
  props: {
    send: Function,
  },
  components: { AppIcon, BaseInput, AvatarGroup, NavigationButtonGroup },
  setup() {
    const formData = reactive({
      password: "",
    })

    const rules = {
      password: { required, minLength: minLength(passwordMinLength) },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, v$, passwordMinLength }
  },
}
</script>

<style scoped></style>
