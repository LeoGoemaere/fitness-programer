<script setup lang="ts">
const tags = ['531', 'GZCL']
const selectedTags = ref([])
</script>

<template>
  <div class="search">
    <div class="search__actions">
      <UInput
        class="search__input"
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="Search..."
      />
      <USelectMenu class="ml-2" icon="i-heroicons-adjustments-horizontal" v-model="selectedTags" :options="tags" multiple placeholder="Tags" />
    </div>
    <div class="search__tags">
      <exercice-tags :items="[{label: 'test', color: 'orange'}, {label: 'test', color: 'orange'}]"></exercice-tags>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-bottom: 10px;
}

.search__actions {
  display: flex;
}

.search__input {
  flex: 1;
}

.search__tags {
  margin-top: 5px;
}
</style>