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
    <span class="superset-divider__border"></span>
    <UButton
      @click="emit('update:modelValue', !props.modelValue)"
      :color="props.modelValue ? 'primary' : 'gray'"
      size="2xs"
      variant="soft"
      label="superset"
      iscon="i-solar-arrow-up-bold"
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
}

.superset-divider__border {
  flex: 1;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgb(var(--color-primary-500));
    transition: height .1s ease-out;
  }
  .superset-divider--active & {
    &::before {
      height: 100%;
    }
  }
}

.superset-divider__border--bottom {
  &::before {
    top: 0;
    bottom: auto;
  }
}
</style>
