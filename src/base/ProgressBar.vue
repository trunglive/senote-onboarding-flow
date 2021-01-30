<template>
  <div class="progress-bar w-navigation-button">
    <div
      class="progress-bar__bar"
      :style="{ width: `${percentage}%` }"
    />
  </div>
</template>

<script>
export default {
	name: "ProgressBar",
	props: {
		percentage: String,
	},
}
</script>

<style scoped>
div.progress-bar {
	background-color: #f8f9fa;
	border-radius: 10px;
	box-sizing: border-box;
	color: #252729;
	display: block;
	font-family: Lato, sans-serif;
	font-size: 14px;
	height: 8px;
	line-height: 20px;
	margin: 0 auto;
}

div.progress-bar__bar {
	background-color: #007b83;
	border-radius: 200px;
	box-sizing: border-box;
	color: #252729;
	display: block;
	font-family: Lato, sans-serif;
	font-size: 14px;
	height: 100%;
	line-height: 20px;
	transition: all 0.2s ease 0s;
	width: 12.5%;
}
</style>
