import { defineStore } from 'pinia';
import type { SupersetExercice } from '~/types/SupersetExercices.interface';

export const useSupersetsStore = defineStore('supersetsStore', () => {
  const supersetExercices: Ref<SupersetExercice[]> = ref([]);

  function addSupersetExercice(supersets: SupersetExercice) {
    const [firstExerciceId, secondExerciceId] = supersets
    if (firstExerciceId && secondExerciceId) {
      const existingSupersetExercice = supersetExercices.value.find(supersetExercice => 
        supersetExercice.includes(firstExerciceId) && supersetExercice.includes(secondExerciceId)
      )

      if (!existingSupersetExercice) {
        supersetExercices.value.push(supersets)
      }
    }
  }

  function deleteSupersetExercice(supersets: SupersetExercice) {
    const [firstExerciceId, secondExerciceId] = supersets
    supersetExercices.value = supersetExercices.value.filter(supersetExercice => !(supersetExercice.includes(firstExerciceId) && supersetExercice.includes(secondExerciceId)))
  }

  function getSupersetExercice(supersets: SupersetExercice) {
    const [firstExerciceId, secondExerciceId] = supersets
    return supersetExercices.value.find(supersetExercice => 
      supersetExercice.includes(firstExerciceId) && supersetExercice.includes(secondExerciceId)
    )
  }

  return {
    supersetExercices,
    addSupersetExercice,
    deleteSupersetExercice,
    getSupersetExercice
  };
});
