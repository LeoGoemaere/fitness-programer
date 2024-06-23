import type { ProgramSet, ProgramTrainingExercice } from "~/types/Program.interface"
import { SetTypeEnum } from "~/types/SetTypeEnum"

export function useExerciceSet() {
  function getEmptySet(): ProgramSet {
    return {
      id: crypto.randomUUID(),
      type: SetTypeEnum.Custom,
      repetitions: 0,
      weight: null,
      exercice_max_weight_percentage: null,
      personal_record: false,
      is_done: false,
      displayable_set_information: null
    }
  }

  function isRepetitionsValid(value: ProgramSet['repetitions']) {
    if (typeof value === 'string') {
      const pattern = /^(\d+|\d+-\d+)$/;
      return pattern.test(value);
    }
    return Number.isInteger(value)
  }

  return {
    getEmptySet,
    isRepetitionsValid
  }
}