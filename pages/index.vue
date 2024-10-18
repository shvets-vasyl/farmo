<template>
  <div>
    <ClientOnly>
      <main class="main">
        <TheCover v-if="store.loading" />
        <TemplateShadow />


				<!-- <div class="h1 test">{{ user }}</div> -->
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
const user = ref();

onMounted(() => {
  // Перевірка наявності Web App Telegram API
	console.log(window.Telegram?.WebApp);

	// const tg = window.Telegram?.WebApp

  // if (tg) {
  //   user.value = tg.initDataUnsafe?.user || null;
  // }
	// console.log(user.value.id);
	// console.log(user.value.first_name);
	// console.log(user.value.last_name);
	// console.log(user.value.username);

	const resp = $fetch("/api/profile").then((response) => {
		console.log(response);

	})


});
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  height: 100vh;
}
.test {
	position: relative;
	z-index: 10;
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
