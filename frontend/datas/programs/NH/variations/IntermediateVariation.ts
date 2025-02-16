import {
  EZ_curl,
  ad_press,
  barbell_overhead_press,
  barbell_power_shrug,
  barbell_reverse_curl,
  barbell_row,
  bayesian_curls,
  bench_press,
  cable_crunch,
  cable_flies,
  cable_lateral_raises,
  cannonball_crunches,
  chin_ups,
  clean_pull,
  close_grip_bench,
  cross_body_triceps_extension,
  dips, dragon_flag, dumbbel_fly_press,
  dumbbell_curl,
  dumbbell_overhead_press,
  dumbbell_preacher_curls,
  dumbbell_pullover,
  dumbbell_row,
  ez_bar_preacher_curl,
  face_pull,
  farmers_carries,
  french_press,
  good_morning,
  hack_squat,
  hammer_curl,
  hanging_knee_raises,
  incline_press,
  incline_rows,
  jm_press,
  katana_triceps_extension,
  leg_curls,
  leg_extensions,
  leg_press,
  leg_raises,
  low_bar_squat,
  machine_pullover,
  machine_rows,
  meadows_rows,
  neck_curl,
  neck_extension,
  neutral_grip_lat_pulldown,
  neutral_ups,
  powel_raises,
  ring_push_ups,
  romanian_deadlift,
  rope_triceps_extension,
  russian_twists,
  seated_cable_row,
  seated_calf_raise,
  sit_ups,
  skull_crushers,
  smith_machine_squats,
  spider_curl,
  split_squats,
  suitcase_deadlift,
  triceps_pushdown,
  upright_row,
  windshield_wiper
} from "~/datas/exercices/coreExercices";
import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { ProgramVariation, ProgramTemplate } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

