import {
  EZ_curl,
  abs_rollout,
  barbell_overhead_press,
  barbell_reverse_curl,
  barbell_row,
  bayesian_curls,
  bench_press,
  cable_flies,
  cable_lateral_raises,
  cannonball_crunches,
  converging_chest_press,
  decline_sit_up,
  dips, dumbbel_fly_press,
  dumbbell_curl,
  dumbbell_overhead_press,
  dumbbell_preacher_curls,
  dumbbell_pullover,
  dumbbell_row,
  face_pull,
  french_press,
  hack_squat,
  hammer_curl,
  hanging_knee_raises,
  incline_cable_flies,
  incline_press,
  incline_rows,
  katana_triceps_extension,
  leg_curls,
  leg_extensions,
  leg_press,
  leg_raises,
  low_bar_squat,
  machine_pullover,
  machine_rows,
  neck_curl,
  neck_extension,
  neutral_grip_lat_pulldown,
  neutral_ups,
  powel_raises,
  ring_push_ups,
  romanian_deadlift,
  rope_triceps_extension,
  seated_cable_row,
  seated_calf_raise,
  seated_lateral_raises,
  sit_ups,
  skull_crushers,
  smith_machine_squats,
  split_squats,
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