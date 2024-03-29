<template>
  <div
    class="flex"
    :class="[
      horizontal ? 'flex-row-reverse space-x-reverse space-x-2' : 'flex-col',
      hidden && 'hidden',
    ]"
  >
    <div
      :class="{
        'cursor-not-allowed': showSpinner || disableContinueButton,
        'cursor-pointer': !disableContinueButton,
        hidden: currentState === 'confirmTrial',
      }"
    >
      <a
        @click="handleClickContinue"
        :class="[
          showSpinner || disableContinueButton
            ? 'bg-ocean-light opacity-50 pointer-event-none'
            : 'bg-ocean hover:bg-ocean-dark',
          customWidth,
        ]"
        class="h-12 flex flex-col items-center justify-center rounded text-white text-sm font-bold duration-200 ease-in-out"
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
      class="h-12 flex flex-col items-center justify-center text-black-light text-sm font-bold hover:text-black duration-100 ease-in-out"
      :class="[
        customWidth,
        horizontal && 'border-1 border-white-dark rounded',
        currentState === 'addEmail' ? 'hidden' : 'block',
      ]"
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
    disableBackButton: Boolean,
    hidden: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
    customWidth: {
      type: String,
      default: "w-navigation-button",
    },
    currentState: {
      type: String,
      default: "",
    },
  },
  components: { Spinner },
  emits: ["next"],
  setup(props, { emit }) {
    const showSpinner = ref(false)

    function handleClickContinue() {
      if (!props.disableContinueButton) {
        showSpinner.value = true
        return new Promise(resolve => {
          setTimeout(() => {
            resolve("success")
            showSpinner.value = false
            emit("next")
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
  },
}
</script>

<style scoped></style>
