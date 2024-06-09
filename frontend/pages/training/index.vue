<script setup lang="ts">
// import { program_response_531 } from '~/datas/programs'
// Id obligatoire pour chaque training
const trainings = ref([
  { id: 1, label: 'Lundi', checked: true },
  { id: 2, label: 'Mardi', checked: true },
  { id: 3, label: 'Mercredi', checked: false },
  { id: 4, label: 'Jeudi', checked: false },
  { id: 5, label: 'Vendredi', checked: false }
])

const currentTraining = ref(trainings.value[0])
const isSuperset = ref(false)
const isSuperset2 = ref(false)
const isSuperset3 = ref(false)

const programsStore = useProgramsStore();


</script>

<template>
  <div>
    <app-header
      title="Training"
      context-label="Mercredi (pecs)"
    ></app-header>
    <div>
    <!-- current program: {{ programsStore.currentProgram }} -->
    <!-- current variation: {{ programsStore.currentVariation }} -->
    <!-- current template: {{ programsStore.currentTemplate }} -->
      <training-selector
        :items="trainings"
        v-model="currentTraining"
      ></training-selector>

      <training-exercice :superset-down="isSuperset"></training-exercice>
      <superset-divider v-model="isSuperset" color="orange"></superset-divider>
      <training-exercice :superset-up="isSuperset" :superset-down="isSuperset2"></training-exercice>
      <superset-divider v-model="isSuperset2" color="blue"></superset-divider>
      <training-exercice :superset-up="isSuperset2" :superset-down="isSuperset3"></training-exercice>
      <superset-divider v-model="isSuperset3" color="green"></superset-divider>
      <training-exercice :superset-up="isSuperset3"></training-exercice>
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>
