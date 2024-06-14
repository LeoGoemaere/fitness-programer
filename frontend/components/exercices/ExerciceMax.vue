<script lang="ts" setup>
import { blockInvalidChar } from '~/utils/utils'
import type { Exercice } from '~/types/Exercice.interface';

const exercicesStore = useExercicesStore();
const programsStore = useProgramsStore();

interface Props {
  exercice: Exercice
}

interface Emit {
  (e: 'updated', exercice: Exercice): void
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});

// Declarations des emits
const emit = defineEmits<Emit>();

async function updateMax(maxType: 'rm' | 'tm', value: unknown) {
  const newExercice: Exercice = JSON.parse(JSON.stringify(props.exercice))
  const maxTypeValue = isNaN(value as number) ? 0 : Number(value) // Can be Nan but TS want a number as param...
  newExercice[maxType] = maxTypeValue

  if (maxType === 'rm') {
    newExercice.tm = tmFromRm(maxTypeValue)
  } else if (maxType === 'tm') {
    newExercice.rm = rmFromTm(maxTypeValue)
  }
  emit('updated', newExercice)
}

function tmFromRm(rm: number) {
  const tmPercentage = programsStore.currentProgram?.tm_percentage
  if (typeof tmPercentage !== 'undefined') {
    const newTm = rm * tmPercentage
    return roundValue(newTm)
  }
  return 0
}

function rmFromTm(tm: number) {
  const tmPercentage = programsStore.currentProgram?.tm_percentage
  if (typeof tmPercentage !== 'undefined') {
    const newRm = tm / tmPercentage
    return roundValue(newRm)
  }
  return 0
}

function roundValue(value: unknown) {
  if (typeof value === 'number') {
    return Math.ceil(value * 10) / 10;
  }
  return 0;
}

onMounted(() => {
  const currentMaxValue = props.exercice.rm
  updateMax('rm', currentMaxValue)
})
</script>

<template>
  <div class="max">
    <div class="max__item">
      <span class="max__label">Répetition max</span>
      <UInput
        :modelValue="exercice.rm"
        @keydown="blockInvalidChar"
        @change="updateMax('rm', $event)"
        :ui="{ rounded: 'rounded-s-none' }"
        type="number"
      >
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
      <UInput
        :modelValue="exercice.tm"
        @keydown="blockInvalidChar"
        @change="updateMax('tm', $event)"
        :ui="{ rounded: 'rounded-s-none' }"
        type="number"
      >
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