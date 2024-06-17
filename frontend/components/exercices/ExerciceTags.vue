<script setup lang="ts">
import type { Tag } from '~/types/Tag.interface';

interface Props {
  title?: string,
  tags: Tag[]
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  tags: () => ([])
});

</script>

<template>
  <div class="c-tags" v-if="props.tags.length">
    <div v-if="props.title" class="c-tags__title mb-1">{{ props.title }}</div>
    <div class="c-tags__list">
      <div
        class="c-tags__item"
        v-for="tag in props.tags"
        :key="tag.name"
      >
        <ExerciceTag :tag="tag"></ExerciceTag>
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

