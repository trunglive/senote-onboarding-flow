export const UserDataStates = {
  init: "init",
  addEmail: "addEmail",
  addPassword: "addPassword",
  customizeFirstProject: "customizeFirstProject",
  addProjectName: "addProjectName",
  complete: "complete",
};

export const UserDataMachineStates = {
  states: {
    [UserDataStates.init]: {},
    [UserDataStates.addEmail]: {},
    [UserDataStates.addPassword]: {},
    [UserDataStates.customizeFirstProject]: {},
    [UserDataStates.addProjectName]: {},
    [UserDataStates.complete]: {},
  },
};

export const UserDataEvents = {
  ENTER_EMAIL: "ENTER_EMAIL",
  ENTER_PASSWORD: "ENTER_PASSWORD",
  CUSTOMIZE_FIRST_PROJECT: "CUSTOMIZE_FIRST_PROJECT",
  ENTER_PROJECT_NAME: "ENTER_PROJECT_NAME",
  NEXT: "NEXT",
  BACK: "BACK",
};