const intermediateTemplate: ProgramTemplate = {
  id: 'd7bb2f09-b36e-4080-be01-57d0460ed894',
  name: 'Template par defaut intermediaire',
  description: null,
  weeks: [{
    id: 'fab414da-5032-4cef-b58f-d291e86c4e9d',
    name: 'Semaine 1',
    trainings: [
      {
        id: '018b9efe-f6c3-4b85-b9f6-a8d1aec72ac5',
        name: 'Lundi (upper)',
        training_exercices: [
          {
            id: 'b2b7d25b-595f-4239-8e60-b8a6fab56cfd',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '51c49837-892d-4da2-b54c-669d507aa2ef',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '6efaa894-19d7-4ad3-9fc5-3302793f60dd',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8394027f-bca7-4526-a3dd-490b4df31aca',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fd64ad7a-faa8-4cba-abde-fa12bff28cd9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c4a24096-590e-4ece-8479-28183cadb6a7',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c5198041-2a0b-4c64-976a-5873830c56a4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e6398fec-7a89-4dcb-93ab-0dbb3d454025',
                is_done: false,
                personal_record: false,
                repetitions: '6-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '62bc0757-fd42-433b-a195-2e99613d4e2f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'a1a8cce7-a860-4567-9369-933ee21c5afa',
                exercice_id: dips.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'bb5229a5-20ac-4c38-b75a-a2f0e7a05895',
                exercice_id: bench_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '7bb8e01b-ee0f-4fca-81a5-88704d7dc440',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '2d0d19cc-343e-4192-8401-f664032d5534',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '942d09f6-8830-483d-84e9-86a49a61be25',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4643dea1-dab3-43ab-b9e0-a19237981109',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '31811cd1-4d77-476e-94a7-2bbb6f3595a1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8f8fa862-6437-49cb-993c-24ed9809c639',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fef7ae00-fb40-45a1-8c53-04a85134fa6e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '60513d4c-0da9-46b1-9740-70762984fdb4',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c696d449-9a1a-4016-b281-720862c66678',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'af864799-a9bb-4898-8916-8344878579af',
                exercice_id: dumbbell_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '8991703a-43a0-42d4-bbb5-871d533c652e',
                exercice_id: incline_rows.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'c3729fbf-6cb7-4538-b581-4159dc6ca0e4',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '308b8b64-5237-46ca-a439-06d492b7e7d1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'df1cfbae-fe69-4b4f-9b20-587ff16a7ae6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '50d88ed3-c6e8-4d85-b4f9-836019249b6a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '3ec9cb8d-8e19-4ac6-811e-3beb1a6c228a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '99de7156-ad95-470f-9e02-6058fc9d047d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a2c1fef7-ed31-44ee-8402-40c3e19c4ba6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'dcb39cc1-be18-4d5d-9cbf-fa92f79ae86c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'ab4c54a0-9745-461d-be08-323f63a6f80f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'ec6c17c8-37c5-42a7-9f02-b95561eda185',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f23beb0d-06c0-4efc-aefc-df1f018c953e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '9366cf14-195d-4cdc-be9c-6c8c69e01c8f',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '55a9d3a9-2ec0-46e2-99c5-775ceaa1b7d5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '48af7dc3-3494-45ed-94ba-33b3de5f4825',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a87c382b-cf96-43d8-a754-0c6b3f2407bf',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2cd4afd1-476f-406d-9b26-c71428a2540b',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'ae8ff099-c0a9-4c83-8433-848786708104',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '27faf019-a2b4-4f58-a8d8-fb378d25d2f5',
                exercice_id: barbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '1d732f69-bf19-4a65-a17b-10927832045d',
                exercice_id: dumbbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '8e05cbef-5842-43e2-b5b7-502153db6a80',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b21ffbbd-053f-4baa-8476-938b470efd0c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'ab3e379e-1cb8-4b16-9428-c05d454cc2f6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c4a8389c-4ae5-4493-a916-12a1f8bb01b5',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '0721fc89-01b4-40e5-ab65-edd116b37cea',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '4d44e1ce-0123-40e4-b340-f345316ebbed',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c72c17e3-6fd3-45e6-8df0-769d07adff7c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'd38bcd22-72e6-4a36-827a-d69e83c6c87d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '50e02f8d-b6ff-40a3-a2f9-2aadd5a465ce',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'dea972e7-4895-47ab-a47d-01c6b60e9349',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f7e24a25-476e-43e8-84f4-3eb06dd2d91c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cb9a0a40-293d-4b21-a2a9-df9316e14da1',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd9388f4e-d68e-4c72-a69a-55ae11945fb0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8ef83681-3cc3-46be-9d92-750c763eddda',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5e39bd71-df7f-4c6b-9bbd-11176a0976d2',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '33e0fc43-b6b5-4977-a9fe-61e2f96670bb',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '82b39e61-ed75-462e-aa8c-3cc709916e39',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'd9bd7fc9-a643-4bcb-9796-00a8c51857ac',
                exercice_id: EZ_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '6dcec0a6-a179-4b71-8521-7556491f2cd2',
                exercice_id: dumbbell_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'c9c8c12d-d7fc-4a42-aec7-39125de4d0b0',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1d29dddb-b5fa-4e2e-ac0c-74a725e04f41',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '42331225-4a20-4d44-a141-7f138b03eb8f',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '589499aa-11c8-44bc-be0f-95ba496f5b94',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '874309c7-f41f-4b7b-bde2-c9db0c3b279b',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '911ee085-60da-42f9-9625-4e60ab2f83e8',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2d93da24-864e-4483-a360-1319aaf93dd9',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '9d9e97dd-210a-408f-816c-10ae2f6ffda2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '0472d21c-014a-4a1d-ae1e-778e71b99e4a',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f60bead9-5932-4d7a-a0e1-481b755edbbe',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '462a26f2-bbf2-4b62-84cb-39b5350a979e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '78ada472-6dae-4468-8369-7cf3ed06c649',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '01895834-f59e-4b1c-842c-240ee8687a1c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8f22c5fc-ce50-40ae-9875-f616606120a2',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '80fb643c-1863-496c-8ac2-71a921a8a067',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e97fac1f-373c-4194-b4e2-0cc051dbf168',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8b19da6a-1613-49b7-847c-ee314924d8cc',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '7a410a44-7295-4ef9-93e0-c8244a5d8a32',
                exercice_id: rope_triceps_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'cbeafe5c-a9ed-4321-9f2b-822a2ba881d2',
                exercice_id: katana_triceps_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '67b19d0e-3ffe-4a5e-af4e-73c8c4389cfe',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '252fc8ec-2ec3-43fd-a415-d02c71dba85e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5a3cc3f2-3595-4a8d-96a3-63117c761ef6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '056ddecd-f79a-4421-b39a-5460fe0f0970',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '54a3999e-8575-4295-9a82-9aca72f1ac08',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '97593998-a720-4b6b-b23f-71e2226a42ec',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '76b91007-ec2c-4ef6-8268-64ac02f9a061',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '7bd2e9b0-fd92-42cf-9c14-2b998ecfcf2d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'b71abf35-0392-4c26-a62e-7cbc3c3638f7',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '4c9d4393-a89d-44e4-9f4c-99b6a4bb1f21',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '460e655f-24e3-419b-83ca-880b6478c72e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '763c3239-1ea4-4576-b5f3-fe29dddd77a4',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'cc491041-e2fe-4518-be8f-1fbe77c78889',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '9f810c71-d30d-443d-9521-ac42cfc672bd',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '7b5040db-1af2-49a8-b135-0b927c9967c8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2cc17a06-63fc-4631-8875-7ed73fddc9ad',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '94ce189e-e749-4a21-b746-591e2fd64e8f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '179898bb-cfdb-40cb-9772-49ed821d2e54',
                exercice_id: cable_lateral_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'b8c755f8-d883-4401-8821-1e3295175748',
                exercice_id: powel_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'bd863efe-44f0-4ec3-98bb-f84f611a5785',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '80d5c39a-e120-411d-945c-dec54280ca3b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'dd8e86b2-e729-471d-9563-fd54ff34ec7c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '14ccfcc5-13fc-465c-9aa5-63201686f802',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c7531fe9-de9b-49e2-83da-4f95e7a9ebd1',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a62e1a24-e929-4db4-b0b3-1a902052bdc3',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'fdaae74b-7029-46e0-a3be-cfb54fc71e56',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b6053eb5-6c46-449f-84e5-befa9d54145e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'e7ed0624-50da-4b05-be70-2fee0abf1419',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '565fd849-e333-4325-b4f4-d57f2f350233',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '56e8815a-a52c-453a-a5d1-119130f21055',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '73e832d2-6186-4a48-8f7d-80bca0870f0e',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9d6016b5-1498-4e22-8097-fa4784db7f71',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c26e6413-05bf-47cc-8998-450bd9aac0d5',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5586916b-840e-4a6d-ae05-488e564de35f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4ca766f8-b648-4409-b28a-1508c223c7e3',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9c09a94f-31ef-401b-b419-48e312816e08',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '658098e5-de9a-4158-90fa-2956f4cb047a',
                exercice_id: sit_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'c98d5758-5fce-4212-86de-632ff15261e2',
                exercice_id: cannonball_crunches.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'a0b255f1-f8ae-4d40-a32d-86c701afdaff',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'e153d318-0d18-4ec9-ab13-946a3ac693de',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'bc3e649f-556b-49d5-9820-d810b968bce9',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2b489213-a5db-45b6-b977-4c7660493a2e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '37e62f84-fe9b-4752-aa20-ab56df35ee8a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '639aabbd-2cc3-4713-9305-3477db1d8db2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'd8177f7d-ff9a-4583-a6cb-414c83416fcc',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '860a02bb-3e69-42c7-bd17-8200bc236737',
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
        id: 'fb484294-18f6-4a1c-a61c-9aef43cd57fd',
        name: 'Mardi (lower)',
        training_exercices: [
          {
            id: 'd87d8fbd-f498-44c0-a941-6ec032683538',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'a2caddf9-ead5-4731-80c6-d8e573152e36',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e79f185a-62c7-43b9-8b13-921ca221ba19',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '28726fe7-6fcb-43d5-8389-cedd7ef534fd',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '227a3c27-184a-4030-9913-d32fcb98974a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f3dfbf52-0d4d-4e00-93e8-4d00b617e775',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c9bc3863-0cb3-41e5-8fc2-33c8697a6b26',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ed0d25bd-c713-4558-978c-f00a41f501ed',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '69fbdec4-6ffc-4f80-84be-437a334c4d56',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '154c0287-4e86-4cc5-bfcf-e3f2728fb332',
                exercice_id: low_bar_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '07a0bf45-6a3c-4a69-94fd-14912b7c099a',
                exercice_id: hack_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'bdb325c0-2034-49e2-be4f-69d66cbbd013',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a17e2560-b1fe-415d-aa46-a4048237afda',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'e9638588-c0e6-4c0e-9457-cc0f8bf33a65',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '427e090c-8f2a-45b4-9bc3-4eca78e3cc18',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '844cd3a1-29a0-4e35-b9f8-81b925e34bc6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'ef9b4ccd-ef18-4f60-bf77-1be859bb7b90',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '412ffeff-bbb6-4e8f-9169-87b44dd7c75f',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '26ca95d4-b583-4ccb-886d-01557bb32ff4',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'e1cff7ad-57e3-4fcb-a484-c2c79e3bedb3',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '62bad545-2c8c-4bb8-a35d-e4be37573c10',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '7a9c7ae8-87f1-4693-a8df-fec4b0365991',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cfb88914-3f8d-4872-a276-1b177c2d6ea9',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f0cd0132-38bc-49d5-af60-432611a0ea10',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '846fb125-42ad-468e-935d-cadb36e4e73c',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '516e156d-35fc-4d0e-b393-a9e6dbdde2cb',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7075487f-4ace-4ceb-95aa-6e7499987390',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b3b8bc37-6144-4d91-b8bc-95b4ba5b15af',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'eea043b2-9d9e-4021-aa8c-f5b1fe955373',
                exercice_id: seated_calf_raise.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '9267a04e-aa6b-41a6-b638-a0fd6454ed1c',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'ee463ccb-6eda-4c96-8478-c15c0300c044',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5786eaaa-0459-4bb1-baf4-0429c1a775d5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '3f081475-18af-497e-9278-6ff56869b2c4',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b460af53-4234-445a-8d4e-7497a7422405',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7a197cd0-e972-4180-a37c-220a4d082b23',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8c9ebd2d-3e53-41f1-a121-8602d89dbacd',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '454a004d-692c-42cc-813b-e6151a994236',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5e37077d-ae7a-4a29-b5a7-491dc0dd4ac9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '2cf301d5-ee0c-474d-a8be-6c1453bad747',
                exercice_id: barbell_power_shrug.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '8c64332f-a5fd-46d4-a1a9-54a97dfa406e',
                exercice_id: clean_pull.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'e9341a39-5856-471a-b202-47ea7b752012',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b12a535b-31a2-41cb-8ddb-1419114181b1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2cc12c3a-f58d-4a40-b7b5-580624aa24f7',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '3e865261-8293-46d0-ad42-fc77a4a28159',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '80676f2a-8a21-457a-bfe9-a9ae2137cdf6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a8b6bda3-7b37-431b-9dfb-20e2f8a0c79a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '39d8fcb3-1bc5-4e2f-8cb0-0d67f50388f2',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '94877a3e-5deb-4eef-895b-97af9cf8fa4c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '91f70e19-f2ee-481f-aa5f-cfdc3a1e4b1e',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd90bd506-ee85-42d0-b35e-b786c8c84fa7',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '2b51cf72-96c8-4bdf-abb4-faeefd3197d4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '63b0027f-34f7-4199-b964-e5715d9b5827',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '50a0eafc-93ae-4125-af37-166b5518ad61',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '641c2dc4-e382-4e1f-bfc6-6ed3f3a44445',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '3c04ca99-08e3-4871-9943-463b4a5ef665',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8575050c-779c-4ce6-b950-0743157659e7',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a933efa9-ed0f-4319-96c9-28a97f0ca384',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'f0383648-eb1c-442e-ba36-ea67a3ce13eb',
                exercice_id: leg_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: 'e0b323c4-3756-47f6-a18c-2fbd82c95560',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd4bc6191-c287-4521-a7b0-54fd1ddc5e82',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '65824252-703a-419c-bcee-3be8398645d6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f7f2d2ef-3756-4961-8527-641a982af564',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a360070e-2f21-4fc9-b5eb-0e1f36057043',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'df1fb926-1e01-4069-9ca8-3d49b456c97a',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fd4392d0-7fd0-4d6a-8602-d1722ce6095b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ac92e20b-e3b8-4794-8ca6-23dbe445ec8c',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd971ce4a-bd4b-45e5-a038-fc250edcdc4b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'fd43c921-6ac4-4baa-bef1-75d917352608',
                exercice_id: split_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'b30b85c5-8126-405d-a13e-3357e68889d5',
                exercice_id: leg_extensions.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '78039759-eb14-423d-903e-36dfcc508332',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '6aea16a4-277f-46bb-b476-7354256dac81',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5c9dc1b4-18f4-4fd7-ab22-6d3a074e44ca',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2ac13012-d9ac-4b6d-b369-f55c1491c89b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '6eb6ff90-dba4-4520-ab55-937b408d47c0',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '69aa9b65-e88e-484d-a8dd-fe77a1001f9f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '30d21f7c-9196-4dfb-a64c-43c7e420b58e',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a7337a6b-b3c7-401e-8aa6-26986d676ecb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '2787b2f1-1ece-415e-ad43-db5030f6e651',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd17d351d-df12-40bf-a35c-156cb1b12ea3',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd2a239fa-a00e-4b5e-a39b-7c3868c03dcb',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cf88abd6-f9dc-4665-9312-9835f3043188',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e444123b-74db-4231-b379-f63c2906120e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '34c0c0ad-8687-4c0c-8518-ae41d727e4d1',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1715d9fb-a51a-4ff6-9238-1eed3a0b35c3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '131e330e-0ce0-4436-882e-d70a737f20fe',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0f268be6-df37-4d7e-8e18-a5bc4eb65637',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '274dfeb4-34c9-47ec-869e-7f775c7c5dad',
                exercice_id: neck_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '1ed2a8c3-fd9e-4b02-8056-7587d96bb0ea',
                exercice_id: neck_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          }
        ]
      },
      {
        id: '4f2ec0e4-547b-4c18-8056-f3c6d7f05826',
        name: 'Mercredi (bras)',
        training_exercices: [
          {
            id: 'fbce7cfb-7826-4481-a410-5c6e5cdd8fcd',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'c379be3e-46e3-4861-bc57-239f61445e12',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '933b07e7-ea87-4f88-908b-e8c931cc5e6b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c24c96e4-3f5e-42a9-9c40-7ebfe8b19e50',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1e8bb82c-721b-4701-9535-c8d95401f5fc',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b270dddb-b7cc-40e0-bf7c-0b73fe03ec8c',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0012e8bd-3149-4b5a-a702-5304a0320da5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4cde874e-14b4-4839-8d7a-d0be95ec120e',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'da982f93-b412-470d-8b3e-0c8253b1ab82',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '31c6aff4-4ec6-41c4-90e7-c8f866cd3d0d',
                exercice_id: close_grip_bench.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'bfb1d095-3853-4078-892f-b3b9aa1f07e4',
                exercice_id: ring_push_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'eaf8e3ea-09c1-4961-91a5-4a6e11519563',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'eb56ac52-ef6c-4be2-85ae-05c4bafc1199',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '1160102b-318a-4e65-82cb-6b7b542cd497',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '558ee2ec-779e-4c86-a179-af7df8fa09e1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'fb50ca04-abeb-4f49-8f23-4b7eec60a51c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1dfae7bc-1e42-44ff-97d5-6ba0ceebfde3',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f5a331f9-9607-4c5f-85bd-67ea4befefaa',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b3e51418-9cfd-4267-ae70-1b309500f863',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '2d1a2bfc-abce-4fe6-bb44-0eb48143f477',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f628929d-3cb5-45f1-b214-55d6fd64c909',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e2d6f827-77f6-4b6d-a32a-c9c1da4a0130',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '220bb431-1ebf-47d2-b719-2f662c8436d0',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '6383cb58-98e7-4645-90c1-f6f7ea9035a9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '438dc575-d3f4-42da-8d1e-3f44351796a7',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e82d12bd-edb4-4efb-a1ab-185d7e60256d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd5b0ce80-0c89-4d9d-a102-12c0d5102763',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '960a1457-b5e6-4d30-a9a2-7874148ebc63',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '5a2293c8-e8d6-4685-906d-5e8c54224ffb',
                exercice_id: dumbbell_pullover.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '0c3524d9-e9ac-41fc-a1cb-224304b6d8db',
                exercice_id: machine_pullover.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '300a0629-707b-44f4-aec4-b2dff61af50a',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'dfe440b3-fd5d-45b7-929a-8009ef54561b',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e9826854-4605-4d40-97b0-ce7e4616480f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'a8494c14-3309-4fe2-908c-8457d7e2ad0e',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '11250bed-1f3a-4102-b9c0-ba7e38b4cc62',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0de7990d-df4f-401a-a51f-5bf12ed161e9',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '30a10ced-95e1-43f0-a658-338e467de378',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0dccdd38-9418-4aff-96cf-ffd6ba5d750d',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0b6d7612-3e64-4da6-8353-dd64b5dd17f8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '162c5f10-e4c6-47d4-9d34-502645edd0e6',
                exercice_id: jm_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '5ae5518a-501b-473a-82d8-b6e9bb4c25ef',
                exercice_id: skull_crushers.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '276dcb7f-d2e4-4b3a-91b3-edf4f50bc0d8',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '57b2dbb8-e511-4abc-9ca6-1afbea85b0dc',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '70e0fe80-1dbb-425c-ad85-bdee283223d6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '791ea216-a4d0-4038-a72b-fb851025aeae',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '7c0eb05a-3509-49c4-b4ef-32f4817085e8',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'eb5b0178-43af-4bfd-81ce-066a6a228411',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a5b54d52-0b0f-48e9-b9af-b266c0968b55',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'bef0cc2e-ae85-486f-b8f6-9adf1a51711c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'fa8c329f-9613-4f1f-a7ef-207c5940a00d',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '45fa2231-7ac9-4506-87ba-ce215d57426b',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '57706e7d-5959-41dd-afe5-690530cb9bfc',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0da78443-11da-4395-bfd6-77e8f78b2776',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '4eda4e67-a53e-4ecb-9a12-2144528e382d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'fdbc3066-8509-4183-9b94-41cf450ce7b8',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '528b2930-0b07-4be8-ab54-b42c2323c43e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c7c164af-3f61-43ec-b813-06d9ffee4fe0',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9556d68c-beb3-4b9b-b1ce-27742c296af5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '9a5288f5-302b-4682-bd83-20d6ea402be3',
                exercice_id: ez_bar_preacher_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '2489ac8b-5301-43aa-b821-f2c7ffcf41dd',
                exercice_id: spider_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '37b46081-c7c1-40c2-88d0-e95f0fd92eba',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '90a759c8-0c35-4f5a-850c-f6e42bb298ab',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'eac36047-667c-4869-8974-d7d116e64377',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '860aaa81-8b5d-4ba9-b5a2-d41647f76011',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'ad08b809-4d9c-4fa6-b893-5c659a0daf68',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'd73af11c-96b1-4857-96f6-5c0c50578e96',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '4a41109f-5e6a-4e8a-b2e8-de9c2b4ac3ad',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b5be4cf8-4a7d-4d51-a794-4789746155b2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '72b5cd96-8b4d-4a49-b849-fb7d20c2bb3f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '10b5c5a6-79c1-469c-8479-c28ed28dbac5',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '08a98e37-33dd-4c81-bb4d-ae1173b6815b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0b4ff4a6-4220-4427-9952-6c45c48229c6',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '03a9d8b0-9ef9-4207-9232-c4c0eb809cc0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '382ed14a-086e-49d4-80b9-45020681d96c',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '7e440e76-70b0-43e3-931f-b4eb52cd988e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ec45b162-3f5c-4e6f-be63-389768d1fb58',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c9fdf4ee-2cd7-4f2a-b2ac-c4c3fd28cba8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '90742521-cfbf-4e09-915a-b2c404e87530',
                exercice_id: hammer_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '1d5fa4f7-8477-4c32-9610-83361b593f39',
                exercice_id: barbell_reverse_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '62fe7bea-40e2-4ef5-94d5-98349b227371',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '0e8da861-918f-45d5-a04e-88ba87a002c4',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8387857b-5134-43c3-b898-ea1df6a57ad0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c00bc120-b562-4b60-9473-c2259d0f8269',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0b334a72-6254-4912-a857-9d279d940d74',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '98925c55-dff7-46aa-9633-983471d299d3',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'bdbc741e-371d-4954-bf42-d1d83a344d6d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '63b3af1c-0d02-4dca-ab8b-c52ff11d58da',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '4fd88810-876c-429f-a5d0-7694c1b4819a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '670daf87-411f-44f1-9617-ce15b15bacee',
                exercice_id: upright_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '3cb47827-1e11-4742-b90b-e081bbb73c52',
                exercice_id: face_pull.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'e038339e-a876-4029-8df5-fa321b78dc2d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '4f2d24ae-1e66-409b-943c-f828b9ca2740',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'e9add35b-e47e-4be7-abff-eeeddeae544d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '75c32943-3b4e-45f6-9897-d6aa6eaa0ce9',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'adf7a9dd-6f67-4bc9-b02f-9f9f32370914',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '942b3dec-e1ef-4611-9817-416d86b50081',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '80571cc3-ad0a-4018-bcdc-3215dd4e573e',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '3b40180a-42a0-4d21-acda-23cb88458a98',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '3e442431-bd0a-455f-aa42-977eddfd95d4',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '7d153de7-be18-4131-867a-5161ac54f5d1',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '6795316a-b365-435b-94c5-12db160a14d6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7260f334-4922-45bd-a7cd-58f58bc1725f',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '7f54541f-eba2-455d-938c-16e42cb2cd4d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7e57d42c-5545-4601-b827-83108c176032',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '966714b5-4db5-4984-9638-cda6c40b30e0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c2967abc-c6fc-4cd0-9885-26b1925dc258',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e610db26-48b0-4b94-9a83-a47cc4f48acf',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '6cdc57e5-a75d-4393-a438-f6be41821c4e',
                exercice_id: windshield_wiper.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '25cdc59e-4336-402b-b5aa-5a535cc93737',
                exercice_id: russian_twists.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '4e8725a8-3c57-46c0-9f69-9be46351c381',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '67f7693a-a1e6-456e-9c08-bc74e092b918',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f2478643-ec18-4811-9851-cacfab595ba5',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'b57a6b98-0eb5-4252-a24c-49cd30fab249',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f9b31f0c-09ba-451b-8eeb-65badc8eb72a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '34c07d39-ef61-438c-bf84-c21f063147fa',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '4a802177-1f7b-405d-a122-a3321f2fe3d6',
                    is_done: false,
                    personal_record: false,
                    repetitions: '10-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'd90c36f7-4c54-40b6-9266-9e33b792ddb4',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: '121bfd8c-6b4a-4be9-b621-094f16989b6e',
        name: 'Vendredi (upper)',
        training_exercices: [
          {
            id: '53da3e39-0985-4354-929b-fd5b0d976c37',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '640e3e68-6de3-44ee-bf7d-6350a7946ceb',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b0d1e9e1-5b49-4777-8579-ebc2834542be',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'afbce757-9088-4a24-b02f-cf2962627daf',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '18f56622-cd5f-4d8e-90c2-5188888e0858',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2f91001b-9ae4-455e-a078-59a4ee4b0f7d',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '4540fac4-5e62-4efd-8a82-31429a3733aa',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7aa3b5ec-9bed-46f8-b1bd-35c81b9fb63f',
                is_done: false,
                personal_record: false,
                repetitions: '6-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '3823ee11-a533-495f-8490-d7714eb12c74',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '39731e89-ca2c-4985-9078-03f9cb37176a',
                exercice_id: incline_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'fdff2454-cd4e-4065-a5a8-8fac96da31d7',
                exercice_id: ad_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '21611b77-7ab1-408e-a1b9-c982894d1dcd',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'acfba5dd-d7a0-4cd3-9ebc-afb755c24e31',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '8d28c11b-d74d-422b-8927-82318979950d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '64f42337-0b1f-4dc4-877e-2c5d45bfb9aa',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '36ce3f57-07f1-4e32-a154-e8638ee4891e',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a1dded5b-0330-4c58-b29a-0ab2dca6e26a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '471b16b3-f5bb-451b-898f-c23ff5aeffdd',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-12',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '0ec777c0-7e88-4f79-9ce2-9da856dc4fd7',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '0965de6f-17fd-44b1-882e-a4f2344df78e',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '23f3e45c-8f5d-4a0d-b4d0-8ceb4cc2adca',
                is_done: false,
                personal_record: false,
                repetitions: '10-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '4e6f9f77-351a-4fb9-bd0a-0d12a2e0e80e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '088c45c9-82c5-4e7b-871d-3554f73f647e',
                is_done: false,
                personal_record: false,
                repetitions: '10-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '03b96db0-c2b5-4cfe-99ab-31f42f574c7f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '38c67bad-b319-46fb-b79c-36ce96b71b5e',
                is_done: false,
                personal_record: false,
                repetitions: '10-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'c3ee9e22-c962-4cb5-a06e-a3be9c769e03',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '68fb18e0-7853-4dba-ad5b-f23940d68c86',
                exercice_id: dumbbell_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '23a1a2ce-1d60-41d5-8da3-be5867be8437',
                exercice_id: meadows_rows.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '4464e58e-a1c5-4634-bf6f-a0a0c919d44b',
                    is_done: false,
                    personal_record: false,
                    repetitions: '12-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c5324648-6169-4175-b57c-216e38cd8812',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '81acf1e8-f7cf-408c-a550-bd703600dbbd',
                    is_done: false,
                    personal_record: false,
                    repetitions: '12-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '7fb03976-6d94-4188-a2ea-c122692e103f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f325d354-b86a-4d80-978f-b2dba710230a',
                    is_done: false,
                    personal_record: false,
                    repetitions: '12-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '222c44fd-8087-4d65-bdcf-53cd855f6dfd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'b72adac8-368c-4de0-8646-e1ae2d00d1a3',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '4cf94f63-deec-4306-a929-a2061cd1cd81',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '697aec91-60ab-46e8-9310-5ec6983067a9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8e889349-33f7-458e-a7f3-cd9b2412417e',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a4a28ed6-aa32-4343-909d-06d8025c5f08',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '412c97a7-0a3f-4d75-bb92-e8ed61579b8f',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '93c86c32-e51f-45c1-964c-b8ef0cd509f5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '372dd748-b068-4b1c-ac19-f0902ed1430b',
                exercice_id: chin_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'd3ecddc1-6055-4174-aadb-c60e48804f46',
                exercice_id: neutral_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '0c6ddc57-8b22-473b-b28f-dd5c52342c8c',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '01940267-3798-4796-aced-dfc900bcf71f',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '20737d9c-8315-4dc2-b19c-10456f90a8c5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd02b29b5-0504-47ba-b080-4ccae06276f8',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '09ad3408-700c-43b8-942f-5f87706f4fc6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '29d4f0e9-5dd8-49ee-b241-de6d497d040c',
                is_done: false,
                personal_record: false,
                repetitions: '10-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8ba9a4c6-fc8b-4158-99a3-48680b2e83b3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '473aaa50-fa4e-4c8a-b392-f857295ded6b',
                exercice_id: triceps_pushdown.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '341c169d-8bbc-497f-adb8-1f29534851d1',
                exercice_id: cross_body_triceps_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: '8009e05f-47fa-40d6-88ec-4a1523fe7d36',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '92adc332-1658-452e-b717-4f96106518b7',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a6d8c84e-d9c0-4295-aa21-49e589220203',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4c8ecdd4-4e56-474d-b396-3c382d423102',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '867bc759-11b9-4754-a08e-0e80b40bf71d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '37085aa5-151b-4b40-93bb-7467610a3577',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'bec74cd2-9cb3-4620-a0e2-0ca767380a22',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '961f5c8e-7796-4cc8-bd63-67d6f1414ff6',
                exercice_id: dumbbel_fly_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '8bbfa7a9-22b2-4c20-a983-5de3092b76a4',
                exercice_id: cable_flies.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '2b9d84d9-5e2f-48ad-b051-e6f8a78aeb5c',
                    is_done: false,
                    personal_record: false,
                    repetitions: '12-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'a4e22e6c-8d37-4cd1-94fa-6189c7f584a1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '3f3dc6c2-4595-42e8-9b22-9af5525c0bad',
                    is_done: false,
                    personal_record: false,
                    repetitions: '12-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '87283b3c-05ab-4614-a92f-d98c7676dca7',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'ff34a75f-0bc8-4433-b6e3-777036d2a71f',
                    is_done: false,
                    personal_record: false,
                    repetitions: '12-15',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1d3fe846-c593-464b-bdba-dd0913f74901',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'd9a0bc43-dfb9-48ac-85b0-6d04d5f44a4c',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '2ccea226-b895-4602-b855-22e67eecc0c6',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0f39b7cb-fb5c-47cd-84ed-4730a3bf0663',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '361141a6-70ce-4458-8fb8-e087bd04b677',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fb0ad065-1560-429f-abbf-326b584b533b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '83db0fa0-49b8-4a87-839f-65c2f414ff99',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '310b4370-57ab-44aa-8e7c-777025aba259',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '0e3b86a3-92ec-4c84-bbf9-83e7caab62ef',
                exercice_id: hammer_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '608633e3-4b71-49f5-8c37-9b6c9b5fe6db',
                exercice_id: bayesian_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          }
        ]
      },
      {
        id: 'dfb00994-c3ab-453e-9d88-30152c172b90',
        name: 'Samedi (lower)',
        training_exercices: [
          {
            id: '51c9779a-78cc-4be0-8512-9d793cf78a15',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '97a0efef-50b0-45f8-b83f-1a462159bccc',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '0393a5c8-6b68-4a15-930a-499468bd3cd9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2291c1b2-b3d7-41ae-a14d-12e65cc8ec2b',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'fd898ad6-3e42-40ce-9262-eb80e3d7e128',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '780d8cf8-b04b-4464-b07c-3e0ac092e49c',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8f271742-1186-4368-8547-140ba48c3203',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'f72dd86d-a379-40fd-873c-90f6c6230566',
                exercice_id: romanian_deadlift.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'b6fae135-118f-4dcb-beb8-8054ba16d0bb',
                exercice_id: good_morning.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'c16bc8a9-1442-4b84-8566-ffdc2427967d',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'e7260d84-1d5b-45fa-bb83-32592ae43d17',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f433710d-bec7-438d-843f-f6ae4a887ca0',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '91b49488-1e4a-4018-8be3-4b8bc797c7e8',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '459548d8-f4e5-4935-b5fa-53ab6fd68608',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'c38ea3c8-e79e-48a6-9b45-993cfb298808',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '5f72e897-c17d-4c46-b415-61ad842810c4',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'c1ab79ef-92d8-4b6f-b965-733d7c6e11b2',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1bc5458c-8a73-4f13-b9b3-1079171338b9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6d598ca0-69e5-427a-a6ca-118685e9d8dc',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '68ce1c0d-efc7-4fc8-b0df-802548afdadb',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1c53fad3-5dec-436b-8572-6ce20b1304bb',
                is_done: false,
                personal_record: false,
                repetitions: '12-15',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'f46428ea-d423-44c2-98a9-fd91e2e93137',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '3a76ae9c-4713-4c46-bf73-89c3f58e4371',
                exercice_id: seated_calf_raise.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: 'b0ca1499-52ec-4ece-95a0-6e72a9355f2f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '15328eeb-2f3d-4c5c-a8b4-0d267c515e4d',
                is_done: false,
                personal_record: false,
                repetitions: '8-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '173185b9-98f7-455a-9658-0189cddcc5d9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '225fc1b6-f79a-467d-a6c8-fdb0d2b6b290',
                is_done: false,
                personal_record: false,
                repetitions: '8-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'cc1c4a06-7bb6-40ef-b4df-f39378029c01',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f97bf16f-3667-4410-baa4-1fcd9d94fed1',
                is_done: false,
                personal_record: false,
                repetitions: '8-10',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '27f93df2-10c2-44bf-9aa7-484d7de08e44',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'b067c2fc-ebe5-4caa-9cec-33241399e01d',
                exercice_id: suitcase_deadlift.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: '1d1441d9-251a-4f8d-af2a-23d41fba4451',
                exercice_id: farmers_carries.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '4643a1ac-bccb-40df-9ffc-26762ec68934',
                    is_done: false,
                    personal_record: false,
                    repetitions: 30,
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'bcfed497-e6b6-4a53-b435-d8f9393f9060',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: '30 mètres'
                    }
                  },
                  {
                    id: '4be3915f-97cd-45f6-8c65-8453611dc909',
                    is_done: false,
                    personal_record: false,
                    repetitions: 30,
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '7861bb86-de87-4821-a19c-b5d073051524',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: '30 mètres'
                    }
                  },
                  {
                    id: 'bc9a55bd-b811-45ab-9736-97d2378d01e9',
                    is_done: false,
                    personal_record: false,
                    repetitions: 30,
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '4326a21c-cad3-40ec-ad96-9b53666f5cfb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: '30 mètres'
                    }
                  }
                ]
              },
            ]
          },
          {
            id: '88af509c-ff6a-49a1-b4ae-59a462b3b474',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '8991bd66-1ade-4d71-9635-a1e4ae68f4e1',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'eafc64f2-4e6f-4ca1-84c4-fff0a6f35cf6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '62920779-5fd4-4c08-b564-6ddce30d30b7',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '77f26dda-6d24-41b4-9542-e53f058b105f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'bd11b4e4-076e-4d66-9adb-d2e48e802a55',
                is_done: false,
                personal_record: false,
                repetitions: '15-20',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5a041155-b027-4db1-8f53-6004615edea5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '406440a1-efbe-41a1-8d5c-b1a15b879211',
                exercice_id: neck_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'f3333f89-9189-4054-b927-91fd721f894d',
                exercice_id: neck_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          },
          {
            id: 'aa5dd549-15b9-4373-925c-bb30af089928',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '190b9102-c2fa-4d86-aa84-31b2a3dca204',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8d48609a-41b9-46e3-b94f-6e20c459f8da',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '276c1aa5-0136-4132-babd-8999a3c74a08',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '9be598a2-47be-49d0-a785-3e46f38530cd',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ed46c2a0-2d78-48b8-b6c1-72e35648cc57',
                is_done: false,
                personal_record: false,
                repetitions: '8-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '682a6f6f-933f-48b7-bc06-7c59b1ffab91',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'a3644c72-57c0-4c57-a118-4aebdd4fe31f',
                exercice_id: leg_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'b15e446e-a187-4284-a2b2-a23424128b03',
                exercice_id: smith_machine_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'ec3d774f-4c91-4c01-ae57-9bfd6b8869fe',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1c17b04a-afdb-46ca-abfc-dbeac4e43afd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'acbf8c48-d95d-4f5c-a0b0-910236351655',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '6e71e9dc-1a3c-46b4-bfcb-c6abea7af85b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '04041a56-954a-4aff-8caf-b21e7da54311',
                    is_done: false,
                    personal_record: false,
                    repetitions: '8-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '206705b2-2a8a-4e7e-a1af-e0d090c53f9c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '8f11a7c9-24f7-41e6-b5b0-fed3d9f06dee',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '34569a58-8bfc-44b6-af8d-53404a1324a2',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '114b88c5-f472-4cf1-afad-edae17da27f4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '753d2a79-0871-4019-8c1f-99c88d4c35b9',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '8b479a7d-2de9-4f0f-a96e-8dbaa1790ebe',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ac5b15fa-7017-48ec-9aea-779c1dccc6d4',
                is_done: false,
                personal_record: false,
                repetitions: '6-12',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '5a7a744a-2b2a-4ecc-a09e-f00ecec3c6a5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'ab7f8b8a-7b4c-4014-8c97-a5c7209cb1f9',
                exercice_id: cable_crunch.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              },
              {
                id: 'a97566db-3982-47e6-83f5-451e7690fd05',
                exercice_id: dragon_flag.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: []
              }
            ]
          }
        ]
      }
    ],
  }]
}

