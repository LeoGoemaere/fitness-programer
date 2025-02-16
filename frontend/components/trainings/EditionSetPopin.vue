<script setup lang="ts">
import type { FormError } from '#ui/types'

import type { ProgramSet, ProgramTrainingExercice } from '~/types/Program.interface';
import { SetTypeEnum } from '~/types/SetTypeEnum'
import { DisplayableSetInformationTypeEnum } from '~/types/DisplayableSetInformationTypeEnum'
import { blockInvalidChar, roundValue } from '~/utils/utils';

interface Props {
  modelValue: boolean
  trainingExercice: ProgramTrainingExercice
  exerciceSet?: ProgramSet // If creation, it can be undefined
  isEdition?: boolean
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

const exercicesStore = useExercicesStore()
const programsStore = useProgramsStore();

const {
    getEmptySet,
    isRepetitionsValid,
    getComputedSet,
    isFirstSetTypeValid
} = useExerciceSet()
const { t } = useI18n()

const setBeingEdited = ref(getEmptySet())

const isReadonlyFields = computed(() => {
  switch (setBeingEdited.value.type) {
    case SetTypeEnum.Joker:
    case SetTypeEnum.FSL:
      return true
    default:
      return false;
  }
})

const isReadonlyInfosFields = computed(() => {
  switch (setBeingEdited.value.type) {
    case SetTypeEnum.RM:
    case SetTypeEnum.TM:
      return true
    default:
      return false;
  }
})


const exerciceAssociated = computed(() => exercicesStore.exercices.find(exerciceEl => exerciceEl.id === props.trainingExercice.exercice_id))
const setIndex = computed(() => props.trainingExercice.sets.findIndex(set => set.id === props.exerciceSet?.id))
const computedSet = computed(() => getComputedSet(props.trainingExercice, setBeingEdited.value, exerciceAssociated.value))

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

const showWeightField = computed(() => {
  switch (setBeingEdited.value.type) {
    case SetTypeEnum.Custom:
    case SetTypeEnum.FSL:
    case SetTypeEnum.Joker:
      return true
    default:
      return false
  }
})

const showPercentageMaxWeightField = computed(() => {
  switch (setBeingEdited.value.type) {
    case SetTypeEnum.RM:
    case SetTypeEnum.TM:
      return true
    default:
      return false
  }
})

const maxPercentageExercice = computed(() => {
  switch (setBeingEdited.value.type) {
    case SetTypeEnum.RM:
      return exerciceAssociated.value?.RM || 0
    case SetTypeEnum.TM:
      return exerciceAssociated.value?.TM || 0
  }
  return 0
})
function onSubmit() {
  if (props.isEdition) {
    programsStore.updateProgramSet(setBeingEdited.value, props.trainingExercice)
  } else {
    programsStore.addProgramSet(setBeingEdited.value, props.trainingExercice)
  }
  onClose()
}


function onClose() {
  emit('update:modelValue', false)
}

const setTypes = computed(() => {
  return Object.values(SetTypeEnum).map(setType => {
    return {
      id: setType,
      label: t(`exerciceSet.type.${setType}`)
    }
  })
})

const displayableInformationTypes = computed(() => {
  // For now we only use the label option
  return [DisplayableSetInformationTypeEnum.Label].map(type => {
    return {
      id: type,
      label: t(`exerciceSet.information.type.${type}`)
    }
  })
  // return Object.values(DisplayableSetInformationTypeEnum).map(type => {
  //   return {
  //     id: type,
  //     label: t(`exerciceSet.information.type.${type}`)
  //   }
  // })
})

function handleRepetitions(value: ProgramSet['repetitions']) {
  const isNumber = !isNaN(Number(value))
  const newValue = isNumber ? Number(value) : value
  setBeingEdited.value.repetitions = newValue
}

function formValidation(state: ProgramSet): FormError[] {
  const errors = []
  if (!state.repetitions) errors.push({ path: 'perf', message: 'Les répétitions sont requise.' })
  if (!isRepetitionsValid(state.repetitions)) {
    errors.push({ path: 'perf', message: 'Formats valides : xx, xx-xx ou amrap.' })
  }
  if (!isFirstSetTypeValid(props.trainingExercice, state)) {
    errors.push({ path: 'type', message: 'Ce type de série ne peut pas être en 1ère position.' })
  }
  if (showPercentageMaxWeightField.value && !isValidDecimalPercentage(state.exercice_max_weight_percentage)) {
    errors.push({ path: 'perf', message: `Le ${state.type} % doit être compris entre 0 et 1.` })
  }
  return errors
}

function initSet() {
  if (props.exerciceSet) {
    setBeingEdited.value = JSON.parse(JSON.stringify(props.exerciceSet))
  } else {
    setBeingEdited.value = getEmptySet()
  }
}

// Init set with prop value on each opening
watch(() => props.modelValue, (value) => {
  if (value) {
    initSet()
  }
})
</script>

<template>
<UModal :model-value="props.modelValue" @update:modelValue="onClose" :ui="{ container: 'items-center' }">
  <UCard :ui="{ body: { base: 'border-solid' } }">
    <template #header>
      <div class="flex items-center justify-between">
        <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
          {{ popinTitleLabel }}
        </h3>
        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" @click="onClose" />
      </div>
      <p v-if="popinSubTitleLabel" class="text-base leading-6 text-gray-900 dark:text-white">{{ popinSubTitleLabel }}</p>
    </template>

