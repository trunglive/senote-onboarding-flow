export const UserDataStates = {
  init: "init",
  addEmail: "stakeholderInterview",
  addPassword: "addPassword",
  customizeFirstProject: "customizeFirstProject",
  addProjectName: "addProjectName",
  businessGoalIntroduction: "businessGoalIntroduction",
  designThinkingProcesses: "designThinkingProcesses",
  discoverPhase: "discoverPhase",
  analyzePhase: "analyzePhase",
  prototypePhase: "prototypePhase",
  discoverPhases: {
    stakeholderInterview: "stakeholderInterview",
    userInterview: "userInterview",
    competitorAnalysis: "competitorAnalysis",
  },
  analyzePhases: {
    problemValuation: "problemValuation",
    personas: "personas",
    solutionValuation: "solutionValuation",
    flows: "flows",
  },
  prototypePhases: {
    paperPrototype: "paperPrototype",
    interactivePrototype: "interactivePrototype",
  },
  confirmTrial: "confirmTrial",
  complete: "complete",
}

export const UserDataMachineStates = {
  states: {
    [UserDataStates.init]: {},
    [UserDataStates.addEmail]: {},
    [UserDataStates.addPassword]: {},
    [UserDataStates.customizeFirstProject]: {},
    [UserDataStates.addProjectName]: {},
    [UserDataStates.businessGoalIntroduction]: {},
    [UserDataStates.designThinkingProcesses]: {},
    [UserDataStates.discoverPhase]: {},
    [UserDataStates.discoverPhases.stakeholderInterview]: {},
    [UserDataStates.discoverPhases.userInterview]: {},
    [UserDataStates.discoverPhases.competitorAnalysis]: {},
    [UserDataStates.analyzePhase]: {},
    [UserDataStates.analyzePhases.problemValuation]: {},
    [UserDataStates.analyzePhases.personas]: {},
    [UserDataStates.analyzePhases.solutionValuation]: {},
    [UserDataStates.analyzePhases.flows]: {},
    [UserDataStates.prototypePhase]: {},
    [UserDataStates.prototypePhases]: {},
    [UserDataStates.prototypePhases.paperPrototype]: {},
    [UserDataStates.prototypePhases.interactivePrototype]: {},
    [UserDataStates.confirmTrial]: {},
    [UserDataStates.complete]: {},
  },
}

export const UserDataEvents = {
  ENTER_EMAIL: "ENTER_EMAIL",
  ENTER_PASSWORD: "ENTER_PASSWORD",
  CUSTOMIZE_FIRST_PROJECT: "CUSTOMIZE_FIRST_PROJECT",
  ENTER_PROJECT_NAME: "ENTER_PROJECT_NAME",
  BUSINESS_GOAL_INTRODUCTION: "BUSINESS_GOAL_INTRODUCTION",
  DESIGN_THINKING_PROCESSES: "DESIGN_THINKING_PROCESSES",

  DISCOVER_PHASE: "DISCOVER_PHASE",
  STAKEHOLDER_INTERVIEW: "STAKEHOLDER_INTERVIEW",
  USER_INTERVIEW: "USER_INTERVIEW",
  COMPETITOR_ANALYSIS: "COMPETITOR_ANALYSIS",

  ANALYZE_PHASE: "ANALYZE_PHASE",
  PROBLEM_VALUATION: "PROBLEM_VALUATION",
  PERSONAS: "PERSONAS",
  SOLUTION_VALUATION: "SOLUTION_VALUATION",
  FLOWS: "FLOWS",

  PROTOTYPE_PHASE: "PROTOTYPE_PHASE",
  PAPER_PROTOTYPE: "PAPER_PROTOTYPE",
  INTERACTIVE_PROTOTYPE: "INTERACTIVE_PROTOTYPE",

  CONFIRM_TRIAL: "CONFIRM_TRIAL",
  NEXT: "NEXT",
  BACK: "BACK",
}
