<script setup lang="ts">
const programsStore = useProgramsStore();

function updateProgram(programId: string) {
  programsStore.setSelectedProgramId(programId)
  updateVariation(null)
  updateTemplate(null)
}
function updateVariation(variationId: string | null) {
  programsStore.setSelectedVariationId(variationId)
  updateTemplate(null)
}
function updateTemplate(templateId: string | null) {
  programsStore.setSelectedTemplateId(templateId)
}

const programDescription = computed(() => programsStore.currentProgram?.description)
const variationDescription = computed(() => programsStore.currentVariation?.description)
const templateDescription = computed(() => programsStore.currentTemplate?.description)
// TODO: Add tm percentage input
</script>

<template>
  <div class="program">
    <app-header
      title="Program"
    ></app-header>

    <div class="program__form">
      <UFormGroup class="program__form-row" label="My program" :ui="{ label: { base: 'text-primary-500' } }">
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
        <UFormGroup v-if="programsStore.currentProgram" class="program__form-row" label="Variation">
          <USelect
          :options="programsStore.currentProgram.variations"
          option-attribute="name"
          value-attribute="id"
          @update:modelValue="updateVariation"
          :modelValue="programsStore.currentVariation?.id"
          ></USelect>
        </UFormGroup>
        <UFormGroup v-if="programsStore.currentVariation" class="program__form-row" label="Template">
          <USelect
          :options="programsStore.currentVariation.templates"
          option-attribute="name"
          value-attribute="id"
          @update:modelValue="updateTemplate"
          :modelValue="programsStore.currentTemplate?.id"
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
            <span class="font-bold">Variation:</span> {{ variationDescription }}
          </p>
        </div>
        <div v-if="templateDescription" class="description__row">
          <p>
            <span class="font-bold">Template:</span> {{ templateDescription }}
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
  + .program__form-row {
    margin-top: 10px;
  }
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