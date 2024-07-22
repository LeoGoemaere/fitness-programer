import {
  EZ_curl,
  abs_rollout,
  barbell_overhead_press,
  barbell_power_shrug,
  barbell_reverse_curl,
  barbell_row,
  bayesian_curls,
  bench_press,
  cable_flies,
  cable_lateral_raises,
  cannonball_crunches,
  chin_ups,
  clean_pull,
  close_grip_bench,
  close_stance_dumbbell_seated_calf_raises,
  converging_chest_press,
  decline_sit_up,
  dips, dumbbel_fly_press,
  dumbbell_curl,
  dumbbell_overhead_press,
  dumbbell_preacher_curls,
  dumbbell_pullover,
  dumbbell_row,
  ez_bar_preacher_curl,
  face_pull,
  french_press,
  hack_squat,
  hammer_curl,
  hanging_knee_raises,
  incline_cable_flies,
  incline_press,
  incline_rows,
  incline_y_raises,
  jm_press,
  katana_triceps_extension,
  leg_curls,
  leg_extensions,
  leg_press,
  leg_raises,
  low_bar_squat,
  lying_triceps_extension,
  machine_pullover,
  machine_rows,
  neck_curl,
  neck_extension,
  neutral_grip_lat_pulldown,
  neutral_ups,
  powel_raises,
  reverse_crunches,
  ring_push_ups,
  romanian_deadlift,
  rope_triceps_extension,
  seated_cable_row,
  seated_calf_raise,
  seated_lateral_raises,
  sit_ups,
  skull_crushers,
  smith_machine_squats,
  spider_curl,
  split_squats,
  supinated_grip_lats_cable,
  upright_row
} from "~/datas/exercices/coreExercices";
import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { ProgramVariation, ProgramTemplate } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

