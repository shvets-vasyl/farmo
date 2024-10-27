<template>
  <button
		class="ton-btn"
		@click="connectTonWallet"
		:class="{ _connected: address }"
	>
		<IconsTon />
		<div class="t1" v-if="!address">TON</div>
		<div class="t1" v-else>{{ editedAddress }}</div>
	</button>
</template>

<script lang="ts" setup>
import { paths } from "@/utils/api/paths";
import { TonConnectUI, THEME } from "@tonconnect/ui";

const { SITE_URL } = useRuntimeConfig().public;

onMounted(() => {
  initTonWallet();
	walletStatus()
});

const tonConnectUI = ref();
const address = ref<string>("")

const editedAddress = computed(() => {
	if (!address.value) return ""
	return address.value.slice(0, 6) + '...'
})

const initTonWallet = async () => {
  tonConnectUI.value = new TonConnectUI({
    manifestUrl: `${SITE_URL}/tonconnect-manifest.json`,
  });
  tonConnectUI.value.uiOptions = {
    uiPreferences: {
      theme: THEME.DARK,
    },
  };
};

const walletStatus = () => {
	if (store.user.wallets?.ton_wallet_address) {
		address.value = store.user.wallets?.ton_wallet_address
	} else {
		tonConnectUI.value.onStatusChange(async (wallet: any) => {
			address.value = wallet.account.address;

			try {
				const response = await $fetch("/api/update-data", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						path: `${paths.add_ton_address}/${store.user.profile?.user_id}`,
						ton_wallet_address: wallet.account.address,
					}),
				});
				console.log("ton wallet connect:", response);
			} catch (error) {
				console.error(error);
			}
		});
	}
}

const connectTonWallet = async () => {
  await tonConnectUI.value.openModal();
};
</script>

<style lang="scss" scoped>
.ton-btn {
  height: rem(57);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(8);
  border-radius: rem(12);
  border: 1px solid var(--c-grey-5);
}
.ton-btn._connected {
  border-color: var(--c-red);
}
</style>
