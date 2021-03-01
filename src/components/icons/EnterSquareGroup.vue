<template>
  <button
    type="button"
    class="methods__list-answer-submit"
    :class="showEnter ? 'opacity-100' : 'opacity-0'"
  />
</template>

<script>
export default {
  name: "EnterSquareGroup",
  props: {
    showEnter: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.methods__list-answer-submit {
  background: #F3F6F3 url(Enter.svg) no-repeat 50%;
  width: 26px;
  height: 26px;
  border-radius: 2px;
  border: 0;
  z-index: 10;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
}
</style>
