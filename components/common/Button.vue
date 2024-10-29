<template>
  <button
    class="common-btn h5"
    :class="{ _red: isRed, _grey: isGrey, _transparent: isTransparent }"
  >
    <slot />
  </button>
</template>
<script lang="ts" setup>
interface Props {
  isRed?: boolean;
  isGrey?: boolean;
  isTransparent?: boolean;
}
const props = defineProps<Props>();
const { isRed, isGrey, isTransparent } = props;
</script>
<style lang="scss" scoped>
.common-btn {
  width: 100%;
  height: rem(58);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: rem(12);
  border-radius: rem(12);
  overflow: hidden;
}
.common-btn._red {
  background: var(--c-red);
}
.common-btn._grey {
  background: var(--c-grey-2);
}
.common-btn._transparent {
  box-shadow: inset 0 0 0 1px var(--c-red);
}
</style>
