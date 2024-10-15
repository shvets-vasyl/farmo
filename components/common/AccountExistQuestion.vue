<template>
  <div class="form__do-not-have-acc">
		<span class="t2">{{ text_1 }}</span> <span class="t2">{{ text_2 }}</span>
	</div>
</template>

<script lang="ts" setup>
interface Props {
	text_1: string
	text_2: string
}
const props = defineProps<Props>()
const { text_1, text_2 } = props
</script>

<style lang="scss" scoped>
.form__do-not-have-acc {
	text-align: center;
}
.form__do-not-have-acc span:last-child {
	color: var(--c-red);
}
.form__do-not-have-acc span:first-child {
	color: var(--c-grey-5);
}
</style>
