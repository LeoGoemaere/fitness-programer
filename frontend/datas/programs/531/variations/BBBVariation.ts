
export const BBBVariation: ProgramVariation = {
  id: crypto.randomUUID(),
  name: 'Boring But Big',
  description: 'La variation Boring But Big du programme 531',
  templates: [
    {
      id: crypto.randomUUID(),
      name: 'Template light',
      description: 'Le template light du Boring But Big',
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