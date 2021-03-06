<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarGroup
      :avatar-letter="avatarLetter"
      title="Continue with Email"
    />
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <BaseInput
          v-model="formData.emailAddress"
          @blur="v$.emailAddress.$touch"
          placeholder="Enter email"
          custom-class="w-72 pl-0 pr-0"
          :enable-background-on-hover="false"
        />
        <AppIcon
          icon="Checkmark"
          width="28"
          height="28"
          v-show="formData.emailAddress.length > 0 && !v$.emailAddress.$invalid"
        />
        <AppIcon
          icon="Close"
          width="28"
          height="28"
          v-show="formData.emailAddress.length > 0 && v$.emailAddress.$invalid"
        />
      </div>
      <div class="border-t border-dashed">
        <NavigationButtonGroup
          :send="send"
          :disable-continue-button="v$.$invalid"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue"
import BaseInput from "@/base/BaseInput"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AvatarGroup from "@/components/AvatarGroup"
import AppIcon from "@/components/AppIcon"
import { email, required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

export default {
  name: "AddEmail",
  components: {
    BaseInput,
    AvatarGroup,
    AppIcon,
    NavigationButtonGroup,
  },
  props: {
    msg: String,
    send: Function,
  },
  setup() {
    const formData = reactive({
      emailAddress: "",
    })

    const avatarLetter = computed(() => formData.emailAddress?.[0])

    const rules = {
      emailAddress: { required, email },
    }

    const v$ = useVuelidate(rules, toRefs(formData))

    return { formData, avatarLetter, v$ }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
