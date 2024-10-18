<template>
  <div>
    <ClientOnly>
      <main class="main">
        <TheCover v-if="store.loading" />
        <TemplateShadow />

        <TheHeader
          :class="store.show_block === 'main' ? 'show-block' : 'hide-block'"
        />
        <BlockMain
          :class="store.show_block === 'main' ? 'show-block' : 'hide-block'"
        />
        <BlockProfile
          :class="store.show_block === 'profile' ? 'show-block' : 'hide-block'"
        />
        <BlockInvite
          :class="store.show_block === 'friends' ? 'show-block' : 'hide-block'"
        />
        <CommonTabs />
      </main>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import type { UserProfileInterface, UserInfoInterface } from "@/types/common"

const test = ref()

onMounted(async () => {
	if (!window.Telegram) return

	const USER_ID = window.Telegram.WebApp.initDataUnsafe.user.id;

	const USER_PROFILE = await $fetch<UserProfileInterface>("/api/user-profile", {
		method: "POST",
		body: JSON.stringify({ id: USER_ID }),
	})

	const USER_INFO = await $fetch<UserInfoInterface>("/api/user-info", {
		method: "POST",
		body: JSON.stringify({ id: USER_ID }),
	})

	store.user.profile = USER_PROFILE
	store.user.info = USER_INFO

});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  height: 100vh;
}
.testing {
	position: relative;
	z-index: 1000;
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
