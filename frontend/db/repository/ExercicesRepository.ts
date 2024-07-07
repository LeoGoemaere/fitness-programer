import { db } from '~/db/db';
import type { Exercice } from '~/types/Exercice.interface';

export default class ExercicesRepository {
  getAll() {
    return db.exercices.toArray()
  }

  get(id: number) {
    return db.exercices.get(id)
  }

  putExercice(exercice: Exercice) {
    return db.exercices.put(exercice)
  }

  addExercice(exercice: Exercice) {
    return db.exercices.add(exercice)
  }

  addExercices(exercices: Exercice[]) {
    return db.exercices.bulkAdd(exercices)
  }

  deleteExercice(id: Exercice['id']) {
    return db.exercices.delete(id)
  }
}