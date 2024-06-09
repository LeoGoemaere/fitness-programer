interface Exercice {
  id: string
  name: string
  rm: number
  tm: number
  weight_progression: number
  reference_weight_progression: 'rm' | 'tm'
}
