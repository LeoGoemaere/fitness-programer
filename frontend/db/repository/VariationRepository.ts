import { db } from '~/db/db';
import type { Exercice } from '~/types/Exercice.interface';
import type { Program, ProgramVariation } from '~/types/Program.interface';

export default class VariationRepository {
  addVariation(variation: ProgramVariation) {
    return db.variations.add(variation)
  }
  getById(id: ProgramVariation['id']) {
    return db.variations.get(id)
  }
  getProgram(variation: ProgramVariation) {
    const { program_id } = variation
    return db.programs.get(program_id)
  }
}