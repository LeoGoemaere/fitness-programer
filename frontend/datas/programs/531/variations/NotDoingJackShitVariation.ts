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
              recommended_training_exercices: [
                {
                  id: 'ca0e7557-8c78-4644-bf66-dae510c7a3e1',
                  exercice_id: barbell_overhead_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: [
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
                  ]
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
              recommended_training_exercices: [
                {
                  id: '60a83572-bcf5-4ec2-bcdb-7585b5e1539c',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [
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
                  recommended_training_exercices: []
                }
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
              recommended_training_exercices: [
                {
                  id: '967fee62-a95e-4dde-b430-b6dc65ea56ab',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [
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
                  recommended_training_exercices: []
                }
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
              recommended_training_exercices: [
                {
                  id: '685b08be-ca52-432f-a338-e8ad912b315c',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [
                    {
                      id: '4415081a-032a-4229-8247-ef48f0988a31',
                      type: SetTypeEnum.TM,
                      repetitions: 5,
                      exercice_max_weight_percentage: 0.65,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: '4520712f-436b-47e4-bdd2-9052ce97e0e3',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: '466c1c03-acc1-4c7a-a7b1-d55d60aa00e5',
                      type: SetTypeEnum.TM,
                      repetitions: 5,
                      exercice_max_weight_percentage: 0.75,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: '783990e5-b849-4044-b37c-ea5db693391f',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: '491de28d-d303-492d-96d2-b432b77aad2d',
                      type: SetTypeEnum.TM,
                      repetitions: 5,
                      exercice_max_weight_percentage: 0.85,
                      personal_record: true,
                      is_done: false,
                      displayable_set_information: {
                        id: 'cd75b278-fd6c-4894-9b45-92ba8883a2b8',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    }
                  ],
                  recommended_training_exercices: []
                }
              ],
            },
          ]
        }
      ]
    },
    {
      id: '60d0090e-284b-437e-a8f8-3cc8929bbc22',
      name: 'Semaine 2',
      trainings: [
        {
          id: 'cc46561a-80b8-44e4-a16b-fd0b5d3b9179',
          name: 'Training 1',
          training_exercices: [
            {
              id: '4689c33b-ab91-4417-bee7-6590499efe5d',
              is_done: false,
              sets: [],
              recommended_training_exercices: [
                {
                  id: '99871852-95e0-4adb-a543-cddaa354b7b8',
                  exercice_id: barbell_overhead_press.id,
                  recommended_training_exercices: [],
                  is_done: false,
                  sets: [
                    {
                      id: 'a951435b-d467-4891-bb8e-9f495db1605c',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.7,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: 'c43d424c-3a28-4901-84cc-89e30a4653f2',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: 'da4525c2-e7dc-4062-b2b6-590c260cee08',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.8,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: '4caac146-e0fd-4342-8484-894cb9b604d1',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: 'd82fe9a6-cecb-473f-ab32-ecb8e5675737',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.9,
                      personal_record: true,
                      is_done: false,
                      displayable_set_information: {
                        id: '9e21aecb-3532-4b5d-9348-2d35e9030419',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    }
                  ]
                }
              ],
            },
          ]
        },
        {
          id: '338ace11-5896-4563-9090-f78553d153b2',
          name: 'Training 2',
          training_exercices: [
            {
              id: 'a6b343e0-f4cc-4604-8a7f-99d8a5d2d2b7',
              is_done: false,
              sets: [],
              recommended_training_exercices: [
                {
                  id: 'd52b0e0d-6781-4e8f-a5f0-3ce0900969cd',
                  exercice_id: sumo_deadlift.id,
                  is_done: false,
                  sets: [
                    {
                      id: 'fd0dfcf1-63a0-456f-a743-74db197c04cc',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.7,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: 'ac9d4f10-8241-4999-a7d6-74c5a28179cf',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: '1b3e666a-73aa-4524-9cf7-b37be2aaf4bf',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.8,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: 'a6a236f0-45cd-4ac3-bfc1-6516194bf26d',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: '6c0f7f91-5221-4b89-bc51-9344cb60c783',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.9,
                      personal_record: true,
                      is_done: false,
                      displayable_set_information: {
                        id: 'f9331e4d-b1f1-4529-a038-0e80c7b8686a',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    }
                  ],
                  recommended_training_exercices: []
                }
              ],
            },
          ]
        },
        {
          id: '84b4e33d-d875-4560-88a0-03aa8a048b3f',
          name: 'Training 3',
          training_exercices: [
            {
              id: 'bad87750-1fc3-4c69-9d7b-3299f384ea14',
              is_done: false,
              sets: [],
              recommended_training_exercices: [
                {
                  id: 'bac1b110-8be6-49f4-821b-08746173d873',
                  exercice_id: bench_press.id,
                  is_done: false,
                  sets: [
                    {
                      id: '1271e872-0042-494c-afd2-ed8c8555a17d',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.7,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: 'dd503936-da82-4411-ac06-0457de12c55d',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: '39d8c190-0357-4f1e-9141-0067f935894f',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.8,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: '3f79f0bf-ffee-41a4-a53d-339c6a80e150',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: 'f4c9ab5b-886e-461e-82e1-71f506a4bd19',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.9,
                      personal_record: true,
                      is_done: false,
                      displayable_set_information: {
                        id: '6b20e416-a632-43c7-ba5a-45599b7bf4d1',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    }
                  ],
                  recommended_training_exercices: []
                }
              ],
            },
          ]
        },
        {
          id: '6a1045b7-cad7-48e4-8648-f951d53ed38a',
          name: 'Training 4',
          training_exercices: [
            {
              id: 'f627f4eb-d458-4776-96ad-dbf385d54837',
              is_done: false,
              sets: [],
              recommended_training_exercices: [
                {
                  id: 'aa9d624f-074e-4771-910f-7bf1d0050adf',
                  exercice_id: low_bar_squat.id,
                  is_done: false,
                  sets: [
                    {
                      id: '01451482-bfae-4277-ac5c-4bbb08a74306',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.7,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: 'bebc0c15-0d39-4841-8bb5-e61375c91a8c',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: 'd1ad3149-2841-4318-99d4-f810650d9903',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.8,
                      personal_record: false,
                      is_done: false,
                      displayable_set_information: {
                        id: '1ee166dc-f187-4c25-b3b8-a3a8bdf51c0a',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    },
                    {
                      id: 'b5c0ca8d-56ea-4d8c-881f-258fd2316cb5',
                      type: SetTypeEnum.TM,
                      repetitions: 3,
                      exercice_max_weight_percentage: 0.9,
                      personal_record: true,
                      is_done: false,
                      displayable_set_information: {
                        id: '55b9ae77-4eb1-47b7-a092-81811701dc4b',
                        type: DisplayableSetInformationTypeEnum.TM,
                        value: null
                      }
                    }
                  ],
                  recommended_training_exercices: []
                }
              ],
            },
          ]
        }
      ]
    }
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