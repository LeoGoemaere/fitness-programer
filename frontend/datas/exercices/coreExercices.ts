import { MaxType, type Exercice } from '~/types/Exercice.interface'
import { MusclesEnum } from '~/types/MusclesEnum'

export const low_bar_squat: Exercice = {
  id: '25df10b0-d628-4a8b-8888-74758f5d2a92',
  name: 'Low Bar Squat',
  primary_muscle: MusclesEnum.Quads,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const high_bar_squat: Exercice = {
  id: '58ed0ecc-e16d-444a-8b34-ccef19b844ed',
  name: 'High Bar Squat',
  primary_muscle: MusclesEnum.Quads,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const hack_squat: Exercice = {
  id: 'a71d441d-9e10-4bc0-ae25-595dd1a4e1e2',
  name: 'Hack squat',
  primary_muscle: MusclesEnum.Quads,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const EZ_curl: Exercice = {
  id: 'af65f69a-4a77-46c4-ae6d-28d1ea213714',
  name: 'Curl barre EZ',
  primary_muscle: MusclesEnum.Biceps,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const dumbbell_curl: Exercice = {
  id: 'f02f1f2f-2ec5-49f9-bfd5-3d56f66db8d4',
  name: 'Curl Haltères',
  primary_muscle: MusclesEnum.Biceps,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const dips: Exercice = {
  id: '7ba2f8c0-35a9-4c43-a495-c9ac1fd902b3',
  name: 'Dips',
  primary_muscle: MusclesEnum.Chest,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const bench: Exercice = {
  id: '196e4bc8-b9ef-42e2-80ed-5155541598a3',
  name: 'Développé couché',
  primary_muscle: MusclesEnum.Chest,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const dumbbell_row: Exercice = {
  id: '1dbdf24f-6eef-4f32-8b28-cfca153d7686',
  name: 'Tirage haltères',
  primary_muscle: MusclesEnum.Back,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const seated_cable_row: Exercice = {
  id: '263ead7d-e58c-480d-95fa-f98edc8792b7',
  name: 'Tirage horizontal assis',
  primary_muscle: MusclesEnum.Back,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const rope_triceps_extension: Exercice = {
  id: '426c00e9-1546-479f-bd9f-f047fb0115d4',
  name: 'Extension triceps corde',
  primary_muscle: MusclesEnum.Triceps,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const katana_triceps_extension: Exercice = {
  id: '8b66d6fc-064b-45ea-afa1-c5085e4d1705',
  name: 'Extension triceps katana',
  primary_muscle: MusclesEnum.Triceps,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const cable_lateral_raises: Exercice = {
  id: '212896ac-947f-404d-aca2-afd2f1a1a575',
  name: 'Extension latérale poulie',
  primary_muscle: MusclesEnum.Shoulders,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const powel_raises: Exercice = {
  id: '9f7bafaf-a541-4741-b17d-1ae68e94942f',
  name: 'Elévations "Powel"',
  primary_muscle: MusclesEnum.Shoulders,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const sit_ups: Exercice = {
  id: '5be0be40-5432-4f78-aae8-2885d07efb74',
  name: 'Sit-ups',
  primary_muscle: MusclesEnum.Abs,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export const cannonball_crunches: Exercice = {
  id: '8ca44aba-4683-4902-9296-2c2f51950f44',
  name: 'Cannonball crunches',
  primary_muscle: MusclesEnum.Abs,
  RM: 0,
  TM: 0,
  weight_progression: 0,
  reference_max_progression: MaxType.tm,
  tag_ids: []
}

export default [
  low_bar_squat,
  high_bar_squat,
  hack_squat,
  EZ_curl,
  dumbbell_curl,
  dips,
  bench,
  dumbbell_row,
  seated_cable_row,
  rope_triceps_extension,
  katana_triceps_extension,
  cable_lateral_raises,
  powel_raises,
  sit_ups,
  cannonball_crunches
]