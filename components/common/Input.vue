<template>
  <div class="input__field">
		<label v-if="label" :for="name" class="t1 input__label">{{ label }}</label>
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
  </div>
</template>
<script lang="ts" setup>
interface Props {
  name: string;
	type?: string;
	placeholder?: string;
  readonly?: boolean;
  label?: string;
	modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
	placeholder: "",
	readonly: false,
	label: "",
	type: "text",
})
const { modelValue, type, name, placeholder, readonly, label } = toRefs(props)

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
  color: var(--c-grey-5);
  border: 1px solid var(--c-grey-5);
  width: 100%;
  font-family: var(--font-500);
  padding: 0 rem(13);
  transition: all 0.5s var(--default-ease);
}
.input:read-only {
  opacity: 0.4;
}
.input:focus:not(:read-only) {
  border-color: var(--c-white);
  color: var(--c-white);
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
</style>
