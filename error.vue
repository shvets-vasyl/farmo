<template>
  <div>
    <ClientOnly>
      <main class="error">
				<div>Error Getting Data</div>
				<div>Try Again Later</div>
			</main>
		</ClientOnly>
	</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.error {
  height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-size: 2rem;
	font-weight: 800;
	background: #000;
	color: white;
}
</style>
