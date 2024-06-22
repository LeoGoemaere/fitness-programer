<script setup lang="ts">
import type { ProgramSet, ProgramTrainingExercice } from '~/types/Program.interface';

interface Props {
  check?: boolean
  programSet: ProgramSet
  trainingExercice: ProgramTrainingExercice
}

interface Emit {
  (e: 'deleted', programSet: ProgramSet): void
  (e: 'edited', programSet: ProgramSet): void
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  check: false,
});

// Declarations des emits
const emit = defineEmits<Emit>();

const isEditionSetPopinOpen = ref(false)
const confirmDelete = ref(false)

const programSetLabel = computed(() => props.programSet?.displayable_set_information?.value)

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
            emit('deleted', props.programSet)
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
  <div v-if="programSet" class="setitem p-3" :class="{ 'setitem--check': check }">
    <div class="setitem__left">
      <span class="setitem__counter">1</span>
      <set-perf
        class="setitem__perf"
        :programSet="programSet"
      ></set-perf>
    </div>
    <div class="setitem__right">
      <div class="setitem__label">{{ programSetLabel }}</div>
      <UDropdown :items="setOptions()" :popper="{ placement: 'bottom-start' }">
        <UButton
          class="setitem__options mx-2"
          icon="i-solar-menu-dots-bold"
          size="2xs"
          color="gray"
          variant="soft">
        </UButton>
      </UDropdown>
      <UIcon
        v-if="check"
        class="setitem__check"
        name="i-solar-check-read-outline"
      />
    </div>
    <edition-set-popin
      v-model="isEditionSetPopinOpen"
      :exercice-set="programSet"
      :training-exercice="trainingExercice"
      :is-edition="true"
      @edited="emit('edited', $event)"
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
  color: rgb(var(--color-primary-500));
}
</style>

