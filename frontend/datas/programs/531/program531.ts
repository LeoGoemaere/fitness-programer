import { TriumvirateVariation } from './variations/TriumvirateVariation'
import { BBBVariation } from './variations/BBBVariation'

export const program531: Program = {
  id: crypto.randomUUID(),
  tm_percentage: 0.9,
  name: "531",
  description: "Le 531 est un programme de force basé sur 4 mouvements principaux, à savoir le bench, soulevé de terre, le squat et la press.",
  variations: [
    TriumvirateVariation,
    BBBVariation
  ]
}