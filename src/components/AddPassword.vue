<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarGroup
      avatar-title="S"
      avatar-text="Set your password"
    />
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <input
          v-model="state.password"
          id="password"
          name="password"
          type="password"
          autocomplete="off"
          required
          class="w-navigation-button appearance-none rounded-none py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10"
          placeholder="Enter your password"
        >
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
import { reactive } from "vue"
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
    const state = reactive({
      password: ""
    })
    const rules = {
      password: { required, minLength: minLength(passwordMinLength) }
    }
    const v$ = useVuelidate(rules, state)
    return { state, v$, passwordMinLength }
  },
  components: { AvatarGroup, NavigationButtonGroup, Checkmark }
}
</script>

<style scoped></style>
