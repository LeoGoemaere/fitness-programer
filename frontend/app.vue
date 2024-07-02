<script setup>

</script>

<template>
  <div class="teleport-header" id="header-teleport-target" />
  <!-- Load the PWA manifest -->
  <NuxtPwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UNotifications />
</template>

<script setup>

</script>

<style lang="scss" scoped>
.teleport-header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 30;
}
</style>
