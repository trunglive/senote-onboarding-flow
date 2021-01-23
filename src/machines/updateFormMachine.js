import { Machine, assign } from "xstate";
import {UpdateFormEvents, UpdateFormStates } from "@/machines/updateFormMachine.types";

export const updateFormMachine = Machine({
  id: 'updateFormMachine',
  initial: UpdateFormStates.fetch,
  context: {
    userData: null,
    error: false,
    errorMessage: '',
  },
  states: {
    [UpdateFormStates.fetch]: {
      on: {
        [UpdateFormEvents.NEXT]: {
          target: UpdateFormStates.edit,
          actions: assign({
            error: _ => false,
            errorMessage: _ => '',
          }),
        },
        [UpdateFormEvents.ERROR]: {
          target: UpdateFormStates.edit,
          actions: assign({
            error: _ => true,
            errorMessage: _ => 'error fetching initial data',
          }),
        }
      },
      invoke: {
        src: _ => async callback => {
          try {
            await new Promise(res => setTimeout(res, 1000));
            callback({
              type: UpdateFormEvents.NEXT,
            })
          } catch (e) {
            callback({
              type: UpdateFormEvents.ERROR,
            })
          }
        }
      }
    },
    [UpdateFormStates.edit]: {
      on: {
        [UpdateFormEvents.NEXT]: {
          target: UpdateFormStates.pending,
        }
      }
    },
    [UpdateFormStates.pending]: {
      on: {
        [UpdateFormEvents.NEXT]: {
          target: UpdateFormStates.done,
          actions: assign({
            error: _ => false,
            errorMessage: _ => '',
          }),
        },
        [UpdateFormEvents.ERROR]: {
          target: UpdateFormStates.edit,
          actions: assign({
            error: _ => true,
            errorMessage: _ => 'error saving data',
          }),
        },
      },
      invoke: {
        src: _ => async callback => {
          try {
            await new Promise(res => setTimeout(res, 1000));
            callback({
              type: UpdateFormEvents.NEXT,
            })
          } catch (e) {
            callback({
              type: UpdateFormEvents.ERROR,
            })
          }
        }
      }
    },
    [UpdateFormStates.done]: {
      type: 'final',
    },
  },
});
