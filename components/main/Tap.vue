<template>
  <div
    class="tap"
    @pointerup="onMouseUp"
    @pointerdown="onMouseDown"
    @click="vibrate"
  >
    <img v-if="tapDisabled" src="/tap-unactive.png" alt="" />
    <img v-else src="/tap-active.png" alt="" />
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";

declare global {
  interface Window {
    TapticEngine?: { impact: (style: "light" | "medium" | "heavy") => void }
  }
}

const vibrate = () => {
  if ("vibrate" in navigator) {
    navigator.vibrate(50)
  } else if (window.TapticEngine) {
    window.TapticEngine?.impact("light")
  }
}

const tapDisabled = ref(false);

const onMouseDown = () => {
  if (tapDisabled.value) return

  gsap.to(".tap", {
    scale: 0.95,
    duration: 0.25,
  });
};
const onMouseUp = () => {
  if (tapDisabled.value) return;

  gsap.to(".tap", {
    scale: 1,
    duration: 0.25,
  });
};
</script>

<style lang="scss" scoped>
.tap {
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}
.tap img {
  width: 105%;
}
</style>
