<template>
  <button
		class="ton-btn"
		@click="connectTonWallet"
		:class="{ _connected: isWalletConnected }"
	>
		<IconsTon />
		<div class="t1">TON</div>
	</button>
</template>

<script lang="ts" setup>
import { TonConnectUI, THEME } from "@tonconnect/ui";

const { SITE_URL } = useRuntimeConfig().public;

onMounted(() => {
  initTonWallet();
});

const tonConnectUI = ref();
const isWalletConnected = ref(false);

const initTonWallet = () => {
  tonConnectUI.value = new TonConnectUI({
    manifestUrl: `${SITE_URL}/tonconnect-manifest.json`,
  });
  tonConnectUI.value.uiOptions = {
    uiPreferences: {
      theme: THEME.DARK,
    },
  };

  tonConnectUI.value.onStatusChange(() => {
    isWalletConnected.value = true;
  });
};

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
