<script setup lang="ts">
import type { Tag } from '~/types/Tag.interface';
import { useMuscles } from '~/composables/musclesComposable';
import type { MusclesEnum } from '~/types/MusclesEnum';

const { t } = useI18n()

interface Emit {
  (e: 'update:tags', tags: Tag['id'][]): void
  (e: 'update:muscles', muscles: MusclesEnum[]): void
}

// Declarations des emits
const emit = defineEmits<Emit>();

const exercicesStore = useExercicesStore();
const { muscleListSorts } = useMuscles()

const selectedTags: Ref<Tag[]> = ref([])
const selectedMuscles: Ref<MusclesEnum[]> = ref([])

const hasTagsFilter = computed(() => selectedTags.value.length)
const hasMusclesFilter = computed(() => selectedMuscles.value.length)

const selectedTagsLabel = computed(() => {
  if (selectedTags.value?.length && selectedTags.value?.length > 0) {
    if (selectedTags.value.length > 1) {
      return `${selectedTags.value.length} tags`
    } else {
      return `${selectedTags.value[0].name}`
    }
  }
  return 'Tags'
})

const selectedMusclesLabel = computed(() => {
  if (selectedMuscles.value?.length && selectedMuscles.value?.length > 0) {
    if (selectedMuscles.value.length > 1) {
      return `${selectedMuscles.value.length} muscles`
    } else {
      return t(`muscles.${selectedMuscles.value[0]}`)
    }
  }
  return 'Muscles'
})

function handleSelectedTags(tags: Tag[]) {
  selectedTags.value = tags
  emit('update:tags', tags.map(tag => tag.id))
}
function handleSelectedMuscles(muscles: MusclesEnum[]) {
  selectedMuscles.value = muscles
  emit('update:muscles', muscles)
}

function clearFilters() {
  handleSelectedTags([])
  handleSelectedMuscles([])
}
</script>

<template>
  <div class="search">
    <UInput
      class="search__input"
      icon="i-heroicons-magnifying-glass-20-solid"
      size="sm"
      color="white"
      :trailing="false"
      placeholder="Search..."
    />
    <div class="search__actions">
      <div class="search__filter">
        <USelectMenu
          searchable-placeholder="Rechercher..."
          icon="i-heroicons-tag"
          @update:modelValue="handleSelectedTags"
          :model-value="selectedTags"
          :options="exercicesStore.exerciceTags"
          multiple
          placeholder="Tags"
          option-attribute="name"
          by="id"
          searchable
          :color="hasTagsFilter ? 'primary' : 'white'"
        >
          <template #label>
            <span>{{ selectedTagsLabel }}</span>
          </template>
          <template #option="{ option: tag }">
            <ExerciceTag :tag="tag"></ExerciceTag>
          </template>
        </USelectMenu>
      </div>
      <div class="search__filter">
        <USelectMenu
          searchable-placeholder="Rechercher..."
          icon="i-heroicons-adjustments-horizontal"
          @update:modelValue="handleSelectedMuscles"
          :model-value="selectedMuscles"
          :options="muscleListSorts"
          multiple
          placeholder="Muscles"
          value-attribute="id"
          option-attribute="libelle"
          searchable
          :color="hasMusclesFilter ? 'primary' : 'white'"
        >
          <template #label>
            <span>{{ selectedMusclesLabel }}</span>
          </template>
        </USelectMenu>
      </div>
    </div>
    <UButton
      v-if="hasTagsFilter || hasMusclesFilter"
      class="mt-2"
      size="2xs"
      variant="soft"
      icon="i-heroicons-x-mark"
      @click="clearFilters"
    >
      Effacer les filtres
    </UButton>
  </div>
</template>

<style lang="scss" scoped>
.search {
  margin-bottom: 20px;
}

.search__actions {
  display: flex;
}

.search__input {
  flex: 1;
  margin-bottom: 10px;
}

.search__filter {
  max-width: 50%;
  flex: 1;
  + .search__filter {
    margin-left: 5px;
  }
}
</style>