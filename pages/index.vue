<template>
  <div>
    <ClientOnly>
      <main class="main">
        <TheCover v-if="store.loading" />

        <template v-else>
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
import type { UserProfileInterface, UserInfoInterface } from "@/types/common";
import { gsap } from "gsap";

onMounted(async () => {
  let userId = localStorage.getItem("userId");

  if (!userId && window.Telegram) {
		const id = window.Telegram.WebApp.initDataUnsafe.user.id
		// const id = "992580016"

    localStorage.setItem("userId", id);
    userId = id;
  }

  try {
    const USER_PROFILE = await $fetch<UserProfileInterface>(
      "/api/user-profile",
      {
        method: "POST",
        body: JSON.stringify({ id: userId }),
      }
    );

    const USER_INFO = await $fetch<UserInfoInterface>("/api/user-info", {
      method: "POST",
      body: JSON.stringify({ id: userId }),
    });

    store.user.profile = USER_PROFILE;
    store.user.info = USER_INFO;
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    gsap.to(".cover", {
      opacity: 0,
      delay: 0.5,
      onComplete() {
        store.loading = false;
      },
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
