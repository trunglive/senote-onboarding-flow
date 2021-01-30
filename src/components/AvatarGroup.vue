<template>
  <div class="flex flex-col items-center mb-10">
    <div
      class="flex flex-col items-center justify-center w-16 h-16 rounded-md bg-blue-light font-bold text-2xl"
    >
      {{ avatarTitle }}
    </div>
    <div class="text-black-dark font-bold text-xl mt-6">
      {{ avatarText }}
    </div>
  </div>
</template>

<script>
export default {
	props: {
		avatarTitle: {
			type: String,
		},
		avatarText: {
			type: String,
		}
	}
}
</script>

<style scoped>

</style>
