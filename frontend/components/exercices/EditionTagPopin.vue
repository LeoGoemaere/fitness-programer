<script setup lang="ts">
import type { FormError } from '#ui/types'

import { getEmptyTagExercice } from '~/composables/tagExerciceComposable';
import type { TagExercice } from '~/types/TagExercice.interface';

const exercicesStore = useExercicesStore();
const toast = useToast()

interface Props {
  modelValue: boolean
  tagExercice?: TagExercice | null
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

const tagExerciceItem = ref(getEmptyTagExercice())

const popinLabel = computed(() => {
  if (props.tagExercice) {
    return `Editer le tag ${props.tagExercice.name}`
  }
  return 'Créer un tag'
})

function formValidation(state: any): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'general', message: 'Le nom est obligatoire' })
  console.log(errors)
  return errors
}

function onSubmit() {
  if (props.tagExercice) {
    exercicesStore.updateExerciceTag(tagExerciceItem.value)
  } else {
    exercicesStore.addExerciceTag(tagExerciceItem.value)
  }
  toast.add({
    title: `Le tag ${tagExerciceItem.value.name} à été ${props.tagExercice ? 'modifié' : 'créé'}`,
    timeout: 3000
  })
  onClose()
}

function onClose() {
  tagExerciceItem.value = getEmptyTagExercice()
  emit('update:modelValue', false)
}

watch(() => props.tagExercice, (value) => {
  if (props.tagExercice) {
    tagExerciceItem.value = { ...props.tagExercice }
  }
})
</script>

<template>
<UModal :model-value="props.modelValue" @update:modelValue="emit('update:modelValue', $event)" :ui="{ container: 'items-center' }">
  <UCard :ui="{ body: { base: 'border-solid' } }">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          {{ popinLabel }}
        </h3>
        <UButton
          color="gray"
          variant="ghost"
          icon="i-heroicons-x-mark-20-solid"
          @click="onClose"
        />
      </div>
    </template>

    <UForm
      class="space-y-4"
      :validate="formValidation"
      :state="tagExerciceItem"
      @submit="onSubmit"
    >
      <UFormGroup name="general">
        <UButtonGroup class="w-full" orientation="horizontal">
          <UInput
            class="flex-1"
            placeholder="Nom du tag"
            v-model="tagExerciceItem.name"
          >
          </UInput>
          <UInput
            name="color"
            :ui="{ wrapper: 'color-input', base: 'h-full' }"
            class="flex-1"
            placeholder="Couleur du tag"
            type="color"
            v-model="tagExerciceItem.color"
          >
          </UInput>
        </UButtonGroup>
      </UFormGroup>
      <div class="flex justify-center">
        <UButton type="submit">Créer</UButton>
      </div>
    </UForm>

  </UCard>
</UModal>
</template>

<style lang="scss" scoped>
.color-input {
  max-width: 100px;
}
</style>

