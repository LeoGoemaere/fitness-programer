<script setup lang="ts">
import type { FormError } from '#ui/types'

import { getEmptyTag } from '~/composables/tagComposable';
import type { Tag } from '~/types/Tag.interface';

const exercicesStore = useExercicesStore();
const toast = useToast()

interface Props {
  modelValue: boolean
  tag?: Tag | null
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

const tagItem = ref(getEmptyTag())

const popinTitleLabel = computed(() => {
  if (props.tag) {
    return `Editer le tag ${props.tag.name}`
  }
  return 'Créer un tag'
})

const popinValidateLabel = computed(() => {
  if (props.tag) {
    return 'Modifier'
  }
  return 'Créer'
})

function formValidation(state: any): FormError[] {
  const errors = []
  if (!state.name) errors.push({ path: 'general', message: 'Le nom est obligatoire' })
  console.log(errors)
  return errors
}

function onSubmit() {
  if (props.tag) {
    exercicesStore.updateExerciceTag(tagItem.value)
  } else {
    exercicesStore.addExerciceTag(tagItem.value)
  }
  toast.add({
    title: `Le tag ${tagItem.value.name} à été ${props.tag ? 'modifié' : 'créé'}`,
    timeout: 3000
  })
  onClose()
}

function onClose() {
  tagItem.value = getEmptyTag()
  emit('update:modelValue', false)
}

watch(() => props.tag, (value) => {
  if (props.tag) {
    tagItem.value = { ...props.tag }
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
      :state="tagItem"
      @submit="onSubmit"
    >
      <UFormGroup name="general">
        <UButtonGroup class="w-full" orientation="horizontal">
          <UInput
            class="flex-1"
            placeholder="Nom du tag"
            v-model="tagItem.name"
          >
          </UInput>
          <UInput
            name="color"
            :ui="{ wrapper: 'color-input', base: 'h-full' }"
            class="flex-1"
            placeholder="Couleur du tag"
            type="color"
            v-model="tagItem.color"
          >
          </UInput>
        </UButtonGroup>
      </UFormGroup>
      <div class="flex justify-center">
        <UButton type="submit">{{ popinValidateLabel }}</UButton>
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

