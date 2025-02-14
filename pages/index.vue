<template>
  <main class="main-page">
    <div class="wrap">
      <MainName />

      <MainBalance />

      <MainToday />

			<MainItems />

      <MainTap />

      <MainFinish />

      <MainGet />

      <MainInfo />
    </div>
  </main>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  background: #0f0f0f;
  color: white;
}
.wrap {
  width: 21rem;
  margin: 0 auto;
  padding-top: 4rem;
	padding-bottom: 2.8125rem;
}
</style>
