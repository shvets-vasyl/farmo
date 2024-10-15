<template>
	<div class="template-block__shadow">
		<img src="/template-block-shadow.png" draggable="false" alt="" />
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.template-block__shadow {
	position: absolute;
	width: 100%;
	left: 0;
	top: rem(-110);
}
.template-block__shadow img {
	width: 100%;
	height: 100%;
}
</style>