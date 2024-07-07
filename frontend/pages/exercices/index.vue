<script setup lang="ts">
import coreExercices from '~/datas/exercices/coreExercices'

const {
  addExercices
} = useExercice()

async function syncExercices() {
  // TODO: Try / catch
  await addExercices(coreExercices)
}
</script>

<template>
  <div class="exercices-page">
    <app-header
      title="Exercices"
    ></app-header>
    <UButton @click="syncExercices">Sync exercices</UButton>
    <ExercicesMusclesList></ExercicesMusclesList>
  </div>
</template>

<style lang="scss" scoped>
.exercices-page {
  height: 100%;
}
</style>