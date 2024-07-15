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
  dumbbell_pullover,
  dumbbell_row,
  face_pull,
  french_press,
  hack_squat,
  hammer_curl,
  hanging_knee_raises,
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
  sit_ups,
  skull_crushers,
  smith_machine_squats,
  split_squats,
  upright_row
} from "~/datas/exercices/coreExercices";
import { DisplayableSetInformationTypeEnum } from "~/types/DisplayableSetInformationTypeEnum";
import type { ProgramVariation, ProgramTemplate } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

const bridgeTemplate: ProgramTemplate = {
  id: '9621d2a0-cc50-468e-be15-ed02938edd71',
  name: 'Template par defaut bridge',
  description: null,
  weeks: [{
    id: 'b6c3eaf7-adcc-4c46-9012-0fd1496a6092',
    name: 'Semaine 1',
    trainings: [
      {
        id: '4716cc03-691d-4250-b85a-03018c5b2eb0',
        name: 'Lundi',
        training_exercices: [
          {
            id: '08c8b81e-6fb0-4c52-b475-fd239b743bf4',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'cbd291d7-6d35-4102-beb1-5442103c1ef0',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'a23d8d14-b85e-43a3-a9d5-1894459c5293',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              },
              {
                id: 'affd4c1d-78ac-436b-adae-714032f2b65c',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'af32128a-432b-41ae-926a-b5c7abc783f8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              },
              {
                id: 'dfeedae6-9937-418b-b79a-45b4bd4c82dc',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: '1f89d8a8-cde8-4ed5-b34b-fbecb6e05893',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              },
              {
                id: '038edad3-3628-4e76-be28-ec3de0003662',
                is_done: false,
                personal_record: false,
                repetitions: '4-8',
                type: SetTypeEnum.Custom,
                displayable_set_information: {
                  id: 'd18f444e-0ca2-4df7-8d7d-7f391f1c8231',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                },
              }
            ],
            recommended_training_exercices: [
              {
                id: '47eb9d0b-3f94-49b2-b6c8-f4dadb67808f',
                exercice_id: low_bar_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '8d205672-3c52-4c81-95e2-fda3d013b840',
                exercice_id: hack_squat.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '3faeb31d-28ce-4f4e-80c4-1e04a4d1c574',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '876d95c5-516e-4668-97e1-abb1395ae957',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c414473e-6143-4679-b698-64f1da58a81e',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '113c5f42-cfc0-43c6-b3b4-5453dc303ccd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '1d5234e4-3e5f-48da-9f96-251aaf6ddb79',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: 'bec62961-05a8-4423-b9b3-ddd4caaa8836',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '9372dcaa-7a0f-4a39-a3cc-c4853651a473',
                    is_done: false,
                    personal_record: false,
                    repetitions: '6-10',
                    type: SetTypeEnum.Custom,
                    displayable_set_information: {
                      id: '2e596ff9-d145-406f-bac7-cf0e9a72710d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ],
          },
          {
            id: '3c861b39-07cf-4434-ac1a-8205c150092b',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'eea1be8c-f1ad-40a9-8231-18f73f6fd185',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '21276ae1-2078-440f-9c9d-50d6f7ec4539',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7a1ce5fb-a7ce-4601-aa4e-5ed8556835ed',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '757de346-6142-4565-a7fc-a5718a25b112',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c0363929-8ee9-44a3-b5f2-6c83656d0e29',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '09c62ffb-9d68-4718-bcef-ca0b25dc802f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e299758b-9231-4df9-a2e5-4cf1a37660a0',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '288d8893-577d-4fee-b0b7-442210cdf9d2',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'd21774e8-14c0-4a77-ae6a-3a6fcbad0dec',
                exercice_id: EZ_curl.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '425ccfe8-300c-4096-ba54-f899123391a7',
                exercice_id: dumbbell_curl.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: '3b67aaea-e39f-4313-9182-d2f218a87550',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '8b472de6-5812-4e96-aab9-db2ff3d9766e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '0d23f68a-36b7-4130-873e-ca0a6aa818d1',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '18202cd7-817c-4df5-bdce-8efe17cf73d1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '0067a8de-4979-4a3b-a079-1fe3dff95baa',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '2301d893-736d-42d9-ac58-fc4dda615999',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '7f44458d-437c-4922-87d0-739a3fbccd28',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '6b90d919-ebcf-432f-bb0e-3552c905890f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  }
                ]
              }
            ]
          },
          {
            id: '8657c8bf-075a-4cd6-ac68-8c698fb8682a',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '9c13432d-abe9-4992-9012-cb316708ea7a',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '695ae576-4528-473d-96d3-15306b0f8a2f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'aea9a390-2bb5-46a2-b212-5ec807ad1cf6',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '8dad2051-7f59-492b-b89b-c03b18ba5db3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1847cdc0-5438-4d5e-89b6-73108a18acc7',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '528c816d-cafd-43e6-84f5-1b82b91bdf0c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '06a8b53e-5891-4105-bfed-968b6c951b6f',
                type: SetTypeEnum.Custom,
                repetitions: '6-8',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a87c7ebb-2472-45c6-81ac-4e092eae054e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              }
            ],
            recommended_training_exercices: [
              {
                id: 'b879a3f2-bb98-4570-bb56-b48eb3c7ec74',
                exercice_id: dips.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '3ff1062c-0c49-4a81-bf2c-8978534f21dc',
                exercice_id: bench_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '5d466318-74d7-4186-8843-d6e9ea280a72',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '52ff1a31-2fd2-486e-bc9b-2f58e1905af8',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '541d1247-407b-43bc-9a34-589aee6717d8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'dc6b562e-2095-4448-aacc-8e0fba54d88b',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'ce33818d-0eab-433f-b6d6-60188f25a439',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '73d6daa4-0506-4fed-9775-d859b6b1ab3b',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'd10473ff-9e24-481c-9628-ce45a4b28898',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'a57889f8-408b-40d5-9c88-32587a911558',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b1ddd261-6457-4754-a4b8-c42a281808d6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '6dfb59af-4a48-4d91-8dae-b6ed676aca19',
                exercice_id: dumbbell_row.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '137d5b0c-9e5e-46e8-ba73-ffc37dfe8196',
                exercice_id: seated_cable_row.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: '34a050e8-adad-42c5-b731-5c22a361d382',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'f3519b8f-13f2-44e2-a2df-c0c26222b4de',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '8b9fb73a-0e8e-4d42-82d3-28346b5bb972',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '7b2d997e-25a0-4fcd-a282-b7c61e7371d5',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '628bd34a-cdcf-4b87-a325-615cd74a58f4',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '0b3128a0-2cf7-4d0b-8a40-19ef75f3fc0f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f5c6548a-e2bc-46f1-9c9a-c4d299b4487b',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'b928a5b3-e756-4358-9584-5574b840aa6f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ]
          },
          {
            id: 'df17fb8c-e3b7-4ad9-b219-564e38a70015',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '0ce9d181-b28a-43fa-acfb-d0189ad3d57e',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '5a10defd-31e6-4db7-9b20-c67d07786c3f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '36b75cfd-0fc3-4b0d-8c1c-0dd212621477',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7f7c8166-f64d-43ff-9f5b-61ad9016bcf1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '406d9038-337a-487f-94c2-c8c952772894',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '1ab682a2-eca9-4e9c-9e4e-aa84326a1e51',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '73b242f6-157b-4e1d-af44-89c3094f4a7f',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'dc969648-ac15-4695-916d-4b6a744be327',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '220492d8-c48e-4176-b86d-ca0b0d194b61',
                exercice_id: rope_triceps_extension.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '8e5f8081-352c-477d-b76c-77ecd00f5d3a',
                exercice_id: katana_triceps_extension.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: '75049f15-45f1-49f9-ac84-cf18c7465bc9',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '20cd4743-5721-4cb7-9b10-6385a8d593f1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '3ff0fc49-579d-4c54-aca9-f02bda5d94b0',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'c9890b24-e9b5-4341-8512-8282ff0e1e4e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '85b3760c-b01e-4e62-a4d8-ac00f96bbeaa',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '12386972-f882-4727-ab44-1f9b2cbf9302',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '89b4f443-0f16-4f9e-826e-8cec71e84b51',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '608f3687-c4a5-4890-9cbd-a0ae20000dd1',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ]
          },
          {
            id: '010b1577-fb88-4c65-8924-8f7763ad3518',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '10a81e62-6732-4324-a52c-ef8335ce6aea',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'e3bc43d3-49fd-4f24-b6ea-8b72ed114105',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e1816ce7-4fac-4b0b-86e3-78f072b6f64b',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a6281ece-dc7f-4ead-832a-7b4a609f3c60',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6a5f63aa-7d48-4ffd-9f40-767c6c6a9aeb',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '93545ee8-2a74-43e4-922f-8291a1f5e62a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '4ee3ada8-d125-4b7d-b0c6-159c12e50263',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7099b097-f6bc-47c4-bbcb-be133bbc4526',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'e42a7476-f9c8-4c4e-9a80-f93021e530e4',
                exercice_id: cable_lateral_raises.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '94577f69-6735-4538-a8d3-4e21ed0c37aa',
                exercice_id: powel_raises.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: 'd152533f-19e0-4ec4-9966-ba6592db025d',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'e43d4297-4fbf-467f-a000-6eb0c8533a91',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '9f360bfa-2487-46ab-b2ab-b19428ae4c27',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '34a053c7-161c-406d-94ae-c053ccdf7b2b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'b79e9fed-d46a-4a6e-af3f-2d430572871a',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '172f7078-bfb1-408a-9481-9df3845a59bb',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c1842e9e-ad0e-44b8-8c0f-7f6a3e79202e',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '8e0d5cb7-7cb0-488a-98f6-6cdbd80c96af',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ]
          },
          {
            id: '1bd10917-4b5c-4da5-a6c1-e8fbffca8225',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '2efa85d8-7a39-4d34-b055-41154bd72b6f',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '418d1b3a-8375-4422-a420-81ea5b7b00f9',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2145f1d4-d5a6-42a8-afd0-2c925764a60c',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '63e3a7df-41e2-4319-ba5f-cbdde6236db5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '47685131-7633-4950-822d-4cdf5a13a428',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'f26d71de-00c2-4d63-9d25-29f5f46ab339',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'd9950421-ce99-4e33-b1e1-55e4fd98bb4b',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'de14f63e-8363-4f2e-8845-b7b638071c16',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'e3370178-f0e6-49cb-901e-a983c90598e8',
                exercice_id: sit_ups.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
              },
              {
                id: '75691e2b-1e5a-46fb-a707-b52174f8b3df',
                exercice_id: cannonball_crunches.id,
                recommended_training_exercices: [],
                is_done: false,
                sets: [],
                default_sets: [
                  {
                    id: '2bd7ba5e-7762-41b9-b932-d7d1bb0ee4eb',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'e0a1a5d7-dc91-4233-bc34-67723f6b6c18',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5b9cd5d7-4d4c-4c7a-b377-d5add4132083',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '2309c79a-f27d-49ee-82ea-5c899fb3a03b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'd4af0a1f-c1e6-4f63-86e1-d7ab25c41710',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '6af24fc0-90f2-488c-a4b0-431dd3b13d10',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'a43d43c8-e0dc-4687-9583-913abbea3ff9',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '6eef8320-57fa-4a3d-8409-299c0f2e82f6',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          }
        ],
      },
      {
        id: 'ab4ad8d9-a4ba-42a9-9f03-71136774e007',
        name: 'Mercredi',
        training_exercices: [
          {
            id: '5aa1fe65-94d1-468b-9f1f-11ffb1c66250',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '6cde7eda-7692-4905-ad6f-9053ae40a283',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a920ce07-50c4-425a-b820-e009f90d0f05',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '15857e89-37cb-4c30-9f2a-47f61f317e97',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'd508239d-9c5f-44fa-9d22-5397267738b3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '76b77f9b-e3a4-46be-84e0-ddd4b0b372de',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '185eba96-110e-47a5-a8fb-c98bfa571823',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1a5d210a-3db9-4b73-9428-2d6966dffacc',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'bf056f6e-705f-467e-95f6-b3d7601d5412',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '48d2a0e0-ae78-4c20-8ac6-1c56186be7b7',
                exercice_id: dumbbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '6ad6f72b-7d0b-4184-94d1-c83085a63532',
                exercice_id: barbell_overhead_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '2066dd63-8705-41b1-bee5-8bd1460b020c',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '0a7d935c-891b-41d2-9e98-3e82e656420c',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '24887a82-e9a7-44d3-8cc2-e96460a11a8d',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'a76400bd-ec6f-4fde-b954-433778192730',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '8bc347d8-2784-4771-9988-97ce22c0c94a',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '68ff3910-e496-4685-8ed1-f92023628bb3',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5e009670-e649-48d2-bb31-8b2fedd535a0',
                    type: SetTypeEnum.Custom,
                    repetitions: '6-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '74c9795d-0f35-497e-9e33-335badf00e62',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
          {
            id: 'd3173e91-78aa-4d25-9f3e-a98bd1f15d4b',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'e4260d7e-e63c-415b-988b-87d9574380e5',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '053238de-fd09-44ff-ad1e-939231cc7ddf',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6b7c9ad0-488a-4e7b-b7fd-8689767e8165',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b33ae983-fa92-4166-ae59-d755a833cb9a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cc729087-67a7-4dcf-8f0d-03ee5835b816',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '22a4bca2-cd3d-48b6-a738-3fd56c2d8372',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '869092ef-77d1-4638-945c-4601bca51f3e',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'e64dab61-7833-45ca-afb5-fc4b3e593037',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '0d1c37f3-b5b1-4fdd-b30c-894730ea6f08',
                exercice_id: hammer_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '063f2b90-d268-4bed-811c-a9332feae67d',
                exercice_id: barbell_reverse_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: 'c923e9a3-11aa-4056-ba63-73e03483ee00',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '5d5f2e84-e536-46f7-9187-c27d4bb52e9c',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '1c5de248-1c38-47e7-bb1f-fb19a01123dc',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '994c488b-0007-4e1b-a9a3-8d7627bf48be',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'afc49a4f-b78a-46a2-a787-7366c739b1c8',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1cc0e16b-081a-4ae1-a1fe-818071980985',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '0948142c-f118-45de-a86e-1d671040146a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b04d3836-f413-412f-b709-d8621fe60e6b',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a30bf0e8-1a88-4ef8-a1cc-f4a23544d995',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '08642544-038d-4d21-b63c-4d31b84186dc',
                exercice_id: neutral_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'accbdb7a-67eb-4390-81d0-b37d51676931',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '445d85ff-b1ce-406a-90bf-a496fb31d70d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'c140f416-a129-4e58-a912-d41cbdbae84f',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '009c4465-2d0e-48d1-beba-a63547564896',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'cc7ce8ae-58b9-4782-ad5a-70449ff74737',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '4dce6b3e-fb94-4829-bb51-bfdb3aae9a29',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '5e38e70f-4958-4fac-aa11-9e1ad92207a5',
                    type: SetTypeEnum.Custom,
                    repetitions: '4-8',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '55c8321b-7f5f-4b63-9ad7-edec709a2d40',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              },
              {
                id: '94d9c348-f600-46f0-9f24-c3a797329b05',
                exercice_id: neutral_grip_lat_pulldown.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '4707d18c-e935-4b21-a80a-547db7caf028',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '29b13e00-cbef-4a59-902c-51c80e74665c',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '4c132d89-c46d-4ede-bdf5-5bec0e6aa319',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ae9b1ee1-98fe-4ad7-a828-87b86f29ab0c',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7fe5669e-bc2e-45eb-b13d-90b2930d48f4',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ec024cba-c7b8-4961-b672-785d70970b17',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '2bbb3634-71a5-4b82-bce5-4efe240e2c77',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '618749f0-1fae-46ea-83ee-c97911fb860d',
                type: SetTypeEnum.Custom,
                repetitions: '12-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7fe3818a-7d5d-43f6-916c-64dc024ae7ac',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'b58c3c9e-dfa6-4d4b-8c6f-fcf9ac2a7582',
                exercice_id: leg_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '39da0e85-1425-4791-97d3-e2c77bf651ce',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'c85a3b20-0065-4b33-b841-9e76351aa0a9',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '707ced92-563e-4a24-a605-0a51843d4569',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'b6cdfe12-f3a1-4eac-b121-f19d9064a363',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '2ceac883-2847-4584-a10f-4264ebfae815',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '397c9b86-5c55-4d91-9000-8a54030e0f0d',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '671ccdb9-8083-48b4-89e4-c8aa76ab7797',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6f7fbe60-3e92-4b46-8747-80b00a214780',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '92a1830f-0452-4626-8e30-68403718a350',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '81204990-b8fa-411e-90aa-1ecaf4ee6c92',
                exercice_id: split_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'bed89641-5bf0-4842-a1f7-fdaef164c97c',
                exercice_id: leg_extensions.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '52ef8e41-a2bb-4eff-907d-a66f7928fe4b',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '633b06b8-1458-44d1-8448-43dce46b1981',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'e3f6137d-bb21-440e-94d5-04c9ee51c06d',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '2611c38d-04bc-4e62-80d3-60af6c14500b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '8f677f06-fb6e-4d63-aadb-064e1aac4156',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'fc4d8223-f396-461b-9347-d7e10c7907dd',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'bd03f8bb-22ba-4698-83b9-8ee9d6232d26',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'f46fcba1-6814-4ed2-a122-61509b73c3e0',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
          {
            id: 'f9cc11ae-32b5-48aa-a997-aa585ec92ee6',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'e66e79dd-1ed5-46d3-8eab-b5492dce9645',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b672d20c-97fc-464e-ac6f-ec88fe9fc87c',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2e0a61ae-30da-4b0e-b00e-8041711a3a54',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'a812edd4-c57f-4576-8d0c-52333c338a0f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '6aa2cd71-bfb8-4c7e-8e59-0f686a6dfaa6',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '691b6bf6-27d7-4cad-aea5-acda304ad590',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'fed29e26-948f-45f3-b9b0-5cdc2db92b2c',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '479c3a1c-8b31-4679-9738-b2e4731f2658',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
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
                sets: [
                  {
                    id: '603b26fe-0b8d-47cb-a0ca-819f053d0d30',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '32037b49-f377-4086-af85-9564e165d01d',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '7073ab77-5ff4-41cf-8888-f8b717798e73',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '5a993b88-2ffd-484b-8f09-ce2bbf413c88',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '49fed003-765f-456c-805b-ec41ae627e3a',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'a038eca1-feab-4f13-b07f-16be7a0ebd01',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '70c7d14f-34a9-4181-bb96-66b1d19f2652',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'a646e574-35fe-4465-91c5-b095e6139f00',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ],
              }
            ],
          },
          {
            id: '5fb02c9e-dfce-49c8-bbd5-b9726e60939a',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'bea50d1a-9484-42d7-814e-8bb978a7222c',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '73edf75b-26db-4f47-9260-e4d4be595b36',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'c0b868b7-821e-45e7-bc3a-02bb6d1d77d9',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'bc4e2335-07d0-4840-aa37-09cf93a65786',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '09ed8bb5-32ae-4b22-8fb2-8eb7e96cb190',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'ea8cd409-cf75-4e8d-80a8-5c6403c56b7a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '029d4029-f9cb-43bf-b166-298b74820918',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '53c63aa7-031e-406d-8a1e-7a4f03bac595',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '194c5e5b-394a-4b98-9681-1988dacbef70',
                exercice_id: neck_curl.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'a589201d-d5ee-4000-b073-dda8aff4ce07',
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
        id: '9313054a-2092-4b26-8682-0a6dfc7be487',
        name: 'Vendredi',
        training_exercices: [
          {
            id: '02cb5e2b-aafc-478d-a39f-441d76fe1fb4',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '88d3f3d0-9dd3-46f7-9d9e-b016351f8080',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'd129980a-bb47-49db-8c1b-ece93e742c7e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '87bde430-ea06-4a2a-85bc-57308710617a',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'bd57296e-89d6-4dcd-912d-a14ff19a860f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '498b409f-588f-4e58-81eb-84f47edcaa33',
                type: SetTypeEnum.Custom,
                repetitions: '6-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '98449c92-281a-4925-a2e1-c0ba8460a069',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '966bd167-fa31-4ea8-a808-4712299babc3',
                exercice_id: romanian_deadlift.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '8bcdf5bf-49fb-44fe-9e2d-6213fb6ea3d7',
                exercice_id: barbell_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '95081ff3-36ba-45f0-80a8-b0157f077255',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'f41fbf11-7b71-43aa-a8cf-3e4fc1d7077f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'af9f9850-c757-4a3b-8dd3-b24a206dd19b',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '74bf30e0-3fb7-4ca3-bdcd-e3f723dcc370',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'fd2d0dd7-4bc7-4a3a-a925-a0f6fb66e8eb',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '0f73012a-f082-4562-bc12-722942a2e35e',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
          {
            id: '6e678726-64bf-4320-977b-607e7e013f0b',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'b5f62ba5-5d4c-4287-97ad-e52672f147b9',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '596f33c2-d2d0-4435-ba23-73c034d100b6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7031474a-a2af-48a3-a288-16c7f3ebc2dc',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'd07d4099-020f-4602-a1b3-6ddff9abba65',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f23e3387-8cf3-4751-879f-65eaa6631533',
                type: SetTypeEnum.Custom,
                repetitions: '15-20',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '14d562e4-aadd-4d60-9d78-27b8f5667525',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'c233b374-6b56-4aa3-977f-be9527f2e2ac',
                exercice_id: seated_calf_raise.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '8f79b2ef-9767-4199-b24d-f401e83864b1',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'c8f8761e-31ce-4837-97e1-9399429c29cf',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'f9f0e59b-388f-4bdd-a17d-72ea9481fe9d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '80cb5964-00bf-4ac4-bb36-5beec8b441d1',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '8eaf6c36-0626-4d0a-8c35-f3d01fd2b2dc',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7459a66c-3066-41b5-84ca-9940447e9f42',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '49d9a230-cf53-4489-b6a8-a6be2d275588',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'e780fc78-ab06-4d78-825e-fb8252e7f79f',
                exercice_id: leg_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'b9add46a-e228-4884-804a-7bb34917a519',
                exercice_id: smith_machine_squats.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '645f5d65-eb85-4c46-97e4-a9611bcfcd5a',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '3a98e026-005e-41e6-9e4a-9376e8c5c40b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '4934e769-0f73-4546-8483-5697a8092aa7',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '36d9ef85-1e08-4466-b2c5-822ce390fa5f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'ab3199ed-f517-408f-9509-4bbe093b5c88',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '5a814ca6-21d1-446f-b8e0-8af9aa93a5cc',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
          {
            id: '540850b7-adcb-4c89-ba39-dfe551785267',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'b1d39f4e-41b3-4b1c-be79-fdc8dea478a4',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '62ef22be-d8ec-4ff2-8c63-1f1948c1f53f',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '1e31e038-0d81-4e18-a692-8bee963e882d',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '9bc516aa-c364-467d-86e4-fd60ecf7b759',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'ec1180b1-1c6a-485a-a726-71ea4a824d7d',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '4ad82ea9-3beb-4513-ace3-d2d647cb044a',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '01a9677f-06de-4990-91d1-bea31f093adb',
                exercice_id: machine_rows.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'c52a7f31-0074-4c60-9982-41b131d3d8e8',
                exercice_id: incline_rows.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '35eb4cca-a993-4d01-831a-78152db52fd2',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'b4753b0f-98f7-44be-ab68-266a8e8368e1',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '25188949-48da-4ce6-9b64-35fa41baf892',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'f5904d05-0ec8-4046-8ff1-c1d86f490b7a',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '312ec546-98e3-41a5-97b2-4c010dcd641d',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '7379161c-2000-4179-a80b-ead816a4b65b',
                type: SetTypeEnum.Custom,
                repetitions: '10-15',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '0b14513d-aa49-48eb-a6f0-abb322222e81',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'b55ee1ae-96e0-40e3-a465-547a90a4d577',
                exercice_id: upright_row.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '5c1edc2c-e2fb-46c3-b9ef-a07802537be5',
                exercice_id: face_pull.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '5277c43d-56de-4c3d-a835-a1291ed0ef90',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'ff20cea9-7240-4191-a1f6-31d731083891',
                type: SetTypeEnum.Custom,
                repetitions: 'amrap',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '559897c3-cac3-45c6-bef8-564c62c0c00b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '062eac36-de8b-478a-8307-2847d4e9731b',
                type: SetTypeEnum.Custom,
                repetitions: 'amrap',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '82fe8ac3-74bc-4df6-be6a-1cfe6be9512b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'e0595ed5-4bed-4af1-8abe-d3698345afde',
                type: SetTypeEnum.Custom,
                repetitions: 'amrap',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '842101cc-d3a8-4f6c-8f92-2b90aaeb8954',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '9d57eceb-3184-49c0-99c3-8bf6e3479cbf',
                exercice_id: hanging_knee_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'f6598da0-7da7-42e8-9166-a068cdff2939',
                exercice_id: leg_raises.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
        ]
      },
      {
        id: 'f39ed217-092c-4735-a3e2-bf018e653bf0',
        name: 'Samedi',
        training_exercices: [
          {
            id: '349c1455-2f08-44c1-874c-bc0ade53fef6',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd72776a3-8a29-4e93-8069-773d13fa7594',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '213aec35-fdc6-4f27-b70c-391599325cf3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'dcb2fde8-e460-4a44-a1ac-a62f7dc286d9',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'cb19b7d1-418f-4d5a-84cf-845598f37267',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '61bd98e7-091d-46aa-baf6-83ddfd70c924',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'f376b2d1-7198-4d44-8502-1d29cafb5ea6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '98c03a65-afa5-4d34-9ddb-f53a7d477427',
                type: SetTypeEnum.Custom,
                repetitions: '6-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'f9275bd7-8d91-4765-9ed4-9a9d720ef0eb',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'a5b68d92-9d4a-4fd2-b58a-335e10caa438',
                exercice_id: incline_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '6b6e4326-fb60-400e-a21d-bce47d821aca',
                exercice_id: ring_push_ups.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: '26f8e579-1c29-488c-abf8-714db4292d58',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '61835d15-ad69-4b24-9160-308516c6c599',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '63c869a9-cabb-459e-9f08-f794614a37ce',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '9795280d-ff66-4446-994b-2cdfa50a9abc',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '22d41df8-c71a-4056-b45a-b71a2a560ef9',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '91eb45c5-7fda-4731-abae-498dc17bc265',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '7e15a89d-109f-4738-acf3-7aca51174466',
                    type: SetTypeEnum.Custom,
                    repetitions: '10-12',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '38edddc2-c67d-41dc-9402-631e8df7b68f',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
          {
            id: '49c263fc-7069-42a7-9dcb-946531546f75',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'd1320a7a-1f78-4fcf-b716-24f642ef3cda',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '14d7cb0c-1698-480d-8a89-d19bce7554e1',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '3f697334-d7f1-428f-8014-f17492aaa0c2',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '92d0ae3b-b81b-4aa3-9800-e2dc82912b19',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'cfa7cad2-9b41-416c-bdc0-628307391839',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'c6fccd84-fe37-4ade-b70d-c590860fbbbf',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'fffeecdc-d27f-4f8f-afa7-2760a4e9396f',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '1959122a-0d28-4e26-99f1-d44f0bac8572',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '71c098c6-8499-452b-8709-b06b6d26037e',
                exercice_id: dumbbell_pullover.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'bf8ded04-bf0d-432c-8a58-6646f2ed8da7',
                exercice_id: machine_pullover.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              }
            ],
          },
          {
            id: '42ca886b-7f52-4162-9bb6-bf37bc2613d0',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: '9b21038c-117f-4815-be27-9dcc38b46213',
                type: SetTypeEnum.Custom,
                repetitions: '8-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '0f01ae49-8cb8-4541-b9a3-74fc9807d9d6',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '8312e12b-ffd2-45f8-9de4-40ce1a0b23d1',
                type: SetTypeEnum.Custom,
                repetitions: '8-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'dc75328a-3c76-4980-b5d8-35405ef7dd60',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '2c5b75c7-33ba-4b43-99aa-5882d9a5187f',
                type: SetTypeEnum.Custom,
                repetitions: '8-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '683cde38-0936-4da8-86af-ea3ba6b7c74e',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '0103b9ce-8230-43d9-bc55-aee8252681e0',
                type: SetTypeEnum.Custom,
                repetitions: '8-10',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: 'b9a42f8d-9ac2-40c8-a46d-1fb05b2743e5',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: '914d0913-b309-4f16-97b7-137c6e5463d1',
                exercice_id: dumbbell_preacher_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: '39303c21-2573-4787-a062-9731ee57da78',
                exercice_id: bayesian_curls.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'ca067f0b-a2ea-4217-a9ec-21bc5899e321',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '07562d45-f4ce-4980-a141-c2f08f66dc01',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '2abe7f17-87a1-4e5b-b4fe-9d4b3a235494',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '0710b511-599b-4b11-baf7-d0431edfc92b',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'e99bef26-e1d8-4963-97b3-25a82e1619a7',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'ed6ac501-ff64-4414-a31d-27f4a1a5e8db',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: 'f321486c-e379-4a2d-919c-11622ae1a700',
                    type: SetTypeEnum.Custom,
                    repetitions: '12-15',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'a8af53ff-b331-4905-aaee-fd11f256c352',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
          {
            id: 'da68b6f9-78f6-400b-87c3-095c8e669295',
            is_done: false,
            sets: [],
            default_sets: [
              {
                id: 'f827a18b-5aac-4c85-8a30-91f3ba1bb9b3',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '99a4771b-26ef-47f7-86ed-98568278521b',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'bc500f24-39b8-41de-94f1-d705b1cc6dc3',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '7ba3ef47-0d2f-4d65-8fcc-480527d9a869',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: '09539c0b-6943-4639-9253-09988fbaaa72',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '9977b1c9-7c49-4b93-aeda-fb162b84a838',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
              {
                id: 'a7d86371-155c-455a-a51c-d88af3dfb740',
                type: SetTypeEnum.Custom,
                repetitions: '8-12',
                personal_record: false,
                is_done: false,
                displayable_set_information: {
                  id: '72114a46-b8f5-48cf-9f37-ac33597181f3',
                  type: DisplayableSetInformationTypeEnum.Label,
                  value: null
                }
              },
            ],
            recommended_training_exercices: [
              {
                id: 'fe3be54c-0508-4149-814a-57c286f70f33',
                exercice_id: skull_crushers.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
              },
              {
                id: 'f6a13eb3-0f1f-4a78-a2f9-3aac5541b8c3',
                exercice_id: french_press.id,
                is_done: false,
                recommended_training_exercices: [],
                sets: [],
                default_sets: [
                  {
                    id: 'c4d8e76f-0774-41e0-808a-334f83bdd4b2',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '1a005ca3-7ed1-4ae0-a8e3-6a832b2afa17',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '6500e200-cca2-4e26-848d-ed71c8ba88a5',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: 'cbc7546c-d94a-4a67-839c-b16c1c000732',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '19599230-d820-42d1-8db3-fe088d947f4e',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '62e38816-7ab1-49d8-8693-624f8f44bf14',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                  {
                    id: '316884c0-c97f-452a-aeb7-8c7464fb61cb',
                    type: SetTypeEnum.Custom,
                    repetitions: '8-10',
                    personal_record: false,
                    is_done: false,
                    displayable_set_information: {
                      id: '02184298-517d-4c89-acf6-7ab499b7d6ed',
                      type: DisplayableSetInformationTypeEnum.Label,
                      value: null
                    }
                  },
                ]
              }
            ],
          },
        ]
      }
    ],
  }]
}

export const BridgeVariation: ProgramVariation = {
  id: '8cf6259c-43a5-417c-a443-ec86eff4c60b',
  name: 'Bridge',
  description: `
    La variation "Bridge" est conçu pour faire passer les utilisateurs de la variation "Novice" à "Intermédiaire". Voici ce qu'il comprend :<br><br>
    <b>Fréquence :</b> Vous vous entraînerez quatre fois par semaine, en introduisant une journée dédiée au haut du corps et en incorporant des exercices d'isolation des bras tout au long de la semaine.<br><br>
    <b>Augmentation du volume :</b> Le nombre de séries passera de trois à quatre, ce qui se traduit par 21 séries supplémentaires par semaine. Cependant, cette augmentation ne s'applique qu'à la première moitié de la semaine, afin de ne pas vous épuiser.<br><br>
    <b>Ajustements des plages de répétitions :</b> À mesure que le nombre de séries augmente, les plages de répétitions doivent être modifiées pour assurer la compatibilité.<br><br>
    <b>Objectif :</b> Le principal objectif de ce programme est de développer votre volume de travail, c'est-à-dire que vous devriez être capable de faire plus de travail plus souvent sans compromettre l'intensité.<br><br>
    <b>Cohérence :</b> Les lundis et mercredis maintiennent une répartition similaire à celle que vous connaissez peut-être, mais maintenant avec l'option de trois ou quatre séries.<br><br>
    <b>Nouvelles additions le vendredi :</b> L'accent est mis sur le haut du dos avec l'introduction de tirages à la machine et de tirages inclinés. Le muscle du dos nécessite un volume élevé.<br><br>
    <b>Samedi - Upper :</b> Cette journée comprend quatre exercices - développé incliné/pompes aux anneaux, pull-overs avec haltères/pull-overs à la machine, curls au pupitre/Bayesian curl et extensions triceps/French press.<br><br>
    <b>Jours de repos :</b> Les mardis, jeudis et dimanches.<br><br>
    Quand devez-vous passer à la variation "Intermédiaire" ?<br><br>
    Quand vous vous sentez régulièrement énergique après vos entraînements et que vous trouvez nécessaire de faire quatre séries par groupe musculaire quotidiennement pour sentir la croissance, c'est le signe qu'il est temps de passer au programme intermédiaire.
  `,
  templates: [
    bridgeTemplate,
  ]
}