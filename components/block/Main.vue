<template>
	<TemplateBlock class="main-block">
		<!-- <div class="main-block__invite">
			<CommonButton :is-grey="true">
				<span>Invite a friend</span>
				<span class="invite-icon">
					<IconsInvite />
				</span>
			</CommonButton>
		</div> -->

		<div class="main-block__coins">
			<CommonCoins />
		</div>

		<div class="main-block__progress">
			<CommonProgress />
		</div>

		<div class="main-block__tapper">
			<CommonTap />
		</div>

		<div class="main-block__days">
			<CommonDays />
		</div>
	</TemplateBlock>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.main-block {
	z-index: 1;
}
.main-block__invite {
	margin-bottom: rem(38);
}
.main-block__tapper {
	flex: 1 1 auto;
	max-height: rem(408);
	min-height: rem(408);
	width: rem(322);
	margin: auto;
	padding-top: rem(43);
	padding-bottom: rem(43);
}
</style>