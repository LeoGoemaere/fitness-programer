import { type Exercice } from '~/types/Exercice.interface'
import { MusclesEnum } from '~/types/MusclesEnum'

export const bench: Exercice = {
  id: crypto.randomUUID(),
  name: 'Bench',
  primary_muscle: MusclesEnum.Chest,
  rm: 0,
  tm: 0,
  weight_progression: 0,
  reference_weight_progression: 'tm',
  tag_ids: []
}

export const deadlift: Exercice = {
  id: crypto.randomUUID(),
  name: 'Soulevé de terre',
  primary_muscle: MusclesEnum.Hamstrings,
  rm: 0,
  tm: 0,
  weight_progression: 0,
  reference_weight_progression: 'tm',
  tag_ids: []
}

export default [
  bench,
  deadlift
]