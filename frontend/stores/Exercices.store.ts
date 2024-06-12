import { defineStore } from 'pinia';
import { type Exercice } from '~/types/Exercice.interface'

import coreExercices from '~/datas/exercices/coreExercices'

export const useExercicesStore = defineStore('exercicesStore', () => {
  const exercices: Ref<Exercice[]> = ref(coreExercices);

  function updateExercice(exercice: Exercice) {
    const exerciceIndex = exercices.value.findIndex(exerciceElement => exerciceElement.id === exercice.id)
    if (exerciceIndex >= 0) {
      exercices.value[exerciceIndex] = exercice
    }
  }

  return {
    exercices,
    updateExercice
  };
});
