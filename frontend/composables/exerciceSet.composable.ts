import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { ProgramSet, ProgramTrainingExercice } from "~/types/Program.interface"
import { SetTypeEnum } from "~/types/SetTypeEnum"

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
    if (typeof value === 'string') {
      const pattern = /^(\d+|\d+-\d+)$/;
      return pattern.test(value);
    }
    return Number.isInteger(value)
  }

  function _computeJokerSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet) {
    const currentSetIndex = trainingExercice.sets.findIndex(set => set.id === currentSet.id)
    const isNewSet = currentSetIndex === -1
    // If it's a new set, then the previous set is the last set
    const lastSet = trainingExercice.sets[trainingExercice.sets.length - 1]
    const previousSet = isNewSet ? lastSet : trainingExercice.sets[currentSetIndex - 1]
    if (previousSet) {
      const computeSet = getEmptySet()
      computeSet.id = currentSet.id
      // Use the compute previous set values
      const computedPreviousSet = getComputedSet(trainingExercice, previousSet)
      if (computedPreviousSet?.weight) {
        const newWeight = roundValue(computedPreviousSet.weight + ((computedPreviousSet.weight * 5) / 100))
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

  function _computeFSLSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet) {
    const currentSetIndex = trainingExercice.sets.findIndex(set => set.id === currentSet.id)
    const isCurrentSetFirst = currentSetIndex === 0
    const firstSet = trainingExercice.sets[0]
    // FSL set can't be the first
    if (firstSet && !isCurrentSetFirst) {
      const computeSet = getEmptySet()
      // Use the compute first set values
      const computedFirstSet = getComputedSet(trainingExercice, firstSet)
      computeSet.id = currentSet.id
      computeSet.weight = computedFirstSet.weight
      computeSet.repetitions = computedFirstSet.repetitions
      computeSet.type = SetTypeEnum.FSL
      computeSet.displayable_set_information.type = DisplayableSetInformationTypeEnum.Label
      computeSet.displayable_set_information.value = SetTypeEnum.FSL
      return computeSet
    }
    return null
  }

  function getComputedSet(trainingExercice: ProgramTrainingExercice, currentSet: ProgramSet) {
    switch (currentSet.type) {
      case SetTypeEnum.Joker: {
        const jokerSet = _computeJokerSet(trainingExercice, currentSet)
        return jokerSet || currentSet
      }
      case SetTypeEnum.FSL: {
        const FSLSet = _computeFSLSet(trainingExercice, currentSet)
        return FSLSet || currentSet
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