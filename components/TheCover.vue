<template>
  <div class="cover">
    <div class="cover__bg">
      <img src="/cover-bg.png" draggable="false" class="common-media" alt="" />
    </div>
    <div class="cover__ellipse">
      <img src="/cover-ellipse.png" draggable="false" alt="" />
    </div>

    <div class="cover__icon">
      <IconsLogo />
    </div>

    <div class="cover__descr t1">Panda Kombat</div>
  </div>
</template>
<script lang="ts" setup>
import { gsap } from "gsap"
onMounted(() => {
	// fake loading
	gsap.to(".cover", {
		opacity: 0,
		delay: 1,
		onComplete() {
			store.loading = false
		}
	})
})
</script>
<style lang="scss" scoped>
.cover {
  background: #4d4d4d;
  position: absolute;
  inset: 0;
  z-index: var(--z-cover);
}
.cover__bg {
  position: absolute;
  inset: 0;
}
.cover__ellipse {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
}
.cover__ellipse img {
  width: 100%;
}
.cover__icon {
  width: rem(140);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;
}
.cover__icon img {
  width: 100%;
}
.cover__descr {
  position: absolute;
  left: 50%;
  bottom: rem(100);
  transform: translateX(-50%);
  color: var(--c-grey-5);
}
</style>
