<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center w-navigation-button mb-2">
      <div class="text-black-dark text-xl mt-6">
        Customize your first project
      </div>
      <div class="text-black-light text-sm mt-1">
        It takes only 45 seconds
      </div>
    </div>
    <NavigationButtonGroup :send="send" />
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"

export default {
	name: "CustomizeFirstProject",
	props: {
		send: Function
	},
	components: { NavigationButtonGroup }
}
</script>

<style scoped></style>
