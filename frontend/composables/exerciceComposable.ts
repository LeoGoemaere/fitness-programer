import { MaxType, type Exercice } from "~/types/Exercice.interface"
import { roundValue } from "~/utils/utils"

function getEmptyExercice(): Exercice {
  return {
    id: crypto.randomUUID(),
    name: '',
    primary_muscle: '',
    RM: 0,
    TM: 0,
    weight_progression: 0,
    reference_max_progression: MaxType.tm,
    tag_ids: []
  }
}

function updateExerciceMax(maxType: MaxType, value: unknown, exercice: Exercice, tmPercentage?: number) {
  const newExercice: Exercice = JSON.parse(JSON.stringify(exercice))
  const maxTypeValue = isNaN(value as number) ? 0 : Number(value) // Can be Nan but TS want a number as param...
  newExercice[maxType] = maxTypeValue

  if (maxType === MaxType.rm) {
    newExercice.TM = tmFromRm(maxTypeValue, tmPercentage)
  } else if (maxType === MaxType.tm) {
    newExercice.RM = rmFromTm(maxTypeValue, tmPercentage)
  }
  return newExercice
}

function tmFromRm(rm: number, tmPercentage?: number) {
  // const tmPercentage = tmPercentage
  if (typeof tmPercentage !== 'undefined') {
    const newTm = rm * tmPercentage
    return roundValue(newTm)
  }
  return 0
}

function rmFromTm(tm: number, tmPercentage?: number) {
  // const tmPercentage = programsStore.currentProgram?.tm_percentage
  if (typeof tmPercentage !== 'undefined') {
    const newRm = tm / tmPercentage
    return roundValue(newRm)
  }
  return 0
}

function getMaxColor(exercice: Exercice) {
  if (exercice.reference_max_progression === MaxType.tm) {
    return 'orange'
  }
  return 'primary'
}

export {
  getEmptyExercice,
  updateExerciceMax,
  tmFromRm,
  rmFromTm,
  getMaxColor
}