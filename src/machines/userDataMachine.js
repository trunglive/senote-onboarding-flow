import { Machine, assign } from "xstate"
import { UserDataStates } from "@/machines/userDataMachine.types"
import { UserDataEvents } from "@/machines/userDataMachine.types"
import { updateFormMachine } from "@/machines/updateFormMachine"

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
				[UserDataEvents.ENTER_PROJECT_NAME]: {
					target: UserDataStates.addProjectName,
					actions: assign({
						userData: (_, { userData }) => userData,
					}),
				},
				[UserDataEvents.BUSINESS_GOAL_INTRODUCTION]: {
					target: UserDataStates.businessGoalIntroduction,
					actions: assign({
						userData: (_, { userData }) => userData,
					}),
				},
				[UserDataEvents.DESIGN_THINKING_PROCESSES]: {
					target: UserDataStates.designThinkingProcesses,
					actions: assign({
						userData: (_, { userData }) => userData,
					}),
				},
				[UserDataEvents.DISCOVER_PHASE]: {
					target: UserDataStates.discoverPhase,
					actions: assign({
						userData: (_, { userData }) => userData,
					}),
				},
				[UserDataEvents.ANALYZE_PHASE]: {
					target: UserDataStates.analyzePhase,
					actions: assign({
						userData: (_, { userData }) => userData,
					}),
				},
				[UserDataEvents.PROTOTYPE_PHASE]: {
					target: UserDataStates.prototypePhase,
					actions: assign({
						userData: (_, { userData }) => userData,
					}),
				},
			},
			invoke: {
				// eslint-disable-next-line no-unused-vars
				src: _ => async cb => {
					try {
						const userData = {
							email: "blabla@gmail.com",
						}

						const { password, customizeFirstProject } = userData

						switch (null) {
							case password:
								cb({ type: UserDataEvents.ENTER_PASSWORD, userData })
								break
							case customizeFirstProject:
								cb({ type: UserDataEvents.CUSTOMIZE_FIRST_PROJECT, userData })
								break
							default:
								cb({ type: UserDataEvents.ENTER_EMAIL, userData })
								break
						}
					} catch (e) {
						console.log(e.message)
					}
				},
			},
		},
		addEmail: {
			on: {
				NEXT: "addPassword",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.addPassword,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		addPassword: {
			on: {
				NEXT: "customizeFirstProject",
				BACK: "addEmail",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.customizeFirstProject,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		customizeFirstProject: {
			on: {
				NEXT: "addProjectName",
				BACK: "addPassword",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.addProjectName,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		addProjectName: {
			on: {
				NEXT: "businessGoalIntroduction",
				BACK: "customizeFirstProject",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.businessGoalIntroduction,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		businessGoalIntroduction: {
			on: {
				NEXT: "designThinkingProcesses",
				BACK: "addProjectName",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.designThinkingProcesses,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		designThinkingProcesses: {
			on: {
				NEXT: "discoverPhase",
				BACK: "businessGoalIntroduction",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.discoverPhase,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		discoverPhase: {
			on: {
				NEXT: "analyzePhase",
				BACK: "designThinkingProcesses",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.analyzePhase,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		analyzePhase: {
			on: {
				NEXT: "prototypePhase",
				BACK: "discoverPhase",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.prototypePhase,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		prototypePhase: {
			on: {
				NEXT: "complete",
				BACK: "analyzePhase",
			},
			invoke: {
				src: updateFormMachine,
				data: ctx => ctx,
				onDone: {
					target: UserDataStates.complete,
					actions: assign({
						userData: (_, { data }) => data?.userData ?? null,
					}),
				},
			},
		},
		complete: {
			on: {
				BACK: "prototypePhase",
			},
		},
	},
})
