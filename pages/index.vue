<template>
  <div>
    <ClientOnly>
      <main class="main">
        <TheCover v-if="store.loading" />

				<!-- <Testing /> -->

        <template v-if="store.show_content">
          <TemplateShadow />

          <TheHeader
            :class="store.show_block === 'main' ? 'show-block' : 'hide-block'"
          />
          <BlockMain
            :class="store.show_block === 'main' ? 'show-block' : 'hide-block'"
          />
          <BlockProfile
            :class="
              store.show_block === 'profile' ? 'show-block' : 'hide-block'
            "
          />
          <BlockInvite
            :class="
              store.show_block === 'friends' ? 'show-block' : 'hide-block'
            "
          />
          <CommonTabs />
        </template>
      </main>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import { gsap } from "gsap";

const { refreshData } = useUserData();

onMounted(async () => {
  try {
    await refreshData({
      profile: true,
      info: true,
      referrals: true,
      lvlInfo: true,
    });
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    store.show_content = true;

    nextTick(() => {
      gsap.to(".cover", {
        opacity: 0,
        delay: 0.5,
        onComplete() {
          store.loading = false;
        },
      });
    });
  }
});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  height: 100vh;
}
.show-block {
  pointer-events: auto;
  visibility: visible;
  opacity: 1;
}
.hide-block {
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
}
</style>
