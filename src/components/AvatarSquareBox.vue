<template>
  <div
    :class="[customSize, customBackgroundColor, enableEmptyAvatar && 'avatar--inner-circle']"
    class="flex flex-col items-center justify-center rounded-md font-bold text-2xl relative"
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
    customBackgroundColor: {
      type: String,
      default: 'bg-white-dark',
    },
    avatarLetter: {
      type: String,
      default: null,
    },
    enableEmptyAvatar: {
      type: Boolean,
      default: false,
    },
  },
  components: { Mailbox },
}
</script>

<style scoped>
.avatar--inner-circle:before {
  content: "";
  width: 32px;
  height: 32px;
  background-color: #edf0f2;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
