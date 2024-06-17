<script setup lang="ts">
import type { Exercice } from '~/types/Exercice.interface';

const exercicesStore = useExercicesStore();

interface Props {
  muscle: string
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});

const exercicesListByMuscle = computed(() => {
  if (props.muscle === 'All') {
    return exercicesStore.exercices
  }
  return exercicesStore.exercices.filter(exercice => exercice.primary_muscle === props.muscle)
})

const openIndex = ref(-1)
const confirmDelete = ref(false)

function handleDropdownOpen(isOpen: boolean, index: number) {
  if (isOpen) {
    openIndex.value = index
    confirmDelete.value = false
  }
}

function exerciceOptions(exercice: Exercice, index: number) {
  const isDeleting = confirmDelete.value && (openIndex.value === index)
  return [
    [
      {
        label: isDeleting ? 'Confirmer' : 'Supprimer',
        icon: 'i-heroicons-trash',
        iconClass: isDeleting ? 'text-red-400' : null,
        labelClass: isDeleting ? 'text-red-400' : null,
        click: (event: Event) => {
          event.preventDefault()
          if (confirmDelete.value) {
            exercicesStore.removeExercice(exercice)
            return
          }
          confirmDelete.value = true
        }
      }
    ]
  ]
}
</script>

<template>
  <div>
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
                <UChip position="top-left" size="xl" :text="item.reference_max_progression" color="primary">
                  <UButton color="primary" size="2xs" variant="soft" icon="i-heroicons-plus-circle">
                    {{ item.weight_progression }}kg
                  </UButton>
                </UChip>
                <UDropdown
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

          <exercice-max :exercice="item" @updated="exercicesStore.updateExercice"></exercice-max>

          <div class="mt-3">
            <p class="mb-1">Muscles</p>
            <UBadge :ui="{ rounded: 'rounded-full' }" :label="$t(`muscles.${item.primary_muscle}`)" color="white" />
          </div>

          <exercice-tags class="mt-3" title="Tags" :tags="exercicesStore.getTagFromExercice(item)"></exercice-tags>
        </template>
      </UAccordion>
    </div>
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

</style>