<template>
  <div>
    <ClientOnly>
      <main class="error">
				<div class="h2">Error Getting Data</div>
				<div class="h3">Please Close and Open Again</div>
				<div>{{ USER_ID1 }}</div>
				<div>{{ USER_ID2 }}</div>
				<div>{{ USER_ID3 }}</div>
				<div>{{ USER_ID4 }}</div>

			</main>
		</ClientOnly>
	</div>
</template>

<script setup lang="ts">
const USER_ID1 = ref()
const USER_ID2 = ref()
const USER_ID3 = ref()
const USER_ID4 = ref()
onMounted(() => {
	USER_ID1.value = window.Telegram;
})

</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>
