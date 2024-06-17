import { MaxType, type Exercice } from '~/types/Exercice.interface'
import { MusclesEnum } from '~/types/MusclesEnum'

export const bench: Exercice = {
  id: crypto.randomUUID(),
  name: 'Bench',
  primary_muscle: MusclesEnum.Chest,
  RM: 0,
  TM: 0,
  weight_progression: 10,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const deadlift: Exercice = {
  id: crypto.randomUUID(),
  name: 'Soulevé de terre',
  primary_muscle: MusclesEnum.Hamstrings,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export default [
  bench,
  deadlift
]