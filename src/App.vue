<template>
  <AddEmail v-if="state.matches('addEmail')" :send="send" />
  <AddPassword v-if="state.matches('addPassword')" :send="send" />
  <CustomizeFirstProject v-if="state.matches('customizeFirstProject')" :send="send" />
</template>

<script>
import { ref } from 'vue';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/vue';
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
    const { state, send } = useMachine(userDataMachine);
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
    ];

    return {
      currentActiveStep,
      steps,
      state,
      send,
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
