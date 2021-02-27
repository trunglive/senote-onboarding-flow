<template>
  <div class="checkbox-item-container">
    <div class="price-checkbox__less-than-ten checkbox-item">
      <input
        type="checkbox"
        id="less-than-ten"
        name="priceRange"
        value="less-than-ten"
      ><label for="less-than-ten" />
    </div><label
      for="less-than-ten"
      class="label-text"
    >{{ label }}</label>
  </div>
</template>

<script>
export default {
	props: {
		label: String,
	},
	name: "BaseCheckbox"
}
</script>

<style scoped>
.checkbox-item-container {
	display: flex;
}

.label-text {
	margin-left: 1rem;
}

.label-text:hover {
	color: #808080;
}

.checkbox-item {
	position: relative;
}

.checkbox-item label {
	position: absolute;
	top: 10%;
	left: -12%;
	width: 18px;
	height: 18px;
	background-color: #fff;
	border: 1px solid #036f72;
	border-radius: 3px;
	cursor: pointer;
}

.checkbox-item label:after {
	position: absolute;
	width: 10px;
	height: 5px;
	top: 20%;
	left: 20%;
	transform: rotate(-45deg);
	background: transparent;
	border: 2px solid #fff;
	border-top: none;
	border-right: none;
	content: "";
	opacity: 0;
}

.checkbox-item label:hover::after {
	opacity: 0.4;
}

.checkbox-item input[type="checkbox"]:checked + label:after {
	opacity: 1;
}

input[type="checkbox"]:checked ~ label {
	color: #808080;
	background-color: #036f72;
}
</style>
