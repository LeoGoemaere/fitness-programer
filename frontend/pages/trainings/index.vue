<script setup lang="ts">
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
</script>

<template>
  <div>
    <h1>Training</h1>
    <div>
      <training-selector
        :items="trainings"
        v-model="currentTraining"
      ></training-selector>

      <training-exercice :is-superset="isSuperset" :color1="isSuperset ? 'orange' : null"></training-exercice>
      <superset-divider v-model="isSuperset" color="orange"></superset-divider>
      <training-exercice :is-superset="isSuperset || isSuperset2" :color1="isSuperset ? 'orange' : null" :color2="isSuperset2 ? 'blue' : null"></training-exercice>
      <superset-divider v-model="isSuperset2" color="blue"></superset-divider>
      <training-exercice :is-superset="isSuperset2 || isSuperset3" :color1="isSuperset2 ? 'blue' : null" :color2="isSuperset3 ? 'green' : null"></training-exercice>
      <superset-divider v-model="isSuperset3" color="green"></superset-divider>
      <training-exercice :is-superset="isSuperset3" color1="green"></training-exercice>
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>
