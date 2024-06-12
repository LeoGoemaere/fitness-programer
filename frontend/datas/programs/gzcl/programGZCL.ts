import { defaultVariation } from './variations/defaultVariation'

export const programGZCL: Program = {
  id: crypto.randomUUID(),
  tm_percentage: 0.97,
  name: "GZCL",
  description: "Le GZCL est un programme de force basé sur 4 mouvements principaux, à savoir le bench, soulevé de terre, le squat et la press.",
  variations: [
    defaultVariation
  ]
}