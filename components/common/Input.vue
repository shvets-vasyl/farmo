<template>
  <div class="input__field" :class="{ _withIcon: withIcon }">
		<label v-if="label" :for="name" class="t1 input__label">{{ label }}</label>

		<div class="input__field-wrap">
			<input
				class="input"
				:placeholder="placeholder"
				:type="type"
				:name="name"
				:autocomplete="name"
				:readonly="readonly"
				:value="modelValue"
				@input="updateValue"
			/>
			<div v-if="withIcon" class="input__icon">
				<slot />
			</div>
		</div>
  </div>
</template>
<script lang="ts" setup>
interface Props {
  name: string;
	type?: string;
	placeholder?: string;
  readonly?: boolean;
  label?: string;
	withIcon?: boolean;
	modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
	placeholder: "",
	readonly: false,
	withIcon: false,
	label: "",
	type: "text",
})
const { modelValue, type, name, placeholder, readonly, label, withIcon } = toRefs(props)

const emit = defineEmits(['update:modelValue']);

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement | null;
  if (target) {
    emit('update:modelValue', target.value);
  }
};
</script>

<style lang="scss" scoped>
.input__field {
  position: relative;
}
.input {
  height: rem(49);
  border-radius: rem(12);
  font-size: rem(15);
  color: var(--c-white);
  border: 1px solid var(--c-white);
  width: 100%;
  font-family: var(--font-500);
  padding: 0 rem(13);
}
.input__field._withIcon .input {
	padding-right: rem(40);
}
.input__field-wrap {
	position: relative;
	opacity: 0.5;
	transition: all 0.5s var(--default-ease);
}
.input__field-wrap:has(.input:read-only) {
  opacity: 0.2;
}
.input__field-wrap:has(.input:focus:not(:read-only)) {
  opacity: 1;
}
.input::placeholder {
  font-size: rem(15);
  color: var(--c-grey-5);
  font-family: var(--font-500);
}
.input__label {
  margin-bottom: rem(10);
  display: block;
}
.input__icon {
	position: absolute;
	top: 50%;
	right: rem(16);
	transform: translateY(-50%);
	pointer-events: none;
	display: inline-flex;
}
</style>
