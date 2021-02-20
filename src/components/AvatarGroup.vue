<template>
  <div class="flex flex-col items-center mb-10">
    <div
      class="flex flex-col items-center justify-center w-16 h-16 rounded-md bg-white-dark font-bold text-2xl"
    >
      <div
        v-if="avatarLetter?.length > 0"
        class="text-ocean-dark"
      >
        {{ avatarLetter.toUpperCase() }}
      </div>
      <Mailbox v-if="avatarLetter === undefined" />
    </div>
    <div class="text-black-dark text-xl mt-6">
      {{ avatarLetter?.length > 0 ? "Create Account" : "Continue with Email" }}
    </div>
  </div>
</template>

<script>
import Mailbox from "@/components/icons/Mailbox"

export default {
	components: { Mailbox },
	props: {
		avatarLetter: {
			type: String,
		},
	}
}
</script>

<style scoped>

</style>
