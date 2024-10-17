<template>
  <div class="tap" @click="onPress">
    <div class="tap__circle">
      <img src="/circle-tap.png" draggable="false" alt="" />
    </div>
    <div class="tap__circle2">
      <img src="/circle-tapped.png" draggable="false" alt="" />
    </div>

    <div class="tap__panda">
      <img
        src="/panda.png"
        draggable="false"
        :class="{
          _active: store.progress.level === 0 || store.progress.level === 1,
        }"
        alt=""
      />
      <img
        src="/panda2.png"
        draggable="false"
        :class="{
          _active:
            store.progress.level === 2 ||
            store.progress.level === 3 ||
            store.progress.level === 4,
        }"
        alt=""
      />
      <img
        src="/panda3.png"
        draggable="false"
        :class="{
          _active:
            store.progress.level === 5 ||
            store.progress.level === 6 ||
            store.progress.level === 7,
        }"
        alt=""
      />
      <img
        src="/panda4.png"
        draggable="false"
        :class="{
          _active: store.progress.level === 8 || store.progress.level === 9,
        }"
        alt=""
      />
      <img
        src="/panda5.png"
        draggable="false"
        :class="{ _active: store.progress.level === 10 }"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { DignityNames, Levels } from "@/types/common";
import { gsap } from "gsap";
import { Haptics, ImpactStyle } from '@capacitor/haptics';

const onPress = (event: MouseEvent) => {
  store.coins += 1;

  const circle2 = document.querySelector(".tap__circle2");
  const tap = document.querySelector(".tap");

  if (!tap) return;

  const tapRect = tap.getBoundingClientRect();
  const x = event.clientX - (tapRect.left || 0);
  const y = event.clientY - (tapRect.top || 0);

  const rotationX = (y / tapRect.height - 0.5) * 20;
  const rotationY = (x / tapRect.width - 0.5) * 20;

  let transformOrigin = "";

  if (x < tapRect.width / 2 && y < tapRect.height / 2) {
    transformOrigin = "bottom right";
  } else if (x >= tapRect.width / 2 && y < tapRect.height / 2) {
    transformOrigin = "bottom left";
  } else if (x < tapRect.width / 2 && y >= tapRect.height / 2) {
    transformOrigin = "top right";
  } else {
    transformOrigin = "top left";
  }

  const tapElement = document.createElement("div");
  tapElement.classList.add("tap__number");
  tapElement.textContent = "+1";

  tapElement.style.position = "absolute";
  tapElement.style.left = `${x}px`;
  tapElement.style.top = `${y}px`;

  tap.appendChild(tapElement);

	Haptics.vibrate();


	console.log(Haptics);


  if (navigator.vibrate) {
    navigator.vibrate(20);
  }

  // animation
  const tl = gsap.timeline();
  tl.to(circle2, { opacity: 1, duration: 0.1 });
  tl.to(circle2, { opacity: 0, duration: 0.1 });

	tl.to(tapElement, {
    y: -200,
    duration: 1,
  }, 0);
	tl.to(tapElement, {
		opacity: 0,
		delay: 0.5,
		onComplete: () => {
      tap.removeChild(tapElement);
    },
	}, 0)

	tl.to(tap, {
    rotationX: -rotationX,
    rotationY: rotationY,
    duration: 0.1,
    ease: "power1.out",
    transformOrigin: transformOrigin,
  }, 0);

	tl.to(tap, {
    rotationX: 0,
    rotationY: 0,
    duration: 0.1,
		delay: 0.1,
    ease: "power1.out",
  }, 0);
};

const levelUp = (level: Levels, dignity: DignityNames) => {
  store.progress.percent = 100;
  store.progress.level = level;
  store.progress.dignity = dignity;

  if (store.progress.level !== store.all_levels[store.all_levels.length - 1]) {
    setTimeout(() => {
      store.progress.percent = 0;
    }, 200);
  }
};

const setPercent = () => {
  const getPreviousCoinsReach = store.coin_levels[store.progress.level - 1];
  const getCurrentCoinsReach = store.coin_levels[store.progress.level];

  const getDifference = getPreviousCoinsReach
    ? getCurrentCoinsReach - getPreviousCoinsReach
    : getCurrentCoinsReach;

  store.progress.percent += 100 / getDifference;
};

watch(
  () => store.coins,
  (count) => {
    if (store.progress.level === store.all_levels[store.all_levels.length - 1])
      return;

    // Progress line percent
    setPercent();

    // level up
    for (let i = 0; i < store.coin_levels.length; i++) {
      if (count === store.coin_levels[i]) {
        levelUp(store.all_levels[i + 1], store.dignity_names[i + 1]);
      }
    }
  }
);
</script>

<style lang="scss" scoped>
.tap {
  height: 100%;
  position: relative;
  transform: perspective(1000px);
}
.tap__circle,
.tap__circle2 {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
.tap__circle2 {
  opacity: 0;
}
.tap__panda {
  width: rem(125);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}
.tap__panda img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
}
.tap__panda img._active {
  opacity: 1;
}
.tap__panda img:nth-child(2) {
  width: 105%;
}
.tap__panda img:nth-child(4) {
  width: 120%;
}
.tap__panda img:nth-child(5) {
  width: 120%;
}
</style>
