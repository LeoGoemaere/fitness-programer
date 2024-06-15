import type { Exercice } from "~/types/Exercice.interface"
import { roundValue } from "~/utils/utils"

function getEmptyExercice(): Exercice {
  return {
    id: crypto.randomUUID(),
    name: '',
    primary_muscle: '',
    rm: 0,
    tm: 0,
    weight_progression: 0,
    reference_max_progression: 'rm',
    tag_ids: []
  }
}

function updateExerciceMax(maxType: 'rm' | 'tm', value: unknown, exercice: Exercice, tmPercentage?: number) {
  const newExercice: Exercice = JSON.parse(JSON.stringify(exercice))
  const maxTypeValue = isNaN(value as number) ? 0 : Number(value) // Can be Nan but TS want a number as param...
  newExercice[maxType] = maxTypeValue

  if (maxType === 'rm') {
    newExercice.tm = tmFromRm(maxTypeValue, tmPercentage)
  } else if (maxType === 'tm') {
    newExercice.rm = rmFromTm(maxTypeValue, tmPercentage)
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

export {
  getEmptyExercice,
  updateExerciceMax,
  tmFromRm,
  rmFromTm
}