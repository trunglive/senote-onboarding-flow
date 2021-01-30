<template>
  <div class="min-h-screen flex flex-col items-center justify-center">
    <AvatarGroup
      avatar-title="S"
      avatar-text="Set your password"
    />
    <div>
      <input
        v-model="passwordInput"
        id="password"
        name="password"
        type="password"
        autocomplete="off"
        required
        class="appearance-none rounded-none w-full py-2 placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10"
        placeholder="Enter your password"
      >
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

export default {
	name: "AddPassword",
	props: {
		send: Function
	},
	components: { AvatarGroup, NavigationButtonGroup }
}
</script>

<style scoped></style>
