// db.ts
import Dexie, { type EntityTable } from 'dexie';
import type { Exercice } from '~/types/Exercice.interface';

const db = new Dexie('FitnessProgrammer') as Dexie & {
  exercices: EntityTable<
    Exercice,
    'id' // primary key "id" (for the typings only)
  >;
};

// NOTES: Don't declare all columns like in SQL. You only declare properties you want to index, that is properties you want to use in a where(…) query.

// Schema declaration:
db.version(2).stores({
  exercices: '++id, name' // primary key "id" (for the runtime!)
});

db.open()

export { db };