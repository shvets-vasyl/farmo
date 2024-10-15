<template>
  <div class="header">
    <!-- <div class="header__name h5">Panda Kombat</div> -->

    <div class="header__content">
      <div class="header__profile-name">
        <div class="header__icon-logo">
          <div class="header__btn-bg" />
          <div class="header__icon-logo-wrap">
            <IconsLogo />
          </div>
        </div>
        <p class="header__profile-name-text t1">{{ store.user.name }}</p>
      </div>

      <button class="header__profile-btn" @click="store.show_block = 'profile'">
        <div class="header__btn-bg" />
        <div class="header__icon-profile-wrap">
          <IconsProfile />
        </div>
        <p class="header__profile-text t1">Profile</p>
      </button>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.header {
  padding: rem(24) rem(30) 0;
  position: relative;
  z-index: var(--z-header);
}
.header__name {
  text-align: center;
  font-family: var(--font-500);
  margin-bottom: rem(50);
}
.header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

// profile
.header__profile-name {
  display: flex;
  align-items: center;
  gap: rem(9);
}
.header__icon-logo {
  flex: 0 0 rem(36);
  width: rem(36);
  height: rem(36);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.header__icon-logo-wrap {
  flex: 0 0 rem(19);
  width: rem(19);
  position: relative;
  top: rem(2);
}
.header__btn-bg {
  background: linear-gradient(rgba(#ffffff, 0.8), #4e4949);
  position: absolute;
  inset: 0;
  opacity: 0.2;
  border-radius: rem(10);
  overflow: hidden;
}
.header__profile-btn {
  display: flex;
  align-items: center;
  position: relative;
  width: auto;
  gap: rem(8);
  height: rem(36);
  padding-left: rem(8);
  padding-right: rem(9);
}
.header__icon-profile-wrap {
  flex: 0 0 rem(14);
  width: rem(14);
}
</style>
