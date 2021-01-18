<template>
  <AddEmail />
</template>

<script>
import AddEmail from "@/components/Step1-AddEmail";

export default {
  name: 'App',
  components: {
    AddEmail,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
