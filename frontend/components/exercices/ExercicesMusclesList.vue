<script setup lang="ts">
import coreMuscles from '~/datas/muscles/coreMuscles'

import abs from '~/assets/images/muscles/abs.png'
import back from '~/assets/images/muscles/back.png'
import calves from '~/assets/images/muscles/calves.png'
import chest from '~/assets/images/muscles/chest.png'
import forearms from '~/assets/images/muscles/forearms.png'
import glutes from '~/assets/images/muscles/glutes.png'
import shoulders from '~/assets/images/muscles/shoulders.png'
import triceps from '~/assets/images/muscles/triceps.png'
import biceps from '~/assets/images/muscles/biceps.png'
import quads from '~/assets/images/muscles/quads.png'
import trapezius from '~/assets/images/muscles/trapezius.png'
import neck from '~/assets/images/muscles/neck.png'
import hamstrings from '~/assets/images/muscles/hamstrings.png'
import abductors from '~/assets/images/muscles/abductors.png'
import adductors from '~/assets/images/muscles/adductors.png'
import lumbars from '~/assets/images/muscles/lumbars.png'

const { t } = useI18n()

const muscleListSorts = coreMuscles.sort((a, b) => t(`muscles.${a}`).localeCompare(t(`muscles.${b}`)))
const listItems = computed(() => [ 'All', ...muscleListSorts ])

const activeLv1Index = ref(-1)

function toggleLayer({ lv1Index }: { lv1Index: number }) {
  activeLv1Index.value = activeLv1Index.value === lv1Index ? -1 : lv1Index
}

// TODO: Optimize images + lazyload ?
function getMuscleImage(muscleName: string) {
  switch (muscleName.toLocaleLowerCase()) {
    case 'abs':
      return abs
    case 'back':
      return back
    case 'calves':
      return calves
    case 'chest':
      return chest
    case 'forearms':
      return forearms
    case 'glutes':
      return glutes
    case 'lumbars':
      return lumbars
    case 'shoulders':
      return shoulders
    case 'triceps':
      return triceps
    case 'biceps':
      return biceps
    case 'quads':
      return quads
    case 'trapezius':
      return trapezius
    case 'neck':
      return neck
    case 'adductors':
      return adductors
    case 'abductors':
      return abductors
    case 'hamstrings':
      return hamstrings
  }
}

const isPopinOpen = ref(false)

const createOptions = [
  [
    {
      label: 'Create Exercice',
      icon: 'i-solar-dumbbell-large-minimalistic-linear',
      click: () => {
        console.log('Edit')
        isPopinOpen.value = true
      }
    },
    {
      label: 'Create Tag',
      icon: 'i-heroicons-tag',
      click: () => {
        console.log('Edit')
        isPopinOpen.value = true
      }
    },
  ]
]
</script>

<template>
  <div class="muscles-list">
    <div class="muscles-list__heading">
      <UDropdown :items="createOptions" :popper="{ placement: 'bottom-start' }">
        <UButton
          icon="i-heroicons-plus-circle"
          color="primary"
          :ui="{ rounded: 'rounded-full' }"
          size="xl"
          variant="ghost"
          :padded="false"
        >
        </UButton>
      </UDropdown>
    </div>
    <nav class="muscles-list__nav">
      <ul class="muscles-list__list">
        <ListItemLv1
          v-for="(muscle, lv1Index) in listItems"
          :key="muscle"
          :label="$t(`muscles.${muscle}`)"
          :img-url="getMuscleImage(muscle)"
          :selected="activeLv1Index === lv1Index"
          @change="toggleLayer({ lv1Index })"
          class="muscles-list__item"
          :class="{ 'muscles-list__item--all': muscle === 'All' }"
        >
          <template #action>
            <UButton
              @click=""
              size="xl"
              color="primary"
              variant="link"
              label="Create"
              :trailing="false"
              :padded="false"
            />
          </template>
          <ExercicesList :muscle="muscle"></ExercicesList>
        </ListItemLv1>
      </ul>
    </nav>
    <EditionExercicePopin v-model="isPopinOpen"></EditionExercicePopin>
  </div>
</template>

<style lang="scss" scoped>
.list {

}

.muscles-list {
  font-size: 14px;
}

.muscle-list__create {
}

.muscles-list__heading {
  display: flex;
  justify-content: end;
  margin-bottom: var(--page-spacing-y);
}

.muscles-list__item--all {
  padding: 15px 0;
}

</style>