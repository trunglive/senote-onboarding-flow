<template>
  <div
    :class="[customSize]"
    class="flex flex-col items-center justify-center rounded-md bg-white-dark font-bold text-2xl"
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
    customSize: {
      type: String,
      default: 'w-16 h-16'
    },
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
