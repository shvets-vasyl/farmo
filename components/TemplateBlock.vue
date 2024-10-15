<template>
	<div class="template-block">
		<div class="template-block__wrap">
			<slot />
		</div>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.template-block {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: var(--z-block);
	height: calc(100% - rem(73));
}
.template-block__wrap {
	height: 100%;
	width: 100%;
	background: var(--c-grey-1);
	border-top-left-radius: rem(50);
	border-top-right-radius: rem(50);
	position: relative;
	z-index: 2;
	box-shadow: 0 0 0 rem(2) var(--c-red);
	padding: rem(38) rem(30) rem(90);
	display: flex;
	flex-direction: column;
	overflow: auto;
}
.main-block .template-block__wrap {
	padding-bottom: rem(50);
}
</style>