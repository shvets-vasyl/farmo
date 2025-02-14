<template>
  <div class="input-wrap" :class="{ _error: hasError }">
    <input
      class="input"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', (event.target as HTMLInputElement).value)"
    />
    <p class="error">Wrong code, please try again</p>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  type: string;
  placeholder: string;
  modelValue: string;
  hasError?: boolean;
}>();

defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
.input-wrap {
  position: relative;
}
.input {
  width: 100%;
  color: var(--c-accent);
  padding: 1.1rem 1rem;
  border-radius: 0.625rem;
  font-family: var(--inter);
  font-size: 1rem;
  outline: none;
  border: 0.0625rem solid #d8dadc;
  background: linear-gradient(144deg, #28272f 9.13%, #040404 62.89%),
    linear-gradient(90deg, #fff 0%, #999 100%);
}
.input::placeholder {
  color: var(--c-accent);
  opacity: 1;
  font-family: var(--inter);
  font-size: 1rem;
}
.error {
  font-size: 0.625rem;
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  left: 0;
  width: 100%;
  text-align: center;
  color: var(--c-red);
  opacity: 0;
  pointer-events: none;
}
._error .input {
  border-color: var(--c-red);
  color: var(--c-red);
}
._error .error {
  opacity: 1;
}
._error .input::placeholder {
  color: var(--c-red);
}
._error .input {
	animation: shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
 @keyframes shake-horizontal {
  0%,
  100% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70% {
    transform: translateX(-10px);
  }
  20%,
  40%,
  60% {
    transform: translateX(10px);
  }
  80% {
    transform: translateX(8px);
  }
  90% {
    transform: translateX(-8px);
  }
}

</style>
