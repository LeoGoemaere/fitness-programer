<script setup lang="ts">
import type { Exercice } from '~/types/Exercice.interface';
import type { ProgramTrainingExercice } from '~/types/Program.interface';

interface Props {
  modelValue: boolean
  trainingExercice: ProgramTrainingExercice
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

const programsStore = useProgramsStore();

const selectedExercice: Ref<Exercice | null> = ref(null)

function onClose() {
  emit('update:modelValue', false)
}

function onValidate() {
  const newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(props.trainingExercice))
  newTrainingExercice.exercice_id = selectedExercice.value?.id
  newTrainingExercice.is_done = false
  programsStore.updateTrainingExercice(newTrainingExercice)
  onClose()
}

const popinTitleLabel = computed(() => {
  if (!props.trainingExercice.exercice_id) {
    return 'Ajouter un exercice'
  }
  return 'Changer d\'exercice'
})
</script>

<template>
  <UModal
    :model-value="props.modelValue"
    @update:modelValue="onClose"
    :ui="{ container: 'items-center h-full px-0 pb-0 pt-14', height: 'h-full rounded-b-none' }"
  >
    <UCard :ui="{ base: 'h-full flex flex-col', body: { base: 'border-solid flex-1 border-b-none' } }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            {{ popinTitleLabel }}
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            @click="onClose"
          />
        </div>
      </template>
      <ExercicesList
        muscle="All"
        :selectable="true"
        v-model:selected-exercice="selectedExercice"
        :current-associated-exercice-id="trainingExercice.exercice_id"

      ></ExercicesList>
      <template #footer>
        <div class="justify-center flex">
          <UButton
            type="button"
            :disabled="!selectedExercice"
            :color="!selectedExercice ? 'gray' : 'primary'"
            @click="onValidate"
          >Valider</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>