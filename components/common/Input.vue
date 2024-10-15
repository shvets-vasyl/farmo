<template>
  <div
    class="input__field"
    :class="{
      '_with-icons': with_icons,
      '_error': !!errorMessage,
      success: meta.valid,
    }"
  >
    <label v-if="label" :for="name" class="t1 input__label">{{ label }}</label>
    <input
      class="input"
      ref="inputRef"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :value="inputValue"
      :autocomplete="name"
      @input="handleInputFunc"
      @blur="handleBlur"
    />

    <p class="input__message t1" v-show="errorMessage || meta.valid">
      {{ errorMessage }}
    </p>

    <div v-if="with_icons" class="input__icons">
      <IconsMail v-if="name === 'email'" />
      <IconsPhone v-if="name === 'phone'" />
      <IconsPassword v-if="name === 'password'" />
      <div
        v-if="name === 'password'"
        class="input__btn-show-pass"
        @click="togglePasswordVisibility"
      >
        <IconsEye />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useField } from 'vee-validate';

interface Props {
  placeholder: string;
  type: string;
  name: string;
  label?: string;
  value?: string;
  with_icons?: boolean;
}

const props = defineProps<Props>();
const { name, value: initialValue, placeholder, type, label, with_icons } = props;

const inputRef = ref<HTMLInputElement | null>(null);

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, { initialValue });

const handleInputFunc = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (name === 'phone') {
    formatPhone(target);
  }

  handleChange(e);
};

const togglePasswordVisibility = (e: MouseEvent): void => {
  const passwordInput = inputRef.value;
  if (passwordInput) {
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }
};

const formatPhone = (input: HTMLInputElement): void => {
  input.value = input.value.replace(/\D/g, '');
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
.input__field._error .input {
  border-color: var(--c-red);
}
.input__field._with-icons .input {
  padding-left: rem(50);
}
.input__field._with-icons .input[name="phone"] {
  padding-right: rem(50);
}
.input:focus {
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
.input__icons {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: rem(49);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 rem(16);
  pointer-events: none;
}
.input__btn-show-pass {
  position: relative;
  top: rem(3);
  pointer-events: auto;
}
.input__message {
  margin-top: rem(4);
  color: var(--c-red);
}
</style>
