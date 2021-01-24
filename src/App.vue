<template>
  <AddEmail v-if="state.matches('addEmail')" :send="send" />
  <AddPassword v-if="state.matches('addPassword')" :send="send" />
  <CustomizeFirstProject
    v-if="state.matches('customizeFirstProject')"
    :send="send"
  />
  <AddProjectName v-if="state.matches('addProjectName')" :send="send" />
  <BusinessGoalIntroduction
    v-if="state.matches('businessGoalIntroduction')"
    :send="send"
  />
  <DesignThinkingProcess
    v-if="state.matches('designThinkingProcesses')"
    :send="send"
  />
</template>
<script>
import { ref } from "vue";
import { useMachine } from "@xstate/vue";
import { userDataMachine } from "@/machines/userDataMachine";
import { UserDataStates } from "@/machines/userDataMachine.types";
import AddEmail from "@/components/Step1-AddEmail";
import AddPassword from "@/components/Step2-AddPassword";
import CustomizeFirstProject from "@/components/Step3-CustomizeFirstProject";
import AddProjectName from "@/components/Step4-AddProjectName";
import BusinessGoalIntroduction from "@/components/Step5-BusinessGoalIntroduction";
import DesignThinkingProcess from "@/components/Step6-DesignThinkingProcess";

export default {
  name: "App",
  components: {
    BusinessGoalIntroduction,
    AddEmail,
    AddPassword,
    CustomizeFirstProject,
    AddProjectName,
    DesignThinkingProcess,
  },
  setup() {
    const { state, send } = useMachine(userDataMachine);
    const currentActiveStep = ref(0);

    const isCurrentState = function (dataState) {
      return state.matches(UserDataStates[dataState]);
    };

    console.log(state, "state:: ");

    return {
      currentActiveStep,
      state,
      send,
      isCurrentState,
    };
  },
};
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
