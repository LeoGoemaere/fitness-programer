import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { Exercice } from "~/types/Exercice.interface";
import { RepetitionValues, type ProgramSet, type ProgramTrainingExercice } from "~/types/Program.interface"
import { SetTypeEnum } from "~/types/SetTypeEnum"

// TODO: Create tests for the compute methods

export function useExerciceSet() {
  function getEmptySet(): ProgramSet {
    return {
      id: crypto.randomUUID(),
      type: SetTypeEnum.Custom,
      repetitions: 1,
      weight: null,
      exercice_max_weight_percentage: null,
      personal_record: false,
      is_done: false,
      displayable_set_information: {
        id: crypto.randomUUID(),
        type: DisplayableSetInformationTypeEnum.Label,
        value: null
      }
    }
  }

  function isRepetitionsValid(value: ProgramSet['repetitions']) {
    // Accept "xx-xx" or "amrap"
    if (typeof value === 'string') {
      const pattern = /^(\d+|\d+-\d+|amrap)$/i;
      return pattern.test(value);
    }
    return Number.isInteger(value)
  }

  function _computeJokerSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet, exerciceAssociated?: Exercice) {
    const currentSetIndex = trainingExercice.sets.findIndex(set => set.id === currentSet.id)
    const isNewSet = currentSetIndex === -1
    // If it's a new set, then the previous set is the last set
    const lastSet = trainingExercice.sets[trainingExercice.sets.length - 1]
    const previousSet = isNewSet ? lastSet : trainingExercice.sets[currentSetIndex - 1]
    if (previousSet) {
      const computeSet = getEmptySet()
      computeSet.id = currentSet.id
      // Use the compute previous set values
      const computedPreviousSet = getComputedSet(trainingExercice, previousSet, exerciceAssociated)
      if (typeof computedPreviousSet?.weight === 'number') {
        // Round off to a quarter
        const newWeight = roundValue(computedPreviousSet.weight + ((computedPreviousSet.weight * 5) / 100), 4)
        computeSet.weight = newWeight
      }
      computeSet.type = SetTypeEnum.Joker
      computeSet.repetitions = computedPreviousSet.repetitions
      computeSet.displayable_set_information.type = DisplayableSetInformationTypeEnum.Label
      computeSet.displayable_set_information.value = SetTypeEnum.Joker
      return computeSet
    }
    return null
  }

  function _computeFSLSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet, exerciceAssociated?: Exercice) {
    const currentSetIndex = trainingExercice.sets.findIndex(set => set.id === currentSet.id)
    const isCurrentSetFirst = currentSetIndex === 0
    const firstSet = trainingExercice.sets[0]
    // FSL set can't be the first
    if (firstSet && !isCurrentSetFirst) {
      const computeSet = getEmptySet()
      // Use the compute first set values
      const computedFirstSet = getComputedSet(trainingExercice, firstSet, exerciceAssociated)
      computeSet.id = currentSet.id
      computeSet.weight = computedFirstSet.weight
      computeSet.repetitions = RepetitionValues.Amrap
      computeSet.type = SetTypeEnum.FSL
      computeSet.displayable_set_information.type = DisplayableSetInformationTypeEnum.Label
      computeSet.displayable_set_information.value = SetTypeEnum.FSL
      return computeSet
    }
    return null
  }
  
  function _computeMaxSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet, exerciceAssociated?: Exercice) {
    if (exerciceAssociated) {
      const computeSet = getEmptySet()
      
      // Set the exercice max (RM or TM)
      let exerciceMax: Exercice['RM'] | Exercice['TM'] = exerciceAssociated.TM
      if (currentSet.type === SetTypeEnum.RM) {
        exerciceMax = exerciceAssociated.RM
      }

      computeSet.id = currentSet.id
      computeSet.weight = 0
      if (currentSet.exercice_max_weight_percentage) {
        computeSet.weight = currentSet.exercice_max_weight_percentage * exerciceMax
        const RmPercentageComputed = currentSet.exercice_max_weight_percentage * 100
        computeSet.displayable_set_information.value = `${RmPercentageComputed} % ${currentSet.type}`
      }
      computeSet.repetitions = currentSet.repetitions
      computeSet.type = currentSet.type
      computeSet.exercice_max_weight_percentage = currentSet.exercice_max_weight_percentage
      computeSet.displayable_set_information.type = DisplayableSetInformationTypeEnum.Label
      return computeSet
    }
    return null
  }

  function getComputedSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet, exerciceAssociated?: Exercice) {
    switch (currentSet.type) {
      case SetTypeEnum.Joker: {
        const jokerSet = _computeJokerSet(trainingExercice, currentSet, exerciceAssociated)
        return jokerSet || currentSet
      }
      case SetTypeEnum.FSL: {
        const FSLSet = _computeFSLSet(trainingExercice, currentSet, exerciceAssociated)
        return FSLSet || currentSet
      }
      case SetTypeEnum.RM:
      case SetTypeEnum.TM: {
        const maxSet = _computeMaxSet(trainingExercice, currentSet, exerciceAssociated)
        return maxSet || currentSet
      }
    }
    // Nothing to handle
    return currentSet
  }

  function isFirstSetTypeValid(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet) {
    const currentSetIndex = trainingExercice.sets.findIndex(set => set.id === currentSet.id)
    switch (currentSet.type) {
      case SetTypeEnum.Joker:
      case SetTypeEnum.FSL:
        return currentSetIndex !== 0
      default:
      return true
    }
  }

  return {
    getEmptySet,
    isRepetitionsValid,
    getComputedSet,
    isFirstSetTypeValid
  }
}