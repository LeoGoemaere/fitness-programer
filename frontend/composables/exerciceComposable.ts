import type { Exercice } from "~/types/Exercice.interface"
import type { TagExercice } from "~/types/TagExercice.interface"

function getEmptyExercice(): Partial<Exercice> {
  return {
    id: crypto.randomUUID(),
    name: '',
    primary_muscle: undefined,
    rm: 0,
    tm: 0,
    weight_progression: 0,
    reference_max_progression: 'rm',
    tag_ids: []
  }
}

export {
  getEmptyExercice
}