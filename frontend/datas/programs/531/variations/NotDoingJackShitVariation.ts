import {
  barbell_overhead_press,
  bench_press,
  low_bar_squat,
  sumo_deadlift,
} from "~/datas/exercices/coreExercices";
import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { ProgramTemplate, ProgramVariation } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

const lightTemplate: ProgramTemplate = {
  id: '7e66df6a-606a-40af-b729-6bd7cf0d061e',
  name: 'Léger',
  weeks: [
    {
      id: 'c8d2ef28-2944-4fff-a287-49835b3a0b14',
      name: 'Semaine 1',
      trainings: [
        {
          id: '954169ed-b305-45e3-9687-7d5b63005c24',
          name: 'Training 1',
          training_exercices: [
            {
              id: 'fc51a272-7829-492a-b3ae-f640892229a2',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: 'a87ec2d2-24aa-47fa-ba5a-f2332dca5917',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.65,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'c7677739-b066-4f52-be42-ed4520160a24',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'dab81407-8634-4d49-ba02-f7ee571d8723',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '30a6f0b0-b9d3-4dc1-88f8-0d23ba82d56a',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'd2826ee5-0d51-438e-bf68-15f51649608c',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '59376f56-9cf8-4adc-81b5-6069a236e84a',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: 'ca0e7557-8c78-4644-bf66-dae510c7a3e1',
                  exercice_id: barbell_overhead_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: [],
                },
                {
                  id: 'edce835e-4e70-47f2-b51f-6979b51953f3',
                  exercice_id: low_bar_squat.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: '50d48427-8389-4ab6-9eef-32d87c9e74fa',
                  exercice_id: bench_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: 'a1452a77-8e55-4402-a915-759789c405b5',
                  exercice_id: sumo_deadlift.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                }
              ],
            },
          ]
        },
        {
          id: 'a3e665fd-c98d-4239-90bc-e9ad1cd2e580',
          name: 'Training 2',
          training_exercices: [
            {
              id: 'ce671915-d75d-40b4-a2d4-9ea21fda8d40',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '922ddc9c-21a5-4a6e-a1cc-de018ff0b463',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.65,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '45f67ecf-9db6-4338-ae1c-0ddbcc8bcdfb',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'a631ba81-105d-4114-9924-2a9e3397dea3',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '7c627087-1226-43d4-a31b-50db9cf335ec',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '8c28662c-0d98-46d8-835f-caacf75ced74',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'b9c284cc-925b-4a11-922d-f74279d3e393',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '60a83572-bcf5-4ec2-bcdb-7585b5e1539c',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'd264d716-528e-41e3-97d0-8688d653b2c6',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'ab8571e5-6f1f-4f77-afb7-18dd5e78f341',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '258f4c6f-fa78-4633-9929-13ae948b2575',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: '20ca2fad-8800-45a7-9ab5-f8a45c7af6ad',
          name: 'Training 3',
          training_exercices: [
            {
              id: '9893dd26-3b63-4746-88a2-cd3b8e63dbfc',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: 'ce567691-0dbb-41cb-a64d-008ed0e08e1c',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.65,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'fb366f74-4350-4b9e-9dcf-ddd890891b17',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '26b7f165-8a1f-47b6-9c8d-03f0c7a69547',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'da75b727-a60a-478d-b7fc-fab13ec4f5d4',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'b70952b7-1573-4c73-b68b-0708fc65d676',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'd9ef14d0-a86b-4645-95c5-553ade65f02a',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '967fee62-a95e-4dde-b430-b6dc65ea56ab',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '0af89e19-b37a-4601-bcd7-a8cbfd6a75de',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '36680af0-75ed-4717-9b81-bcb60b363ce8',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'c22801d9-22bc-46cb-aca6-942c62f9930b',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: 'c0e324a5-5d29-40f9-b7a3-4e29efbe2e97',
          name: 'Training 4',
          training_exercices: [
            {
              id: '9a50c776-fef1-4db6-b5c2-c5710d16742c',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '94cb715a-0240-4a56-9c93-f9db174ad1b5',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.65,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'faa09344-5134-487c-9faf-5845478319f3',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '4d0f2f11-b69e-402f-9301-cbde7910dd3e',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '5129803b-d701-442b-b487-2936d04af1d5',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '7aa78a2c-d229-42e7-b16e-9e56848d603a',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '0e32cb98-b722-4f72-baab-44141ca9c2f9',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '81142c12-0f3c-4255-9235-971e0f8e990a',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'e4bfb826-89e1-4bc4-ae0b-6e34b2132768',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '6123e630-f98a-401c-8f40-8294a373336a',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'bae8d16d-4fbf-474a-b067-d11734bdfbff',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        }
      ]
    },
    {
      id: '87a3e1bc-0765-43ee-94b8-a7c9bc4e3214',
      name: 'Semaine 2',
      trainings: [
        {
          id: 'cf967c9c-e7c5-449d-84f6-145f87ebeed1',
          name: 'Training 1',
          training_exercices: [
            {
              id: '86728afa-fe88-4023-921d-37954f5e37b0',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '5fe79f63-457d-4fe3-bfa9-cc713b9c5f91',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.70,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '8ca4a35d-59a8-46f4-925a-8e8dce6b132a',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '5be97e16-217f-4841-aadf-451a64a3258b',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.80,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '216cd6a9-1801-4c34-a37e-598a77d2e401',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '09f24381-4e80-48d9-8f3d-a8a83a248bbf',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.90,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'f76b7c14-e5ad-424b-ad4a-42a1cddf2c3b',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '19d3d1ed-8b0c-4e8a-b3dd-bdccbf132794',
                  exercice_id: barbell_overhead_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: [],
                },
                {
                  id: '5012e1f4-59d2-4ecc-ad84-9037e00e6003',
                  exercice_id: low_bar_squat.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: '3a6b8efd-4e9f-49ed-a385-b01d73a11e28',
                  exercice_id: bench_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: '07bc64f1-4e68-4378-8769-902a8c1ebf04',
                  exercice_id: sumo_deadlift.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                }
              ],
            },
          ]
        },
        {
          id: 'f9cf8583-b662-46a9-b5da-4a4a9d572424',
          name: 'Training 2',
          training_exercices: [
            {
              id: '1022207c-f454-4344-9f73-c44eaa81c4c8',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '1d852bdb-4a88-4b51-b1f9-d2604330791e',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.70,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '5f31b391-2d5b-4740-99e1-8d82bfd7c5a1',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '01705349-985d-4c9f-a1fd-f94b25ce24c0',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.80,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '5ef0e9aa-399f-4da1-9389-6678ff7be544',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'e50eb4c2-b5c6-470c-b1d0-a41c1679edca',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.90,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '1d32157b-ca7b-4052-8f52-11b91f808023',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: 'a0fcbdda-8aa0-44a2-b54d-b3422ca6a729',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'aaab7321-e9a3-4dec-867e-5008009f0e4b',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '64619fbf-c48b-464f-9d03-77c54ad148ca',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'fe0c6131-9fb8-4693-a8d9-cb3d43222a60',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: '8cd47e8c-e766-410d-9c2a-a8188ed19274',
          name: 'Training 3',
          training_exercices: [
            {
              id: '37448ad2-8c2d-45b9-826d-2a626a246005',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: 'ba5e59ff-b9d8-4c45-999b-8eb823ba0213',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.70,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '6f6c4e7c-9cdd-4555-8d93-a61415d3d873',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'b1ddd8c3-d9c9-408a-841f-fad3f3386015',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.80,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'f1014146-09ec-48b5-8c50-b7872b486d5f',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '4f07db5a-0e45-4b65-a214-087d5e146c71',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.90,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'a0f93a4c-b607-4e8c-8ffb-29723c4f6396',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '1f08d135-2720-41f3-af90-3398513b4d4e',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '0c17c09d-3677-4a60-bd11-a0d57da06710',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '570d81ae-01a4-44d7-8d38-10dd549163d6',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'e84f2efc-5e49-4279-be4f-307afc825808',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: 'c28e64af-9071-47f4-be8a-a531d470fe77',
          name: 'Training 4',
          training_exercices: [
            {
              id: '27fea22f-00a3-4ee1-8c9a-0dedb3bcbf59',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: 'ed9e3b7a-00ca-44d5-90df-819d3fffddc9',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.70,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '5e143579-52ed-4753-8775-c7daa323ecff',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '61c53159-572c-4ac4-b324-286bc56609d6',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.80,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '6e2ceb89-8410-41c9-93b2-390ebb9d5cb7',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '5a840f90-cd57-4b56-983c-e2b609aaa2c3',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.90,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '31095aab-bbdb-4eb7-beb2-c380a94a37af',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '3d62ac40-ee49-4b02-93ac-fd8cb9c15a85',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'cbd014a0-6b5a-4fa6-b6f3-d91664631014',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '5c77861a-75fe-4237-9501-0bacddd2de3d',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '8286c935-6305-4718-b77f-208714f32f19',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        }
      ]
    },
    {
      id: '7efb9ac1-93c4-4d70-9b35-7efc55c431d6',
      name: 'Semaine 3',
      trainings: [
        {
          id: 'a04c2e09-9273-434d-8cce-84d82c0a26fc',
          name: 'Training 1',
          training_exercices: [
            {
              id: '0d480f06-95db-4480-bb3c-8f36e93f1974',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '2bd97b27-153e-42f1-9fb5-5bc3f97ed071',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '0987cffe-80dc-49cf-ab89-96aaf386df70',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'ef5e2620-2a73-4ffe-8372-cf71ad201eaa',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '6ba7558e-1232-4c43-967e-84dbec186e04',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '0512d12e-622e-4986-a454-78e095de764d',
                  type: SetTypeEnum.TM,
                  repetitions: 1,
                  exercice_max_weight_percentage: 0.95,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'ceefc27e-2dba-4ba6-a5fc-0c48b896b57a',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '3d259f9a-6c10-469a-9218-cde5b84de3e0',
                  exercice_id: barbell_overhead_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: [],
                },
                {
                  id: '285813cd-260b-441b-b837-c122f8c641c1',
                  exercice_id: low_bar_squat.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: 'fe30b61c-2494-4727-a356-455b9588649a',
                  exercice_id: bench_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: 'd3360f56-1fad-4319-abba-8cb296a3b170',
                  exercice_id: sumo_deadlift.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                }
              ],
            },
          ]
        },
        {
          id: 'ce800e4d-c95c-481d-b1d8-f5776294d859',
          name: 'Training 2',
          training_exercices: [
            {
              id: 'b28e2c10-ace5-45dd-8df5-211719b9ef48',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '91c31266-fa46-498e-a0d4-b70307d69478',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '64733b95-d8f2-4d9b-8948-0d024c807deb',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'c53b61c1-e86f-4778-9be0-32822fedcd59',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'baebf987-c075-4414-8ef7-cc7f9977f18e',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'e61bad78-4e68-4de3-89f4-fb6d201f01e0',
                  type: SetTypeEnum.TM,
                  repetitions: 1,
                  exercice_max_weight_percentage: 0.95,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '648c2d4a-5f73-4425-9d89-a02a6e34a638',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '08f73c07-54cd-4be3-a383-997aa516c7c3',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '9ebc347b-b5a2-4ce6-9fe7-150de1a1915d',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'f7c6a780-3f26-414e-b3b3-4aa74c5469b7',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '5bb208aa-3ce1-42e9-ab2f-6fd1bae93307',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: '72ecf36f-6f07-4864-8824-a3675a8d13a3',
          name: 'Training 3',
          training_exercices: [
            {
              id: '01c1d9c2-eca3-47ac-b4e1-9928b7a93d6f',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '9d889995-ecce-4dd4-80f3-3653fd162252',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '2257ea91-ea46-417b-bd05-b9dd56dfda52',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'fb77c5b8-94d7-4e4a-9785-596ba2be64a7',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '737bec9a-5d81-4920-8005-5329b2074082',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'f9218476-f135-4ddd-aa09-e3b827e322e4',
                  type: SetTypeEnum.TM,
                  repetitions: 1,
                  exercice_max_weight_percentage: 0.95,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'edec6aa5-864d-4a45-9a4a-e3e50ea2e341',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: 'a75359fa-1e0b-4c31-a3e5-24b0382e65a5',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'bd45cccf-e00a-4ca6-a9b6-a436adaf49b7',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '771a4ae5-5806-4a89-9c0f-6c43ad9ff2f2',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'b9329962-e345-492f-b4ae-ed8d0e33d809',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: '1c309abd-bacb-40e8-9a22-ed0f2736a712',
          name: 'Training 4',
          training_exercices: [
            {
              id: '8399bdca-d586-4cb7-a1d3-96122b363544',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '8fa363df-266c-42ea-89a9-9ec71292c979',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.75,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'f2226aab-061d-4dba-91a2-de36fdcf9831',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'e14fa9b9-48fd-4401-920d-a8f56233b636',
                  type: SetTypeEnum.TM,
                  repetitions: 3,
                  exercice_max_weight_percentage: 0.85,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'e35a35ae-74dc-413b-8039-2826babbfaf3',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '121ce16d-ea01-4167-bca9-a2b21973d67d',
                  type: SetTypeEnum.TM,
                  repetitions: 1,
                  exercice_max_weight_percentage: 0.95,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'cd31c5be-635a-4170-a1b7-9e9186e767af',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: 'bd28e0dd-8ed4-4b3b-b741-608196b06c9f',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'aad9abf4-88c8-4864-9eba-1482ecc3851c',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'c0f0944c-b37e-4347-bf89-b0ad2612a849',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'ffe23100-1619-4801-9d92-184a68865d00',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        }
      ]
    },
    {
      id: '1859ddb1-bc70-4c2c-b71e-a7de10a72a18',
      name: 'Deload',
      trainings: [
        {
          id: '01cd95da-4459-45c8-94e5-2a733612638a',
          name: 'Training 1',
          training_exercices: [
            {
              id: '5360f78e-05a7-4f5c-b8f8-dcee1f3d7f9d',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '98afc23a-a692-42d5-8744-f6bae154ff55',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.40,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '276b91eb-68d2-494b-bcff-34fc7e6e1032',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'dcf0ec1a-911f-4c92-acbc-6eab5ea542cb',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.50,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '97b3e0f9-ba6c-4b87-b907-844fb4aadf08',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'f9f3a264-862b-436c-9082-856bba39ed59',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.60,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '2f73d7b4-d151-425e-b15b-8277f941ce71',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '28d51222-a2f4-43a1-bb19-4950406a71a5',
                  exercice_id: barbell_overhead_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: [],
                },
                {
                  id: 'b0c53e19-9109-4d52-914a-c2cf2e5029ab',
                  exercice_id: low_bar_squat.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: '6dab5bdd-c0d9-4b87-bb38-9d54fcc5e5f8',
                  exercice_id: bench_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                },
                {
                  id: 'cfeba335-ce6e-41ec-aba9-ca866f2372d1',
                  exercice_id: sumo_deadlift.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: []
                }
              ],
            },
          ]
        },
        {
          id: 'be07148f-f619-4a91-8204-a0ae9d8e514f',
          name: 'Training 2',
          training_exercices: [
            {
              id: '8ab68140-d77c-44b7-9f8f-799fac86c69b',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '3e893801-4d4b-4e4d-8a4c-e5a491c62b42',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.40,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '37b1639e-0878-4a2d-9d1f-8f5440226a78',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'b9e1213e-f48c-4a65-a3ad-60fe5dce22b8',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.50,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'e0cfd0c2-b4c5-4eb1-8af0-d0e4cdf403d8',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '6af75edf-5ae5-4456-837f-e77be9373095',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.60,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '74fc1d78-21a6-4461-9a09-bc31c4ff8d9e',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '071d1cf8-9347-47e0-8821-541218c0d1b6',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '9af71208-66a3-4299-a1d8-25d8fddca8aa',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '1f43aeb2-1838-4d11-bdd3-9950504655b2',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'e0aa0f00-fb1f-4880-90c9-d238c758c708',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: 'f1ca5d1b-f4f4-4662-9043-dc1e3b556807',
          name: 'Training 3',
          training_exercices: [
            {
              id: '80f3bd61-1b88-4205-88a1-5a7ca8a97e32',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: 'f277dd4e-4682-4adb-a030-3ef8ff34a58b',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.40,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '19a212cf-2717-4e67-b632-c64602538576',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '0f05f9a6-0e78-4649-9424-e07241b6c3d8',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.50,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '457f0aad-10d2-431c-8ae1-387647b7efd8',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '5fb8caa6-c58e-4965-bebb-ed9f8920cd5a',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.60,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: '23858948-9344-4937-b767-428ae0b58040',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '4093afe6-0ee6-4f5e-b425-4bf709787872',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '893bdfe2-978e-481d-8aa9-f7f4f0f84029',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '5d474d09-1451-4f0f-8c2c-e6a8ae715cec',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'c6366c13-379c-4f27-8065-03ae30e35bfc',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        },
        {
          id: 'bd90ba7a-f03d-4fb6-bd9f-4e42b47e33d7',
          name: 'Training 4',
          training_exercices: [
            {
              id: 'ef4a5dd5-7eb8-4f73-b5b8-59c5969ab3f5',
              is_done: false,
              sets: [],
              default_sets: [
                {
                  id: '6c6617dd-40ea-4aec-b1c3-ac39154a04d3',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.40,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: 'ab845c1a-f98d-4b27-8b3f-352c4eedf890',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: 'd8c3fed6-7d1e-4097-ad86-c49c024ddfb9',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.50,
                  personal_record: false,
                  is_done: false,
                  displayable_set_information: {
                    id: '6ac7d519-a3ba-4a67-9f5e-2ec9a78cb0ef',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                },
                {
                  id: '4f6e29d8-8520-47e3-bdc8-0732967500f3',
                  type: SetTypeEnum.TM,
                  repetitions: 5,
                  exercice_max_weight_percentage: 0.60,
                  personal_record: true,
                  is_done: false,
                  displayable_set_information: {
                    id: 'abb345a6-1588-4cc8-8fa0-dd7704a739e2',
                    type: DisplayableSetInformationTypeEnum.TM,
                    value: null
                  }
                }
              ],
              recommended_training_exercices: [
                {
                  id: '0b359bc4-76c8-4c9a-a5a8-9ad0d57fe033',
                  exercice_id: barbell_overhead_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: '4172bbbb-8ddb-45df-a522-a1381b18393f',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'c1870015-6eae-40f2-b459-74106a0a3846',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
                {
                  id: 'b3c8bbca-96dc-45d6-b557-e15439b88b66',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [],
                  recommended_training_exercices: []
                },
              ],
            },
          ]
        }
      ]
    },
  ]
}

export const notDoingJackShit: ProgramVariation = {
  id: '8bb3d9d7-dbd2-40d7-8e74-5f667f164c12',
  name: 'Not Doing jack Shit',
  description: `
    Variation minimaliste du programme 5/3/1 conçue pour ceux qui disposent de peu de temps, qui n'ont pas accès à l'équipement ou qui veulent simplement se concentrer sur les levées principales sans aucun travail d'assistance.
    Le programme ne comprend que les quatre levées principales (squat, développé couché, soulevé de terre et développé couché) et chaque séance d'entraînement consiste à effectuer les séries et les répétitions prescrites pour la levée principale du jour, puis à s'arrêter.
  `,
  templates: [
    lightTemplate
  ]
}