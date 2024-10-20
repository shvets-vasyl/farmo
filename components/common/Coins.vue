<template>
  <div class="coins h1">
		<div class="coins__icon">
			<img src="/coin.png" draggable="false" alt="" />
		</div>
		<div class="coins__number">
			{{ formatNumber }}
		</div>
	</div>
</template>

<script lang="ts" setup>
const formatNumber = computed(() => {
	if (store.user.info && store.user.info.balance) {
		const numStr = store.user.info.balance.toString()
		return numStr.replace(/(\d+)(\d{3})$/, '$1, $2')
	} else {
		return 0
	}
})
</script>

<style lang="scss" scoped>
.coins {
  display: flex;
	align-items: center;
	justify-content: center;
	gap: rem(8);
}
.coins__icon {
	display: inline-flex;
	position: relative;
	top: rem(-2);
}
.coins__icon img {
	width: 100%;
}
.coins__icon {
	width: rem(42);
}
</style>
