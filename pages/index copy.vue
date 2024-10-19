<template>
  <div>
    <ClientOnly>
      <main class="main">
      </main>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>

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
</script>

<style lang="scss" scoped>
.main {
  overflow: hidden;
  height: 100vh;
}
</style>
