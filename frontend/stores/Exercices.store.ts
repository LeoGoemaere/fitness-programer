import { defineStore } from 'pinia';
import { type Exercice } from '~/types/Exercice.interface'

import coreExercices from '~/datas/exercices/coreExercices'

export const useExercicesStore = defineStore('exercicesStore', () => {
  const exercices: Ref<Exercice[]> = ref(coreExercices);

  return {
    exercices
  };
});
