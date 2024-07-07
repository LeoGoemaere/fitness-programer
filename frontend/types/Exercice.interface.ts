import { MusclesEnum } from '~/types/MusclesEnum'

export enum MaxType {
  rm = 'RM',
  tm = 'TM'
}
export interface Exercice {
  id?: string | number
  name: string
  primary_muscle: MusclesEnum | string
  RM: number
  TM: number
  weight_progression: number
  reference_max_progression: MaxType
  tag_ids: string[],
}
