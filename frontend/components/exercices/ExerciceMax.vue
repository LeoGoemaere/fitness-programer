<script lang="ts" setup>
import { blockInvalidChar } from '~/utils/utils'
import { MaxType, type Exercice } from '~/types/Exercice.interface';
import { updateExerciceMax } from '~/composables/exerciceComposable';

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

function updateMax(maxType: MaxType, value: unknown) {
  const tmPercentage = programsStore.currentProgram?.tm_percentage
  const newExercice = updateExerciceMax(maxType, value, props.exercice, tmPercentage)
  emit('updated', newExercice)
}

onMounted(() => {
  const currentMaxValue = props.exercice.RM
  updateMax(MaxType.rm, currentMaxValue)
})
</script>

<template>
  <div class="max">
    <div class="max__item">
      <span class="max__label">Répetition max</span>
      <UInput
        :modelValue="exercice.RM"
        @keydown="blockInvalidChar"
        @change="updateMax(MaxType.rm, $event)"
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
        :modelValue="exercice.TM"
        @keydown="blockInvalidChar"
        @change="updateMax(MaxType.tm, $event)"
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
  background-color: rgb(249 115 22); // TODO: Creer palette secondaire
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