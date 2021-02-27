<template>
  <div class="flex flex-col items-center justify-center">
    <div class="space-y-10">
      <BaseCheckbox label="okay" />
    </div>
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="false"
      />
    </div>
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import BaseCheckbox from "@/base/BaseCheckbox"

export default {
	name: "UserInterview",
	components: { BaseCheckbox, NavigationButtonGroup },
	props: {
		msg: String,
		send: Function,
		currentState: String,
	},
	setup() {}
}
</script>

<style scoped>
</style>
