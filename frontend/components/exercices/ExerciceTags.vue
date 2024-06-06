<script setup lang="ts">
interface Item {
  label: string
  color: string
}

interface Props {
  title?: string,
  items: Item[]
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  items: () => ([])
});

</script>

<template>
  <div class="c-tags">
    <div v-if="props.title" class="c-tags__title">{{ props.title }}</div>
    <div class="c-tags__list">
      <div
        class="c-tags__item"
        v-for="item in props.items"
        :key="item.label"
      >
        <UBadge :ui="{ rounded: 'rounded-full' }" :label="item.label" :color="item.color" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-tags {
  // display: flex;
}

.c-tags__title {
  font-size: 14px;
  color: rgb(var(--color-gray-500));
  margin-bottom: 5px;
}

.c-tags__list {
  margin-left: -5px;
  margin-right: -5px;
}

.c-tags__item {
  display: inline-flex;
  padding: 2px 5px;
}
</style>

