<template>
  <component
    :width="width"
    :height="height"
    :is="icon"
  />
</template>

<script>
import { defineAsyncComponent } from "vue"

const lazyLoad = iconName =>
	defineAsyncComponent(() => import(`./icons/${iconName}.vue`))

export default {
	name: "AppIcon",
	props: {
		icon: {
			type: String,
			required: true,
			default: "Default",
		},
		width: {
			type: String,
			default: "32",
		},
		height: {
			type: String,
			default: "32",
		},
	},
	components: {
		StakeholderInterview: lazyLoad("StakeholderInterview"),
		UserInterview: lazyLoad("UserInterview"),
		CompetitorAnalysis: lazyLoad("CompetitorAnalysis"),
		ProblemValuation: lazyLoad("ProblemValuation"),
		Personas: lazyLoad("Personas"),
		SolutionValuation: lazyLoad("SolutionValuation"),
		Flows: lazyLoad("Flows"),
		Prototype: lazyLoad("Prototype"),
		Mailbox: lazyLoad("Mailbox"),
		Setting: lazyLoad("Setting"),
		Search: lazyLoad("Search"),
		Tick: lazyLoad("Tick"),
    UpArrow: lazyLoad("UpArrow"),
    DownArrow: lazyLoad("DownArrow")
  },
}
</script>
