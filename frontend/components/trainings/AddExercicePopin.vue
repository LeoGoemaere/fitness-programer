<script setup lang="ts">
import type { Exercice } from '~/types/Exercice.interface';
import type { ProgramTrainingExercice } from '~/types/Program.interface';

interface Props {
  modelValue: boolean
  trainingExercice: ProgramTrainingExercice
  isRecommendation?: boolean
  exercicesList?: Exercice[] | null
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
  let newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(props.trainingExercice))
  newTrainingExercice.exercice_id = selectedExercice.value?.id
  newTrainingExercice.sets = [ ...newTrainingExercice?.default_sets || [] ]
  if (props.isRecommendation) {
    // Get the trainingExercice by the selectedExercice id => not ideal, but in fact we shouldn't recommend 2 sames exercices
    const recommendedTrainingExercice = newTrainingExercice.recommended_training_exercices.find(trainingExercice => trainingExercice.exercice_id === selectedExercice.value?.id)
    if (recommendedTrainingExercice?.default_sets) {
      // Add the default sets from the recommended training exercice
      newTrainingExercice.sets = [ ...recommendedTrainingExercice?.default_sets || [] ]
    }
  }
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

const listTitle = computed(() => props.isRecommendation ? 'Recommandations du coach :' : 'Exercices')

watch(() => props.modelValue, (value) => {
  if (!value) {
    selectedExercice.value = null
  }
})

const modalUi = computed(() => {
  let containerUi = 'items-center px-0 pb-0 pt-14'
  let heightUi = 'rounded-b-none'
  if (props.isRecommendation) {
    containerUi += ' h-full'
    heightUi += ' h-full'
  }
  return { container: containerUi, height: heightUi }
})
</script>

<template>
  <UModal
    :model-value="props.modelValue"
    @update:modelValue="onClose"
    :ui="modalUi"
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
      <slot name="header-action" />
      <ExercicesList
        muscle="All"
        :selectable="true"
        v-model:selected-exercice="selectedExercice"
        :title="listTitle"
        :filterable="!props.isRecommendation"
        :exercices-list="props.exercicesList"

      ></ExercicesList>
      <slot name="default" />
      <template #footer>
        <div class="justify-center flex">
          <slot name="footer-action" />
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