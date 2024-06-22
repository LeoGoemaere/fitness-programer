<script setup lang="ts">
const programsStore = useProgramsStore();

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

const programDescription = computed(() => programsStore.currentProgram?.description)
const variationDescription = computed(() => programsStore.currentVariation?.description)
const templateDescription = computed(() => programsStore.currentTemplate?.description)

const hasMultipleVariations = computed(() => {
  const variations = programsStore?.currentProgram?.variations
  return variations && variations.length > 1
})
const hasMultipleTemplates = computed(() => {
  const templates = programsStore?.currentVariation?.templates
  return templates && templates.length > 1
})
const hasMultipleWeeks = computed(() => {
  const weeks = programsStore?.currentTemplate?.weeks
  return weeks && weeks.length > 1
})

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
      title="Program"
    ></app-header>

    <div class="program__form">
        <UButtonGroup class="program__form-row" size="sm" orientation="horizontal">
          <UFormGroup class="flex-1" label="My program" :ui="{ label: { base: 'text-primary-500' } }">
            <USelect
              color="primary"
              size="lg"
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
                  <span class="tm__hint">% of 1 RM</span>
                </template>
              </UInput>
          </UFormGroup>
        </UButtonGroup>
      <!-- Only display if there is more than 1 variation -->
      <UFormGroup v-if="programsStore.currentProgram && hasMultipleVariations" class="program__form-row" label="Variation">
        <USelect
        :options="programsStore.currentProgram.variations"
        option-attribute="name"
        value-attribute="id"
        @update:modelValue="updateVariation"
        :modelValue="programsStore.currentVariation?.id"
        ></USelect>
      </UFormGroup>
      <!-- Only display if there is more than 1 template -->
      <UFormGroup v-if="programsStore.currentVariation && hasMultipleTemplates" class="program__form-row" label="Template">
        <USelect
          :options="programsStore.currentVariation.templates"
          option-attribute="name"
          value-attribute="id"
          @update:modelValue="updateTemplate"
          :modelValue="programsStore.currentTemplate?.id"
        ></USelect>
      </UFormGroup>
      <!-- Only display if there is more than 1 week -->
      <UFormGroup v-if="programsStore.currentTemplate && hasMultipleWeeks" class="program__form-row" label="Semaines">
        <USelect
          :options="programsStore.currentTemplate.weeks"
          option-attribute="name"
          value-attribute="id"
          @update:modelValue="updateWeek"
          :modelValue="programsStore.currentWeek?.id"
        ></USelect>
      </UFormGroup>
    </div>

    <UAlert v-if="programDescription || variationDescription || templateDescription" class="program__description">
      <template #description>
        <div v-if="programDescription" class="description__row">
          <p>
            <span class="font-bold">Program:</span> {{ programDescription }}
          </p>
        </div>
        <div v-if="variationDescription" class="description__row">
          <p>
            <span v-if="hasMultipleVariations" class="font-bold">Variation:</span> {{ variationDescription }}
          </p>
        </div>
        <div v-if="templateDescription" class="description__row">
          <p>
            <span v-if="hasMultipleTemplates" class="font-bold">Template:</span> {{ templateDescription }}
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
  max-width: 100px;
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