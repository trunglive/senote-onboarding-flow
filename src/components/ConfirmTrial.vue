<template>
  <NavigationProgressBarWrapper
    :state="state"
    :send="send"
    @next="handleClickNext"
  >
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col w-navigation-button mb-2">
        <StepInfo :title="composeStepTitle()" />
      </div>
    </div>
  </NavigationProgressBarWrapper>
</template>

<script>
import StepInfo from "@/components/StepIntro"
import NavigationProgressBarWrapper from "@/components/NavigationProgressBarWrapper"

export default {
  name: "ConfirmTrial",
  props: {
    send: Function,
  },
  components: { NavigationProgressBarWrapper, StepInfo },
  setup(props) {
    function composeStepTitle() {
      return "Thank you for completing the form. We will get in touch with you shortly."
    }

    const handleClickNext = () => {
      props.send("CONFIRM_TRIAL_NEXT")
    }

    return {
      composeStepTitle,
      handleClickNext,
    }
  },
}
</script>

<style scoped></style>
