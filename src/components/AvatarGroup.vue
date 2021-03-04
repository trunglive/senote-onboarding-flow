<template>
  <div class="flex flex-col items-center mb-10">
    <AvatarSquareBox :avatar-letter="avatarLetter" />
    <div class="text-black-dark text-xl mt-6">
      {{ title }}
    </div>
  </div>
</template>

<script>
import AvatarSquareBox from "@/components/AvatarSquareBox"

export default {
  components: { AvatarSquareBox },
  props: {
    avatarLetter: {
      type: String,
      default: undefined
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
