<script lang="ts" setup>
import TabBar from '~/components/tabBar/TabBar.vue';
</script>

<template>
  <div class="layout">
    <div class="layout__page">
      <slot />
    </div>
    <TabBar />
  </div>
</template>

<style lang="scss">
.layout {
  --space-bottom: 50px;
  padding: var(--page-spacing-y) var(--page-spacing-x);
  margin-bottom: var(--tabbar-height);
  margin-top: var(--header-height);
  min-height: calc(100dvh - var(--tabbar-height) - var(--header-height));
  position: relative;
  display: flex;
}

.layout__page {
  width: 100%;
}
</style>