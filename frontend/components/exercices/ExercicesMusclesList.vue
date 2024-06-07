<script setup lang="ts">

const musclesList = ref([
  {
    label: 'All',
  },
  {
    label: 'Pectoraux',
  },
  {
    label: 'Dos',
  },
  {
    label: 'Biceps',
  },
  {
    label: 'Triceps',
  },
])

const activeLv1Index = ref(-1)

function toggleLayer({ lv1Index }: { lv1Index: number }) {
  activeLv1Index.value = activeLv1Index.value === lv1Index ? -1 : lv1Index
}
</script>

<template>
  <!-- Utiliser un id ou code muscle pour la key -->
  <div class="muscles-list">
    <nav class="muscle-list__nav">
      <ul class="muscles-list__list">
        <ListItemLv1
          v-for="(muscle, lv1Index) in musclesList"
          :key="lv1Index"
          :label="muscle.label"
          :selected="activeLv1Index === lv1Index"
          @change="toggleLayer({ lv1Index })"
        >
          <template #action>
            <UButton
              @click=""
              icon="i-heroicons-plus-circle"
              size="xl"
              color="primary"
              variant="link"
              :trailing="false"
            />
          </template>
          <ExercicesList></ExercicesList>
        </ListItemLv1>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.list {

}

.muscles-list {
  font-size: 14px;
}

</style>