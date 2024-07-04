import type { ProgramVariation } from "~/types/Program.interface";
import { SetTypeEnum } from "~/types/SetTypeEnum";

export const BBBVariation: ProgramVariation = {
  id: '7d1a3cf4-1513-4139-9009-d310f7d5f876',
  name: 'Boring But Big',
  description: 'La variation Boring But Big du programme 531',
  templates: [
    {
      id: '21182e7f-df85-43cd-a2c9-611481751cc5',
      name: 'Template light',
      description: null,
      weeks: [
        {
          id: '6d46c8f2-9faa-4460-b64b-71ed5d606a2d',
          name: 'Semaine 1',
          trainings: [
            {
              id: '7f6bb6ad-2e9c-4e89-9080-ed020fe680f2',
              name: 'Training 1',
              training_exercices: []
            }
          ]
        }
      ]
    }
  ]
}