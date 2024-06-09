
export const TriumvirateVariation: ProgramVariation = {
  id: 'variation_triumvirate',
  name: 'Triumvirate',
  description: 'La variation triumvirate du programme 531',
  templates: [
    {
      id: 'template_triumvirate_light',
      name: 'Template light',
      description: 'Le template light du triumvirate',
      weeks: [
        {
          id: 'triumvirate_week_1',
          name: 'Semaine 1',
          trainings: [
            {
              id: 'triumvirate_training_week_1',
              name: 'Lundi',
              training_exercices: [
                {
                  id: 'triumvirate_training_exercice_week_1',
                  exercice_id: undefined,
                  alternative_exercice_ids: [],
                  superset_exercice_ids: [],
                  is_done: false,
                  sets: [
                    {
                      id: '',
                      repetitions: 5,
                      weight: 50,
                      exercice_max_weight_percentage: 0.6, // Si renseigné alors le poids sera calculé avec le tm de l'exercice
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: '',
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