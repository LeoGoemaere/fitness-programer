import type { Program } from '~/types/Program.interface'
import { NoviceVariation } from './variations/NoviceVariation'
import { BridgeVariation } from './variations/BridgeVariation'

export const programNH: Program = {
  id: crypto.randomUUID(),
  tm_percentage: 0.9,
  name: "NH",
  description: "Programme du youtubeur Natural Hypertrophy",
  variations: [
    NoviceVariation,
    BridgeVariation
  ]
}