<template>
  <button
    class="connect-wallet-btn"
    @click="connectOtherWallet"
    :class="{ _connected: isConnected }"
  >
    <IconsEthereum />
    <div class="t1">Ethereum</div>
		<div>{{ test }}</div>
  </button>
</template>

<script lang="ts" setup>
import { paths } from "@/utils/api/paths";
import { useAppKit, useAppKitAccount } from "@reown/appkit/vue";

const { address, isConnected } = useAppKitAccount();

const modal = useAppKit();

const connectOtherWallet = async () => {
  await modal.open();
};

const test = ref()

onMounted(async () => {
	setTimeout(() => {
		test.value = isConnected
	}, 3000)
  if (isConnected) {
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
});
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
