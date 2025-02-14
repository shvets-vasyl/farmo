<template>
  <div class="items">
		<div v-for="(item, i) in info" :key="i" class="item">
			<p class="item-type">{{ item.type }}</p>
			<p class="item-number-wrap">
				<img src="/item.svg" alt="" />
				<span class="item-number">{{ item.number }}</span>
			</p>
			<p class="item-percent">{{ item.percent }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
const info = [
  {
    type: "24 Hours Balance",
    from: "FPI BANKI",
    number: "1560.60",
    percent: "+4.64%",
  },
  {
    type: "Referral Bonus",
    from: "FPI BANKI",
    number: "61.45",
    percent: "+0.62%",
  },
];
</script>

<style lang="scss" scoped>

.item-type {
  font-size: 1.125rem;
}
.item-number-wrap {
  width: 1.125rem;
  display: flex;
  gap: 0.3125rem;
  margin-top: 0.375rem;
}
.item-number-wrap img {
  width: 0.875rem;
}
.item-number {
  font-variation-settings: "wght" 600;
  color: #e4e4f0;
}
.item-percent {
  font-family: var(--nunito);
  color: #7e47be;
  font-size: 0.9375rem;
}
.item-type {
  font-variation-settings: "wght" 600;
  color: #e4e4f0;
}
.items {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
}
</style>
