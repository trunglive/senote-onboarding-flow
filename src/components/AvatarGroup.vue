<template>
  <div class="flex flex-col items-center mb-10">
    <AvatarSquareBox :avatar-letter="avatarLetter" />
    <div class="text-black-dark text-xl mt-6">
      {{ avatarLetter?.length > 0 ? "Create Account" : "Continue with Email" }}
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
    }
  }
}
</script>

<style scoped>

</style>
