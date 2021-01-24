export const UpdateFormStates = {
  fetch: "fetch",
  edit: "edit",
  pending: "pending",
  done: "done",
};

export const UpdateFormMachineStates = {
  states: {
    [UpdateFormStates.fetch]: {},
    [UpdateFormStates.edit]: {},
    [UpdateFormStates.pending]: {},
    [UpdateFormStates.done]: {},
  },
};

export const UpdateFormEvents = {
  NEXT: "NEXT",
  ERROR: "ERROR",
};
