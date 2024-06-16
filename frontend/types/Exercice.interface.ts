import { MusclesEnum } from '~/types/MusclesEnum'
export interface Exercice {
  id: string
  name: string
  primary_muscle: MusclesEnum | string
  rm: number
  tm: number
  weight_progression: number
  reference_max_progression: 'rm' | 'tm'
  tag_ids: string[]
}
