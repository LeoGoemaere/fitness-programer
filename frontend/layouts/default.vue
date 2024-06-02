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
.layout__page {
  --space-bottom: 10px;
  padding: 0 20px calc(var(--tab-bar-height) + var(--space-bottom)); 
}
</style>