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
  padding: 20px;
  margin-bottom: var(--tabbar-height);
  margin-top: var(--header-height);
  min-height: calc(100dvh - var(--tabbar-height) - var(--header-height));
  position: relative;
}
</style>