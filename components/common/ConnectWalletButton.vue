<template>
  <button
    class="connect-wallet-btn"
    @click="connectOtherWallet"
    :class="{ _connected: addressWallet }"
  >
		<IconsEthereum />
		<div class="t1" v-if="!addressWallet">Ethereum</div>
		<div class="t1" v-else>{{ editedAddress }}</div>
  </button>
</template>

<script lang="ts" setup>
import { paths } from "@/utils/api/paths";
import { useAppKit, useAppKitAccount } from "@reown/appkit/vue";

const { address } = useAppKitAccount();
const modal = useAppKit();

const addressWallet = ref()

onMounted(() => {
	walletStatus()
});

const editedAddress = computed(() => {
	if (!addressWallet.value) return ""
	return addressWallet.value.slice(0, 6) + '...'
})

const connectOtherWallet = async () => {
  await modal.open();
};

const walletStatus = () => {
	if (store.user.wallets?.ethereum_wallet_address) {
		addressWallet.value = store.user.wallets?.ethereum_wallet_address
	} else {
		setTimeout(async () => {
			addressWallet.value = address
			if (address) {
				try {
					const response = await $fetch("/api/update-data", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							path: `${paths.add_ethereum_address}/${store.user.profile?.user_id}`,
							ethereum_wallet_address: address,
						}),
					});
					console.log("Ethereum wallet connect:", response);
				} catch (error) {
					console.error(error);
				}
			}
		}, 1000)
	}
}
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
