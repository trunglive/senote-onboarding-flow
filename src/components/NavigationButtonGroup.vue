<template>
  <div class="flex flex-col mt-4">
    <div :class="{ 'cursor-not-allowed': showSpinner || disableContinueButton, 'cursor-pointer': !disableContinueButton }">
      <a
        @click="handleClickContinue"
        :class="
          showSpinner || disableContinueButton
            ? 'bg-ocean-blur pointer-event-none'
            : 'bg-ocean hover:bg-ocean-dark'
        "
        class="w-navigation-button h-12 flex flex-col items-center justify-center rounded-md text-white font-bold duration-200 ease-in-out"
      >
        <Spinner
          v-show="showSpinner"
          class="w-6 h-6"
          :class="showSpinner && 'bg-ocean-blur'"
        />
        <span v-show="!showSpinner">Continue</span>
      </a>
    </div>
    <a
      @click="handleClickBack"
      href="#"
      class="text-black w-navigation-button h-12 flex flex-col items-center justify-center hover:text-black-light duration-100 ease-in-out"
    >
      Back
    </a>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner"
import { ref } from "vue"

export default {
	name: "NavigationButtonGroup",
	props: {
		send: Function,
		disableContinueButton: Boolean,
	},
	components: { Spinner },
	setup(props, { emit }) {
		const showSpinner = ref(false)

		function handleClickContinue() {
			if (!props.disableContinueButton) {
				showSpinner.value = true
				return new Promise((resolve) => {
					setTimeout(() => {
						resolve("success")
						showSpinner.value = false
						props.send("NEXT")
						emit("nextStep", { currentStep: 0 })
					}, 300)
				})
			}
		}

		function handleClickBack() {
			props.send("BACK")
		}

		return {
			showSpinner,
			handleClickContinue,
			handleClickBack,
		}
	}
}
</script>

<style scoped></style>
