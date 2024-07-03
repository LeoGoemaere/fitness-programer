<script setup lang="ts">
import type { Exercice } from '~/types/Exercice.interface';
import type { ProgramTrainingExercice } from '~/types/Program.interface';

interface Props {
  trainingExercice: ProgramTrainingExercice
  trainingIndex: number // Avoid to calcul it
  supersetUp?: boolean
  supersetDown?: boolean
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  supersetUp: false,
  supersetDown: false,
});

const exercicesStore = useExercicesStore()
const programsStore = useProgramsStore();

const isEditionSetPopinOpen = ref(false)
const isAddExercicePopinOpen = ref(false)
const isRecommendedExercicedPopinOpen = ref(false)
const confirmDelete = ref(false)

const exerciceAssociated = computed(() => exercicesStore.exercices.find(exerciceEl => exerciceEl.id === props.trainingExercice.exercice_id))

// We don't want to show the current exercice that is used by the trainingExercice
const recommendedExercices = computed(() => {
  const exercicesList = props.trainingExercice.recommended_training_exercices
    .map(trainingExercice => {
      const exercice = exercicesStore.exercices.find(exerciceEl => exerciceEl.id === trainingExercice.exercice_id)
      return exercice
    })
    .filter(exercice => exercice && exercice.id !== props.trainingExercice.exercice_id)
  return exercicesList as Exercice[]
})

const exercicesExceptRecommendedAndCurrent = computed(() => {
  return exercicesStore.exercices.filter(exercice => {
    const recommendedExercices = props.trainingExercice.recommended_training_exercices
    const ids = recommendedExercices.map(trainingExercices => trainingExercices.exercice_id)
    return !ids.includes(exercice.id) && exercice.id !== props.trainingExercice.exercice_id
  })
})

const shouldShowRecommendedExercicePopin = computed(() => props.trainingExercice.recommended_training_exercices.length)

const isSuperset = computed(() => props.supersetDown || props.supersetUp)

function toggleIsDone() {
  const newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(props.trainingExercice))
  newTrainingExercice.is_done = !newTrainingExercice.is_done
  programsStore.updateTrainingExercice(newTrainingExercice)
}

function toggleAddExercicePopin(isOpen: boolean) {
  isAddExercicePopinOpen.value = isOpen
  isRecommendedExercicedPopinOpen.value = !isOpen
}

function toggleRecommendedExercicesPopin(isOpen: boolean) {
  if (!isOpen) {
    isRecommendedExercicedPopinOpen.value = false
    isAddExercicePopinOpen.value = false
    return
  }
  isRecommendedExercicedPopinOpen.value = isOpen
  isAddExercicePopinOpen.value = !isOpen
}

function toggleExercicesPopin(isOpen: boolean) {
  if (shouldShowRecommendedExercicePopin.value) {
    toggleRecommendedExercicesPopin(isOpen)
    return
  }
  toggleAddExercicePopin(isOpen)
}

function handleDropdownOpen(isOpen: boolean) {
  if (isOpen) {
    confirmDelete.value = false
  }
}

function trainingExerciceOptions() {
  const isDeleting = confirmDelete.value
  return [
    [
      {
        label: 'Changer d\'exercice',
        icon: 'i-solar-refresh-outline',
        click: () => {
          toggleExercicesPopin(true)
        }
      }
    ],
    [
      {
        label: isDeleting ? 'Confirmer' : 'Supprimer',
        icon: 'i-heroicons-trash',
        iconClass: isDeleting ? 'text-red-400' : null,
        labelClass: isDeleting ? 'text-red-400' : null,
        click: (event: Event) => {
          event.preventDefault()
          if (confirmDelete.value) {
            const newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(props.trainingExercice))
            // Remove the associated exercice, not the entire trainingExercice
            newTrainingExercice.exercice_id = null
            programsStore.updateTrainingExercice(newTrainingExercice)
            return
          }
          confirmDelete.value = true
        }
      },
    ]
  ]
}
</script>

