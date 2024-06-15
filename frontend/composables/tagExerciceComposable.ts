import type { TagExercice } from "~/types/TagExercice.interface"

function getEmptyTagExercice(): TagExercice {
  return {
    id: crypto.randomUUID(),
    name: '',
    color: '#000000'
  }
}

export {
  getEmptyTagExercice
}