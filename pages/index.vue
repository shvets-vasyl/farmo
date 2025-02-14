<template>
  <main class="main-page">
		<MainPromo v-if="showPromo" />

    <div class="wrap">
			<div class="name-wrap">
				<MainName />
			</div>

      <MainBalance />

      <MainToday />

			<MainItems />

      <MainTap />

      <MainFinish />

			<div class="get-btn">
				<CommonButton text="Забрати FPI BANKI" :disabled="false" />
			</div>

      <MainInfo />
    </div>
  </main>
</template>

<script lang="ts" setup>
const showPromo = useState("show-promo", () => true)

</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  background: var(--c-black);
  color: var(--c-white);
}
.wrap {
  width: 21rem;
  margin: 0 auto;
  padding-top: 4rem;
	padding-bottom: 2.8125rem;
}
.name-wrap {
	margin-bottom: 1.4375rem;
}
.get-btn {
  margin-top: 1.875rem;
}
</style>
