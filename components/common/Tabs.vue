<template>
  <div class="tabs">
    <button
      class="tab__item"
      :class="{ _active: store.show_block === 'main' }"
      @click="store.show_block = 'main'"
    >
      <div class="tab__item-icon">
        <img src="/tab-main.png" draggable="false" alt="" />
      </div>
      <div class="tab__item-text t2">Main</div>
    </button>

    <button
      class="tab__item"
      :class="{ _active: store.show_block === 'profile' }"
      @click="store.show_block = 'profile'"
    >
      <div class="tab__item-icon">
        <IconsProfile />
      </div>
      <div class="tab__item-text t2">Profile</div>
    </button>

    <button
      class="tab__item"
      :class="{ _active: store.show_block === 'friends' }"
      @click="store.show_block = 'friends'"
    >
      <div class="tab__item-icon">
        <IconsFriends />
      </div>
      <div class="tab__item-text t2">Friends</div>
    </button>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.tabs {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: rem(75);
  background: var(--c-grey-2);
  z-index: var(--z-tabs);
  padding: rem(6);
  display: flex;
  gap: rem(30);
  justify-content: center;
}
.tab__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: rem(5);
  border-radius: rem(8);
  opacity: 0.5;
  flex: 0 0 rem(100);
}
.tab__item._active {
  background: var(--c-grey-1);
  opacity: 1;
}
.tab__item-icon {
  height: rem(35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
}
.tab__item._active .tab__item-icon {
  opacity: 1;
}
.tab__item:nth-child(1) .tab__item-icon {
  width: rem(35);
}
.tab__item:nth-child(2) .tab__item-icon {
  width: rem(24);
}
.tab__item:nth-child(3) .tab__item-icon {
  width: rem(55);
}
</style>
