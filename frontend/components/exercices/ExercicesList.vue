<script setup lang="ts">
import { type Exercice, MaxType } from '~/types/Exercice.interface';
import { getMaxColor, updateExerciceMax, getEmptyExercice } from '~/composables/exerciceComposable';
import { roundValue } from '~/utils/utils';

const exercicesStore = useExercicesStore();
const programsStore = useProgramsStore();
const toast = useToast()
const { t } = useI18n()

interface Props {
  muscle: string
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});

const isCreationExercicePopinOpen = ref(false)
const editingExercice: Ref<Exercice | null> = ref(null)
const isEditionExercice = ref(false)
const openIndex = ref(-1)
const confirmDelete = ref(false)
const openMaxPopoverIndex = ref(-1)

const exercicesListByMuscle = computed(() => {
  if (props.muscle === 'All') {
    return exercicesStore.exercices
  }
  return exercicesStore.exercices.filter(exercice => exercice.primary_muscle === props.muscle)
})

function handleDropdownOpen(isOpen: boolean, index: number) {
  if (isOpen) {
    openIndex.value = index
    confirmDelete.value = false
    return
  }
}


function handlePopoverMaxOpen(isOpen: boolean, index: number) {
  if (isOpen) {
    openMaxPopoverIndex.value = index
  }
}

function editExercice(exercice: Exercice, isEdition: boolean) {
  editingExercice.value = exercice
  isCreationExercicePopinOpen.value = true
  isEditionExercice.value = isEdition
}

function shouldDisplayMaxProgression(exercice: Exercice) {
  return !!exercice.weight_progression
}

function incrementMax(exercice: Exercice) {
  switch (exercice.reference_max_progression) {
    case MaxType.tm: {
      const newTm = roundValue(exercice.TM + exercice.weight_progression)
      const newExercice = updateExerciceMax(MaxType.tm, newTm, exercice, programsStore.currentProgram?.tm_percentage)
      exercicesStore.updateExercice(newExercice)
      break;
    }
    case MaxType.rm: {
      const newRm = roundValue(exercice.RM + exercice.weight_progression)
      const newExercice = updateExerciceMax(MaxType.rm, newRm, exercice, programsStore.currentProgram?.tm_percentage)
      exercicesStore.updateExercice(newExercice)
      break;
    }
  }
  toast.add({
    title: `Le ${exercice.reference_max_progression} de l'exercice ${exercice.name} à été augmenté de ${exercice.weight_progression}kg.`,
    timeout: 3000
  })
  openMaxPopoverIndex.value = -1
}

function emptyStateActions() {
  const exercice = getEmptyExercice()
  if (props.muscle !== 'All') {
    exercice.primary_muscle = props.muscle
  }
  return [
    {
      variant: 'solid',
      color: 'primary',
      label: 'Créer un exercice',
      icon: 'i-heroicons-plus-circle',
      click: () => {
        editExercice(exercice, false)
      }
    }
  ]
}

function exerciceOptions(exercice: Exercice, index: number) {
  const isDeleting = confirmDelete.value && (openIndex.value === index)
  return [
    [
      {
        label: 'Editer',
        icon: 'i-heroicons-pencil-square',
        click: () => {
          editExercice(exercice, true)
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
          if (confirmDelete.value) {
            exercicesStore.removeExercice(exercice)
            return
          }
          event.preventDefault()
          confirmDelete.value = true
        }
      }
    ]
  ]
}

const emptyExerciceLabel = computed(() => {
  const muscleName = t(`muscles.${props.muscle}`)
  if (props.muscle === 'All') {
    return 'Aucun exercice'
  }
  return `Aucun exercice <b class="font-bold">"${muscleName}"</b>`
})

watch(() => isCreationExercicePopinOpen.value, (value) => {
  // If the popin is closed, then reset the editing exercice
  if (!value) {
    editingExercice.value = null
    isEditionExercice.value = false
  }
})
</script>

<template>
  <div>
    <!-- No exercice view -->
    <template v-if="!exercicesListByMuscle.length">
      <UAlert
        :ui="{ actions: 'justify-center' }"
        class="exo-list__empty-state"
        :actions="emptyStateActions()"
      >
        <template #description>
          <p v-html="emptyExerciceLabel"></p>
        </template>
      </UAlert>
    </template>
    <!-- has exercices -->
    <template v-else>
      <ExercicesSearch></ExercicesSearch>
      <p class="exo-list__title">Exercices</p>
      <div class="c-accordion">
        <UAccordion :items="exercicesListByMuscle" :ui="{ container: 'c-accordion__container mb-3', item: { padding: 'p-2', size: '' } }">
          <template #default="{ item, index, open }">
            <UButton color="gray" variant="ghost" class="c-accordion-heading" :class="{ 'c-accordion-heading--active': open }" :ui="{}">
              <!-- <template #leading>
                <div class="c-accordion__leading">
                  <div class="exercice-image"></div>
                </div>
              </template> -->
              <div class="c-accordion-heading__content truncate p-3">
                <div class="c-accordion-heading__left">
                  <span>{{ item.name }}</span>
                </div>
                <div class="c-accordion-heading__trailing">
                  <UPopover
                    v-if="shouldDisplayMaxProgression(item)"
                    :popper="{ arrow: true }"
                    @update:open="handlePopoverMaxOpen($event, index)"
                    :open="openMaxPopoverIndex === index"
                  >
                    <UChip position="top-left" size="xl" :text="item.reference_max_progression" :color="getMaxColor(item)">
                      <UButton size="2xs" variant="soft" icon="i-heroicons-plus-circle" :color="getMaxColor(item)">
                        {{ item.weight_progression }}kg
                      </UButton>
                    </UChip>

                    <template #panel>
                      <div class="py-2 px-4 exo-list__popover">
                        <p>Augmenter de {{ item.weight_progression }}kg le {{ item.reference_max_progression }}.</p>
                        <UButton @click.stop.prevent="incrementMax(item)" class="mt-2" size="2xs" variant="outline" :color="getMaxColor(item)">
                          Confirmer
                        </UButton>
                      </div>
                    </template>
                  </UPopover>
                  <UDropdown
                    @click.prevent.stop
                    :ui="{  padding: 'border-solid', item: { base: 'border-solid' } }"
                    @update:open="handleDropdownOpen($event, index)"
                    :items="exerciceOptions(item, index)"
                  >
                    <UButton class="ml-2" size="2xs" color="gray" icon="i-solar-menu-dots-bold" variant="soft" />
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

            <div class="mb-3">
              <p class="mb-1">Muscles</p>
              <UBadge :ui="{ rounded: 'rounded-full' }" :label="$t(`muscles.${item.primary_muscle}`)" color="white" />
            </div>

            <exercice-max :exercice="item" @updated="exercicesStore.updateExercice"></exercice-max>

            <exercice-tags class="mt-3" title="Tags" :tags="exercicesStore.getTagFromExercice(item)"></exercice-tags>
          </template>
        </UAccordion>
      </div>
    </template>
    <EditionExercicePopin v-model="isCreationExercicePopinOpen" :exercice="editingExercice" :is-edition="isEditionExercice"></EditionExercicePopin>
  </div>
</template>

<style lang="scss" scoped>

.exercice-image {
  width: 50px;
  height: 100%;
  background-color:rgb(137, 143, 161);
}

.exo-list__title {
  margin-bottom: 10px;
}

.exo-list__popover {
}

.exo-list__empty-state {
  box-shadow: none;
  text-align: center;
}

</style>