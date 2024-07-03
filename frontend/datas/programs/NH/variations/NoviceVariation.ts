import {
  EZ_curl,
  barbell_overhead_press,
  barbell_reverse_curl,
  bench,
  cable_flies,
  cable_lateral_raises,
  cannonball_crunches,
  dips, dumbbel_fly_press,
  dumbbell_curl,
  dumbbell_overhead_press,
  dumbbell_row,
  hack_squat,
  hammer_curl,
  katana_triceps_extension,
  leg_curls,
  leg_extensions,
  low_bar_squat,
  neck_curl,
  neck_extension,
  neutral_grip_lat_pulldown,
  neutral_ups,
  powel_raises,
  rope_triceps_extension,
  seated_cable_row,
  sit_ups,
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
            exercice_id: '',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '506bb22b-1cd7-4e77-9c18-8a12b47ad6d6',
                exercice_id: low_bar_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [
                  {
                    id: '2a130029-5ba5-4534-90ab-58f828ccd342',
                    is_done: false,
                    personal_record: false,
                    repetitions: '4-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '48bf8377-76e4-44b3-901c-d37c16622d57',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    },
                  },
                  {
                    id: 'd18860c4-df9a-43b6-8995-c76ebe248704',
                    is_done: false,
                    personal_record: false,
                    repetitions: '4-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '9edc0a17-d2cb-4de0-bbb7-5d7c5eb2d881',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    },
                  },
                  {
                    id: '8c40f807-e8cb-4a64-b491-84a2a7d45dcf',
                    is_done: false,
                    personal_record: false,
                    repetitions: '4-8',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'aeec1c1d-a41f-4b03-947f-11dc82d94acb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    },
                  }
                ],
              },
              {
                id: '9dff3c1b-bee9-4bc2-96e4-af5d9c6c3b8e',
                exercice_id: hack_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [
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
            exercice_id: '',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '6a4ec77e-57d2-4e1a-b799-5ca396d6a373',
                exercice_id: EZ_curl.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
                ]
              },
              {
                id: '0041eec7-aef7-4ba0-858a-7633caf52194',
                exercice_id: dumbbell_curl.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
            recommended_training_exercices: [
              {
                id: 'f21f9daa-70a5-4ec7-b42e-f3325ff6d5de',
                exercice_id: dips.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
                  {
                    id: 'ca482163-bc91-4e4e-9683-6ee6a364c199',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'bfe19cf7-6515-4267-a0d6-9a484c417f22',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f38619a7-5c76-42fa-b656-7f35aafecedd',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '82085d48-9c05-4ec3-a259-78db1b76f0e6',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f32113cc-c0d9-48d9-9932-3ca59a1b6c51',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '90dc3181-7737-4095-8161-6696a5f527f7',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              },
              {
                id: 'e3e9e023-8e97-4c13-ba5e-ebd3df0b5bdf',
                exercice_id: bench.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [
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
                ]
              }
            ],
          },
          {
            id: 'e2329a96-253a-4c85-9082-57dd47d8ec29',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '7b739bbb-94a6-4fbf-8823-4c22791532e7',
                exercice_id: dumbbell_row.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
                ]
              },
              {
                id: '238bdd28-76f1-494c-8110-95ef19153745',
                exercice_id: seated_cable_row.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
            recommended_training_exercices: [
              {
                id: '627e7929-4431-44ec-a3d6-fa4295fc122c',
                exercice_id: rope_triceps_extension.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
                ]
              },
              {
                id: 'e51a5dce-9eaa-409b-b9f2-0fbab07290dd',
                exercice_id: katana_triceps_extension.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
            recommended_training_exercices: [
              {
                id: '903ed6b7-b1af-47f5-ba5d-6d3ccd2b2e9f',
                exercice_id: cable_lateral_raises.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
                ]
              },
              {
                id: 'd67a2967-fcd5-4034-b453-9b515d7cf90d',
                exercice_id: powel_raises.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
            recommended_training_exercices: [
              {
                id: '77dd8ec5-f971-4ef7-b95d-4240128cd222',
                exercice_id: sit_ups.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
                ]
              },
              {
                id: '36dd8095-8e0d-40f9-8633-79cbdf8c2c61',
                exercice_id: cannonball_crunches.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [
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
            recommended_training_exercices: [
              {
                id: '6ee1d9dd-066c-40b3-ad8a-b45c4686ae09',
                exercice_id: barbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              },
              {
                id: 'b7e01025-66e3-49c7-8b60-c09cecaef561',
                exercice_id: dumbbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
          {
            id: '7f3fb862-3144-4f38-8fc4-7147b07ed5cc',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '2073fded-7163-4f0a-9306-e060c9a0f788',
                exercice_id: hammer_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              },
              {
                id: '61938f43-95b3-4396-a4bf-f8a154ecd437',
                exercice_id: barbell_reverse_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
          {
            id: '4362c3fd-9989-42d0-aa56-ec60d737ba11',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '722e4a80-87d3-47de-8acb-2868691646ac',
                exercice_id: neutral_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              },
              {
                id: '8116f1d3-66ee-4b29-aaf3-be1fe9f3b404',
                exercice_id: neutral_grip_lat_pulldown.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
          {
            id: '3c91f53b-a701-4825-b62b-6a7961f23f65',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '9342d4d1-6a20-4e5e-abdd-b98878a696e9',
                exercice_id: leg_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
          {
            id: '9017f08b-fc1d-4c9a-ba25-ff8c7054b8e2',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '092b8bdd-7a12-470d-85f5-0ac5ef2f63a2',
                exercice_id: split_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              },
              {
                id: '2fd430a3-a20e-4e75-a8ce-869f27fbda79',
                exercice_id: leg_extensions.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
          {
            id: '9b14193f-4ef6-453a-96b8-e90be2f140e3',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '44cac3c7-9bc5-4bb5-a4f5-41f544d6c53a',
                exercice_id: dumbbel_fly_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              },
              {
                id: 'f2524822-6f41-4eb4-9639-edd99e3a8e8f',
                exercice_id: cable_flies.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
          {
            id: 'd556eb03-f804-41ca-8c1a-c9e6f3f28f6b',
            is_done: false,
            sets: [],
            recommended_training_exercices: [
              {
                id: '148d51bb-a323-4743-b516-ed6155d1fcf7',
                exercice_id: neck_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              },
              {
                id: 'a9b5da41-bcc9-4a6d-b945-06dfb07bc972',
                exercice_id: neck_extension.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [/** TODO */],
              }
            ],
          },
        ]
      }
    ],
  }]
}

export const NoviceVariation: ProgramVariation = {
  id: '1e73fd3a-ce8d-45a3-83ea-638e4bc297d2',
  name: 'Variation par défaut',
  description: null,
  templates: [
    noviceTemplate
  ]
}