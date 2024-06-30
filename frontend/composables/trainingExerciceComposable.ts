import type { ProgramTrainingExercice } from "~/types/Program.interface"

export function useTrainingExercice() {
  function getEmptyTrainingExercice(): ProgramTrainingExercice {
    return {
      id: crypto.randomUUID(),
      exercice_id: null,
      recommended_training_exercices: [],
      superset_exercice_ids: [],
      is_done: false,
      sets: []
    }
  }

  return {
    getEmptyTrainingExercice
  }
}