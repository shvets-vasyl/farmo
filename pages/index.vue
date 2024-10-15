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

<script lang="ts" setup></script>

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
