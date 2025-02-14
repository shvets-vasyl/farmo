<template>
  <div class="balance">
		<p class="balance-title">Total Balance</p>
		<div class="balance-total">
			<img src="/item.svg" alt="" />
			<span class="balance-number">150.59</span>
		</div>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.balance-total {
  display: flex;
  align-items: center;
  font-variation-settings: "wght" 800;
  gap: 0.3125rem;
}
.balance-total img {
  width: 2.5625rem;
}
.balance-title {
  font-size: 0.875rem;
  font-variation-settings: "wght" 400;
  margin-bottom: 0.6875rem;
}
.balance-number {
  font-size: 3.3125rem;
  font-variation-settings: "wght" 800;
}
</style>
