import {
  EZ_curl,
  barbell_overhead_press,
  barbell_reverse_curl,
  barbell_row,
  bayesian_curls,
  bench_press,
  cable_flies,
  cable_lateral_raises,
  cannonball_crunches,
  dips, dumbbel_fly_press,
  dumbbell_curl,
  dumbbell_overhead_press,
  dumbbell_preacher_curls,
  dumbbell_row,
  french_press,
  hack_squat,
  hammer_curl,
  hanging_knee_raises,
  incline_press,
  katana_triceps_extension,
  leg_curls,
  leg_extensions,
  leg_press,
  leg_raises,
  low_bar_squat,
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
  sit_ups,
  skull_crushers,
  smith_machine_squats,
  split_squats
} from "~/datas/exercices/coreExercices";
import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { ProgramVariation, ProgramTemplate } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

const noviceTemplate: ProgramTemplate = {
  id: '4ea273d6-2196-432a-8e66-88a8b5091158',
  name: 'Novice',
  description: 'Programme de 3 trainings / semaine',
  weeks: [{
    // 1 seule semaine ou 3 semaines pour un hybride 531 ?
    id: 'b49c4855-567a-43b1-9212-d85fa18bc05b',
    name: 'Semaine 1',
    trainings: [
      {
        id: 'c0e0fd37-c99f-4f7b-8cd6-01d5309161f0',
        name: 'Lundi',
        training_exercices: [
          {
            id: '50bc9c65-9870-4348-83a4-89a1378a3668',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'a7bdce86-a838-4bb4-8a11-bf96fe425023',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd17be9e5-7749-41bf-ba59-7c3f91ef6876',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              },
              {
                id: 'ce647efc-871c-4800-a954-24df184d866b',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'b47acbbf-019c-452b-b4eb-b076878ca3ce',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              },
              {
                id: 'fb079d75-ef4b-4bc4-905b-ce2f34260ccb',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'e9391813-db17-42cd-b86a-ac0dcb83a1c6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              }
            ],
            recommended_training_exercices: [
              {
                id: '506bb22b-1cd7-4e77-9c18-8a12b47ad6d6',
                exercice_id: low_bar_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '9dff3c1b-bee9-4bc2-96e4-af5d9c6c3b8e',
                exercice_id: hack_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '23ec2ade-16b0-45ff-81dd-e0a475598f75',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '1362f3ee-7b06-4df2-8de4-6fe0a1bd9942',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '649cdfa0-89d8-4134-8196-5c073a3741be',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'fd6ea821-db5a-4ed5-959c-8abbda64d5d1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a7069668-b745-48be-8603-6872def07050',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '20669188-a3c3-4b5c-8d28-3a02cee10e94',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: '12bc0e71-f31a-4cb9-a536-60b611db7f2b',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'e2d3ca9c-a068-44f9-9c4c-95f0149d66f1',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '9a7f2684-d2ba-4d89-9628-e6be9f0d05f3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '01b91c1b-f062-46d0-85f1-2d54a9878073',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a3387c21-76d1-4b58-94cf-e830aa797d4e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '5e417980-d996-4bf4-befd-8f836ab3793c',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a25b38fe-f276-4eae-9645-129b06002dd2',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '6a4ec77e-57d2-4e1a-b799-5ca396d6a373',
                exercice_id: EZ_curl.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '0041eec7-aef7-4ba0-858a-7633caf52194',
                exercice_id: dumbbell_curl.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: 'b5c3ca83-aa25-4484-a61e-5a92f2a08fd7',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '84d18581-c574-4475-8fa8-91d1f3f8b5ba',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '7e5c960f-953a-4256-b686-e7f5a2ba0b9e',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '48cff4d7-ec1d-416e-a9c7-64d4bcf964a1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f8099cea-bee4-4b2a-9296-02fe5f617b0e',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '663027a6-0325-4f61-8483-b9e1407c4250',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'f8d2b5da-2064-4aeb-b5c8-f9de4049f946',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '4b6e727e-5618-498e-915e-385101aedbde',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '65a5acf2-da96-44a2-bb00-5754c6162c58',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd043c2ca-b3c3-41bf-8197-c7b636d94cfc',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '6ccd2544-d8b2-4daa-a00e-159895d77204',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'fb16b85e-49ef-4c6c-bf1d-65f67b4c6eca',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'eb3b8deb-711f-45e6-b217-0d0900758585',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'f21f9daa-70a5-4ec7-b42e-f3325ff6d5de',
                exercice_id: dips.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: 'e3e9e023-8e97-4c13-ba5e-ebd3df0b5bdf',
                exercice_id: bench_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: 'e2329a96-253a-4c85-9082-57dd47d8ec29',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '73c2208d-b3c6-4d6a-8523-018b54ea3807',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '2bb6a623-2401-4959-bef6-c3064561c875',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8659660d-2daf-45d3-8cf8-458109377561',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b06c335c-efdf-46d5-8b98-da97692c95c8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '84c9b4ef-e8a2-4319-961c-a01140690f65',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'eb0429bc-b4a0-4ab6-b7f8-65da5ba5b5c7',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '7b739bbb-94a6-4fbf-8823-4c22791532e7',
                exercice_id: dumbbell_row.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '238bdd28-76f1-494c-8110-95ef19153745',
                exercice_id: seated_cable_row.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: '33494645-cbeb-4556-9dba-dedcacc787aa',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '2f317339-9e2c-4936-b76e-9bcc73081fa5',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a9133030-05fe-48d3-b559-710c0fd24f58',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '334e07b4-515d-4955-b8bb-d179b4add0da',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '256f1b93-da0c-408a-b2cd-62594b3e7457',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '638a985f-a430-464b-b475-0f9bdc44468b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'e74a285a-1e27-4d3d-9116-c6501768d54a',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'debd0b71-df58-4391-b83d-32d14e4f65ff',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '80144aca-4a81-4a0c-a294-0d0aa0a7452c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '578bb093-c80e-4c4c-8208-21feec845067',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '3283f9c4-c8af-4db0-9e2f-278f5f69e569',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '86ce938d-0e2d-4059-a31d-1743b7028d37',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '6ea8624c-68ba-415f-852a-26ff430f6427',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '627e7929-4431-44ec-a3d6-fa4295fc122c',
                exercice_id: rope_triceps_extension.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: 'e51a5dce-9eaa-409b-b9f2-0fbab07290dd',
                exercice_id: katana_triceps_extension.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: 'feb3b754-72b3-4d15-b647-d4f1c7df9c09',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '6cc7c087-ae1c-49a5-938b-a970c6148821',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '937418fc-d7f6-4655-8dd6-3ac877cdeb94',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '083e6d76-b34b-48fd-ae7e-9cfdfcf8ed18',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '3aa42c1e-3cac-4aef-b2fa-ecaeff5efef9',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'b494323b-bfdc-43c4-88c5-42f23afef716',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: 'df01e451-f95b-4acf-9a47-df9b51430919',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'afa41d95-6373-4daf-83d0-fb08d8227e01',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '95de7725-cdb6-4391-9277-82802d51f6c3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '305010fa-70bd-4226-a80e-b260b226257e',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '6230de98-f80d-4da8-8a43-7a4db6774d50',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7d710e05-c279-433e-809e-7ceeee6a713c',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '137b7580-7a99-44b0-9c4c-98a99c6373d0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '903ed6b7-b1af-47f5-ba5d-6d3ccd2b2e9f',
                exercice_id: cable_lateral_raises.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: 'd67a2967-fcd5-4034-b453-9b515d7cf90d',
                exercice_id: powel_raises.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: '2ae1c1ee-691e-4ada-8083-0b87fecf1637',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'd3ba6ee5-3e4d-48be-b584-b107db16b15a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '379f4644-cfb0-4413-977a-8686649a845f',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '9a1aac42-8735-449e-88d4-e47784fdfc9f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '996229cd-cb54-475a-ac21-7d0bf6ce15e8',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'e273f748-2c8d-4721-b929-084a1ef9c9d2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '8c463ee8-5afa-4ea6-8859-edec226d492c',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'be003b6f-09e8-41be-8b4d-daddd3dca909',
                type: SetTypeEnum.Custom,
                repetitions: '10-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '1eecdcfb-c64e-425c-9f69-57001c4cc7aa',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '34977c23-5adf-4581-9998-1035ea0b0bc8',
                type: SetTypeEnum.Custom,
                repetitions: '10-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b0f57cab-b68c-44de-a1e1-8c4fb1a45845',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6fbea833-5e04-4bb4-9133-04d80c308d69',
                type: SetTypeEnum.Custom,
                repetitions: '10-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '854877e4-cece-44c4-ba2b-9b7522752010',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '77dd8ec5-f971-4ef7-b95d-4240128cd222',
                exercice_id: sit_ups.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '36dd8095-8e0d-40f9-8633-79cbdf8c2c61',
                exercice_id: cannonball_crunches.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: 'ac82bd44-9e20-4c77-8e78-0e82d46690b5',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'e0774b43-3c49-4393-9588-77548cba7be1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '37e3a744-ec09-42e0-8969-e83695e86aff',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '87c4e551-f369-4ccd-be05-31a4d00932a0',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '194d3544-341a-4bda-8569-1b1b79aa80b4',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'b846d953-a972-4247-9a9f-c8977580f1c3',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          }
        ],
      },
      {
        id: '4590e3c2-b817-4799-947b-80e51f49b0c5',
        name: 'Mercredi',
        training_exercices: [
          {
            id: 'fe0b2023-b9b5-4b40-9a9d-48079039bed3',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f0835548-322a-483b-a172-de96fd9e8921',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a235b5e8-de62-4cd7-b9a3-968a67e012b8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '66b99748-eb5c-45e1-ae25-3e86b6930afd',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '62ce90d6-20b7-4056-8e9b-366d63cb6b05',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '27811ad9-252f-4add-830d-96315d9ece1a',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '4b6fa3be-cb64-466a-a67b-0777ed747906',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'b7e01025-66e3-49c7-8b60-c09cecaef561',
                exercice_id: dumbbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '6ee1d9dd-066c-40b3-ad8a-b45c4686ae09',
                exercice_id: barbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'c2ed5199-14a6-458a-a0fe-f3f3aa5fe025',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'aaf3f833-dd0c-461f-9660-faf4dac45a24',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'b152c4f1-422d-4d43-8312-b542b59ad5ac',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '98ba9fd2-8ec5-49d1-b8b0-d1787c3985c7',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a013065b-39ff-447a-a81b-e03bf2cbdba8',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'ee42fcd3-3d82-4fab-ae12-73ab10f4d877',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: '7f3fb862-3144-4f38-8fc4-7147b07ed5cc',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '8df4a69c-fd2d-4fac-abe6-9506e080f902',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7ecf234b-97bd-442d-9106-06b85e1dfae5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '808de6fd-9707-4fa5-90ce-799522baacb2',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '2dc2737d-1969-45be-9220-4383cd6cec19',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '775e8563-3fba-49af-8c61-d35b1cd6d3cd',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '5d06bcdd-ed2c-4953-b6df-b2155b5d23be',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '2073fded-7163-4f0a-9306-e060c9a0f788',
                exercice_id: hammer_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '61938f43-95b3-4396-a4bf-f8a154ecd437',
                exercice_id: barbell_reverse_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '727cdaf3-5cb2-4442-bc86-3213c9e7a600',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '2ce7bfbe-bed7-4b94-9c9e-fd4d7ab7814b',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '75247585-2856-49fb-b526-55a0f689646b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '09c2811e-3b37-44ad-ae5f-99b8b056c6f3',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '223f7552-1cc0-4d32-a52e-43953d0f1fcf',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b438805e-a334-45bd-91e4-c602835ddb46',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '1ad2898e-c328-4e94-b27d-81c3b6a6c400',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '7629afc4-4566-43c3-b470-52e2bdb13e38',
                exercice_id: neutral_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '29b3935c-f8f0-4331-be25-bcf0fe7003de',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-6',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '773c538f-366f-45ef-b2e4-acfa892dec46',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '808d6edc-0555-4bf1-a04e-48158a5b4cf6',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-6',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '131e7799-8ed3-4520-9371-52316d8c13b2',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'da6fa123-ceaa-4ac0-b272-a7776b1637ce',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-6',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '2955bcd8-1bc0-4e01-b467-4a27282b9ee3',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              },
              {
                id: '8116f1d3-66ee-4b29-aaf3-be1fe9f3b404',
                exercice_id: neutral_grip_lat_pulldown.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '3c91f53b-a701-4825-b62b-6a7961f23f65',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd899aa77-1497-48ae-9bf2-0bb3329d278d',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '4a512e80-3273-4997-99e6-139a52a58c61',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0975c22d-ed63-4636-9ef4-eb3807a5a90b',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'ff65422e-f822-4dd7-8a95-f85c19ed28c4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f7b431bf-0cd2-4584-a8e0-57477fc7dc58',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '81154c95-c2c8-47dc-8f20-cdc0da3ac68b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '9342d4d1-6a20-4e5e-abdd-b98878a696e9',
                exercice_id: leg_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '9017f08b-fc1d-4c9a-ba25-ff8c7054b8e2',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'e4d70ac4-c1c6-443f-b736-f3c972c1dd55',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '38197071-2678-43c1-8ffc-39eb6bcfc963',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f65897ff-0839-4eed-b846-9e483902073a',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b695879d-bd14-42df-bc71-5568483da8f0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e678c0ed-77b5-4725-ad12-7d24e49a439a',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '85c5c6b0-601e-4aeb-af7c-a9cb5ede5d89',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '092b8bdd-7a12-470d-85f5-0ac5ef2f63a2',
                exercice_id: split_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '2fd430a3-a20e-4e75-a8ce-869f27fbda79',
                exercice_id: leg_extensions.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '5754a504-5074-4c27-9ccb-9c235dd74ce1',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'ac2c27b4-537e-4463-9fca-956836a8e406',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'b0835b5b-42ca-4b7c-b2d4-e1411b33857f',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'aaeb5717-2403-455f-a287-27cc6f2edd3a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '44d9094a-5c50-418a-b9fe-a014909e47e5',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'bee16bf7-9d8e-4c10-9fa6-eeb2f1dc5775',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: '9b14193f-4ef6-453a-96b8-e90be2f140e3',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'a8f985f2-4d8e-4070-81be-1318e95419aa',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'c841fcfc-83a2-4011-ba0e-1e361bbf3196',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '45368bbf-ed87-4716-95aa-8e66574cbc45',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'fdc35041-7931-4870-9721-e2e040651eca',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd73d5b4b-4935-4904-a269-2eca625261aa',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'c99cb95a-5a5f-4bcb-a9a0-3108b029d4d4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '44cac3c7-9bc5-4bb5-a4f5-41f544d6c53a',
                exercice_id: dumbbel_fly_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'f2524822-6f41-4eb4-9639-edd99e3a8e8f',
                exercice_id: cable_flies.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: 'd556eb03-f804-41ca-8c1a-c9e6f3f28f6b',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '00a782d6-2826-477b-b3a0-07b111c0c974',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b9b51462-9ff5-4d5d-a5fa-577a35aa199f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8fe2cf78-f9ea-40f6-b521-46c58f2e8ff3',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '858aa148-5315-4971-8377-f802b50d8e74',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1e953934-56b3-42aa-97fb-2281cd3ff3bd',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'dc85ac2d-da01-490f-8817-57812c56bbc0',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '148d51bb-a323-4743-b516-ed6155d1fcf7',
                exercice_id: neck_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'a9b5da41-bcc9-4a6d-b945-06dfb07bc972',
                exercice_id: neck_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
        ]
      },
      {
        id: '06d4597f-3180-4b84-99d3-4f045e703d5d',
        name: 'Vendredi',
        training_exercices: [
          {
            id: 'c3a0ee8e-c8c5-4c5c-bc67-fc2b335abe66',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f22feebe-2d9f-413b-84a2-481c4c6a7d2c',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'c68a4ebc-decc-4735-a19f-2caff5be598b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f43cd894-5297-4b66-a723-a3b4293551d9',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'ffdda861-e7b3-49aa-8ce5-ded14fa1899e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c666d249-83da-4094-87e5-198d4d262ed0',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '82265e8b-6c81-4887-af0b-f8647b83984d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '5f6d98bc-5a9e-4955-9a38-5d9be72ffc10',
                exercice_id: romanian_deadlift.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'c569a98e-0d31-464a-bd83-659c1beab67d',
                exercice_id: barbell_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'bff3d5a2-06d7-49c8-ae58-9caf81ccd61f',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '47d95062-2243-4af4-997e-aba86b96ccc6',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5be5f5c9-3095-4f13-80ee-e5ffdbc82283',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'd079d6b0-0146-4089-a3d2-ec21a212e220',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'e3eccb93-39a6-42aa-9fd8-b3f1670a257b',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '7876087a-5dcf-4722-b583-8fa94e3f735c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: 'abf51c5d-2dc9-47b0-8576-53ac70a87774',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '54034872-98b4-4389-a3c4-1b6ce12abe4f',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '880a4c1b-8359-4653-8dba-5328b4a358e5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6c1a33f1-dca4-46bb-8a06-187537e776f2',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7152db73-f58e-471d-a78d-d3e596df6b8b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '20be8b69-77b4-4d67-9e09-e8abb13d3c63',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '9c1067f7-9127-403c-a296-72f06eff82d6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '5a014128-536f-428d-ae42-eebb16045ce1',
                exercice_id: seated_calf_raise.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '4dda926f-0ecb-4127-ac66-8d744980fc4d',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '98465b35-9ba9-4b38-ad18-5ad26c42e314',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '8ce70145-8754-40c4-b7c3-50e78637215c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd1fd4c1d-9723-44ad-9459-4590994ce58c',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '8e04d66c-a5dd-4e1d-ba70-4746b1a22f1b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '5cc46711-a693-4bb9-b05b-ce02850189d1',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'e5e7b6a5-0c13-4068-8cb5-d04b6d72415c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'b5744229-2903-40c5-a87a-a9935cfc5944',
                exercice_id: incline_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '6968ad2e-0da9-475f-ad7f-7eb92bc5118c',
                exercice_id: ring_push_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'e541ac1b-bb53-4190-a4d9-b4b8f72725ca',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '24d760b9-f79d-4caa-81eb-7bf45fd89023',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'fe24c54a-94d1-469a-80a9-ffc13dd92339',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'eadd0170-12cb-4c4f-879c-f630a0b38a7e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '00e4eb02-b881-4f3c-9e54-76208969d105',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'f3584c59-d271-416f-9eda-98e9fd1becb9',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: '8b02489d-e7b4-4f4f-b542-bf5a665a321f',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'b6fe02f5-054d-4cfb-b24c-579cfda9e3b0',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '44973876-7306-46aa-995c-3cec0743a984',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2bad3043-de7f-445e-9966-40c84600a369',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b3c1ca7a-7e12-4046-8c51-7e98ce0abc9b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'dcb079a7-e326-4c33-b557-1f49ce4ecb7b',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'f4a0794d-f243-4967-9db4-47c8f1bd9c90',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '40b2e176-7fc9-4f60-9b93-980ea75a9134',
                exercice_id: dumbbell_preacher_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '6c2601ac-a985-43fa-a002-60047b3fb812',
                exercice_id: bayesian_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '0751bc92-f85d-4b95-9c19-4585e23c607f',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '3d000d2c-5b8c-4463-b719-3dd12f60af1a',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '1aa5cab4-3ce9-4509-bbd8-6cef8c228538',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '3105ebd0-c8f8-47e1-b009-33dc1b520b70',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '56ac886c-3528-4ed3-ba65-dc204706437d',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '906aedb8-5410-4f01-9c4e-b76012f824b1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: 'b3f5fde2-f576-439f-bdc6-d8b23e080045',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'b561de61-19c4-41af-a380-877edb857a1e',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'dd5d9d35-96ca-41a8-8434-10c6e1e065d5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '883eefb1-f6cc-4094-85ff-ad16714dba76',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'f6022ee4-08db-42cf-bd5d-be90b81e7cbb',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e6915f67-e7d4-477b-b830-cd65ced8c570',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'd389b654-951b-407d-9e81-1b2dd99d2f3e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '6a31a5b1-f839-4c28-89c1-f90a48addc8b',
                exercice_id: leg_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'a2bcdd25-791d-4186-86f8-af1737b010f3',
                exercice_id: smith_machine_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: 'f2987426-b702-4dbd-a534-9d135486edac',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'a4318f78-e75b-4cfe-ab3b-2af72014289c',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b40df066-170b-4932-a863-6766cb985e72',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4b281f56-cb4a-4ca9-a976-c51e472d60d9',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '875d35f6-7ffc-48c4-accb-5feb3ee3e64d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b1f7067c-e80d-448a-b671-1650f74bd1f1',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'c7db6eb5-9aba-4390-beb1-e38fa3850531',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '1d17b050-acbe-4702-ac4c-1531aea24676',
                exercice_id: skull_crushers.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'a050d2e6-d9d3-4450-a3e1-589354a60c73',
                exercice_id: french_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: 'dff2bf56-e932-4d98-9dfa-728281c878d8',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '0411b3da-438f-4106-9d16-35fa651d7d58',
                type: SetTypeEnum.Custom,
                repetitions: 'amrap',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '216a52e0-2fc9-44f5-a514-bb02a61db639',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'deed1be9-2311-4c7a-ba14-7cd948c7153b',
                type: SetTypeEnum.Custom,
                repetitions: 'amrap',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'bff83a7d-d931-44fa-afc7-026e3f9bc63c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'fd9326ff-ae83-43f6-bb37-274600929589',
                type: SetTypeEnum.Custom,
                repetitions: 'amrap',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '0efba577-2752-484d-93bb-5af56533d553',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: '93ab3ff6-4f9a-4cdd-8e5a-c4fdd41826e8',
                exercice_id: hanging_knee_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '6f0af189-035f-479b-b86d-904efd836744',
                exercice_id: leg_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
        ]
      }
    ],
  }]
}

export const NoviceVariation: ProgramVariation = {
  // id: '1e73fd3a-ce8d-45a3-83ea-638e4bc297d2',
  id: 1,
  program_id: 1,
  name: 'Variation par défaut',
  description: null,
  // templates: [
  //   noviceTemplate
  // ]
}