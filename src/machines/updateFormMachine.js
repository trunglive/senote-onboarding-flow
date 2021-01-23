import { Machine } from "xstate";

export const updateFormMachine = Machine({
  id: 'updateFormMachine',
  initial: 'fetch',
  context: {
    userData: null,
    error: false,
    errorMessage: '',
  },
  states: {
    fetch: {
      on: {
        NEXT: 'edit',
        ERROR: 'edit',
      }
    },
    edit: {
      on: {
        NEXT: 'pending',
      }
    },
    pending: {
      on: {
        NEXT: 'done',
        ERROR: 'edit',
      }
    },
    done: {
      type: 'final',
    },
  },
}, {
  actions: {
    assignEmail(context, event) {},
    assignPassword(context, event) {},
  }
});
