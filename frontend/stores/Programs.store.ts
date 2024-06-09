import { defineStore } from 'pinia';
// import { program_response_531 } from '~/datas/programs'
import corePrograms from '~/datas/programs/corePrograms'

export const useProgramsStore = defineStore('programsStore', () => {
  const programs: Ref<Program[]> = ref(corePrograms);

  const selectedProgramId: Ref<string | null> = ref(corePrograms[0].id)
  const selectedVariationId: Ref<string | null> = ref(null)
  const selectedTemplateId: Ref<string | null> = ref(null)

  function setSelectedProgramId(programId: string | null) {
    selectedProgramId.value = programId
  }
  function setSelectedVariationId(variationId: string | null) {
    selectedVariationId.value = variationId
  }
  function setSelectedTemplateId(templateId: string | null) {
    selectedTemplateId.value = templateId
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

  return {
    programs,
    selectedProgramId,
    selectedVariationId,
    selectedTemplateId,
    setSelectedProgramId,
    setSelectedVariationId,
    setSelectedTemplateId,
    currentProgram,
    currentVariation,
    currentTemplate
  };
});
