<template>
  <keep-alive>
    <component :is="steps[currentActiveStep].component" @nextStep="handleNextStep"></component>
  </keep-alive>
</template>

<script>
import { ref } from 'vue';
import AddEmail from "@/components/Step1-AddEmail";
import AddPassword from "@/components/Step2-AddPassword";
import CustomizeFirstProject from "@/components/Step3-CustomizeFirstProject";

export default {
  name: 'App',
  components: {
    AddEmail,
    AddPassword,
    CustomizeFirstProject,
  },
  setup() {
    const currentActiveStep = ref(0)

    const steps = [
      {
        name: "addEmail",
        component: AddEmail,
        validated: false,
      },
      {
        name: "addPassword",
        component: AddPassword,
        validated: false,
      },
      {
        name: "customizeFirstProject",
        component: CustomizeFirstProject,
        validated: false,
      },
    ]

    function handleNextStep({ currentStep }) {
      currentActiveStep.value = currentStep + 1;
    }

    return {
      currentActiveStep,
      steps,
      handleNextStep,
    }
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
