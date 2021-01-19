<template>
  <AddEmail />
  <AddPassword />
  <CustomizeFirstProject />
</template>

<script>
import AddEmail from "@/components/Step1-AddEmail";
import AddPassword from "@/components/Step2-AddPassword";
import CustomizeFirstProject from "@/components/Step3-CustomizeFirstProject";

export default {
  name: 'App',
  components: {
    CustomizeFirstProject,
    AddPassword,
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
