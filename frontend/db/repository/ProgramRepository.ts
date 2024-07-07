import { db } from '~/db/db';
import type { Exercice } from '~/types/Exercice.interface';
import type { Program } from '~/types/Program.interface';

export default class ProgramRepository {
  getAll() {
    return db.programs.toArray()
  }
  addProgram(program: Program) {
    return db.programs.add(program)
  }
}