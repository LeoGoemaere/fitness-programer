import { defineStore } from 'pinia';
import { type Exercice } from '~/types/Exercice.interface'
import { type TagExercice } from '~/types/TagExercice.interface'

import coreExercices from '~/datas/exercices/coreExercices'

export const useExercicesStore = defineStore('exercicesStore', () => {
  const exercices: Ref<Exercice[]> = ref(coreExercices);
  const exerciceTags: Ref<TagExercice[]> = ref([]);

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
  
  function updateExerciceTag(tag: TagExercice) {
    const exerciceTagIndex = exerciceTags.value.findIndex(element => element.id === tag.id)
    if (exerciceTagIndex >= 0) {
      exerciceTags.value[exerciceTagIndex] = tag
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
    updateExerciceTag,
    removeExerciceTag
  };
});
