<script setup lang="ts">
import type { ProgramSet, ProgramTrainingExercice } from '~/types/Program.interface';
import { SetTypeEnum } from '~/types/SetTypeEnum';

interface Props {
  check?: boolean
  programSet: ProgramSet
  trainingExercice: ProgramTrainingExercice
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  check: false,
});

const programsStore = useProgramsStore();
const { getComputedSet, isFirstSetTypeValid } = useExerciceSet()
const exercicesStore = useExercicesStore()


const isEditionSetPopinOpen = ref(false)
const confirmDelete = ref(false)

const programSetLabel = computed(() => computedSet.value?.displayable_set_information?.value)
const setIndex = computed(() => props.trainingExercice.sets.findIndex(set => set.id === props.programSet.id))
const setCounter = computed(() => setIndex.value + 1)
const exerciceAssociated = computed(() => exercicesStore.exercices.find(exerciceEl => exerciceEl.id === props.trainingExercice.exercice_id))
const computedSet = computed(() => getComputedSet(props.trainingExercice, props.programSet, exerciceAssociated.value))
const isSetDone = computed(() => props.trainingExercice.is_done)

function handleDropdownOpen(isOpen: boolean) {
  if (isOpen) {
    confirmDelete.value = false
  }
}

interface IlabelStyle {
  color: string | null
  isBadge: boolean
}
const labelStyle: Ref<IlabelStyle> = computed(() => {
  if (isFirstSetTypeValid(props.trainingExercice, computedSet.value)) {
    switch (computedSet.value.type) {
      case SetTypeEnum.FSL:
        return { color: 'violet', isBadge: true }
      case SetTypeEnum.Joker:
        return { color: 'emerald', isBadge: true }
    }
  }
  return { color: null, isBadge: false }
})

function setOptions() {
  const isDeleting = confirmDelete.value
  return [
    [
      {
        label: 'Editer',
        icon: 'i-heroicons-pencil-square',
        click: () => {
          isEditionSetPopinOpen.value = true
        }
      }
    ],
    [
      {
        label: isDeleting ? 'Confirmer' : 'Supprimer',
        icon: 'i-heroicons-trash',
        iconClass: isDeleting ? 'text-red-400' : null,
        labelClass: isDeleting ? 'text-red-400' : null,
        click: (event: Event) => {
          event.preventDefault()
          if (confirmDelete.value) {
            programsStore.deleteProgramSet(props.programSet, props.trainingExercice)
            return
          }
          confirmDelete.value = true
        }
      },
    ]
  ]
}
</script>

<template>
  <div v-if="computedSet" class="setitem p-3" :class="{ 'setitem--check': isSetDone }">
    <div class="setitem__left">
      <span class="setitem__counter">{{ setCounter }}</span>
      <set-perf
        class="setitem__perf"
        :programSet="computedSet"
      ></set-perf>
    </div>
    <div class="setitem__right">
      <UBadge v-if="labelStyle.isBadge" size="xs" :label="programSetLabel" :color="labelStyle.color" />
      <div v-else class="setitem__label">{{ programSetLabel }}</div>
      <UDropdown
        :ui="{ padding: 'border-solid', item: { base: 'border-solid' } }"
        :items="setOptions()"
        :popper="{ placement: 'bottom-start' }"
        @update:open="handleDropdownOpen"
      >
        <UButton
          class="setitem__options mx-2"
          icon="i-heroicons-ellipsis-horizontal"
          size="2xs"
          color="gray"
          variant="soft"
        >
        </UButton>
      </UDropdown>
      <UIcon
        v-if="isSetDone"
        class="setitem__check"
        name="i-solar-check-read-outline"
      />
    </div>
    <edition-set-popin
      v-model="isEditionSetPopinOpen"
      :exercice-set="programSet"
      :training-exercice="props.trainingExercice"
      :is-edition="true"
    ></edition-set-popin>
  </div>
</template>

<style lang="scss" scoped>
.setitem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px;
  + .setitem {
    border-top: 1px solid rgba(0, 0, 0, 0.07);
  }
}

.setitem--check {
  &::before {
    content: '';
    border-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: .7;
    background-color: white;
    z-index: 10;
  }
}

.setitem__left,
.setitem__right {
  display: flex;
  align-items: center
}
.setitem__counter {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(var(--color-gray-300));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.setitem__perf {
  margin-left: 10px;
}

.setitem__check {
  position: relative;
  z-index: 20;
  color: rgb(var(--color-primary-500));
}
</style>

