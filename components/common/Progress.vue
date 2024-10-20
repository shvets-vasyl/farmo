<template>
  <div class="progress">
    <div class="progress__head">
      <div class="progress__dignity">
        <span class="progress__dignity-text t1">
          {{ store.user.info?.lvl_name }}
        </span>
        <span class="progress__dignity-icon">
          <IconsArrowRight />
        </span>
      </div>

      <div class="progress__level t1">
        <span class="progress__level-text">Level</span>
        <span class="progress__level-count">
          {{ store.user.info?.lvl }}/{{
            Object.keys(store.game.lvl_info as Object).length - 1
          }}
        </span>
      </div>
    </div>

    <div class="progress__body">
      <div class="progress__line" :style="`width:${store.progress.percent}%`" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { store } from "@/store";
</script>
<style lang="scss" scoped>
.progress {
  margin-top: rem(12);
}
.progress__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: rem(2);
  padding-right: rem(2);
}
.progress__dignity {
  display: flex;
  align-items: center;
  gap: rem(3);
}
.progress__dignity-icon {
  display: inline-flex;
}
.progress__level {
  display: flex;
  align-items: center;
  gap: rem(3);
}
.progress__body {
  margin-top: rem(7);
  border-radius: rem(30);
  border: rem(0.5) solid rgba(#555555, 0.75);
  height: rem(9);
  background: var(--c-grey-2);
  overflow: hidden;
}
.progress__line {
  height: 100%;
  background: linear-gradient(to right, #adfaa1, #c597cc, #2f39a3);
  border-radius: rem(30);
  transition: width 0.2s var(--default-ease);
}
</style>
