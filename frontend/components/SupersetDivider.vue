<script setup lang="ts">
interface Props {
  modelValue: boolean
}

interface Emit {
  (e: 'update:modelValue', active: boolean): void
}
// Declarations des emits
const emit = defineEmits<Emit>();

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  modelValue: false
});
</script>

<template>
  <div class="superset-divider" :class="{ 'superset-divider--active': props.modelValue }">
    <UButton
      @click="emit('update:modelValue', !props.modelValue)"
      class="superset-divider__button"
      :color="props.modelValue ? 'primary' : 'gray'"
      size="2xs"
      variant="soft"
      label="superset"
      :icon="props.modelValue ? 'i-solar-check-circle-linear' : 'i-solar-close-circle-linear'"
    ></UButton>
    <span class="superset-divider__border superset-divider__border--bottom"></span>
  </div>
</template>

<style lang="scss" scoped>
.superset-divider {
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  height: 50px;
  z-index: 1;
  transition: height .3s ease-out;
}

.superset-divider--active {
  height: 0;
}

.superset-divider__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
