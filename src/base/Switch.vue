<template>
  <span
    class="base-checkbox base-checkbox--switch"
    :class="{ 'base-checkbox--checked': toggleStatus }"
    @click="handleToggleSwitch"
  />
</template>

<script>
import { ref } from "vue"

export default {
	name: "Switch",
	props: {
		enabled: Boolean,
	},
	setup(props) {
		const toggleStatus = ref(props.enabled)

		function handleToggleSwitch() {
			toggleStatus.value = !toggleStatus.value
		}

		return {
			toggleStatus,
			handleToggleSwitch,
		}
	},
}
</script>

<style scoped>
.base-checkbox {
	display: inline-block;
	cursor: pointer;
}

.base-checkbox--switch {
	position: relative;
	width: 51px;
	height: 31px;
	background-color: #edf0f2;
	transition: all 0.2s ease 0s;
	border-radius: 50px;
}

.base-checkbox--switch::after {
	content: "";
	position: absolute;
	top: 3px;
	left: 3px;
	width: 25px;
	height: 25px;
	background-color: #ffffff;
	transition: all 0.2s ease 0s;
	border-radius: 50%;
}

.base-checkbox--switch.base-checkbox--checked {
	background-color: #007b83;
}

.base-checkbox--switch.base-checkbox--checked::after {
	transform: translateX(20px);
}
</style>
