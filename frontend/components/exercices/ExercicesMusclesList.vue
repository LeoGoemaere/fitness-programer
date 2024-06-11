<script setup lang="ts">
import coreMuscles from '~/datas/muscles/coreMuscles'

// TODO: Localization
const muscleListSorts = computed(() => coreMuscles.sort((a, b) => a.localeCompare(b)))

const activeLv1Index = ref(-1)

function toggleLayer({ lv1Index }: { lv1Index: number }) {
  activeLv1Index.value = activeLv1Index.value === lv1Index ? -1 : lv1Index
}
</script>

<template>
  <!-- Utiliser un id ou code muscle pour la key -->
  <div class="muscles-list">
    <div class="muscles-list__heading">
      <UButton
        class="muscle-list__create"
        @click=""
        size="xl"
        color="primary"
        variant="link"
        label="Create"
        :trailing="false"
        :padded="false"
      />
    </div>
    <nav class="muscle-list__nav">
      <ul class="muscles-list__list">
        <ListItemLv1
          v-for="(muscle, lv1Index) in muscleListSorts"
          :key="lv1Index"
          :label="muscle"
          :selected="activeLv1Index === lv1Index"
          @change="toggleLayer({ lv1Index })"
        >
          <template #action>
            <UButton
              @click=""
              size="xl"
              color="primary"
              variant="link"
              label="Create"
              :trailing="false"
              :padded="false"
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

.muscle-list__create {
}

.muscles-list__heading {
  display: flex;
  justify-content: end;
  margin-bottom: var(--page-spacing-y);
}

</style>