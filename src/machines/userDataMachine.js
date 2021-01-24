import { Machine, assign } from "xstate";
import { UserDataStates } from "@/machines/userDataMachine.types";
import { UserDataEvents } from "@/machines/userDataMachine.types";

export const userDataMachine = Machine({
  id: "userDataMachine",
  initial: "init",
  context: {
    userData: null,
    error: false,
    errorMsg: "",
  },
  states: {
    init: {
      on: {
        [UserDataEvents.ENTER_EMAIL]: {
          target: UserDataStates.addEmail,
          actions: assign({
            userData: (_, { userData }) => userData,
          }),
        },
        [UserDataEvents.ENTER_PASSWORD]: {
          target: UserDataStates.addPassword,
          actions: assign({
            userData: (_, { userData }) => userData,
          }),
        },
        [UserDataEvents.CUSTOMIZE_FIRST_PROJECT]: {
          target: UserDataStates.customizeFirstProject,
          actions: assign({
            userData: (_, { userData }) => userData,
          }),
        },
      },
      invoke: {
        src: (_) => async (cb) => {
          try {
            const userData = {
              name: "Trung",
            };

            const { name, password, customizeFirstProject } = userData;

            switch (null) {
              case name:
                cb({ type: UserDataEvents.ENTER_EMAIL, userData });
                break;
              case password:
                cb({ type: UserDataEvents.ENTER_PASSWORD, userData });
                break;
              case customizeFirstProject:
                cb({ type: UserDataEvents.CUSTOMIZE_FIRST_PROJECT, userData });
                break;
              default:
                cb({ type: UserDataEvents.ENTER_EMAIL, userData });
                break;
            }
          } catch (e) {
            console.log(e.message);
          }
        },
      },
    },
    addEmail: {
      on: {
        NEXT: "addPassword",
        ENTER_EMAIL: {},
      },
    },
    addPassword: {
      on: {
        NEXT: "customizeFirstProject",
        BACK: "addEmail",
        ENTER_PASSWORD: {},
      },
    },
    customizeFirstProject: {
      on: {
        BACK: "addPassword",
      },
    },
    complete: {
      on: {
        BACK: "customizeFirstProject",
      },
    },
  },
});
