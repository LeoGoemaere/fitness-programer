import type { ProgramTrainingExercice } from "~/types/Program.interface"

export function useTrainingExercice() {
  function getEmptyTrainingExercice(): ProgramTrainingExercice {
    return {
      id: crypto.randomUUID(),
      exercice_id: null,
      alternative_exercice_ids: [],
      superset_exercice_ids: [],
      is_done: false,
      sets: []
    }
  }

  return {
    getEmptyTrainingExercice
  }
}