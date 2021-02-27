<template>
  <div class="flex flex-col items-center justify-center">
    <TitleWrapper
      :title="minPersonasText"
      required
    >
      <div>
        <div
          v-for="persona in state.personaList"
          :key="persona.id"
          class="avatar-input-wrapper flex p-2 hover:bg-white-light"
          :class="{ 'cursor-pointer': persona.entered }"
        >
          <AvatarSquareBox
            :avatar-letter="persona.entered && persona.value"
            custom-size="w-12 h-12"
            :custom-background-color="persona.entered && persona.value ? 'bg-ocean-dark' : 'bg-white-light'"
            enable-empty-avatar
          />
          <BaseInput
            :id="persona.id"
            :ref="persona.id"
            v-model="persona.value"
            placeholder="Add persona..."
            @enter="handleHitEnter"
            :disable-input="persona.entered"
          />
        </div>
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
import { nextTick, reactive } from "vue"
import { required } from "@vuelidate/validators"
import { useVuelidate } from "@vuelidate/core"
import { v4 as uuidv4 } from "uuid"

const minPersonas = 2

export default {
	name: "Personas",
	props: {
		send: Function,
	},
	components: {
		TitleWrapper,
		BaseInput,
		NavigationButtonGroup,
		AvatarSquareBox,
	},
	setup() {
		const state = reactive({
			personaList: [{ id: uuidv4(), value: "", entered: false }],
		})

		const rules = {
			personaList: [
				{
					value: {
						required,
					},
				},
			],
		}

		const v$ = useVuelidate(rules, state)

		const minPersonasText = `Please add at least ${minPersonas} persona${
			minPersonas === 1 ? "" : "s"
		}`

		function handleHitEnter({ value, id }) {
      state.personaList = state.personaList.map(persona => {
        if (persona.id === id) {
          return {
            ...persona,
            entered: true,
          }
        }
        return persona
      });

      const nextId = uuidv4()

      state.personaList.push({
        id: nextId, value: '', entered: false
      })

      // focus on next input on next component re-render
      // convert to ref in vue 3 later
      nextTick(() => document.getElementById(nextId).focus())
		}

		return { state, v$, minPersonasText, handleHitEnter }
	},
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
