<template>
	<div class="login-block-wrap">
		<TemplateBlock class="login-block">
			<div class="login-block__content">
				<div class="h3">Please log in to the application.</div>
				<div class="login-block__btn">
					<CommonButton :is-red="true">
						<a href="https://t.me/tappanda_bot">Log in</a>
					</CommonButton>
				</div>
			</div>
		</TemplateBlock>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.login-block-wrap {
	position: absolute;
	inset: 0;
	z-index: 9999;
	background: linear-gradient(rgba(0,0,0,0.4), rgba(255, 0, 0, 0.4));
}
.login-block {
	height: rem(250);
	z-index: 9999;
	text-align: center;
}

.login-block__btn {
	margin-top: rem(24);
}
.login-block__content {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
}
</style>
