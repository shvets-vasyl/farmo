<template>
  <button
		class="connect-wallet-btn"
		@click="connectOtherWallet"
		:class="{ _connected: isWalletConnected }"
	>
		<IconsEthereum />
		<div class="t1">Ethereum</div>
		<div>{{ test1 }}</div>
		<div>{{ test2 }}</div>
		<div>{{ test3 }}</div>
		<div>{{ test4 }}</div>
	</button>
</template>

<script lang="ts" setup>
import { useAppKit, useAppKitAccount } from "@reown/appkit/vue";
import { useWalletInfo } from '@reown/appkit/vue'
const { address, isConnected, caipAddress, status } = useAppKitAccount()

const { walletInfo } = useWalletInfo()

const test1 = ref()
const test2 = ref()
const test3 = ref()
const test4 = ref()


const modal = useAppKit();

const isWalletConnected = ref(false)

const connectOtherWallet = async () => {
  await modal.open();
};

onMounted(() => {
	test1.value = isConnected
	test2.value = walletInfo.value
	test3.value = status
	test4.value = address
})
</script>

<style lang="scss" scoped>
.connect-wallet-btn {
//  height: rem(57);
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
