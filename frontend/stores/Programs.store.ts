import { defineStore } from 'pinia';

// import { program_response_531 } from '~/datas/programs'
import corePrograms from '~/datas/programs/corePrograms'
import type { Program, ProgramSet, ProgramTrainingExercice } from '~/types/Program.interface';

export const useProgramsStore = defineStore('programsStore', () => {
  const programs: Ref<Program[]> = ref(corePrograms);

  const firstProgramId = corePrograms[0]?.id
  const firstVariationId = corePrograms[0]?.variations[0]?.id
  const firstTemplateId = corePrograms[0]?.variations[0]?.templates[0]?.id
  const firstWeekId = corePrograms[0]?.variations[0]?.templates[0]?.weeks[0]?.id
  const firstTrainingId = corePrograms[0]?.variations[0]?.templates[0]?.weeks[0]?.trainings[0].id

  const selectedProgramId: Ref<string | null | undefined> = ref(firstProgramId || null)
  const selectedVariationId: Ref<string | null | undefined> = ref(firstVariationId || null)
  const selectedTemplateId: Ref<string | null | undefined> = ref(firstTemplateId || null)
  const selectedWeekId: Ref<string | null | undefined> = ref(firstWeekId || null)
  const selectedTrainingId: Ref<string | null | undefined> = ref(firstTrainingId || null)

  const selectedProgramIndex = computed(() => {
    return programs.value.findIndex(program => program.id === selectedProgramId.value)
  })
  const selectedVariationIndex = computed(() => {
    return currentProgram.value.variations.findIndex(variation => variation.id === selectedVariationId.value)
  })
  const selectedTemplateIndex = computed(() => {
    return currentVariation.value.templates.findIndex(template => template.id === selectedTemplateId.value)
  })
  const selectedWeekIndex = computed(() => {
    return currentTemplate.value.weeks.findIndex(week => week.id === selectedWeekId.value)
  })
  const selectedTrainingIndex = computed(() => {
    return currentWeek.value.trainings.findIndex(training => training.id === selectedTrainingId.value)
  })

  const currentProgram = computed(() => {
    return programs.value[selectedProgramIndex.value]
  })
  const currentVariation = computed(() => {
    return currentProgram.value.variations[selectedVariationIndex.value]
  })
  const currentTemplate = computed(() => {
    return currentVariation.value.templates[selectedTemplateIndex.value]
  })
  const currentWeek = computed(() => {
    return currentTemplate.value.weeks[selectedWeekIndex.value]
  })
  const currentTraining = computed(() => {
    return currentWeek.value.trainings[selectedTrainingIndex.value]
  })

  const hasMultipleVariations = computed(() => {
    const variations = currentProgram.value?.variations
    return variations && variations.length > 1
  })
  const hasMultipleTemplates = computed(() => {
    const templates = currentVariation.value?.templates
    return templates && templates.length > 1
  })
  const hasMultipleWeeks = computed(() => {
    const weeks = currentTemplate.value?.weeks
    return weeks && weeks.length > 1
  })

  function setSelectedProgramId(programId?: string | null) {
    selectedProgramId.value = programId
    resetVariation()
    resetTemplate()
    resetWeek()
    resetTraining()
  }
  function setSelectedVariationId(variationId?: string | null) {
    selectedVariationId.value = variationId ? variationId : firstVariationId
    resetTemplate()
    resetWeek()
    resetTraining()
  }
  function setSelectedTemplateId(templateId?: string | null) {
    selectedTemplateId.value = templateId ? templateId : firstTemplateId
    resetWeek()
    resetTraining()
  }
  function setSelectedWeekId(weekId?: string | null) {
    selectedWeekId.value = weekId ? weekId : firstWeekId
    resetTraining()
  }
  function setSelectedTrainingId(trainingId?: string | null) {
    selectedTrainingId.value = trainingId ? trainingId : firstTrainingId
  }

  function deleteProgramSet(programSet: ProgramSet, trainingExercice: ProgramTrainingExercice) {
    // Update the current program/variation etc.
    const selectedTraining = programs.value[selectedProgramIndex.value]
      .variations[selectedVariationIndex.value]
      .templates[selectedTemplateIndex.value]
      .weeks[selectedWeekIndex.value]
      .trainings[selectedTrainingIndex.value]

      const trainingExerciceIndex = selectedTraining.training_exercices.findIndex(trainingExerciceItem => trainingExerciceItem.id === trainingExercice.id)

      if (trainingExerciceIndex >= 0) {
        // delete the reference
        selectedTraining.training_exercices[trainingExerciceIndex].sets = trainingExercice.sets.filter(setItem => setItem.id !== programSet.id)
      }
  }

  function updateProgramSet(programSet: ProgramSet, trainingExercice: ProgramTrainingExercice) {
    // Update the current program/variation etc.
    const selectedTrainings = programs.value[selectedProgramIndex.value]
      .variations[selectedVariationIndex.value]
      .templates[selectedTemplateIndex.value]
      .weeks[selectedWeekIndex.value]
      .trainings[selectedTrainingIndex.value]
      
    const setIndex = trainingExercice.sets.findIndex(setItem => setItem.id === programSet.id)
    const trainingExerciceIndex = selectedTrainings.training_exercices.findIndex(trainingExerciceItem => trainingExerciceItem.id === trainingExercice.id)
    if (setIndex >= 0 && trainingExerciceIndex >= 0) {
      // Update the reference
      selectedTrainings.training_exercices[trainingExerciceIndex].sets[setIndex] = programSet
    }
  }
  
  function addProgramSet(programSet: ProgramSet, trainingExercice: ProgramTrainingExercice) {
    // Update the current program/variation etc.
    const selectedTrainings = programs.value[selectedProgramIndex.value]
      .variations[selectedVariationIndex.value]
      .templates[selectedTemplateIndex.value]
      .weeks[selectedWeekIndex.value]
      .trainings[selectedTrainingIndex.value]
      
    const existingSet = trainingExercice.sets.find(setItem => setItem.id === programSet.id)
    const trainingExerciceIndex = selectedTrainings.training_exercices.findIndex(trainingExerciceItem => trainingExerciceItem.id === trainingExercice.id)

    if (!existingSet && trainingExerciceIndex >= 0) {
      selectedTrainings.training_exercices[trainingExerciceIndex].sets.push(programSet)
    }
  }

  function updateTrainingExercice(trainingExercice: ProgramTrainingExercice) {
    // Update the current program/variation etc.
    const currentTrainingExercice = programs.value[selectedProgramIndex.value]
      .variations[selectedVariationIndex.value]
      .templates[selectedTemplateIndex.value]
      .weeks[selectedWeekIndex.value]
      .trainings[selectedTrainingIndex.value]
      
      
    const trainingExerciceIndex = currentTrainingExercice.training_exercices.findIndex(trainingItem => trainingItem.id === trainingExercice.id)
    if (trainingExerciceIndex >= 0) {
      // Update the reference
      currentTrainingExercice.training_exercices[trainingExerciceIndex] = trainingExercice
    }
  }
  
  function deleteTrainingExercice(trainingExercice: ProgramTrainingExercice) {
    // Update the current program/variation etc.
    const currentTrainingExercice = programs.value[selectedProgramIndex.value]
      .variations[selectedVariationIndex.value]
      .templates[selectedTemplateIndex.value]
      .weeks[selectedWeekIndex.value]
      .trainings[selectedTrainingIndex.value]
      
      // Update the reference
      currentTrainingExercice.training_exercices = currentTrainingExercice.training_exercices.filter(trainingItem => trainingItem.id !== trainingExercice.id)
  }

  // TODO: Make a composable
  function resetVariation() {
    const variation = currentProgram.value?.variations[0]
    selectedVariationId.value = variation ? variation.id : null
  }
  function resetTemplate() {
    const template = currentVariation.value?.templates[0]
    selectedTemplateId.value = template ? template.id : null
  }
  function resetWeek() {
    const week = currentTemplate.value?.weeks[0]
    selectedWeekId.value = week ? week.id : null
  }
  function resetTraining() {
    const training = currentWeek.value?.trainings[0]
    selectedTrainingId.value = training ? training.id : null
  }

  return {
    programs,
    selectedProgramId,
    selectedVariationId,
    selectedTemplateId,
    selectedWeekId,
    selectedTrainingId,
    setSelectedProgramId,
    setSelectedVariationId,
    setSelectedTemplateId,
    setSelectedWeekId,
    setSelectedTrainingId,
    resetTemplate,
    resetVariation,
    resetWeek,
    resetTraining,
    currentProgram,
    currentVariation,
    currentTemplate,
    currentWeek,
    currentTraining,
    updateProgramSet,
    deleteProgramSet,
    addProgramSet,
    updateTrainingExercice,
    deleteTrainingExercice,
    hasMultipleVariations,
    hasMultipleTemplates,
    hasMultipleWeeks
  };
}, {
  persist: true
});
