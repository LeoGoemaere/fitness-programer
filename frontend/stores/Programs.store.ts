import { defineStore } from 'pinia';
// import { program_response_531 } from '~/datas/programs'
import corePrograms from '~/datas/programs/corePrograms'

export const useProgramsStore = defineStore('programsStore', () => {
  const programs: Ref<Program[]> = ref(corePrograms);

  const firstProgramId = corePrograms[0]?.id
  const firstVariationId = corePrograms[0]?.variations[0]?.id
  const firstTemplateId = corePrograms[0]?.variations[0]?.templates[0]?.id
  const firstWeekId = corePrograms[0]?.variations[0]?.templates[0]?.weeks[0]?.id

  const selectedProgramId: Ref<string | null | undefined> = ref(firstProgramId || null)
  const selectedVariationId: Ref<string | null | undefined> = ref(firstVariationId || null)
  const selectedTemplateId: Ref<string | null | undefined> = ref(firstTemplateId || null)
  const selectedWeekId: Ref<string | null | undefined> = ref(firstWeekId || null)

  function setSelectedProgramId(programId?: string | null) {
    selectedProgramId.value = programId
    resetVariation()
    resetTemplate()
    resetWeek()
  }
  function setSelectedVariationId(variationId?: string | null) {
    selectedVariationId.value = variationId ? variationId : firstVariationId
    resetTemplate()
    resetWeek()
  }
  function setSelectedTemplateId(templateId?: string | null) {
    selectedTemplateId.value = templateId ? templateId : firstTemplateId
    resetWeek()
  }
  function setSelectedWeekId(weekId?: string | null) {
    selectedWeekId.value = weekId ? weekId : firstWeekId
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

  const currentProgram = computed(() => {
    if (selectedProgramId.value) {
      return programs.value.find(program => program.id === selectedProgramId.value)
    }
    return null
  })

  const currentVariation = computed(() => {
    if (currentProgram.value) {
      return currentProgram.value.variations.find(variation => variation.id === selectedVariationId.value)
    }
    return null
  })

  const currentTemplate = computed(() => {
    if (currentVariation.value) {
      return currentVariation.value.templates.find(template => template.id === selectedTemplateId.value)
    }
    return null
  })
  
  const currentWeek = computed(() => {
    if (currentTemplate.value) {
      return currentTemplate.value.weeks.find(week => week.id === selectedWeekId.value)
    }
    return null
  })

  return {
    programs,
    selectedProgramId,
    selectedVariationId,
    selectedTemplateId,
    setSelectedProgramId,
    setSelectedVariationId,
    setSelectedTemplateId,
    setSelectedWeekId,
    resetTemplate,
    resetVariation,
    resetWeek,
    currentProgram,
    currentVariation,
    currentTemplate,
    currentWeek
  };
});
