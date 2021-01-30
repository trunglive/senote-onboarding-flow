<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarGroup
      avatar-title="S"
      avatar-text="Set your password"
    />
    <div>
      <div class="flex items-center justify-between w-navigation-button">
        <input
          v-model="passwordInput"
          id="password"
          name="password"
          type="password"
          autocomplete="off"
          required
          class="appearance-none rounded-none py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10"
          placeholder="Enter your password"
        >
        <Checkmark />
      </div>
      <div class="border-t border-dashed">
        <div class="mt-4 text-sm text-left">
          <span>Password should be at least</span>
          <span class="font-bold"> 8 characters long</span>
        </div>
        <NavigationButtonGroup :send="send" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
import AvatarGroup from "@/components/AvatarGroup"
import Checkmark from "@/components/icons/Checkmark"

export default {
	name: "AddPassword",
	props: {
		send: Function
	},
	components: { AvatarGroup, NavigationButtonGroup, Checkmark }
}
</script>

<style scoped></style>
