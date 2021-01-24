<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col w-80 mb-2">
      <div class="text-black-dark text-xl">
        Choose your methods for the Analyze Phase.
      </div>
      <div class="space-y-2.5 mt-6 mb-2">
        <div
            class="flex items-center space-x-4"
        >
          <div class="flex">
            <div
                class="flex items-center justify-center w-16 h-10 rounded-md font-bold text-lg text-white"
            >
              icon
            </div>
            <div>Problem Valuation</div>
          </div>
          <div>
            <div class="text-lg text-black-light">On/Off toggle</div>
            <div>Question mark</div>
          </div>
        </div>
      </div>
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup";

export default {
  name: "Phase",
  props: {
    send: Function,
    phase: Object,
  },
  components: {
    NavigationButtonGroup,
  },
};
</script>

<style scoped></style>
