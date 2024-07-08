<script setup lang="ts">
import corePrograms from '~/datas/programs/corePrograms'
import coreExercices from '~/datas/exercices/coreExercices'

const programsStore = useProgramsStore();
const exercicesStore = useExercicesStore();
const supersetsStore = useSupersetsStore();
const toast = useToast()
const { t } = useI18n()

function reinitProgram() {
  const firstProgramId = corePrograms[0]?.id
  programsStore.programs = JSON.parse(JSON.stringify(corePrograms))
  // Reinit program
  programsStore.setSelectedProgramId(firstProgramId)
  // Reinit supersets
  supersetsStore.supersetExercices = []
  // Import exercices
  importNewExercices(false)
  toast.add({
    title: 'Les programmes ont été réinitialisés',
    timeout: 3000
  })
}

function importNewExercices(showToast: boolean) {
  const exercicesAdded = exercicesStore.addExercicesList(coreExercices)
  if (showToast) {
    toast.add({
      title: t('exercices.import', exercicesAdded.length),
      timeout: 3000
    })
  }
}

const confirmDelete = ref(false)
function reinitAction() {
  const isDeleting = confirmDelete.value
  const cancelReinitAction = {
    label: 'Annuler',
    icon: 'i-heroicons-x-mark',
    variant: 'solid',
    color: 'gray',
    size: 'lg',
    click: (event: Event) => {
      confirmDelete.value = false
    }
  }
  const actions = [
    {
      label: isDeleting ? 'Confirmer' : 'Réinitialiser les programmes',
      icon: isDeleting ? 'i-heroicons-exclamation-triangle' : 'i-heroicons-arrow-path',
      variant: isDeleting ? 'solid' : 'outline',
      size: 'lg',
      color: 'red',
      click: (event: Event) => {
        if (confirmDelete.value) {
          reinitProgram()
          confirmDelete.value = false
          return
        }
        confirmDelete.value = true
      }
    }
  ]
  if (isDeleting) {
    actions.push(cancelReinitAction)
  }
  return actions
}

</script>

<template>
  <div class="settings">
    <app-header
      title="Paramètres"
    ></app-header>

    <div class="settings">
      <UAlert
        class="mb-3"
        title="Importer les derniers exercices"
        :actions="[{
          label: 'Importer les exercices',
          variant: 'solid',
          icon: 'i-heroicons-arrow-down-on-square',
          size: 'lg',
          click: () => {
            importNewExercices(true)
          }
        }]"
      >
        <template #description>
          <p>Importe les derniers exercices sans modifier les existants.</p>
        </template>
      </UAlert>
      <UAlert
        title="Reinitialisation des programmes"
        :actions="reinitAction()"
      >
        <template #description>
          <p>Toutes les séries modifiées et exercices associés à des trainings seront réinitialisés.</p>
          <p>Si des exercices natifs ont été supprimés ils seront réimportés car des programmes peuvent en utiliser.</p>
        </template>
      </UAlert>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>