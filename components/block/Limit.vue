<template>
	<TemplateBlock class="limit-block">
		<div class="limit-block__wrap">
			<div class="limit-block__icon">
				<IconsLogo />
			</div>

			<div class="limit-block__title h3">You have reached your Tap limit</div>
			<div class="limit-block__descr h5">Please log in to continue a game</div>

			<div class="limit-block__coins">
				<CommonCoins />
			</div>

			<div class="limit-block__register">
				<CommonButton :is-red="true">
					<span>Register</span>
				</CommonButton>
			</div>
		</div>
	</TemplateBlock>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.limit-block {
	height: rem(438);
	z-index: var(--z-limit-block);
}
.limit-block__wrap {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	justify-content: flex-end;
	height: 100%;
}
.limit-block__title,
.limit-block__descr {
	width: rem(264);
	margin-bottom: rem(30);
}
.limit-block__icon {
	width: rem(58);
	margin-bottom: rem(18);
}
.limit-block__coins {
	transform: scale(0.7);
}
.limit-block__register {
	width: 100%;
	margin-top: rem(12);
}
</style>