export const IntermediateVariation: ProgramVariation = {
  id: '{uuid}',
  name: 'Intermédiaire',
  description: `
    La variation "intermédiaire" est conçue pour les haltérophiles qui ont dépassé le stade débutant et qui recherchent une approche structurée pour gagner de la masse musculaire de manière efficace.<br>
    Ce programme met l'accent sur un équilibre entre une haute fréquence, un volume moyen et une intensité moyenne à élevée pour stimuler la croissance musculaire sans entraver la récupération.<br>
    Voici un aperçu de la structure du programme et de ce à quoi les participants peuvent s'attendre :<br><br>
    <b>Fréquence et structure :</b> Le programme fonctionne sur un emploi du temps d'entraînement de 5 jours, utilisant une répartition haut-bas, répétée deux fois avec une journée supplémentaire dédiée à l'entraînement des bras. Cette configuration garantit que chaque groupe musculaire majeur est ciblé deux fois par semaine pour une stimulation optimale de la croissance.<br><br>
    <b>Durée et efficacité :</b> Chaque session d'entraînement est conçue pour être efficace, durant entre 60 et 80 minutes. L'incorporation de supersets joue un rôle crucial en maintenant l'intensité de l'entraînement tout en assurant une efficacité temporelle.<br><br>
    <b>Structure de l'entraînement :</b><br>
    <ul class="list">
      <li class="list__item">Lundi - Upper 1</li>
      <li class="list__item">Mardi - Lower 1</li>
      <li class="list__item">Mercredi - Bras</li>
      <li class="list__item">Vendredi - Upper 2</li>
      <li class="list__item">Samedi - Lower 2</li>
    </ul><br>
    <b>Composantes de l'entraînement :</b><br>
    <ul class="list">
      <li class="list__item"><b>Entraînements upper :</b> Concentrés sur des mouvements composés et isolés, avec des variations de volume et d'intensité. L'inclusion d'exercices comme le développé couché, les tirages haltères, les développés militaires et le travail d'isolation pour les bras assure un entraînement complet du haut du corps.</li>
      <li class="list__item"><b>Entraînements lower :</b> Mettent l'accent sur les muscles des jambes à travers une variété d'exercices ciblant différents aspects des jambes, y compris les squats, les presses à jambes et les extensions de mollets. Les journées du bas du corps sont légèrement moins volumineuses par rapport aux journées du haut du corps, en accord avec la distribution stratégique de l'énergie et de l'attention du programme.</li>
      <li class="list__item"><b>Entraînement bras :</b> Spécifiquement dédiée au développement des bras, incorporant des exercices comme les développés couchés croisés, les pull-overs avec haltères et diverses variations de curls pour cibler les biceps, triceps et muscles de l'avant-bras.</li>
    </ul><br>
    <b>Volume et progression :</b> Le programme commence avec 3-4 séries par exercice, permettant une progression en volume et en intensité. La dernière partie de la semaine réduit légèrement le volume à 3 séries par exercice pour gérer la fatigue et préparer les stades avancés de l'entraînement.<br><br>
    <b>Récupération et adaptation :</b> La répartition est conçue pour prévenir le surentraînement et la fatigue excessive en alternant les groupes musculaires et en assurant une récupération adéquate, ce qui est vital pour un progrès continu et la croissance musculaire.<br><br>
    <b>Préparation avancée :</b> Au fur et à mesure que les participants progressent, le programme fournit une base pour passer à des stades d'entraînement plus avancés, en soulignant l'importance de ne pas se précipiter à travers les phases et de se concentrer sur une croissance cohérente et durable.<br><br>
    <b>Approche holistique :</b> En plus de l'hypertrophie musculaire, le programme inclut également des exercices pour la force fonctionnelle et la stabilité du tronc, améliorant la performance physique globale et l'esthétique.<br><br>
    Les haltérophiles sont encouragés à suivre le programme avec diligence et patience, en se concentrant sur une forme correcte, une surcharge progressive et une récupération pour maximiser les gains. La variation "intermediaire" ne consiste pas seulement à soulever des poids ; il s'agit de stimuler stratégiquement la croissance musculaire, d'améliorer la force et d'améliorer la composition corporelle grâce à un schéma d'entraînement bien structuré.
  `,
  templates: [
    intermediateTemplate,
  ]
}