<template>
  <div class="c-accordion" :class="{ 'c-accordion--top-radiusless': supersetUp, 'c-accordion--bottom-radiusless': supersetDown }">
    <div v-if="!exerciceAssociated" class="c-accordion__container">
      <div
        class="c-accordion-heading"
      >
        <div class="c-accordion-heading__content">
          <div class="c-accordion-heading__left">
            <span class="text-sm">Exercice {{ trainingIndex + 1 }}</span>
          </div>
          <div class="c-accordion-heading__trailing">
            <UButton
              icon="i-heroicons-plus-circle"
              @click="toggleExercicesPopin(true)"
            >Ajouter</UButton>
          </div>
        </div>
      </div>
    </div>
    <UAccordion v-else :items="[props.trainingExercice]" :ui="{ container: 'c-accordion__container', item: { padding: 'p-0' } }">
      <template #default="{ item, index, open }">
        <UButton
          color="gray"
          variant="ghost"
          class="c-accordion-heading"
          :class="{
            'c-accordion-heading--active': open,
            'c-accordion-heading--check': item.is_done
          }"
          :ui="{}">
          <template #leading>
            <div @click.stop="toggleIsDone" class="c-accordion__leading p-3">
              <UCheckbox color="primary" :model-value="item.is_done" :ui="{}" />
            </div>
          </template>
          <div class="c-accordion-heading__content">
            <div class="c-accordion-heading__left">
              <span>{{ trainingIndex + 1 }}. {{ exerciceAssociated.name }}</span>
            </div>
            <div class="c-accordion-heading__trailing">
              <UBadge v-if="isSuperset" color="white" variant="solid" size="xs">Superset</UBadge>
              <UDropdown
                @click.prevent.stop
                :ui="{  padding: 'border-solid', item: { base: 'border-solid' } }"
                :items="trainingExerciceOptions()"
                :popper="{ placement: 'bottom-start' }"
                @update:open="handleDropdownOpen"
              >
                <UButton
                  class="setitem__options mx-2"
                  icon="i-solar-menu-dots-bold"
                  size="sm"
                  color="gray"
                  variant="soft"
                >
                </UButton>
              </UDropdown>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="c-accordion-heading__chevron"
              />
            </div>
          </div>
        </UButton>
      </template>
      <template #item="{ item }">
        <set-item
          v-for="programSet in item.sets"
          :key="programSet.id"
          :program-set="programSet"
          :training-exercice="item"
        ></set-item>
        <UButton
          @click="isEditionSetPopinOpen = true"
          icon="i-heroicons-pencil-square"
          variant="soft"
          label="Créer une série"
          class="mt-3 mb-6 mx-3"
          :trailing="false"
          :color="item.is_done ? 'white' : 'primary'"
          :disabled="item.is_done"
        />
      </template>
    </UAccordion>

    <edition-set-popin
      v-model="isEditionSetPopinOpen"
      :training-exercice="props.trainingExercice"
      :is-edition="false"
    ></edition-set-popin>
    
    <!-- recommendation exercices popin -->
    <add-exercice-popin
      @update:model-value="toggleRecommendedExercicesPopin"
      :model-value="isRecommendedExercicedPopinOpen"
      :training-exercice="props.trainingExercice"
      :is-recommendation="true"
      :exercices-list="recommendedExercices"

    >
      <div class="flex justify-center">
        <UButton
          variant="ghost"
          icon="i-heroicons-plus"
          @click="toggleAddExercicePopin(true)"
        >Choisir un autre exercice</UButton>
      </div>
    </add-exercice-popin>
    <!-- Custom add exercice popin -->
    <add-exercice-popin
      @update:model-value="toggleRecommendedExercicesPopin"
      :model-value="isAddExercicePopinOpen"
      :training-exercice="props.trainingExercice"
      :exercices-list="exercicesExceptRecommendedAndCurrent"
    >
      <template #header-action v-if="shouldShowRecommendedExercicePopin">
        <UButton
          type="button"
          icon="i-heroicons-arrow-left"
          class="mb-5"
          variant="soft"
          @click="toggleAddExercicePopin(false)"
        >Retour</UButton>
      </template>
      <template #footer-action v-if="shouldShowRecommendedExercicePopin">
        <UButton
          type="button"
          icon="i-heroicons-arrow-left"
          class="mr-3"
          variant="soft"
          @click="toggleAddExercicePopin(false)"
        >Retour</UButton>
      </template>
    </add-exercice-popin>
  </div>
</template>

<style lang="scss" scoped>
</style>

