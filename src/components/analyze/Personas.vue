<template>
  <div class="flex flex-col items-center justify-center">
    <TitleWrapper
      :title="minPersonasText"
      required
    >
      <div
        class="avatar-input-wrapper flex p-4 hover:bg-white-light"
      >
        <AvatarSquareBox
          custom-size="w-14 h-14"
          custom-background-color="bg-white-light"
          enable-empty-avatar
        />
        <BaseInput
          v-model="state.persona"
          placeholder="Add persona..."
        />
      </div>
    </TitleWrapper>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="false"
      />
    </div>
  </div>
</template>

<script>
import TitleWrapper from "@/base/wrapper/TitleWrapper"
import AvatarSquareBox from "@/components/AvatarSquareBox"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import BaseInput from "@/base/BaseInput"
import { reactive } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"

const minPersonas = 2

export default {
  name: "Personas",
  props: {
    send: Function,
  },
  components: { TitleWrapper, BaseInput, NavigationButtonGroup, AvatarSquareBox },
  setup() {
    const state = reactive({
      persona: "",
    })

    const rules = {
      persona: {
        required
      },
    }

    const v$ = useVuelidate(rules, state)

    const minPersonasText = `Please add at least ${minPersonas} persona${minPersonas === 1 ? '' : 's'}`
    return { state, v$, minPersonasText }
  }
}
</script>

<style scoped>
.avatar-input-wrapper:hover .avatar--inner-circle {
  background-color: #f2f4f6;
}
.avatar-input-wrapper:hover .avatar--inner-circle:before {
  background-color: #e7ebee;
}
.avatar-input-wrapper:hover .base-input {
  background-color: #f8f9fa;
}
</style>
