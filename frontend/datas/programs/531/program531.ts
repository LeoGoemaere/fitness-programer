import { TriumvirateVariation } from './variations/TriumvirateVariation'
import { BBBVariation } from './variations/BBBVariation'
import { notDoingJackShit } from './variations/NotDoingJackShitVariation'
import type { Program, ProgramTemplate } from '~/types/Program.interface'

export const program531: Program = {
  id: '64c14ed5-e833-4cc5-b8df-cc10da13aaa0',
  tm_percentage: 0.9,
  name: '5/3/1',
  description: `
    Le programme 5/3/1 de Jim Wendler consiste à commencer avec des poids très légers tout en progressant lentement et régulièrement.
    Ce programme de musculation extrêmement populaire est basé sur les schémas 5, 3, 1, comme son nom l'indique. Tout au long du programme, vous travaillerez avec des pourcentages basés sur votre maximum et vous vous efforcerez d'atteindre des PR à chaque séance d'entraînement.
  `,
  variations: [
    notDoingJackShit,
    // TriumvirateVariation,
    BBBVariation
  ]
}