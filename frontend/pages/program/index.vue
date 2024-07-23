<script setup lang="ts">
import type { ProgramTrainingExercice } from '~/types/Program.interface';

const programsStore = useProgramsStore();
const toast = useToast()

function updateProgram(programId: string) {
  programsStore.setSelectedProgramId(programId)
}
function updateVariation(variationId: string | null) {
  programsStore.setSelectedVariationId(variationId)
}
function updateTemplate(templateId: string | null) {
  programsStore.setSelectedTemplateId(templateId)
}
function updateWeek(weekId: string | null) {
  programsStore.setSelectedWeekId(weekId)
}

function resetAllIsDoneExercices() {
  programsStore.currentTraining.training_exercices.forEach(trainingExercice => {
    const newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(trainingExercice))
    newTrainingExercice.is_done = false
    programsStore.updateTrainingExercice(newTrainingExercice)
  });
  toast.add({
    title: 'Les exercices terminés ont été réinitialisés',
    timeout: 3000
  })
}

const programDescription = computed(() => programsStore.currentProgram?.description)
const variationDescription = computed(() => programsStore.currentVariation?.description)
const templateDescription = computed(() => programsStore.currentTemplate?.description)

const tmPercentageValue = computed(() => {
  const program = programsStore.currentProgram
  if (program) {
    return program.tm_percentage * 100
  }
  return null
})
</script>

<template>
  <div class="program">
    <app-header
      title="Programme"
    ></app-header>

    <div class="program__form">
      <UButtonGroup class="program__form-row" orientation="horizontal">
        <UFormGroup class="flex-1" label="Mon programme" :ui="{ label: { base: 'text-primary-500' } }">
          <USelect
            color="primary"
            :options="programsStore.programs"
            option-attribute="name"
            value-attribute="id"
            @update:modelValue="updateProgram"
            :modelValue="programsStore.currentProgram?.id"
            ></USelect>
        </UFormGroup>
        <UFormGroup
          class="program__tm"
          label="Training Max %"
          :ui="{ label: { base: 'text-primary-500' } }">
            <UInput
              color="primary"
              disabled
              readonly="readonly"
              :modelValue="tmPercentageValue"
            >
              <template #trailing>
                <span class="tm__hint">% de la RM</span>
              </template>
            </UInput>
        </UFormGroup>
      </UButtonGroup>
      <!-- Only display if there is more than 1 variation -->
      <UFormGroup v-if="programsStore.currentProgram && programsStore.hasMultipleVariations" class="program__form-row" label="Variation">
        <USelect
        :options="programsStore.currentProgram.variations"
        option-attribute="name"
        value-attribute="id"
        @update:modelValue="updateVariation"
        :modelValue="programsStore.currentVariation?.id"
        ></USelect>
      </UFormGroup>
      <!-- Only display if there is more than 1 template -->
      <UFormGroup v-if="programsStore.currentVariation && programsStore.hasMultipleTemplates" class="program__form-row" label="Template">
        <USelect
          :options="programsStore.currentVariation.templates"
          option-attribute="name"
          value-attribute="id"
          @update:modelValue="updateTemplate"
          :modelValue="programsStore.currentTemplate?.id"
        ></USelect>
      </UFormGroup>
      <!-- Only display if there is more than 1 week -->
      <UFormGroup v-if="programsStore.currentTemplate && programsStore.hasMultipleWeeks" class="program__form-row" label="Semaines">
        <USelect
          :options="programsStore.currentTemplate.weeks"
          option-attribute="name"
          value-attribute="id"
          @update:modelValue="updateWeek"
          :modelValue="programsStore.currentWeek?.id"
        ></USelect>
      </UFormGroup>
      <UButton
        label="Action"
        class="mt-5"
        variant="outline"
        @click="resetAllIsDoneExercices"
      >
        Réinitialiser les exercices terminés
      </UButton>
    </div>

    <UAlert v-if="programDescription || variationDescription || templateDescription" class="program__description">
      <template #description>
        <div v-if="programDescription" class="description__row">
          <p v-html="programDescription" />
        </div>
        <div v-if="variationDescription" class="description__row">
          <p v-html="variationDescription" />
        </div>
        <div v-if="templateDescription" class="description__row">
          <p>
            <span v-if="programsStore.hasMultipleTemplates" class="font-bold">Template:</span> {{ templateDescription }}
          </p>
        </div>
      </template>
    </UAlert>
  </div>
</template>

<style lang="scss" scoped>
.program__form {
   margin: auto;
}

.program__form-row {
  width: 100%;
  + .program__form-row {
    margin-top: 10px;
  }
}

.program__tm {
  max-width: 120px;
}

.tm__hint {
  font-size: 12px;
  color: rgb(var(--color-gray-500));
}

.program__infos {
  margin-top: 20px;
  font-size: 14px;
  line-height: normal;
}

.program__description-title {
  font-weight: 600;
  margin-bottom: 10px
}

.program__description {
  margin-top: 20px;
}

.description__row {
  + .description__row {
    margin-top: 10px;
  }
}
</style>