const advancedTemplate: ProgramTemplate = {
  id: '8a561369-ce7e-47ba-b8a6-bbc8ae5af5ad',
  name: 'Template par defaut avancé',
  description: null,
  weeks: [{
    id: '64904bf5-9e30-42cd-be12-3268f200d355',
    name: 'Semaine 1',
    trainings: [
      {
        id: '47de5159-39de-4b7f-b87b-925b7dd5e067',
        name: 'Lundi',
        training_exercices: [
          {
            id: '201421aa-fcd4-40e6-bc76-9dae0bc65bc4',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'c5a122d8-819a-4088-af06-aa44a812fdf7',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'cf9e6c09-a3fa-4104-8c3f-06515529bd71',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8f20189d-f467-4bb3-9780-4da57b2eaf72',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8ae87d24-e431-4680-878d-91c4a9c76217',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '98651350-af0a-4574-89c2-81c4b319faf1',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f5365c02-0ef3-4465-b8d6-36e7d96765b1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'eabd9bec-962c-484d-ae08-5b96e34e3c64',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'dae59d51-bf87-45dc-9096-b96e5a99e8df',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '93252e27-1de6-4584-a4b8-918b575d8bc4',
                exercice_id: dips.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '213cfa9b-1b60-4d25-ae73-e19f25ee4056',
                exercice_id: bench_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '6da9cd24-4e1f-4df4-8664-ea26e3b3af76',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '8c2826c0-9507-4185-8541-53e055ab13e5',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '907be1b8-262d-4282-a605-390632bda29b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b2d37cc6-644b-452f-8fe5-204fb0b5dedb',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '92f6172d-53fb-42c9-b1d4-e5761739df08',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '718e4741-258f-41e2-9899-9509b41292d3',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '4a53f43d-3785-482e-bcd8-f97ac74b7d6c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b3b4f9da-6d5b-4e05-a103-9919cbb6dce9',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '02dd352a-947e-49e8-86f1-c4227a738181',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'ca6f7b3b-d128-408e-8b7a-58ce3a990a48',
                exercice_id: dumbbell_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '34643305-66ab-495f-bbe5-27cb02059882',
                exercice_id: incline_rows.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '210142bf-d536-461d-93e9-c5a66b1267a5',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1c331ef5-e91b-468b-a52c-1e0c54bd08f2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '925e3e1d-6f2e-4f36-a8f5-da1aa6187778',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '5ab1e510-aa31-4f17-a97c-9404e806ce77',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'aed60d0e-d909-4275-9291-829264130f8a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '26890c9b-2e47-4c02-af35-4782d1b775e7',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2fc8e0f8-f454-4c40-90f4-d4791991be90',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2f42512c-328d-4b76-b7fc-adfcc4b67395',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'b64882cc-1f5e-4830-bb7a-b9da49c08ddb',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '4310a3e8-f175-4ee6-aa8e-5e9d1382f281',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f6012fdd-0e86-4c7f-ae80-5a655de8ccf8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cf155114-387b-4aff-a9b2-1f5315fe99e3',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5483acfb-329e-4e4c-9ada-523a51266061',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2303f1a9-3ccc-40bd-a187-9281b83a42c7',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b78a1e00-50b4-456f-a6e5-0de80c9c7764',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '229c4a22-1d6d-4664-9d83-a4df3173eb7b',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5220aa52-be54-456e-abfa-b3202aee9198',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '9c44c995-630a-4a95-8357-a952f417c8b7',
                exercice_id: EZ_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '35ae5ce5-9df3-47ea-aea4-6fb062aa1870',
                exercice_id: dumbbell_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'd334b8c3-3763-4251-b515-27585b22a2d9',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2653e968-a063-4cee-bfbe-11e0fef91ad3',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'b883bc30-3415-45c8-a118-5fad65585117',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '803188f2-1fe6-49e5-bf61-e31a8b58dc12',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '8abec577-0f94-40c2-9b9b-21a6def4cff6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1d3a099b-9ebd-4881-bf98-e0bc58a4f8fd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c1a7579b-0789-495a-8ed5-db63d3350040',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '60f04918-9e6c-400d-aa20-3c358af540ef',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '11fa5e3c-debf-4816-8744-2520d39e56f5',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '8cdec609-77c4-4102-90c8-49a57ccc38df',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e526ae5f-fef2-416d-890b-261db99477be',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '3110c0be-a85e-4b83-8320-63e3a911cc3d',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9d5e9b2c-fd9f-4dce-b8ca-c1ee2bb9ee1d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '456d6f60-b02c-4b84-b078-cb251c009180',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0fa97a22-ea54-4f0a-9e11-e32a21214d82',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6ce63e5c-d91b-4390-bdda-8f21c1f1835d',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd5d74f1d-2562-4ef4-8d50-748bce3f5810',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '88a9d6a6-845b-44c2-ad9f-1516ba3c9843',
                exercice_id: barbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'bc17434a-6c74-457f-a8a7-f4511be80dac',
                exercice_id: dumbbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '2a4f206d-6bbd-400d-87e9-d6b07e1f6169',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b53d7ebf-b6ed-41b1-841f-97321c9f08f6',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '94047835-0b15-4d6c-8fed-84c0294575e5',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c4ec0024-4edc-4bf5-90b2-361c97c18282',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c15a7e4d-f346-4650-902c-7c98aafe4d1d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '04b3a9e5-81c5-4d81-8ebe-b085bf08ca68',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '087af409-a388-4fdb-97a3-f8e380bca3e2',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '7bf1137d-fe3e-46fc-9c60-25f8fbb3b29b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'fde62ed3-b4c9-4f3a-82a6-b3a95e9f7b4f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '7b017684-0a5d-4d68-83b6-1f09e36bf822',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9df3d1f2-292b-4a5b-ad2f-024b5c6d267f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '5adeb42b-d421-4878-b7f3-2716b1f33667',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '65d45db8-a57c-4a1e-986e-aa59dcfedcb9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4437380a-01a5-4ffb-93a9-b10c9986b869',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f996576a-f87e-4531-8674-77bc3455fae7',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'a5f827ff-274a-4fa6-a030-523b6712733a',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '2efe1cea-9388-4c5c-9083-115f7a11f84c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'cad5eb09-eef3-457b-849d-59ebab0ae956',
                exercice_id: neutral_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'a937441d-afd5-4b6e-beda-0cfd6b6f61f2',
                exercice_id: neutral_grip_lat_pulldown.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '8d5f2a2d-26e4-4e61-9fc4-d78129cf444e',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '25124550-6e37-4bca-a6c4-c73d1c7bf52f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'bbab9a41-39a6-4c36-ab88-eddfe7f08c35',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b070d01d-e148-4502-b293-8e93b1540541',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'ef5a753c-baf5-4f99-89ff-5d7429dc4a52',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '9c245fd7-c375-4bbc-be19-7de8542ac7fd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'e2d8ff70-c8ed-4522-be00-b85642482ed0',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2d929c5a-3294-4e51-9b67-413657915fc6',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'd98895bd-02fb-45d5-8b1b-9ae24408422f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f63ae0fe-242b-4eca-b22c-0ea37ce14e27',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1b82c12d-cd97-4327-bd94-bec4dd8896b1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '55519de2-4082-4c41-b10a-e974aeb6b852',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f1aefc00-5992-47e3-b567-5de4f2d48602',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '9d294218-b35a-423c-ae27-3f11787560a9',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '685f77c4-ebd1-44be-a36a-ddd20663d23a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '19ae8d7a-4c74-409b-a9a9-00916b987535',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '19b55212-4cc5-45c2-8f30-2be451cf96ee',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'ab24b4bb-06e5-4a0e-a3fa-22f3466ca91e',
                exercice_id: decline_sit_up.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'd2d5e8a2-4c89-4bf8-a560-6ec5c465cd24',
                exercice_id: abs_rollout.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '0042c9e8-623a-467a-ab1d-cf67fd9a9997',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'ebc79ead-138b-4e79-a63f-0dcb6b5659ef',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '573ad26a-3a5e-45ed-923a-8c3b0e306f59',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '7846f51d-7faf-4097-8bc5-486476aa7702',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a20a913b-9561-4871-b2e3-cc6ac1b42058',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '81e33919-7674-49fc-840d-f35510003c93',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '91cc6817-14d8-4ee2-a22d-992c16e6996a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c697ee4e-6628-4fc3-9ed7-71bbe08ab1e1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '8121f37a-87e3-4667-9a14-a2653b256802',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '83c82bc5-f5af-4e9a-aef4-6978f511b000',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '34bcd189-ae1f-4e4d-a34b-b0b83a15a4c2',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f932b7b7-8149-4467-a825-770ea5cf6a75',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '33af7b0e-25a1-4b58-a2f2-462e350b7604',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b3ab500a-6f91-4920-8054-0a31a06b3014',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e5b52a6f-f3a6-4254-870e-ea322e7fd7b5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b3626771-d7f3-494e-bc82-028eb067ff60',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fa81be68-e2a8-4c7c-b625-a9bbc4a8b703',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '3af7beb0-d81a-4473-927d-8ebf026d995a',
                exercice_id: incline_cable_flies.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'f31cdc00-c0f5-42c3-a2e1-984929494dfc',
                exercice_id: converging_chest_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'a904fd56-845b-4a2e-9a01-550d30f4c72b',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '8da214bf-ebb9-41d4-83c2-ba08a63f194f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '54df7bfb-00c7-44b2-a35d-c85bd3a4760f',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '0bb9c17a-8b0d-48d4-88b7-2a8ffb98d07e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '145852a6-ddfd-4ca6-83f7-9c6f8ed56908',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '9034e7e8-8b8d-4fb2-95a3-011b2671b671',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '9d499c89-befe-457c-a953-fea6029e5fe4',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'd4a7da54-dc9e-46e5-990b-e05bbcb5e75d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '5d79ff99-b5bd-4447-bde8-a668bd236979',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '44cb5b4e-635c-4ff0-b112-74d8bcd32f45',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b2d1c29a-0cc0-4d65-8e0e-077e0bbc2153',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '69502f2c-0c1a-4ee9-aced-e2a15dcb3968',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'da8debfd-433c-42c4-9048-7b219efc99c0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ad4ea1a2-3184-4a79-9bc8-ffeff2c2a5bc',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e064c037-c106-417a-a7a5-4c6a71abb40c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e5f2b23c-b93b-47e8-9daf-a77aecd8b0b1',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '2e142b55-58f5-4384-9d3e-93dee18d01dd',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '60f38f7a-0a0b-4ffb-8c87-3d475fe38d8a',
                exercice_id: rope_triceps_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '41637fd3-58f7-4c78-9d8d-bd37d1009950',
                exercice_id: katana_triceps_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '287e54fe-ce80-40dd-9bcc-47812faa0266',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'f710785c-a0d0-48f6-88e3-cf6ba8996d2d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '1fcab21b-ad29-4761-bdbf-8d37764e34ee',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2827ff53-8836-449e-a34f-0f30fa5564d2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '9ac16361-f3ff-49aa-8d0d-ccc0e8e25c9a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b759a163-f9a1-4924-ba8a-c895bc20c70b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2ff64f1a-d316-40ee-bf8f-71890aa0a710',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'ec90f352-83a4-4245-8bd4-a19e5ee12689',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '087894ec-b1e6-4c4c-b4aa-d1e847346db1',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'ed0b6723-9c11-4681-9678-4d6abec3b8ae',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '92eaef11-9ec7-4b33-bf1b-438867c9692b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8f6c393b-d4f5-4045-8881-3023115db5d6',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '2e374cc8-43dc-42b3-8ecb-2c6d437e6c11',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '5582bb8b-2d7f-41b7-b935-4d5b02f87605',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '6b01899b-16f2-466a-8cf0-2d9bfc3ab29d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4f2f6022-e119-4a3c-9e1b-320c1ac45559',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '344f36bc-50f2-43e8-bc8b-76407e018760',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '7766e48d-d875-435e-867d-782a4b6a3ce9',
                exercice_id: seated_lateral_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '34d6b25e-6405-4a4d-b585-5aee6b24a6b2',
                exercice_id: powel_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '667b828d-7571-42f7-8531-cccb97dc4ae2',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '5346e144-6510-440e-9105-1a5deefe052e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '9c55b5e3-8501-499e-9613-1867d6bbc0f0',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '5ccb1f37-14db-4a57-b3f6-16e0af8cd7f7',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'd0fc3899-0195-41d5-a7b6-a1ccd07d3ea9',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'faa94be2-3835-43ea-bf3b-44868c25f818',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '0bfbda61-189b-4d6e-b003-bd08bd6b5b75',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '5c314e63-de43-4577-b71e-4e3ceb009538',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          }
        ],
      },
      {
        id: 'eedba1f0-93fc-4b07-80d3-9183a6dd680a',
        name: 'Mardi',
        training_exercices: [
          {
            id: '6cf927ae-fdc6-4e9d-9e84-12bb455c8cdd',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '53442865-802e-4737-b80d-b6d36c8c9e0b',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '58246661-66c3-431f-b8ac-6c5736f8b5f0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6aa2ccc4-213c-48ab-8cc0-08385ee1e9fb',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'ae6fd046-a565-41c5-91ad-b93a45e545cb',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'bcb766a5-3b06-4074-a17e-4acf86002f44',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'ef244a24-5324-47a5-a821-a940b825c042',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'bde80abf-4289-47c2-9844-ea8f88ca4cb1',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a6f8200e-857b-4742-b445-a998a72ea2a1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'd2dbee83-6c11-4676-85bb-6e3f1e2e57c5',
                exercice_id: low_bar_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'd6016bef-7015-4549-8039-02431d3b6624',
                exercice_id: hack_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '7e06e43c-a87d-40f5-a980-5588a7215331',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '48ebffb7-263a-4e3e-8d70-4fe06a1267e5',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f22d504a-ebd8-4701-831a-fce8d50cf7b5',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'eff293fe-48e9-4ce8-86b9-9a17ff9495cb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '9031c589-0c2c-4dc9-9d83-ffd88d50e0eb',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'edd82ea3-111f-43b0-bd0f-1fb58a178a56',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'd3ca6fbc-285f-4817-b308-6fdf7b753b6c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'd16824af-d849-4ad3-9ccc-22ebf343919c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'b972d6b1-bb88-43af-9b2b-ace3f36aee7f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f9349758-3e0e-408d-a299-8cceb90bf5ca',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '80dcf31c-d1a0-4dff-ba43-49d0da4906e5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e7986855-ec9f-4650-b042-4a9bfe8e1064',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '19e0066c-35cf-4cd5-92dd-754002b4f415',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cc2b1973-ecf5-49aa-8d52-c55fef55764f',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9a209b98-ca51-46a5-be7e-b016b7d40990',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '24aadf05-d373-4bed-b218-aba5ba899bc5',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '606b617a-7af1-404a-b4e9-e09c488e6e84',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '3feef111-b18c-4d09-8b4d-30e09819ceae',
                exercice_id: seated_calf_raise.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '8e614544-e496-461d-bc06-17327e5b2447',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'cdef2f64-4697-4cf9-b460-706cdd2ecfc3',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'ba20af6a-e281-452c-8d4d-5460ef40b7a2',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1bf42ada-8002-4ebb-ae79-f26b70d70df0',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e2a9f73d-fb6c-47e9-9525-72aca42da3da',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4d1abeed-3144-4b13-8444-23aa212f52bb',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fc498b20-8bbe-4209-b20b-705f0c628e49',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8ae481c6-5058-459e-b955-cadfc3ae6048',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e4bb4fab-d04b-4466-85d7-e45d01fe66f0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '7bcea556-2475-42a5-8682-0faa7b60bb40',
                exercice_id: barbell_power_shrug.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'bdf90c24-9031-42d0-b8a8-9d5026911481',
                exercice_id: clean_pull.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'aed5132b-1d49-4a9f-a396-b71046baa80e',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2c1e9285-92e8-4ccf-a9a4-f63363a1320e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '69e783fe-b6b1-4c28-97d3-7805e1461fd4',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'aa94f112-1d08-4c19-8373-dcf361aeb284',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '77269b69-b1ed-4ee9-90b8-71be062324b3',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'f8d6fb37-829f-422b-924d-4b385a1b50ee',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f8676a77-4661-4cc7-9525-901e1d1c5242',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'e7355ae9-7260-405c-afeb-ff700c5199ea',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'e9e949be-9791-41e7-b1fb-213057961284',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '7cac3e39-0cac-4820-808a-a183b74e6128',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5da0c1eb-96a9-4996-82a5-cf2c06481bab',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ebe0abe8-d1af-4634-9f8e-3a28365c67c0',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8619bde2-1eae-445c-8f00-65f3dcb3029e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '31dced23-e6e9-48b6-b62e-9c3425d7c567',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '6a0fd6dc-5c80-4536-bc98-4c876fda6f99',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '56a9bdd3-f875-433b-92f1-9d8a617786ea',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f52b823d-3a53-4e0f-8b07-a5b5ab50abb6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '9b5d32d7-85b9-4eaa-a1c3-c16c123f28da',
                exercice_id: leg_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: 'aa4536e2-032c-4425-9e28-045ff385aa86',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '3420d4f2-d649-4748-9928-c379954d5a0e',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9fbd130e-652d-4044-bf19-7660ef5eed2e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2509affd-cf14-4645-95ab-00b059464b29',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '835c2441-eb14-4d44-8078-b5e0cefe6120',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7d0c50ea-d73f-4542-b4d8-f82f2a1237a4',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '42d3161c-8275-4430-a142-4cd8f2824307',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cf47843f-d6f4-4458-b084-a4d0c865b21c',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '2a4844fa-e213-4c4e-9083-043915d416a6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'bf60939b-43fd-4144-a860-c409e4f0c6f4',
                exercice_id: split_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'ff52a48e-d202-4fb4-b732-9f6a006b0aab',
                exercice_id: leg_extensions.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '2b015c21-7ac2-41ce-9293-cd50078d957b',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '04105ee2-6a3f-4d36-9ba0-fd415925e53d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2bc26dcf-9923-42f1-a101-da9a8a2a6c96',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c2677e68-ebca-4ee3-b5ce-1e4080d02143',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '28d8f3b4-eb6c-4b57-8b30-e3d3d424fd68',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '98a77c33-8967-4d07-ae46-092b72687c39',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '38d56df9-2853-40cf-a8a4-05e74998e487',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'cf57553a-f0d6-4bf8-af42-e2a19c04ac38',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '3e32b250-54dd-4f12-85d4-0968eb2dcf48',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '7308e354-5f2a-4794-b84c-e191a5391ec5',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8cdf1ba4-0d6b-4c0c-8826-39cb7ec14cf4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '239078ca-f8fc-416b-9d90-ef1bc40c45ee',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'ed907a73-e17b-42f9-83a9-2948183e736f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '94fd8d41-9ea1-483f-b8b8-b4bfbf75a3f5',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '331c92eb-c304-4416-9100-7f3ca7d44c91',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '833d78b0-65c5-47d2-a253-7ca647be321f',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8c1fce63-f30b-4c48-9adc-e4357a1ae249',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'dd90cf7d-0f18-4d76-8d60-538e42ea1434',
                exercice_id: neck_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'd86fbfeb-fcff-4204-aee2-a1e3081e7ee3',
                exercice_id: neck_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: 'e71f456c-055f-4810-8f97-e3740999f655',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '6df7f791-a847-420a-b651-46e7e420e13f',
                is_done: false,
                personal_record: false,
                repetitions: 'amrap',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e134dac6-075f-468e-86e3-db73cc5edaa1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2f7223b0-f4fb-4672-8a39-86bc54781c14',
                is_done: false,
                personal_record: false,
                repetitions: 'amrap',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '3a30d803-0f27-4859-bf16-1f961e5679f8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '164b34ae-bfcc-470f-a85c-9e05e746d78b',
                is_done: false,
                personal_record: false,
                repetitions: 'amrap',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9f278850-2c15-467c-8461-51b515be4061',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ef22cbd3-fe24-4ebd-941f-914d1eaf0c93',
                is_done: false,
                personal_record: false,
                repetitions: 'amrap',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '32767c02-4a5f-4694-8346-ee3246559047',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'cd9a3631-a5f4-4dd3-a40f-d3ed7812fbf6',
                exercice_id: close_stance_dumbbell_seated_calf_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          }
        ]
      },
      {
        id: 'bdcf7662-9c5d-49d2-8b45-1ce7cb749ca2',
        name: 'Mercredi',
        training_exercices: [
          {
            id: '880811eb-0a49-4ea3-9ff8-bde71df0af5c',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '113a0aa1-f9dc-4960-b200-ccfc8311a6be',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c0be0d42-93f3-4115-a022-a4e1e6fc1331',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '437ed58e-779f-4769-aea8-1da18ee9de0c',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5b1f5eed-c47e-48f9-8d09-60a4a20e54c8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '908ddbd8-eb97-46cb-bfa2-c2eac342e0d2',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1e45fc08-6c9d-48de-848d-dbddfaab9e48',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd9c5f152-7dc7-4354-aa72-01ecf63987f6',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '615f4259-1e10-443f-8ae3-2fb360a44011',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'b8e6d214-8169-430f-96d1-52a0144d86c7',
                exercice_id: close_grip_bench.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '08b0c451-92c6-4622-844a-3932e4ced5c7',
                exercice_id: ring_push_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '85d9a22f-e4e4-4a2e-9f57-99a498f85b95',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'e3364611-a0d4-4068-ad83-4706361a955e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '6afb5c6c-8ec5-4b39-b5b8-9fe20be91030',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'f84ea162-dc1d-4cf4-931f-982ffe9d9e1a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'bb19c064-3b2a-492d-b5a5-938ce370762a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a7c08360-18f9-414a-a17a-d11b4ee0eac8',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '86ec44ae-d218-4acf-973f-abeacee9c01d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '642f0137-68df-4e46-a9fb-ec91da092b66',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'eb9f2629-a8c2-4a10-abfe-94db90b42723',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '0dde5fff-dc5e-4608-a52b-3d77ca9737c4',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b75205ea-090f-4842-9bfc-a2bfea952b32',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7f0d0605-3f34-422d-8b38-1f7be0370644',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a594af22-a741-4b16-a857-fb7ab028066a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '19443dde-5df5-4f7c-8ae5-8479862e88a5',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e0d67cf6-5007-42b9-86a6-db3de1f18abd',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '98e06169-b09e-47b7-8bb4-26870af57467',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '71908e0b-d3c9-4d64-9a6a-84670b04053f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '45e6d911-6b3f-4cc3-9ce6-03d9c5208044',
                exercice_id: dumbbell_pullover.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '3c891fc3-2c0c-405a-86a4-e62332960237',
                exercice_id: machine_pullover.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: 'd080c82b-ab42-40a6-826d-4c70f42c066d',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '44dc12b2-e293-4fd5-b85f-761a4e77fbdc',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '76d0b97a-a7bc-41f2-bd2f-9b471ab718cc',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cbecb8ab-7bdc-47e6-9f90-f8fb85831136',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'babda523-c40a-482e-a18d-e73b071bed21',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '21aaa6e6-8d90-402b-8b20-6106662d6161',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '07e8e0dd-3f79-4908-a93e-a9d28644b7d9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6ada74ad-82f8-4b2f-986e-2855ba5c1daa',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1c2cb8e7-360e-4318-aef2-8f0f6053fb3f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'f644f5fc-47fa-4fc2-a0b6-cf8943dae23a',
                exercice_id: ez_bar_preacher_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '36fee616-a2ee-45f9-a62a-de1c88f6f599',
                exercice_id: spider_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '77915526-e317-4835-ac50-c60f1cc8472a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '5e427a5d-502e-40c4-9908-e1b83b0ed114',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5d4ed01a-93c5-45a4-a801-cdcf627519b7',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '19cefb0c-170c-4f6f-8d20-bb86d42b3fdf',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '046dbaf3-c7d3-4879-ad4e-089cc135ea74',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '9191212e-c45b-4cd5-b072-ed832582f0e4',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '11b356dc-4cba-40be-b37b-ad417f95023c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'e5c785b6-2635-474c-acfa-6bf79682e2dc',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '99db04c9-c7bf-4a62-a5ff-e4d6460a5d9c',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '4fd3f98b-08a6-4a49-98ec-2b7b8a3f5efb',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1eddeb84-e853-4b1d-bd1e-ea1e005cab09',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '465d82a3-d892-4310-8f47-1233da6f9858',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9667b6d9-279c-4df4-9c14-cf108d47d088',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0f17f648-36f1-4a50-a73e-316b939808a9',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0ff3a82e-1b9b-420e-b36a-3f40644bcf88',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '355a15eb-643f-4b88-a512-896551afbf5e',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '4f989f98-b76f-441a-b076-8a49ffc0736a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'f53fdb35-a8ab-4b89-b28a-0642195bbf25',
                exercice_id: chin_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '11198dd9-991f-49d9-9c3f-4863de2fef0b',
                exercice_id: supinated_grip_lats_cable.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '5559ce33-82f4-4238-9afa-5c5d69070dc1',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '8f376513-a650-4e07-9842-1509c9de8898',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f774844b-715b-45fd-a1f2-fa1416bf5993',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'ca476d36-30b5-45d6-b62c-3c5398c9b4a9',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '93bf41cc-77ac-491b-9400-4402abc336ab',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b978cbbe-7bf4-4ec5-9c59-98e2a1a3882b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '025a442e-ad54-479a-98ec-6f855aeabe08',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'ff3c42be-f543-44b6-9f2f-760cf7a579ad',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'd94a0c98-0eca-47a9-9870-e14b550ef664',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '72a0a882-5f66-4696-aded-c48a1a3a8ac3',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '203b96eb-9df3-49c5-a8b8-1a6c05e12a98',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'efee492b-66be-457e-97cd-fee21cc4684f',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '7f4015a8-3579-4f3f-9a18-7628979fa6e6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cb62be5e-41db-4c61-8378-8f86a3447372',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '21b7bc37-200f-4637-ac9a-046121a0596f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c17e0981-7aa2-435a-a3ff-e6bc2a740b02',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '972f907a-4048-4b56-9861-cb83d8582207',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '50a81bd2-9755-40d8-a6d1-0a70928bfcb1',
                exercice_id: hanging_knee_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '77629235-01dd-4f02-9cbb-eff6a4970067',
                exercice_id: reverse_crunches.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'b54f07ae-5fa7-4a36-a82a-91e7ccb0216c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'd3da2598-317f-43ca-b2f2-9045a16028cb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2b3702c9-4c38-4402-9473-4cd4c1e846ab',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c282b5c0-f47f-4dec-8289-98e82d72cb5a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5d9952e5-47ae-4ace-8a42-8d55762e9687',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '83c725f2-6921-4f76-82d8-17128aa16709',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '26e786fb-9e21-4219-8102-6fed1ca70e6a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'fab71790-878f-4985-af87-38bbb8faa936',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '0008d491-82ef-4874-b605-50a16bf3db68',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd6f87ff4-fc11-4c6b-b1d0-ded7816a704b',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '178e12b5-f57e-4eda-b09f-f31cf3800b51',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2d087940-622a-4cc1-99d7-b3d89dd891d0',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '15aeb532-e7f9-4930-b6b7-8dde8ef2c896',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '37a2de07-aded-4017-84f0-28c8cf2ef38b',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '22ceb4c4-5536-4100-a48f-52bdd56fbc52',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '662953fb-a667-4b30-926f-ac02a6ce645c',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd6ee7827-94b1-480a-a013-0ae2f7943738',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '7f4fc096-cd72-4300-b87f-77737fef5247',
                exercice_id: cable_lateral_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'de9d1061-8c15-45c3-9823-b7c9b67db59b',
                exercice_id: incline_y_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'fd2ee395-d187-499c-baf6-eacf70009569',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '89c38e86-16e0-4611-8145-10b395dd8f8e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '67f19b90-1cd6-4350-9706-2aef6239b00d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'e79814b2-8da5-4d09-8027-809e806ffdeb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '73b845fb-3ddc-4233-8f3d-48daeb1f454d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'f0bd3a33-84f6-4a3a-b368-4f1799cbdbcd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c68bbcac-ea2f-4e91-8af1-4d86fc8c5b56',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '9db3df35-8770-4ade-8782-463dfb9af730',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'ebfeae06-5df6-4c41-b1b8-d8aab2416c87',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '9a921afe-0b2b-4231-8ba1-3da62154ab80',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '28df28da-6514-4a29-8388-0bdf74944336',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '24d1e827-ad76-47c2-9a76-c614fe9bf603',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '720b5d59-cca1-4b86-9bdb-f41c5a84cd21',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '986ddce1-a512-43f8-876f-3931d96f42d2',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '05c52e9a-ca1d-4eb0-a27d-a14bb4b6ef10',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '743435fc-7baf-441e-a044-ca8d8da22d4b',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd3b2d1cb-4ebe-45ce-9885-1e2a69d2603e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '9f854b9e-b973-423e-bcee-14a78c445004',
                exercice_id: jm_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'ef44cb9b-2f7a-4e8c-935e-db4b1dc02f57',
                exercice_id: lying_triceps_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'a080defc-f783-4616-9c7a-589aadd814c3',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '22b9fce3-6919-447e-985c-8c2106c554c5',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '0ba11622-383d-4019-82bf-fda4916956d7',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '3b5a6785-b714-487c-b682-535f7816e006',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '69068b79-0989-4319-b3fb-62f6d45f2aa1',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'f2370b48-1a6c-46e8-b4f3-3dc3b6b47ebd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '35bde1d3-a031-4c57-a87a-b92547db8171',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'ef7ce08f-3a72-4692-b094-511b856cc2de',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '48909cd7-d56c-4b87-91b8-695e6062ec66',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '1616585f-9a42-49c5-803b-885b24d22524',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '42844dde-343e-46db-9552-83929f03fd63',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '60503f90-9999-4e2b-80b1-57656d4eeb5d',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '18f7be3c-517a-4061-8146-15b73f40e22c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '20d7bc15-0509-4025-8f3e-6c16ede7fbea',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '492b8d61-b34f-4adf-a024-b9c8b3719a88',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4c26bc95-d535-4ebc-81ff-78f0f21cd639',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'dbd0f11e-62ea-4030-9a4f-628c4968cbc4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '91e891b3-d4c3-4779-8e08-44cdc14acad1',
                exercice_id: hammer_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '0233954b-6699-48e4-873b-80c72cb96391',
                exercice_id: barbell_reverse_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '378d0fc0-d091-43d8-9628-b0f4ef9aee18',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '3daaf426-a5fd-4f7d-beb1-720cbfa213ac',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '2e24cac7-be8f-4647-bb6a-9bac51f4f004',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd9b5a7e0-9b17-49d7-abc2-d43e6b7c1f7f',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f2f75035-46e1-4b16-97ae-701ef96389d3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b480dde2-7808-40d7-a526-64962a6c6537',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'da94449f-006b-48b3-bfe0-d83b3f965c38',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '853e1d24-c412-4f41-aa46-4a6da7524918',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c480bab6-112d-47e3-98f6-9ba8c56b7900',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '9d6d9826-108d-4ef3-8def-078c6597ab28',
                exercice_id: upright_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'a8973aac-1b8d-4ed4-8eb9-43d295da5687',
                exercice_id: face_pull.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          }
        ]
      },
      {
        id: '1bb3c992-ab80-4fb5-9a93-eefeb5ecf472',
        name: 'Jeudi',
        training_exercices: [
      
        ]
      },
      {
        id: 'ffbaba57-7198-41c6-b6b8-68b3eb2e9140',
        name: 'Vendredi',
        training_exercices: [
      
        ]
      },
      {
        id: '3f4808ce-cb7f-47e4-8f2b-d713c8e9fcef',
        name: 'Samedi',
        training_exercices: [
      
        ]
      },
    ],
  }]
}

export const AdvancedVariation: ProgramVariation = {
  id: 'c10d9b7d-90dd-46e6-a18f-3bb965419160',
  name: 'Avancé',
  description: `
  Variation avancé
  `,
  templates: [
    advancedTemplate,
  ]
}