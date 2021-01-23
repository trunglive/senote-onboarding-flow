export const UserDataStates = {
  init: 'init',
  addEmail: 'addEmail',
  addPassword: 'addPassword',
  customizeFirstProject: 'customizeFirstProject',
  complete: 'complete',
}

export const UserDataMachineStates = {
  states: {
    [UserDataStates.init]: {},
    [UserDataStates.addEmail]: {},
    [UserDataStates.addPassword]: {},
    [UserDataStates.customizeFirstProject]: {},
    [UserDataStates.complete]: {},
  },
}

export const UserDataEvents = {
  ENTER_EMAIL: 'ENTER_EMAIL',
  ENTER_PASSWORD: 'ENTER_PASSWORD',
  NEXT: 'NEXT',
  BACK: 'BACK',
}
