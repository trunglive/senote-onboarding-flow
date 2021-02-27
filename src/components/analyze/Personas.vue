<template>
  <div class="flex flex-col items-center justify-center">
    <AvatarSquareBox
      custom-size="w-14 h-14"
      custom-background-color="bg-white-light"
      :enable-empty-avatar="true"
    />
    <div class="pt-20">
      <NavigationButtonGroup
        :send="send"
        :disable-continue-button="false"
      />
    </div>
  </div>
</template>

<script>
import AvatarSquareBox from "@/components/AvatarSquareBox"
import NavigationButtonGroup from "@/components/NavigationButtonGroup"
export default {
  name: "Personas",
  props: {
    send: Function,
  },
  components: { NavigationButtonGroup, AvatarSquareBox }
}
</script>

<style scoped>

</style>
