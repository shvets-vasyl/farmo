<template>
  <button
    class="get-btn"
    :disabled="btnDisabled"
    @pointerup="onMouseUpGetBtn"
    @pointerdown="onMouseDownGetBtn"
  >
    Забрати FPI BANKI
  </button>
</template>

<script lang="ts" setup>
const btnDisabled = ref(false);

const onMouseDownGetBtn = () => {
  if (btnDisabled.value) return;

  const btn = document.querySelector(".get-btn");
  btn?.classList.add("_active");
};
const onMouseUpGetBtn = () => {
  if (btnDisabled.value) return;

  const btn = document.querySelector(".get-btn");
  btn?.classList.remove("_active");
};
</script>

<style lang="scss" scoped>
.get-btn {
  margin-top: 1.875rem;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 0.9375rem;
  border: 1px solid rgba(white, 0.8);

  padding: 1.4375rem 0;
  text-align: center;
  font-size: 1.25rem;

  text-transform: uppercase;
  font-family: var(--inter);
  font-variation-settings: "wght" 700;
  width: 100%;

  color: white;
  background: linear-gradient(
    144deg,
    rgba(161, 230, 53, 0.4) 9.13%,
    rgba(93, 139, 20, 0.4) 62.89%
  );
  transition: all 0.3s ease;
}
.get-btn[disabled] {
  background: linear-gradient(144deg, #28272f 9.13%, #040404 62.89%),
    linear-gradient(
      90deg,
      rgba(65, 65, 65, 0.4) 0%,
      rgba(167, 167, 167, 0.4) 100%
    );
  color: rgba(white, 0.5);
  border-color: rgba(white, 0.4);
}
.get-btn._active {
  transform: scale(0.95);
  background: linear-gradient(
    144deg,
    rgba(206, 255, 129, 0.4) 9.13%,
    rgba(142, 191, 64, 0.4) 62.89%
  );
}
</style>
