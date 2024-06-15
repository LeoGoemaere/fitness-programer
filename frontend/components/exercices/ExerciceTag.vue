<script setup lang="ts">
import type { TagExercice } from '~/types/TagExercice.interface';
import { getBrightness } from '~/utils/colorUtils';


interface Props {
  tagExercice: TagExercice
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});

const colorContrast = computed(() => {
  const brightness = getBrightness(props.tagExercice.color)
  return brightness > 125 ? 'black' : 'white'
})

</script>

<template>
  <span class="c-tag" :style="{ 'background-color': props.tagExercice.color, 'color': colorContrast }">{{ props.tagExercice.name }}</span>
</template>

<style lang="scss" scoped>
.c-tag {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  line-height: normal;
}
</style>

