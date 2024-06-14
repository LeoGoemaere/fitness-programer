import { defineStore } from 'pinia';
import { type Exercice } from '~/types/Exercice.interface'
import { type TagExercice } from '~/types/TagExercice.interface'

import coreExercices from '~/datas/exercices/coreExercices'

export const useExercicesStore = defineStore('exercicesStore', () => {
  const fakeTags = [
    {
      id: 'id-531',
      name: '531'
    },
    {
      id: 'id-gzcl',
      name: 'GZCL'
    },
  ]
  const exercices: Ref<Exercice[]> = ref(coreExercices);
  const exerciceTags: Ref<TagExercice[]> = ref([...fakeTags]);

  function updateExercice(exercice: Exercice) {
    const exerciceIndex = exercices.value.findIndex(exerciceElement => exerciceElement.id === exercice.id)
    if (exerciceIndex >= 0) {
      exercices.value[exerciceIndex] = exercice
    }
  }

  function addExercice(exercice: Exercice) {
    const isExerciceExist = exercices.value.some(exerciceElement => exerciceElement.id === exercice.id)
    if (!isExerciceExist) {
      exercices.value.push(exercice)
    }
  }

  function addExerciceTag(tag: TagExercice) {
    const existingTag = exerciceTags.value.find(element => element.id === tag.id)
    if (!existingTag) {
      exerciceTags.value.push(tag)
    }
  }
  
  function removeExerciceTag(tag: TagExercice) {
    exerciceTags.value = exerciceTags.value.filter(element => element.id !== tag.id)
  }

  return {
    exercices,
    exerciceTags,
    updateExercice,
    addExercice,
    addExerciceTag,
    removeExerciceTag
  };
});
