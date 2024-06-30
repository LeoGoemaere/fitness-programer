<script setup lang="ts">

const programsStore = useProgramsStore()
const supersetsStore = useSupersetsStore()

const trainingExerciceList = computed(() => programsStore.currentTraining.training_exercices)

function toggleSuperset(index: number) {
  const firstExercice = trainingExerciceList.value[index]
  const secondExercice = trainingExerciceList.value[index - 1]
  const supersets: [string, string] = [firstExercice.id, secondExercice.id]
  const supersetExercice = supersetsStore.getSupersetExercice(supersets)
  if (supersetExercice) {
    supersetsStore.deleteSupersetExercice(supersets)
  } else {
    supersetsStore.addSupersetExercice(supersets)
  }
}

function getSupersetValue(index: number) {
  if (index === 0 || index > trainingExerciceList.value.length - 1) {
    return false
  }
  const firstExercice = trainingExerciceList.value[index]
  const secondExercice = trainingExerciceList.value[index - 1]
  const supersets: [string, string] = [firstExercice.id, secondExercice.id]
  const supersetExercice = supersetsStore.getSupersetExercice(supersets)
  return !!supersetExercice
}
</script>

<template>
  <div>
    <app-header
      title="Training"
      context-label="Mercredi (pecs)"
    ></app-header>
    <div>
      <training-selector></training-selector>

      <template
        v-for="(trainingExercice, index) in trainingExerciceList"
        :key="trainingExercice.id"
      >
        <superset-divider
          v-if="index !== 0"
         @update:model-value="toggleSuperset(index)"
         :model-value="getSupersetValue(index)"
        ></superset-divider>
        <training-exercice
          :training-exercice="trainingExercice"
          :training-index="index"
          :superset-down="getSupersetValue(index + 1)"
          :superset-up="getSupersetValue(index)"
        ></training-exercice>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>
