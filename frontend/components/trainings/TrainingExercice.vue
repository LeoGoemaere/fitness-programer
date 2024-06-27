<script setup lang="ts">
import type { ProgramTrainingExercice } from '~/types/Program.interface';

const exercicesStore = useExercicesStore()
const programsStore = useProgramsStore();

interface Props {
  trainingExercice: ProgramTrainingExercice
  supersetUp?: boolean
  supersetDown?: boolean
}

const isEditionSetPopinOpen = ref(false)
const exerciceAssociated = computed(() => exercicesStore.exercices.find(exerciceEl => exerciceEl.id === props.trainingExercice.exercice_id))

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  supersetUp: false,
  supersetDown: false,
});

function toggleIsDone() {
  const newTrainingExercice: ProgramTrainingExercice = JSON.parse(JSON.stringify(props.trainingExercice))
  newTrainingExercice.is_done = !newTrainingExercice.is_done
  programsStore.updateTrainingExercice(newTrainingExercice)
}

function addExercice() {
  // TODO
}


</script>

<template>
  <div class="c-accordion" :class="{ 'c-accordion--top-radiusless': supersetUp, 'c-accordion--bottom-radiusless': supersetDown }">
    <UButton
      v-if="!exerciceAssociated"
      @click="addExercice"
    >Choisir un exercice</UButton>

    <UAccordion v-else :items="[props.trainingExercice]" :ui="{ container: 'c-accordion__container', item: { padding: 'p-0' } }">
      <template #default="{ item, index, open }">
        <UButton
          color="gray"
          variant="ghost"
          class="c-accordion-heading"
          :class="{
            'c-accordion-heading--active': open,
            'c-accordion-heading--check': item.is_done
          }"
          :ui="{}">
          <template #leading>
            <div @click.stop="toggleIsDone" class="c-accordion__leading p-3">
              <UCheckbox color="primary" :model-value="item.is_done" :ui="{}" />
            </div>
          </template>
          <div class="c-accordion-heading__content">
            <div class="c-accordion-heading__left">
              <span>{{ index + 1 }}. {{ exerciceAssociated.name }}</span>
            </div>
            <div class="c-accordion-heading__trailing">
              <UButton
                class="mr-3"
                icon="i-solar-refresh-outline"
                size="xs"
                color="gray"
                variant="soft">
              </UButton>
              <UIcon
                name="i-heroicons-chevron-right-20-solid"
                class="c-accordion-heading__chevron"
              />
            </div>
          </div>
        </UButton>
      </template>
      <template #item="{ item }">
        <set-item
          v-for="programSet in item.sets"
          :key="programSet.id"
          :program-set="programSet"
          :training-exercice="item"
        ></set-item>
        <UButton
          @click="isEditionSetPopinOpen = true"
          icon="i-heroicons-pencil-square"
          size="sm"
          variant="soft"
          label="Créer une série"
          class="m-3"
          :trailing="false"
          :color="item.is_done ? 'white' : 'primary'"
          :disabled="item.is_done"
        />
      </template>
    </UAccordion>

    <edition-set-popin
      v-model="isEditionSetPopinOpen"
      :training-exercice="props.trainingExercice"
      :is-edition="false"
    ></edition-set-popin>
  </div>
</template>

<style lang="scss" scoped>
</style>

