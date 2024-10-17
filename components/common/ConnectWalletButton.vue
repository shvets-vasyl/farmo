<template>
  <button
		class="connect-wallet-btn"
		@click="connectOtherWallet"
		:class="{ _connected: isWalletConnected }"
	>
		<IconsEthereum />
		<div class="t1">Ethereum</div>
	</button>
</template>

<script lang="ts" setup>
import { useAppKit } from "@reown/appkit/vue";

const modal = useAppKit();

const isWalletConnected = ref(false)

const connectOtherWallet = async () => {
  await modal.open();
};
</script>

<style lang="scss" scoped>
.connect-wallet-btn {
  height: rem(57);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(8);
  border-radius: rem(12);
  border: 1px solid var(--c-grey-5);
}
.connect-wallet-btn._connected {
  border-color: var(--c-red);
}
</style>
