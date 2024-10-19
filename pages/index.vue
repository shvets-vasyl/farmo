<template>
  <div>
    <ClientOnly>
      <main class="main">
        <TheCover v-if="store.loading" />

				<!-- <template v-else>
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
				</template> -->
      </main>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { store } from "@/store";
import type { UserProfileInterface, UserInfoInterface } from "@/types/common";
import { gsap } from "gsap"

onMounted(async () => {

	gsap.to(".cover", {
			opacity: 0,
			delay: 0.5,
			onComplete() {
				store.loading = false
			}
		})

		onMounted(() => {
  // Додаємо затримку перед отриманням даних
  setTimeout(() => {
    if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
      const userInfo = window.Telegram.WebApp.initDataUnsafe.user;
      if (userInfo) {
        alert(JSON.stringify(userInfo));
      } else {
        alert("User info is undefined");
      }
    } else {
      alert("Telegram WebApp is not initialized yet");
    }
  }, 3000); // Затримка в 1 секунду
});
  // if (!window.Telegram) return;

  // const USER_ID = window.Telegram.WebApp.initDataUnsafe.user.id;
  // // const USER_ID = 992580016;

  // try {
  //   const USER_PROFILE = await $fetch<UserProfileInterface>("/api/user-profile", {
  //     method: "POST",
  //     body: JSON.stringify({ id: USER_ID }),
  //   });

  //   const USER_INFO = await $fetch<UserInfoInterface>("/api/user-info", {
  //     method: "POST",
  //     body: JSON.stringify({ id: USER_ID }),
  //   });

  //   store.user.profile = USER_PROFILE;
  //   store.user.info = USER_INFO;

  // } catch (error) {
  //   console.error("Error fetching user data:", error);
  // } finally {
	// 	gsap.to(".cover", {
	// 		opacity: 0,
	// 		delay: 0.5,
	// 		onComplete() {
	// 			store.loading = false
	// 		}
	// 	})
  // }
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
