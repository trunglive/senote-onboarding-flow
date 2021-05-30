import { Machine, assign } from "xstate"
import { UserDataStates } from "@/machines/userDataMachine.types"
// import { UserDataEvents } from "@/machines/userDataMachine.types"
// import { updateFormMachine } from "@/machines/updateFormMachine"

export const userDataMachine = Machine(
  {
    id: "userDataMachine",
    initial: "idle",
    states: {
      idle: {
        id: "idle",
        on: {
          FETCH: "#addEmail",
        },
      },
      addEmail: {
        id: "addEmail",
        on: {
          ADD_EMAIL_NEXT: {
            target: "#designThinkingProcesses",
            cond: { type: "formValid" },
          },
        },
      },
      addPassword: {
        on: {
          NEXT: "addProjectName",
          BACK: "addEmail",
        },
      },
      customizeFirstProject: {
        // skip this step for now
        on: {
          NEXT: "addProjectName",
          BACK: "addPassword",
        },
      },
      addProjectName: {
        on: {
          NEXT: "designThinkingProcesses",
          BACK: "addPassword",
        },
      },
      businessGoalIntroduction: {
        // skip this step for now
        on: {
          NEXT: "designThinkingProcesses",
          BACK: "addProjectName",
        },
      },
      designThinkingProcesses: {
        id: "designThinkingProcesses",
        on: {
          DESIGN_THINKING_PROCESS_NEXT: "discoverPhase",
          BACK: "addEmail",
        },
      },
      discoverPhase: {
        on: {
          PHASE_NEXT: "analyzePhase",
          BACK: "designThinkingProcesses",
        },
      },
      analyzePhase: {
        on: {
          PHASE_NEXT: "prototypePhase",
          BACK: "discoverPhase",
        },
      },
      prototypePhase: {
        on: {
          PHASE_NEXT: "stakeholderInterview",
          BACK: "analyzePhase",
        },
      },
      stakeholderInterview: {
        on: {
          NEXT: "userInterview",
          BACK: "prototypePhase",
        },
      },
      userInterview: {
        on: {
          NEXT: "competitorAnalysis",
          BACK: "stakeholderInterview",
        },
      },
      competitorAnalysis: {
        on: {
          NEXT: "personas",
          BACK: "userInterview",
        },
      },
      personas: {
        on: {
          NEXT: "solutionValuation",
          BACK: "competitorAnalysis",
        },
      },
      solutionValuation: {
        on: {
          NEXT: "flows",
          BACK: "personas",
        },
      },
      flows: {
        on: {
          NEXT: "confirmTrial",
          BACK: "solutionValuation",
        },
      },
      confirmTrial: {
        on: {
          NEXT: "complete",
          BACK: "flows",
        },
      },
      complete: {
        on: {
          BACK: "confirmTrial",
        },
      },
    },
  },
  {
    guards: {
      formValid: (context, event) => {
        event.validation.value.$touch()
        return !event.validation.value.$invalid
      },
    },
  }
)
