export const userAddEmail = {
  email: "abcd_testing@gmail.com",
};

export const userAddPassword = {
  password: "123456",
};

export const brand = {
  label: "Senote",
};

export const designThinkingProcesses = {
  discover: {
    label: "Discover",
    goal: "Gathering data",
    phaseStepOrder: 1,
    stepProcesses: [
      {
        label: "Stakeholder Interview",
        value: "stakeholderInterview",
        tooltipContent:
          "Gain a deeper understanding of client's expectations. Start with predefined questions to ask your stakeholder.",
      },
      {
        label: "User Interview",
        value: "userInterview",
        tooltipContent:
          "Recognize the problems and paint points of your target audience while talking to them.",
      },
      {
        label: "Competitor Analysis",
        value: "competitorAnalysis",
        tooltipContent:
          "Analyze your competitors and evaluate their strengths, weaknesses and distinguishing features.",
      },
    ],
  },
  analyze: {
    label: "Analyze",
    goal: "Finding patterns",
    phaseStepOrder: 2,
  },
  prototype: {
    label: "Prototype",
    goal: "Visualize findings",
    phaseStepOrder: 3,
  },
};
