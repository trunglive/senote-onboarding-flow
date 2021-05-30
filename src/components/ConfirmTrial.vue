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
      return "That’s it! You’re ready to go. Start your free 7-day trial."
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
