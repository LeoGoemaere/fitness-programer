<script lang="ts" setup>
const rm = ref(0)
const tm = ref(0)
</script>

<template>
  <div class="max">
    <div class="max__item">
      <span class="max__label">Répetition max</span>
      <UInput v-model="rm" :ui="{ rounded: 'rounded-s-none' }">
        <template #trailing>
          <span class="max__unit">Kg</span>
        </template>
      </UInput>
    </div>
    <div class="max__icon">
      <UIcon size="2xs" name="i-heroicons-arrows-right-left" />
    </div>
    <div class="max__item">
      <span class="max__label max__label--tm">Training max</span>
      <UInput v-model="tm" :ui="{ rounded: 'rounded-s-none' }">
        <template #trailing>
          <span class="max__unit">Kg</span>
        </template>
      </UInput>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.max {
  display: flex;
}

.max__item {
  display: flex;
}

.max__label {
  font-size: 10px;
  display: flex;
  align-items: center;
  background-color: rgb(var(--color-primary-500));
  border-radius: 8px 0 0 8px;
  color: white;
  padding: 6px;
}

.max__label--tm {
  background-color: rgb(var(--color-gray-400));
}

.max__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
}

.max__unit {
  color: rgb(var(--color-gray-500));
  font-size: 12px;
}
</style>