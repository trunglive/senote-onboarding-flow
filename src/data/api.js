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
    backgroundColor: "bg-navyBlue-dark",
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
    backgroundColor: "bg-ocean-dark-2",
    stepProcesses: [
      {
        label: "Problem Valuation",
        value: "problemValuation",
        tooltipContent:
          "Examine your data and evaluate all the problems you discovered so far from your interviews.",
      },
      {
        label: "Personas",
        value: "personas",
        tooltipContent:
          "Streamline your research data and represent the specific considerations for fundamentally different groups of people.",
      },
      {
        label: "Solution Valuation",
        value: "solutionValuation",
        tooltipContent:
          "Tackle the most crucial problems by brainstorming different solutions. Come up with as many solutions as possible.",
      },
      {
        label: "Flows",
        value: "flows",
        tooltipContent:
          "Connect the dots between the identified problems and their solutions. List down 5-8 steps showing a clear path from the problem to its corresponding solution.",
      },
    ],
  },
  prototype: {
    label: "Prototype",
    goal: "Visualize findings",
    phaseStepOrder: 3,
    backgroundColor: "bg-purple-dark",
    stepProcesses: [
      {
        label: "Paper Prototype",
        value: "paperPrototype",
        tooltipContent:
          "Start with simple prototypes created on paper. It's a simple and cheap way to test your product without much effort.",
      },
      {
        label: "Interactive Prototype",
        value: "interactivePrototype",
        tooltipContent:
          "Use a hi-fidelity prototype to gain more precise feedback and take your prototype to the next level.",
      },
    ],
  },
};
