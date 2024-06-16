<script setup lang="ts">
import type { Tag } from '~/types/Tag.interface';
import { getBrightness } from '~/utils/colorUtils';


interface Props {
  tag: Tag
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});

const colorContrast = computed(() => {
  const brightness = getBrightness(props.tag.color)
  return brightness > 125 ? 'black' : 'white'
})

</script>

<template>
  <span class="c-tag" :style="{ 'background-color': props.tag.color, 'color': colorContrast }">{{ props.tag.name }}</span>
</template>

<style lang="scss" scoped>
.c-tag {
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  line-height: normal;
}
</style>

