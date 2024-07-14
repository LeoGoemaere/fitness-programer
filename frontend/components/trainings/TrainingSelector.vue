<script setup lang="ts">
import { type ProgramTraining } from '~/types/Program.interface'

const programsStore = useProgramsStore();

function updateTraining(trainingId: string) {
  programsStore.setSelectedTrainingId(trainingId)
}

function isAllExercicesDoneForTraining(training?: ProgramTraining | null) {
  const trainingExercices = training?.training_exercices
  if (trainingExercices && trainingExercices.length) {
    return trainingExercices.every(trainingExercice => trainingExercice.is_done)
  }
  return false
}

const selectedTraining = computed(() => programsStore.currentTraining)
</script>

<template>
  <div
    v-if="programsStore.currentWeek"
    class="training-selector mb-5 mx-auto">
    <USelectMenu
      @update:modelValue="updateTraining"
      :modelValue="selectedTraining?.id"
      :options="programsStore.currentWeek.trainings"
      option-attribute="name"
      value-attribute="id"
      :uiMenu="{
        option: {
          padding: 'p-0 w-full',
          container: 'w-full',
          color: 'bg-transparent',
          selected: 'p-0',
          selectedIcon: {
            base: 'hidden'
          }
        }
      }"
    >
      <template #option="{ option, selected }">
        <div
          class="training-selector__option px-1.5 py-3"
          :class="{
            'training-selector__option--selected': selected,
            'training-selector__option--checked': isAllExercicesDoneForTraining(option)
          }"
        >
          <div class="option__left">
            {{ option.name }}
          </div>
          <div class="option__right">
            <template v-if="isAllExercicesDoneForTraining(option)">
              <span class="mr-3">Terminé</span>
              <UIcon name="i-solar-check-circle-outline" />
            </template>
            <template v-else-if="selected">
              <span class="mr-3">En cours</span>
              <UIcon name="i-solar-dumbbell-large-minimalistic-linear" />
            </template>
          </div>
        </div>
      </template>
      <template #default>
        <UButton
          :color="isAllExercicesDoneForTraining(selectedTraining) ? 'primary' : 'gray'"
          variant="outline"
          class="training-selector__label"
          size="xl"
          :ui="{ rounded: 'rounded-full' }"
        >
          <div class="flex items-center mx-auto">
            <UIcon v-if="isAllExercicesDoneForTraining(selectedTraining)" class="mr-1" name="i-solar-check-circle-outline" />
            <UIcon v-else class="mr-1" name="i-solar-dumbbell-large-minimalistic-linear" />
            {{ selectedTraining?.name }}
          </div>
          <div class="flex items-center">
            <UIcon name="i-heroicons-chevron-down-20-solid" />
          </div>
        </UButton>
      </template>
    </USelectMenu>
  </div>
</template>

<style lang="scss" scoped>
.training-selector {
  max-width: 220px;
}
.training-selector__option {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
}
.training-selector__option--checked {
  color: rgb(var(--color-primary-500));
}
.training-selector__option--selected {
  background-color: rgb(var(--color-gray-100));
  &.training-selector__option--checked {
    background-color: rgb(var(--color-primary-100));
    color: rgb(var(--color-primary-500));
  }
}

.option__right {
  display: flex;
  align-items: center;
}

.training-selector__label {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>

