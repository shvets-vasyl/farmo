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
        :class="{ _active: store.user.info?.lvl === 0 }"
        alt=""
      />
      <img
        src="/panda2.png"
        draggable="false"
        :class="{ _active: store.user.info?.lvl === 1 }"
        alt=""
      />
      <img
        src="/panda3.png"
        draggable="false"
        :class="{ _active: store.user.info?.lvl === 2 }"
        alt=""
      />
      <img
        src="/panda4.png"
        draggable="false"
        :class="{ _active: store.user.info?.lvl === 3 }"
        alt=""
      />
      <img
        src="/panda5.png"
        draggable="false"
        :class="{
          _active:
            store.user.info?.lvl === 4 ||
            store.user.info?.lvl === 5 ||
            store.user.info?.lvl === 6 ||
            store.user.info?.lvl === 7 ||
            store.user.info?.lvl === 8,
        }"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import { paths } from "@/utils/api/paths";
import { gsap } from "gsap";
import type { LvlInfoInterface } from "@/types/common";

const { refreshData } = useUserData();

const onPress = async (event: MouseEvent) => {
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

  // animation
  const tl = gsap.timeline();
  tl.to(circle2, { opacity: 1, duration: 0.1 });
  tl.to(circle2, { opacity: 0, duration: 0.1 });

  tl.to(
    tapElement,
    {
      y: -200,
      duration: 1,
    },
    0
  );
  tl.to(
    tapElement,
    {
      opacity: 0,
      delay: 0.5,
      onComplete: () => {
        tap.removeChild(tapElement);
      },
    },
    0
  );

  tl.to(
    tap,
    {
      rotationX: -rotationX,
      rotationY: rotationY,
      duration: 0.1,
      ease: "power1.out",
      transformOrigin: transformOrigin,
    },
    0
  );

  tl.to(
    tap,
    {
      rotationX: 0,
      rotationY: 0,
      duration: 0.1,
      delay: 0.1,
      ease: "power1.out",
    },
    0
  );

  updateBalance();

	// if (navigator) {
	// 	navigator.vibrate(200)
	// }
};
const updateBalance = async () => {
  try {
    const response = await $fetch("/api/update-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: paths.game_tap,
        user_id: store.user.profile?.user_id,
      }),
    });

		if (store.user.info) {
			store.user.info.balance += 1;
		}
    // console.log(response);
  } catch (error) {

    console.error(error);
  }
};

onMounted(() => {
  getProgressPercent();
});

const getProgressPercent = () => {
  if (!store.user.info || !store.game.lvl_info) return;

  const lvlKey = String(store.user.info.lvl) as keyof LvlInfoInterface;
  const coinsFrom = store.game.lvl_info[lvlKey][0];
  const coinsTo = store.game.lvl_info[lvlKey][1];

	if (Object.keys(store.game.lvl_info).length - 1 === store.user.info.lvl) {
		return store.progress.percent = 100
	}

  const currentBalance = store.user.info?.balance ?? 0;

  if (currentBalance < coinsFrom) return store.progress.percent = 0;
  if (currentBalance >= coinsTo) return store.progress.percent = 100;

  const progress = currentBalance - coinsFrom;
  const totalCoinsNeeded = coinsTo - coinsFrom;
  const percent = (progress / totalCoinsNeeded) * 100;

  store.progress.percent = percent;
};



watch(
  () => store.user.info?.balance,
  async (newBalance) => {
    if (!store.user.info || !store.game.lvl_info || newBalance === undefined)
      return;

			let lvlKey = String(store.user.info.lvl) as keyof LvlInfoInterface;
			let coinsTo = store.game.lvl_info[lvlKey][1];

    if (newBalance > coinsTo) {
      await refreshData({ info: true, lvlInfo: true });
    }

		getProgressPercent()
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
