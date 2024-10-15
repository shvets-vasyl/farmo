<template>
  <div class="days">
		<div class="days__fire">
			<img src="/fire.png" draggable="false" alt="">
		</div>
		<div class="days__content">
			<div class="days__current t1">
				{{ store.days_in_game }}
				{{ store.days_in_game === 1 ? 'day' : 'days' }}
			</div>
			<div class="days__streak t2">
				Current streak
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.days {
	display: flex;
	align-items: center;
	gap: rem(11);
	margin-top: rem(-63);
}
.days__fire {
	width: rem(18);
	flex: 0 0 rem(18);
}
.days__streak {
	color: var(--c-grey-3);
	margin-top: rem(3);
}
</style>
