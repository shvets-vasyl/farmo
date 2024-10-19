<template>
  <div class="error-message t1" :class="status">
		{{ text }}
  </div>
</template>
<script lang="ts" setup>
interface Props {
  text: string;
	status: string;
}
const props = defineProps<Props>()
const { text } = toRefs(props)
</script>

<style lang="scss" scoped>
.error-message.ok {
	color: #33CD32;
}
.error-message.error {
	color: var(--c-red);
}
</style>
