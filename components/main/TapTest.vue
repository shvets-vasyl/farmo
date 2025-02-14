<template>
  <div
    class="tap"
    @pointerup="onMouseUp"
    @pointerdown="onMouseDown"
    @click="vibrate"
  >
    <img v-if="tapDisabled" src="/tap-unactive.png" alt="" />

		<div v-else-if="isFarming" class="farming" />

    <img v-else-if="!tapDisabled" src="/tap-active.png" alt="" />
  </div>
</template>

<script lang="ts" setup>
import gsap from "gsap";
import lottie from "lottie-web"

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
const isFarming = ref(false)

const onMouseDown = () => {
  if (tapDisabled.value || isFarming.value) return

  gsap.to(".tap", {
    scale: 0.95,
    duration: 0.25,
  });
};
const onMouseUp = () => {
  if (tapDisabled.value || isFarming.value) return;

  gsap.to(".tap", {
    scale: 1,
    duration: 0.25,
  });
};

const animLottie = () => {
  const tapContainer = document.querySelector(".tap .farming")

  if (tapContainer) {
    const tapLottie = lottie.loadAnimation({
      container: tapContainer,
      renderer: "canvas",
      loop: true,
      autoplay: true,
      path: "/tap.json",
    })
    tapLottie.setSpeed(0.5)
    tapLottie.pause()
  }
}

onMounted(async () => {
	await nextTick()

	if (isFarming.value) {
		animLottie()
	}
})
</script>

<style lang="scss" scoped>
.tap {
  width: 100%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
}
.farming {
	width: 100%;
	aspect-ratio: 1;
}
.tap img {
  width: 105%;
}
</style>
