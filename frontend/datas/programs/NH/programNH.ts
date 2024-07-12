import type { Program } from '~/types/Program.interface'
import { NoviceVariation } from './variations/NoviceVariation'
import { BridgeVariation } from './variations/BridgeVariation'
import { IntermediateVariation } from './variations/IntermediateVariation'

export const programNH: Program = {
  id: '65b72554-d3aa-4a60-b75b-3402c472e89c',
  tm_percentage: 0.9,
  name: "NH",
  description: "Programme du youtubeur Natural Hypertrophy",
  variations: [
    NoviceVariation,
    BridgeVariation,
    IntermediateVariation
  ]
}