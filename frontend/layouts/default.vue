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
  padding: 0 20px;
}
</style>