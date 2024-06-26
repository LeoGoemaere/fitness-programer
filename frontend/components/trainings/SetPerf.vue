<script setup lang="ts">
import { type ProgramSet, RepetitionValues } from '~/types/Program.interface';

interface Props {
  programSet: ProgramSet
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});

const repsLabel = computed(() => {
  const reps = props.programSet.repetitions
  if (reps) {
    let repsLabel = reps
    const isPersonalRecord = props.programSet.personal_record
    if (typeof reps === 'string') {
      // If AMRAP
      if (reps.toLowerCase() === RepetitionValues.Amrap) {
        repsLabel = RepetitionValues.Amrap.toLowerCase()
      } else {
        // If xx-xx
        const [lowReps, highReps] = reps.split('-')
        repsLabel = `${lowReps} à ${highReps}`
      }
    }
    if (isPersonalRecord) {
      repsLabel += ' +'
    }
    return repsLabel
  }
  return null
})

const shouldShowRepsLabel = computed(() => props.programSet.repetitions !== RepetitionValues.Amrap)
</script>

<template>
  <div v-if="programSet" class="perf">
    <template v-if="repsLabel">
      <div class="perf__reps">{{ repsLabel }}</div>
      <div v-if="shouldShowRepsLabel" class="perf__reps-label ml-1">reps</div>
    </template>
    <template v-if="programSet.weight">
      <div class="perf__at mx-1">@</div>
      <div class="perf__weight">{{ programSet.weight }}</div>
      <div class="perf__unit ml-1">kg</div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.perf {
  display: flex;
}

.perf__reps {
  color: rgb(var(--color-primary-500));
}

.perf__weight {
  font-weight: 600;
}
</style>

