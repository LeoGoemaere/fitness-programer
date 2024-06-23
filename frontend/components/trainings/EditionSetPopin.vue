<script setup lang="ts">
import type { FormError } from '#ui/types'

import type { ProgramSet, ProgramTrainingExercice } from '~/types/Program.interface';
import { SetTypeEnum } from '~/types/SetTypeEnum'
import { blockInvalidChar } from '~/utils/utils';


interface Props {
  modelValue: boolean
  trainingExercice: ProgramTrainingExercice
  exerciceSet?: ProgramSet | null
  isEdition?: boolean
}

const exercicesStore = useExercicesStore()
const { getEmptySet, isRepetitionsValid } = useExerciceSet()
const { t } = useI18n()

// const isPr = ref(false)
// const repsValue = ref(null)
// const weightValue = ref(null)
const setBeingEdited = ref(getEmptySet())

interface Emit {
  (e: 'update:modelValue', active: boolean): void
  (e: 'edited', programSet: ProgramSet): void
}

// Declarations des emits
const emit = defineEmits<Emit>();

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  modelValue: false
});

const exerciceAssociated = computed(() => exercicesStore.exercices.find(exerciceEl => exerciceEl.id === props.trainingExercice.exercice_id))
const setIndex = computed(() => props.trainingExercice.sets.findIndex(set => set.id === props.exerciceSet?.id))

const popinTitleLabel = computed(() => {
  if (props.isEdition) {
    return 'Edition d\'une série'
  }
  return 'Créer une série'
})

const popinSubTitleLabel = computed(() => {
  if (exerciceAssociated.value) {
    const setNumber = setIndex.value > -1 ? setIndex.value + 1 : props.trainingExercice.sets.length + 1
    return `${exerciceAssociated.value.name}, série n°${setNumber}`
  }
  return null
})

function onSubmit() {
  emit('edited', setBeingEdited.value)
}

const setTypes = computed(() => {
  return Object.values(SetTypeEnum).map(setType => {
    return {
      id: setType,
      label: t(`exerciceSet.${setType}`)
    }
  })
})

function handleSetType(setType: SetTypeEnum) {
  switch (setType) {
    case SetTypeEnum.Custom:
      
      break;
    case SetTypeEnum.Joker:
      
      break;
    case SetTypeEnum.FSL:
      
      break;
  
  }
}

function handleJokerSet() {

}

function handleRepetitions(value: ProgramSet['repetitions']) {
  const isNumber = !isNaN(Number(value))
  const newValue = isNumber ? Number(value) : value
  setBeingEdited.value.repetitions = newValue
}

function formValidation(state: ProgramSet): FormError[] {
  const errors = []
  if (!state.weight) errors.push({ path: 'perf', message: 'Le poid est requis' })
  if (!state.repetitions) errors.push({ path: 'perf', message: 'Les répétitions sont requise' })
  if (!isRepetitionsValid(state.repetitions)) {
    errors.push({ path: 'perf', message: 'Les répétitions doivent être au format : xx ou xx-xx' })
  }
  return errors
}

onMounted(() => {
  if (props.exerciceSet) {
    setBeingEdited.value = { ...props.exerciceSet }
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
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="emit('update:modelValue', false)" />
      </div>
      <p v-if="popinSubTitleLabel" class="text-base leading-6 text-gray-900 dark:text-white">{{ popinSubTitleLabel }}</p>
    </template>

    <UForm :validate="formValidation" :state="setBeingEdited" class="space-y-4" @submit="onSubmit">
      <div>
        <UFormGroup label="Type de série">
          <template #error>
            <div class="flex items-center">
              <UIcon class="mr-1" name="i-heroicons-exclamation-triangle" /> La série FSL ne peut pas être en 1ère position
            </div>
          </template>
          <USelect
            :options="setTypes"
            option-attribute="label"
            value-attribute="id"
            @update:modelValue="handleSetType"
            :modelValue="setBeingEdited.type"
          ></USelect>
        </UFormGroup>
      </div>
      
      <div>
        <UFormGroup name="perf">
          <div class="flex items-end">
            <UFormGroup class="edition__perf-item" label="Répetitions">
              <template #default>
                <UInput
                  placeholder="10"
                  type="text"
                  @change="handleRepetitions"
                  :modelValue="setBeingEdited.repetitions"
                  :validate-on="['change']"
                />
              </template>
            </UFormGroup>
            <span class="edition__perfs-at">@</span>
            <UFormGroup class="edition__perf-item" label="Weight">
              <UInput
                placeholder="80"
                type="number"
                step="0.01"
                @keydown="blockInvalidChar"
                v-model="setBeingEdited.weight"
              >
                <template #trailing>
                  <span class="text-gray-500 dark:text-gray-400 text-xs">Kg</span>
                </template>
              </UInput>
            </UFormGroup>
          </div>
        </UFormGroup>
        <UCheckbox class="mt-2" v-model="setBeingEdited.personal_record" name="isPR" label="Personal records" />
      </div>
      <div>
        <UFormGroup label="Infos affichable">
          <template #help>
            <div class="flex items-center">
              <UIcon class="mr-1" name="i-heroicons-exclamation-triangle" /> L'exercice ne possède pas de TM.
            </div>
          </template>
          <div class="flex">
            <USelect
              :options="['Label', 'Training max (%)', 'Rep max (%)']"
            ></USelect>
            <UInput class="ml-1" placeholder="10" v-model="repsValue" />
          </div>
        </UFormGroup>
      </div>
      <div class="flex justify-center mt-5">
        <UButton type="submit">Valider</UButton>
      </div>
    </UForm>
  </UCard>
</UModal>
</template>

<style lang="scss" scoped>

.edition__perf-item {
  flex: 1;
}

.edition__perfs-at {
  display: flex;
  align-items: center;
  height: 32px;
  margin: 0 5px;
}
</style>