    <UForm :validate="formValidation" :state="setBeingEdited" class="space-y-4" @submit="onSubmit">
      <div>
        <UFormGroup label="Type de série" name="type">
          <USelect
            :options="setTypes"
            option-attribute="label"
            value-attribute="id"
            v-model="setBeingEdited.type"
          ></USelect>
        </UFormGroup>
      </div>
      
      <div>
        <UFormGroup name="perf">
          <!-- <template #help v-if="showPercentageMaxWeightField && exerciceAssociated?.RM === 0">
            <p>Attention, l'exercice à un RM à 0</p>
          </template> -->
          <div class="flex items-end">
            <UFormGroup
              v-if="isReadonlyFields"
              class="edition__perf-item"
              label="Répetitions"
            >
              <template #default>
                <UInput
                  type="text"
                  :disabled="true"
                  :modelValue="computedSet.repetitions"
                />
              </template>
            </UFormGroup>
            <UFormGroup v-else class="edition__perf-item" label="Répetitions">
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
            <!-- Weight field -->
            <template v-if="showWeightField">
              <UFormGroup
                v-if="isReadonlyFields"
                class="edition__perf-item"
                label="Weight">
                <template #default>
                  <UInput
                    type="text"
                    :disabled="true"
                    :modelValue="computedSet.weight"
                  />
                </template>
              </UFormGroup>
              <UFormGroup
                v-else
                class="edition__perf-item"
                label="Weight">
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
            </template>
            <!-- Percentage max weight field -->
            <template v-if="showPercentageMaxWeightField">
              <UFormGroup
                class="edition__perf-item"
              >
                <template #label>
                  <p>
                    % {{ setBeingEdited.type }} - <span class="text-gray-500 dark:text-gray-400 text-[10px]">Exercice {{ setBeingEdited.type }} {{ maxPercentageExercice }}kg</span>
                  </p>
                </template>
                <UInput
                  placeholder="0.7"
                  type="number"
                  step="0.01"
                  @keydown="blockInvalidChar"
                  v-model="setBeingEdited.exercice_max_weight_percentage"
                >
                  <template #trailing>
                    <span class="text-gray-500 dark:text-gray-400 text-xs">% décimal</span>
                  </template>
                </UInput>
              </UFormGroup>
            </template>
          </div>
        </UFormGroup>
        <UCheckbox
          v-if="isReadonlyFields"
          class="mt-2"
          v-model="computedSet.personal_record"
          name="isPR"
          label="Record personnel (PR)"
          :disabled="true"
        />
        <UCheckbox
          v-else
          class="mt-2"
          v-model="setBeingEdited.personal_record"
          name="isPR"
          label="Record personnel (PR)"
        />
      </div>
      <div>        
        <div v-if="isReadonlyFields || isReadonlyInfosFields" class="flex items-end">
          <UFormGroup class="flex-1" label="Infos affichable">
            <USelect
              class="flex-1"
              option-attribute="label"
              value-attribute="id"
              :options="displayableInformationTypes"
              :modelValue="computedSet.displayable_set_information.type"
              :disabled="true"
            ></USelect>
          </UFormGroup>
          <UFormGroup class="flex-1">
            <UInput
              class="ml-1 flex-1"
              :modelValue="computedSet.displayable_set_information.value"
              :disabled="true"
            />
          </UFormGroup>
        </div>
        <div v-else class="flex items-end">
          <UFormGroup class="flex-1" label="Infos affichable">
            <USelect
              class="flex-1"
              :options="displayableInformationTypes"
              option-attribute="label"
              value-attribute="id"
              :modelValue="setBeingEdited.displayable_set_information.type"
            ></USelect>
          </UFormGroup>
          <UFormGroup class="flex-1">
            <UInput
              class="ml-1 flex-1"
              placeholder="Label"
              v-model="setBeingEdited.displayable_set_information.value"
            />
          </UFormGroup>
        </div>
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

