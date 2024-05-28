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
</script>

<template>
  <div>
    <h1>Training</h1>
    <div>
      <training-selector
        :items="trainings"
        v-model="currentTraining"
      ></training-selector>
      <sets-list></sets-list>
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>
