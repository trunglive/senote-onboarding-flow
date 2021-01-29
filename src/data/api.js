export const userAddEmail = {
	email: "abcd_testing@gmail.com",
}

export const userAddPassword = {
	password: "123456",
}

export const brand = {
	label: "Senote",
}

export const designThinkingProcesses = {
	discover: {
		label: "Discover",
		value: "discover",
		goal: "Gathering data",
		phaseStepOrder: 1,
		backgroundColor: "bg-navyBlue-dark",
		stepProcesses: [
			{
				icon: "StakeholderInterview",
				label: "Stakeholder Interview",
				value: "stakeholderInterview",
				tooltipContent:
					"Gain a deeper understanding of client's expectations. Start with predefined questions to ask your stakeholder.",
			},
			{
				icon: "UserInterview",
				label: "User Interview",
				value: "userInterview",
				tooltipContent:
					"Recognize the problems and paint points of your target audience while talking to them.",
			},
			{
				icon: "CompetitorAnalysis",
				label: "Competitor Analysis",
				value: "competitorAnalysis",
				tooltipContent:
					"Analyze your competitors and evaluate their strengths, weaknesses and distinguishing features.",
			},
		],
	},
	analyze: {
		label: "Analyze",
		value: "analyze",
		goal: "Finding patterns",
		phaseStepOrder: 2,
		backgroundColor: "bg-ocean-dark-2",
		stepProcesses: [
			{
				icon: "ProblemValuation",
				label: "Problem Valuation",
				value: "problemValuation",
				tooltipContent:
					"Examine your data and evaluate all the problems you discovered so far from your interviews.",
			},
			{
				icon: "Personas",
				label: "Personas",
				value: "personas",
				tooltipContent:
					"Streamline your research data and represent the specific considerations for fundamentally different groups of people.",
			},
			{
				icon: "SolutionValuation",
				label: "Solution Valuation",
				value: "solutionValuation",
				tooltipContent:
					"Tackle the most crucial problems by brainstorming different solutions. Come up with as many solutions as possible.",
			},
			{
				icon: "Flows",
				label: "Flows",
				value: "flows",
				tooltipContent:
					"Connect the dots between the identified problems and their solutions. List down 5-8 steps showing a clear path from the problem to its corresponding solution.",
			},
		],
	},
	prototype: {
		label: "Prototype",
		value: "prototype",
		goal: "Visualize findings",
		phaseStepOrder: 3,
		backgroundColor: "bg-purple-dark",
		stepProcesses: [
			{
				icon: "Prototype",
				label: "Paper Prototype",
				value: "paperPrototype",
				tooltipContent:
					"Start with simple prototypes created on paper. It's a simple and cheap way to test your product without much effort.",
			},
			{
				icon: "Prototype",
				label: "Interactive Prototype",
				value: "interactivePrototype",
				tooltipContent:
					"Use a hi-fidelity prototype to gain more precise feedback and take your prototype to the next level.",
			},
		],
	},
}
