<template>
  <div class="promo">
    <div class="wrap">
      <div class="name-wrap">
        <MainName />
      </div>

      <button class="back-to-main" @click="showPromo = false">
        <IconArrow />
      </button>

      <div class="title">Enter your promo code to continue</div>

      <form class="form" @submit.prevent="onSubmit">
        <div class="field">
          <CommonInput
            type="text"
            name="promo"
            placeholder="Promo code"
            :hasError="hasError"
            v-model="inputModel"
          />
        </div>

        <div class="btn">
          <CommonButton text="Unlock" :disabled="isBtnDisable" />
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const showPromo = useState("show-promo");

const validPromoCode = "123";
const inputModel = ref("");
const isBtnDisable = ref(true);
const hasError = ref(false);

const onSubmit = () => {
  if (inputModel.value === validPromoCode) {
    hasError.value = false;
    inputModel.value = "GOOD";
  } else {
    hasError.value = true;
  }
};

watch(
  () => inputModel.value,
  (value) => {
    if (value.length) {
      isBtnDisable.value = false;
    } else {
			hasError.value = false;
      isBtnDisable.value = true;
    }
  }
);
</script>

<style lang="scss" scoped>
.promo {
  position: fixed;
  inset: 0;
  background: var(--c-black);
  z-index: 10;
  overflow: auto;
}
.wrap {
  width: 21rem;
  margin: 0 auto;
  padding-top: 4rem;
  padding-bottom: 3rem;
}
.back-to-main {
  position: absolute;
  top: 3.45rem;
  left: 1.6rem;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-to-main:deep(svg) {
  width: 0.5625rem;
}
.title {
  color: var(--c-accent);
  font-family: var(--inter);
  font-size: 1.75rem;
  font-weight: 700;
  font-variation-settings: "wght" 700;
  line-height: 130%;
  letter-spacing: -0.0175rem;
  margin-bottom: 2.5rem;
}
.name-wrap {
  margin-bottom: 6rem;
}
.field {
  margin-bottom: 2.75rem;
}
</style>
