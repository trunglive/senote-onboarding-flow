import { Machine } from "xstate";

export const userDataMachine = Machine({
  id: 'userDataMachine',
  initial: 'init',
  context: {
    userData: null,
    error: false,
    errorMsg: ''
  },
  states: {
    init: {
      on: {
        ADD_EMAIL: 'addEmail',
        ADD_PASSWORD: 'addPassword',
        CUSTOMIZE_FIRST_PROJECT: 'customizeFirstProject',
      }
    },
    addEmail: {
      on: {
        NEXT: 'addPassword',
        ENTER_EMAIL: {
          actions: ["assignEmail"],
        },
      },
    },
    addPassword: {
      on: {
        NEXT: 'customizeFirstProject',
        BACK: 'addEmail',
        ENTER_PASSWORD: {
          actions: ["assignPassword"],
        }
      },
    },
    customizeFirstProject: {
      on: {
        BACK: 'addPassword',
      }
    },
    complete: {
      on: {
        BACK: 'customizeFirstProject',
      }
    },
  },
}, {
  actions: {
    assignEmail(context, event) {

    },
    assignPassword(context, event) {

    },
  }
});
