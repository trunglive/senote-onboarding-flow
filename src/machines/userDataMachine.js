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
          STAKEHOLDER_INTERVIEW_NEXT: {
            target: "#userInterview",
            cond: { type: "formValid" },
          },
          BACK: "prototypePhase",
        },
      },
      userInterview: {
        id: "userInterview",
        on: {
          USER_INTERVIEW_NEXT: {
            target: "#competitorAnalysis",
            cond: { type: "formValid" },
          },
          BACK: "stakeholderInterview",
        },
      },
      competitorAnalysis: {
        id: "competitorAnalysis",
        on: {
          COMPETITOR_ANALYSIS_NEXT: {
            target: "#personas",
            cond: { type: "formValid" },
          },
          BACK: "userInterview",
        },
      },
      personas: {
        id: "personas",
        on: {
          PERSONAS_NEXT: {
            target: "#solutionValuation",
            cond: { type: "formValid" },
          },
          BACK: "competitorAnalysis",
        },
      },
      solutionValuation: {
        id: "solutionValuation",
        on: {
          SOLUTION_VALUATION_NEXT: {
            target: "#flows",
            cond: { type: "formValid" },
          },
          BACK: "personas",
        },
      },
      flows: {
        id: "flows",
        on: {
          FLOWS_NEXT: {
            target: "#confirmTrial",
            cond: { type: "formValid" },
          },
          BACK: "solutionValuation",
        },
      },
      confirmTrial: {
        id: "confirmTrial",
        on: {
          CONFIRM_TRIAL_NEXT: {
            target: "#complete",
            cond: { type: "formValid" },
          },
          BACK: "flows",
        },
      },
      complete: {
        id: "complete",
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
        // return !event.validation.value.$invalid
        return true // override in the meantime to go to NEXT step
      },
    },
  }
)
