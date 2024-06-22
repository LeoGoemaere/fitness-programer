import type { ProgramSet, ProgramTrainingExercice } from "~/types/Program.interface"

export function useExerciceSet() {
  function getEmptySet(): ProgramSet {
    return {
      id: crypto.randomUUID(),
      repetitions: 0,
      weight: null,
      exercice_max_weight_percentage: null,
      personal_record: false,
      is_done: false,
      displayable_set_information: null
    }
  }

  return {
    getEmptySet
  }
}