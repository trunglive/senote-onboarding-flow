export const UserDataStates = {
  init: "init",
  addEmail: "addEmail",
  addPassword: "addPassword",
  customizeFirstProject: "customizeFirstProject",
  addProjectName: "addProjectName",
  businessGoalIntroduction: "businessGoalIntroduction",
  designThinkingProcesses: "designThinkingProcesses",
  discoverPhase: "discoverPhase",
  analyzePhase: "analyzePhase",
  prototypePhase: "prototypePhase",
  complete: "complete",
};

export const UserDataMachineStates = {
  states: {
    [UserDataStates.init]: {},
    [UserDataStates.addEmail]: {},
    [UserDataStates.addPassword]: {},
    [UserDataStates.customizeFirstProject]: {},
    [UserDataStates.addProjectName]: {},
    [UserDataStates.businessGoalIntroduction]: {},
    [UserDataStates.designThinkingProcesses]: {},
    [UserDataStates.discoverPhase]: {},
    [UserDataStates.analyzePhase]: {},
    [UserDataStates.prototypePhase]: {},
    [UserDataStates.complete]: {},
  },
};

export const UserDataEvents = {
  ENTER_EMAIL: "ENTER_EMAIL",
  ENTER_PASSWORD: "ENTER_PASSWORD",
  CUSTOMIZE_FIRST_PROJECT: "CUSTOMIZE_FIRST_PROJECT",
  ENTER_PROJECT_NAME: "ENTER_PROJECT_NAME",
  BUSINESS_GOAL_INTRODUCTION: "BUSINESS_GOAL_INTRODUCTION",
  DESIGN_THINKING_PROCESSES: "DESIGN_THINKING_PROCESSES",
  DISCOVER_PHASE: "DISCOVER_PHASE",
  ANALYZE_PHASE: "ANALYZE_PHASE",
  PROTOTYPE_PHASE: "PROTOTYPE_PHASE",
  NEXT: "NEXT",
  BACK: "BACK",
};
