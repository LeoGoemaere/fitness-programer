import { defineStore } from 'pinia';
import { type Exercice } from '~/types/Exercice.interface'
import { type Tag } from '~/types/Tag.interface'

import coreExercices from '~/datas/exercices/coreExercices'

// TODO: Créer un store exercicesTags (BDD pivot) pour pouvoir delete / ajout de tag
const arr = [
  {
    tagId: 'id-tag',
    exericeId: 'exercice-id'
  },
]

export const useExercicesStore = defineStore('exercicesStore', () => {
  const exercices: Ref<Exercice[]> = ref(coreExercices);
  const exerciceTags: Ref<Tag[]> = ref([]);

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

  function addExerciceTag(tag: Tag) {
    const existingTag = exerciceTags.value.find(element => element.id === tag.id)
    if (!existingTag) {
      exerciceTags.value.push(tag)
    }
  }
  
  function updateExerciceTag(tag: Tag) {
    const exerciceTagIndex = exerciceTags.value.findIndex(element => element.id === tag.id)
    if (exerciceTagIndex >= 0) {
      exerciceTags.value[exerciceTagIndex] = tag
    }
  }
  
  function removeExerciceTag(tag: Tag) {
    exerciceTags.value = exerciceTags.value.filter(element => element.id !== tag.id)

    // Delete ids from exercice using the tag
    const exercicesUsingTag = exercices.value.filter(exercice => exercice.tag_ids.includes(tag.id))
    exercicesUsingTag.forEach(exercice => {
      const newExercice: Exercice = JSON.parse(JSON.stringify(exercice))
      newExercice.tag_ids = newExercice.tag_ids.filter(tagId => tagId !== tag.id)
      updateExercice(newExercice)
    });
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
