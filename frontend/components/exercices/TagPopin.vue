<script setup lang="ts">
import type { Exercice } from '~/types/Exercice.interface';
import type { MusclesEnum } from '~/types/MusclesEnum';
import type { Tag } from '~/types/Tag.interface';

const exercicesStore = useExercicesStore();

interface Props {
  modelValue: boolean
  exercice?: Exercice
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

const selectedTags = ref([])
const isCreationTagPopinOpen = ref(false)
const editingTag: Ref<Tag | null> = ref(null)
// The UForm state's prop is required, so he doesn't grumble at us
const state = ref({})

function deleteTag(tag: Tag) {
  exercicesStore.removeExerciceTag(tag)
}

function deleteTagOptions(tag: Tag) {
  return [
    [
      {
        label: `Supprimer ${tag.name}`,
        icon: 'i-heroicons-trash',
        click: () => {
          deleteTag(tag)
        }
      },
    ]
  ]
}

function editTagExercice(tag: Tag) {
  editingTag.value = tag
  isCreationTagPopinOpen.value = true
}

watch(() => isCreationTagPopinOpen.value, (value) => {
  // If the popin is closed, then reset the editing flag
  if (!value) {
    editingTag.value = null
  }
})

</script>

<template>
<UModal :model-value="props.modelValue" @update:modelValue="emit('update:modelValue', $event)" :ui="{ container: 'items-center' }">
  <UCard :ui="{ body: { base: 'border-solid' } }">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          <span>Gestion des tags</span>
        </h3>
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="emit('update:modelValue', false)" />
      </div>
    </template>

    <UForm class="space-y-4" :state="state">
      <UButton type="submit" variant="solid" @click="isCreationTagPopinOpen = true">Créer un tag</UButton>
      <UFormGroup name="tags">
        <USelectMenu
          :uiMenu="{ option: { container: 'w-full' } }"
          :modelValue="selectedTags"
          :options="exercicesStore.exerciceTags"
          multiple
          placeholder="Mes tags"
          option-attribute="name"
          by="id"
          searchable
        >
          <template #option="{ option: tag }">
            <div class="flex items-center justify-between w-full">
              <ExerciceTag :tag="tag"></ExerciceTag>
              <div class="flex items-center">
                <UButton
                  size="xs"
                  class="setitem__options mx-2"
                  icon="i-heroicons-pencil-square"
                  color="gray"
                  variant="soft"
                  @click="editTagExercice(tag)"
                />
                <UDropdown
                  :items="deleteTagOptions(tag)"
                  :popper="{ placement: 'bottom-start' }"
                  :ui="{ item: { label: 'text-red-400', icon: { inactive: 'text-red-400', active: 'text-red-400' } } }"
                >
                  <UButton
                    size="xs"
                    color="red"
                    variant="soft"
                    icon="i-heroicons-trash"
                  />
                </UDropdown>
              </div>
            </div>
          </template>
        </USelectMenu>
      </UFormGroup>
      <div class="flex justify-center">
        <UButton @click="emit('update:modelValue', false)" variant="soft">Fermer</UButton>
      </div>
    </UForm>

  </UCard>
  <EditionTagPopin v-model="isCreationTagPopinOpen" :tag-exercice="editingTag"></EditionTagPopin>
</UModal>
</template>

<style lang="scss" scoped>
</style>

