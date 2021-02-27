<template>
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
</template>

<script>
import Mailbox from "@/components/icons/Mailbox"
export default {
  name: "AvatarSquareBox",
  props: {
    avatarLetter: {
      type: String,
      default: null,
    }
  },
  components: { Mailbox },
}
</script>

<style scoped>

</style>
