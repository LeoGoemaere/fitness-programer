<script setup lang="ts">
import type { FormError } from '#ui/types'
import { MaxType, type Exercice } from '~/types/Exercice.interface';
import coreMuscles from '~/datas/muscles/coreMuscles'
import { blockInvalidChar } from '~/utils/utils';
import { updateExerciceMax } from '~/composables/exerciceComposable';
import type { MusclesEnum } from '~/types/MusclesEnum';

const { t } = useI18n()
const exercicesStore = useExercicesStore();
const programsStore = useProgramsStore();

interface Props {
  modelValue: boolean
  exercice?: Exercice | null
}

interface Emit {
  (e: 'update:modelValue', active: boolean): void
  (e: 'exerciceCreated', muscle: MusclesEnum | string): void
}

// Declarations des emits
const emit = defineEmits<Emit>();

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  modelValue: false
});

const exerciceItem = ref(getEmptyExercice())
const tagQuery = ref('')
const muscleListSorts = coreMuscles
  .map(muscle => ({ id: muscle, libelle: t(`muscles.${muscle}`) }))
  .sort((a, b) => a.libelle.localeCompare(b.libelle))

const selectedTags = computed({
  get: () => exercicesStore.getTagFromExercice(exerciceItem.value),
  set: (tags) => {
    tagQuery.value = ''
    exerciceItem.value.tag_ids = tags.map(tag => tag.id)
  }
})

const selectedTagsLabel = computed(() => {
  if (selectedTags.value?.length && selectedTags.value?.length > 0) {
    if (selectedTags.value.length > 1) {
      return `${selectedTags.value.length} tags selectionnés`
    } else {
      return `${selectedTags.value[0].name}`
    }
  }
  return 'Sélectionner des tags'
})

function formValidation(state: Exercice): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Le nom est obligatoire' })
  if (!state.primary_muscle) errors.push({ path: 'primary_muscle', message: 'Le muscle est obligatoire' })
  if (typeof state.weight_progression === 'string') errors.push({ path: 'progression', message: 'Verifiez la saisie ou mettre 0' })
  return errors
}

function onSubmit() {
  // Exercice is editing
  if (props.exercice) {
    exercicesStore.updateExercice(exerciceItem.value)
    } else {
    exercicesStore.addExercice(exerciceItem.value)
  }
  emit('update:modelValue', false)
  emit('exerciceCreated', exerciceItem.value.primary_muscle)
  exerciceItem.value = getEmptyExercice()
}

function updateRmMax(value: number) {
  const tmPercentage = programsStore.currentProgram?.tm_percentage
  const newExercice = updateExerciceMax(MaxType.rm, value, exerciceItem.value, tmPercentage)
  exerciceItem.value = newExercice
}

function onClose() {
  exerciceItem.value = getEmptyExercice()
  emit('update:modelValue', false)
}

const popinTitleLabel = computed(() => {
  if (props.exercice) {
    return `Editer l'exercice ${props.exercice.name}`
  }
  return 'Créer un exercice'
})

watch(() => props.exercice, (value) => {
  if (props.exercice) {
    exerciceItem.value = { ...props.exercice }
  }
})

</script>

<template>
<UModal :model-value="props.modelValue" @update:modelValue="emit('update:modelValue', $event)" :ui="{ container: 'items-center' }">
  <UCard :ui="{ body: { base: 'border-solid' } }">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          {{ popinTitleLabel }}
        </h3>
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="onClose" />
      </div>
    </template>

    <UForm :validate="formValidation" :state="exerciceItem" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Nom" name="name">
        <UInput placeholder="Nom de l'exercice" v-model="exerciceItem.name" />
      </UFormGroup>
      <UFormGroup label="Progression des poids" name="progression" :description="`Le poids à augmenter sur le ${exerciceItem.reference_max_progression}`">
        <UButtonGroup class="w-full" orientation="horizontal">
          <UInput
            type="number"
            step="0.01"
            class="flex-1"
            placeholder="Progression"
            v-model="exerciceItem.weight_progression"
          >
            <template #trailing>
              <span class="text-gray-500 dark:text-gray-400 text-xs">Kg</span>
            </template>
          </UInput>
          <USelect v-model="exerciceItem.reference_max_progression" :options="['RM', 'TM']" />
        </UButtonGroup>
      </UFormGroup>
      <UFormGroup label="Répetition max" name="repetition_max">
        <UInput
          placeholder="Répetition max"
          step="0.01"
          :modelValue="exerciceItem.RM"
          @keydown="blockInvalidChar"
          @change="updateRmMax"
          type="number"
        >
          <template #trailing>
            <span class="text-gray-500 dark:text-gray-400 text-xs">Kg</span>
          </template>
        </UInput>
      </UFormGroup>
      <UFormGroup label="Muscle principal" name="primary_muscle">
        <USelectMenu
          searchable
          searchable-placeholder="Rechercher un muscle..."
          class="w-full lg:w-48"
          placeholder="Selectionner un muscle"
          value-attribute="id"
          option-attribute="libelle"
          :options="muscleListSorts"
          v-model="exerciceItem.primary_muscle"
        />
      </UFormGroup>
      <UFormGroup label="Tags" name="tags">
        <USelectMenu
          :uiMenu="{ option: { container: 'w-full' } }"
          v-model="selectedTags"
          v-model:query="tagQuery"
          :options="exercicesStore.exerciceTags"
          multiple
          placeholder="Tags"
          option-attribute="name"
          by="id"
          searchable
        >
          <template #label>
            <span>{{ selectedTagsLabel }}</span>
          </template>
          <template #option="{ option: tag }">
            <ExerciceTag :tag="tag"></ExerciceTag>
          </template>
        </USelectMenu>
      </UFormGroup>
      <div class="flex justify-center">
        <UButton type="submit">Valider</UButton>
      </div>
    </UForm>

  </UCard>
</UModal>
</template>

<style lang="scss">
</style>

