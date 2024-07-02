<script lang="ts" setup>
import { blockInvalidChar } from '~/utils/utils'
import { MaxType, type Exercice } from '~/types/Exercice.interface';
import { updateExerciceMax } from '~/composables/exerciceComposable';

const programsStore = useProgramsStore();

interface Props {
  exercice: Exercice
  readonly?: boolean
}

interface Emit {
  (e: 'updated', exercice: Exercice): void
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  readonly: false
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
  <div v-if="props.readonly">
    <div class="flex text-center">
        <div class="flex-1">
          <p class="text-left mb-1 text-sm text-gray-700">Répétition Max</p>
          <UBadge class="block">{{ exercice.RM }}Kg</UBadge>
        </div>
      <div class="max__icon self-end p-1">
        <UIcon size="2xs" name="i-heroicons-arrows-right-left" />
      </div>
      <div class="flex-1">
        <p class="text-left mb-1 text-sm text-gray-700">Training Max</p>
        <UBadge class="block" color="orange">{{ exercice.TM }}Kg</UBadge>
      </div>
    </div>
  </div>
  <div v-else class="max">
    <div class="max__item">
      <span class="max__label">Répetition max</span>
      <UInput
        name="max-rm"
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
          name="max-tm"
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