import type { SetTypeEnum } from "./SetTypeEnum"

export interface Program {
  id: string
  tm_percentage: number
  name: string
  description?: string | null
  variations: ProgramVariation[]
}

export interface ProgramVariation {
  id: string
  // program_id: string
  name: string
  description?: string | null
  templates: ProgramTemplate[]
}

interface ProgramTemplate {
  id: string
  name: string
  description?: string | null
  weeks: ProgramWeek[]
}

interface ProgramWeek {
  id: string
  name: string
  trainings: ProgramTraining[]
}

export interface ProgramTraining {
  id: string
  name: string
  training_exercices: ProgramTrainingExercice[]
}


export interface ProgramTrainingExercice {
  id: string
  exercice_id?: string | number | null
  alternative_exercice_ids: string[] | number[]
  superset_exercice_ids: string[] | number[]
  is_done: boolean
  sets: ProgramSet[]
}

export interface ProgramSet {
  id: string
  type: SetTypeEnum
  repetitions: number | string
  weight?: number | null
  exercice_max_weight_percentage?: number | null
  personal_record: boolean
  is_done: boolean
  displayable_set_information?: ProgramDisplayableSetInformation | null
}

interface ProgramDisplayableSetInformation {
  id: string
  type: 'label' | 'rm' | 'tm'
  value: string
}