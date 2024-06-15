<script setup lang="ts">
import type { FormError } from '#ui/types'
import type { Exercice } from '~/types/Exercice.interface';
import coreMuscles from '~/datas/muscles/coreMuscles'
import { blockInvalidChar } from '~/utils/utils';
import { updateExerciceMax } from '~/composables/exerciceComposable';

/**
 * TODO:
 * - Redirect on exercice after creation
 * - Fix TS errors
 * - Form validation
 */
const { t } = useI18n()
const exercicesStore = useExercicesStore();
const programsStore = useProgramsStore();

interface Props {
  modelValue: boolean
  exercice?: Exercice
}

interface Emit {
  (e: 'update:modelValue', active: boolean): void
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
  get: () => exerciceItem.value.tag_ids,
  set: (tags) => {
    tagQuery.value = ''
    exerciceItem.value.tag_ids = tags
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

// const selectedTags = computed({
//   get: () => exerciceItem.value.tag_ids,
//   set: (tags) => {
//     // TODO: API 
//     const tagResults = tags.map(tag => {
//       if (tag.id) {
//         return tag
//       }

//       const newTag = createTag(tag.name)

//       exercicesStore.addExerciceTag(newTag)
//       return newTag
//     })
//     tagQuery.value = ''
//     exerciceItem.value.tag_ids = tagResults
//   }
// })

function formValidation(state: any): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'name', message: 'Le nom est obligatoire' })
  if (!state.primary_muscle) errors.push({ path: 'primary_muscle', message: 'Le muscle est obligatoire' })
  return errors
}

function onSubmit() {
  // Exercice is editing
  if (props.exercice) {
    exercicesStore.updateExercice(exerciceItem.value)
    } else {
    exercicesStore.addExercice(exerciceItem.value)
  }
  exerciceItem.value = getEmptyExercice()
  emit('update:modelValue', false)
}

function updateRmMax(value: number) {
  const tmPercentage = programsStore.currentProgram?.tm_percentage
  const newExercice = updateExerciceMax('rm', value, exerciceItem.value, tmPercentage)
  exerciceItem.value = newExercice
}

function onClose() {
  exerciceItem.value = getEmptyExercice()
  emit('update:modelValue', false)
}

onMounted(() => {
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
          <span v-if="props.exercice">Editer un exercice</span>
          <span v-else>Créer un exercice</span>
        </h3>
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="onClose" />
      </div>
    </template>

    <UForm :validate="formValidation" :state="exerciceItem" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="name" name="name">
        <UInput placeholder="Nom de l'exercice" v-model="exerciceItem.name" />
      </UFormGroup>
      <UFormGroup label="Répetition max" name="repetition_max">
        <UInput
          placeholder="Répetition max"
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

