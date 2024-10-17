<template>
  <button @click="openWallets">open to connect wallets</button>
</template>

<script lang="ts" setup>
import { useAppKit } from '@reown/appkit/vue'

const modal = useAppKit()
const openWallets = async () => {
  await modal.open();
};

</script>

<style lang="scss" scoped>
button {
	width: 100%;
	position: fixed;
	z-index: 1000;
}
</style>
