<template>
  <button
    class="connect-wallet-btn"
    @click="onClick"
  >
    disconnect, {{  }}
  </button>
</template>

<script lang="ts" setup>
import { useDisconnect } from 'wagmi'

const { disconnect } = useDisconnect()

const onClick = () => {
	disconnect()
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
