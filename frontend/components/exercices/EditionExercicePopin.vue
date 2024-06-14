<script setup lang="ts">
import type { Exercice } from '~/types/Exercice.interface';
import coreMuscles from '~/datas/muscles/coreMuscles'

/**
 * TODO:
 * - Redirect on exercice after creation
 * - Fix TS errors
 * - Form validation
 */
const { t } = useI18n()
const exercicesStore = useExercicesStore();

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
      return `${selectedTags.value.length} selected`
    } else {
      return `${selectedTags.value[0].name}`
    }
  }
  return 'Select tags'
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

function validate() {
  // Exercice is editing
  if (props.exercice) {
    exercicesStore.updateExercice(exerciceItem.value)
    } else {
    exercicesStore.addExercice(exerciceItem.value)
  }
  exerciceItem.value = getEmptyExercice()
  emit('update:modelValue', false)
}

function updatedMax(exercice: Exercice) {
  exerciceItem.value = exercice
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
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="emit('update:modelValue', false)" />
      </div>
    </template>

    <div class="edition__row">
      <UFormGroup label="Nom">
        <UInput placeholder="Nom de l'exercice" v-model="exerciceItem.name" />
      </UFormGroup>
    </div>
    <div class="edition__row">
      <exercice-max :exercice="exerciceItem" @updated="updatedMax"></exercice-max>
    </div>
    <div class="edition__row">
      <UFormGroup label="Muscle principal">
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
    </div>

    <div class="edition__row">
      <UFormGroup label="Tags">
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
    </div>

    <div class="flex justify-center mt-5">
      <UButton @click="validate">Valider</UButton>
    </div>
  </UCard>
</UModal>
</template>

<style lang="scss">
</style>

