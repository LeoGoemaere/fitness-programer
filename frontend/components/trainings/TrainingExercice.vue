<script setup lang="ts">
import type { ProgramTrainingExercice } from '~/types/Program.interface';

const exercicesStore = useExercicesStore()
const programsStore = useProgramsStore();

interface Props {
  trainingExercice: ProgramTrainingExercice
  trainingIndex: number // Avoid to calcul it
  supersetUp?: boolean
  supersetDown?: boolean
}

const isEditionSetPopinOpen = ref(false)
const isAddExercicePopinOpen = ref(false)
const exerciceAssociated = computed(() => exercicesStore.exercices.find(exerciceEl => exerciceEl.id === props.trainingExercice.exercice_id))

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  supersetUp: false,
  supersetDown: false,
});

function toggleIsDone() {
  const newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(props.trainingExercice))
  newTrainingExercice.is_done = !newTrainingExercice.is_done
  programsStore.updateTrainingExercice(newTrainingExercice)
}

function openAddExercicePopin() {
  isAddExercicePopinOpen.value = true
}

const confirmDelete = ref(false)

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
          openAddExercicePopin()
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
              size="xs"
              @click="openAddExercicePopin"
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
              <span>{{ index + 1 }}. {{ exerciceAssociated.name }}</span>
            </div>
            <div class="c-accordion-heading__trailing">
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
                  size="2xs"
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
          size="sm"
          variant="soft"
          label="Créer une série"
          class="m-3"
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
    <add-exercice-popin
      v-model="isAddExercicePopinOpen"
      :training-exercice="props.trainingExercice"
    ></add-exercice-popin>
  </div>
</template>

<style lang="scss" scoped>
</style>

