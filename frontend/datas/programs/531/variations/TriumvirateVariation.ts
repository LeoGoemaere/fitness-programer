import type { ProgramVariation } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

export const TriumvirateVariation: ProgramVariation = {
  id: crypto.randomUUID(),
  name: 'Triumvirate',
  description: 'La variation triumvirate du programme 531',
  templates: [
    {
      id: crypto.randomUUID(),
      name: 'Template light',
      description: 'Le template light du triumvirate',
      weeks: [
        {
          id: crypto.randomUUID(),
          name: 'Semaine 1',
          trainings: [
            {
              id: crypto.randomUUID(),
              name: 'Lundi',
              training_exercices: [
                {
                  id: crypto.randomUUID(),
                  exercice_id: 'bench-id',
                  alternative_exercice_ids: [],
                  superset_exercice_ids: [],
                  is_done: true,
                  sets: [
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: '8-10',
                      // weight: 100,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    },
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: 1,
                      // weight: 100,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    },
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: 3,
                      weight: 100,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    },
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: '5-8',
                      weight: 100,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    },
                  ]
                }
              ]
            },
            {
              id: crypto.randomUUID(),
              name: 'Mardi',
              training_exercices: [
                {
                  id: crypto.randomUUID(),
                  exercice_id: undefined,
                  alternative_exercice_ids: [],
                  superset_exercice_ids: [],
                  is_done: false,
                  sets: [
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: 5,
                      weight: 50,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    }
                  ]
                },
                {
                  id: crypto.randomUUID(),
                  exercice_id: undefined,
                  alternative_exercice_ids: [],
                  superset_exercice_ids: [],
                  is_done: true,
                  sets: [
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: 5,
                      weight: 50,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: crypto.randomUUID(),
          name: 'Semaine 2',
          trainings: [
            {
              id: crypto.randomUUID(),
              name: 'Lundi',
              training_exercices: [
                {
                  id: crypto.randomUUID(),
                  exercice_id: undefined,
                  alternative_exercice_ids: [],
                  superset_exercice_ids: [],
                  is_done: false,
                  sets: [
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: 5,
                      weight: 50,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: crypto.randomUUID(),
      name: 'Template heavy',
      description: 'Le template heavy du triumvirate',
      weeks: [
        {
          id: crypto.randomUUID(),
          name: 'Semaine 1',
          trainings: [
            {
              id: crypto.randomUUID(),
              name: 'Lundi',
              training_exercices: [
                {
                  id: crypto.randomUUID(),
                  exercice_id: undefined,
                  alternative_exercice_ids: [],
                  superset_exercice_ids: [],
                  is_done: false,
                  sets: [
                    {
                      id: crypto.randomUUID(),
                      type: SetTypeEnum.Custom,
                      repetitions: 5,
                      weight: 50,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: crypto.randomUUID(),
                        type: 'label',
                        value: 'Coucou'
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}