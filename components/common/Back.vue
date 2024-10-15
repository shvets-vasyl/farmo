<template>
  <button class="common-back">
    <IconsArrowRight />
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
.common-back {
  position: absolute;
	top: rem(30);
	left: rem(30);
	transform: scaleX(-1);
	width: rem(16);
}
</style>
