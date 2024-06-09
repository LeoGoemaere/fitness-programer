// Program
const program_531 = {
  id: 'program_531',
  tm_percentage: 0.8,
  name: '531',
  description: 'Le programme 531 pour prendre de la force'
}

// Variation
const variation_triumvirate = {
  id: 'variation_triumvirate',
  program_id: 'program_531',
  name: 'Triumvirate',
  description: 'La variation triumvirate du programme 531'
}

// Template
const template_triumvirate_light = {
  id: 'template_triumvirate_light',
  variation_id: 'variation_triumvirate',
  name: 'Template light',
  description: 'Le template light du triumvirate'
}

// Week
const triumvirate_week_1 = {
  id: 'triumvirate_week_1',
  template_id: 'template_triumvirate_light',
  name: 'Semaine 1'
}

// Training
const triumvirate_training_week_1 = {
  id: 'triumvirate_training_week_1',
  week_id: 'triumvirate_week_1',
  name: 'Lundi'
}

// Training exercice
const triumvirate_training_exercice_week_1 = {
  id: 'triumvirate_training_exercice_week_1',
  training_id: 'triumvirate_training_week_1',
  exercice_id: null,
  alternative_exercice_ids: []
}

// Exercice
const bench_exercice = {
  id: 'bench_exercice',
  name: 'Développé couché',
  rm: 0,
  tm: 0,
  weight_progression: 0.5,
  reference_weight_progression: 'tm'
}

// Set
const triumvirate_training_exercice_set = {
  id: 'triumvirate_training_exercice_set',
  training_exercice_id: 'triumvirate_training_exercice_week_1',
  repetitions: 5,
  weight: 50,
  personal_record: false
}

const displayable_set_information = {
  id: 'displayable_information',
  set_id: 'triumvirate_training_exercice_set',
  type: 'label',
  value: 'Coucou'
}

const tag_531 = {
  id: 'tag_531',
  name: '531',
}

// Exercice tag
const bench_531 = {
  exercice_id: 'bench_exercice',
  tag_id: 'tag_531'
}

// BDD
// const programs = [
//   program_531
// ]

// const variations = [
//   variation_triumvirate
// ]

// const templates = [
//   template_triumvirate_light
// ]

// const weeks = [
//   triumvirate_week_1
// ]

// const trainings = [
//   triumvirate_training_week_1
// ]

// const training_exercices = [
//   triumvirate_training_exercice_week_1
// ]

// const exercices = [
//   bench_exercice
// ]

// const sets = [
//   triumvirate_training_exercice_set
// ]

// const displayable_sets_information = [
//   displayable_set_information
// ]

// const tags = [
//   tag_531
// ]

// const exercices_tags = [
//   bench_531
// ]

// Réponse
export const program_response_531 = {
  ...program_531,
  variations: [
    {
      ...variation_triumvirate,
      templates: [
        {
          ...template_triumvirate_light,
          weeks: [
            {
              ...triumvirate_week_1,
              trainings: [
                {
                  ...triumvirate_training_week_1,
                  training_exercices: [
                    {
                      ...triumvirate_training_exercice_week_1,
                      exercice: bench_exercice,
                      sets: [
                        {
                          ...triumvirate_training_exercice_set,
                          displayable_set_information
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
  ]
}