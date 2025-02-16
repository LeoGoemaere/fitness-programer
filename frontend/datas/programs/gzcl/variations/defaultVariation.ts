
export const defaultVariation: ProgramVariation = {
  id: crypto.randomUUID(),
  name: 'Default',
  // description: 'Default variation du GZCL',
  templates: [
    {
      id: crypto.randomUUID(),
      name: 'Template default',
      description: null,
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