<template>
  <div class="flex flex-col mt-4">
    <div :class="{ 'cursor-not-allowed': showSpinner || !emailInput }">
      <a
        @click="handleClickContinue"
        href="#"
        :class="
          showSpinner || !emailInput
            ? 'bg-ocean-blur pointer-event-none'
            : 'bg-ocean hover:bg-ocean-dark'
        "
        class="w-80 h-12 flex flex-col items-center justify-center rounded-md text-white font-bold duration-200 ease-in-out"
      >
        <Spinner
          v-show="showSpinner"
          class="w-6 h-6"
          :class="showSpinner && 'opacity-100'"
        />
        <span v-show="!showSpinner">Continue</span>
      </a>
    </div>
    <a
      @click="handleClickBack"
      href="#"
      class="text-black w-80 h-12 flex flex-col items-center justify-center hover:text-black-light duration-100 ease-in-out"
    >
      Back
    </a>
  </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import { ref } from "vue";
export default {
  name: "NavigationButtonGroup",
  props: {
    send: Function,
  },
  components: { Spinner },
  setup(props, { emit }) {
    const emailInput = ref("");
    const showSpinner = ref(false);

    function handleClickContinue() {
      showSpinner.value = true;
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("success");
          showSpinner.value = false;
          props.send("NEXT");
          emit("nextStep", { currentStep: 0 });
        }, 1000);
      });
    }

    function handleClickBack() {
      props.send("BACK");
    }

    function disableClickContinue() {
      return showSpinner.value || !emailInput.value;
    }

    return {
      emailInput,
      showSpinner,
      handleClickContinue,
      handleClickBack,
      disableClickContinue,
    };
  },
};
</script>

<style scoped></style>
