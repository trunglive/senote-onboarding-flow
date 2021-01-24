export const UserDataStates = {
  init: "init",
  addEmail: "addEmail",
  addPassword: "addPassword",
  customizeFirstProject: "customizeFirstProject",
  addProjectName: "addProjectName",
  businessGoalIntroduction: "businessGoalIntroduction",
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
    [UserDataStates.complete]: {},
  },
};

export const UserDataEvents = {
  ENTER_EMAIL: "ENTER_EMAIL",
  ENTER_PASSWORD: "ENTER_PASSWORD",
  CUSTOMIZE_FIRST_PROJECT: "CUSTOMIZE_FIRST_PROJECT",
  ENTER_PROJECT_NAME: "ENTER_PROJECT_NAME",
  BUSINESS_GOAL_INTRODUCTION: "BUSINESS_GOAL_INTRODUCTION",
  NEXT: "NEXT",
  BACK: "BACK",
};
