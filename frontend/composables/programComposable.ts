import { MaxType, type Exercice } from "~/types/Exercice.interface"
import { roundValue } from "~/utils/utils"

import { useObservable, from } from '@vueuse/rxjs'
import { liveQuery, Dexie } from "dexie";
import ProgramRepository from "~/db/repository/ProgramRepository";
import type { Program } from "~/types/Program.interface";

export default function useProgram() {
  const programRepository = new ProgramRepository()

  const dbPrograms = useObservable(
    from(
      liveQuery(async () => await programRepository.getAll())
    ),
    { initialValue: []}
  );

  function addProgram(program: Program) {
    return programRepository.addProgram(program)
  }

  function getEmptyProgram(): Program {
    return {
      name: '',
      tm_percentage: 0,
      description: ''
    }
  }

  return {
    dbPrograms,
    addProgram,
    getEmptyProgram
  }
}