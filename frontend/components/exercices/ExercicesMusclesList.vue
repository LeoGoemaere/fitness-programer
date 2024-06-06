<script setup lang="ts">

const musclesList = ref([
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
    <h1>Exercices</h1>
    <nav class="muscle-list__nav">
      <ul class="list">
        <ListItemLv1
          v-for="(muscle, lv1Index) in musclesList"
          :key="lv1Index"
          :label="muscle.label"
          :selected="activeLv1Index === lv1Index"
          @change="toggleLayer({ lv1Index })"
        >
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
  font-size: 18px;
  // position: fixed;
  // top: var(--header-height-mobile);
  // left: 0;
  // right: 0;
  // bottom: var(--footer-height);
  // @media screen and (min-width: $tablet) {
  //   bottom: 0;
  //   top: var(--header-height);
  //   max-width: 433px;
  // }
}

// .muscle-list__nav {
//   height: 100%;
//   overflow: auto;
//   overscroll-behavior: contain;
//   background: white;
//   padding: 0 11px 0 16px;
// }

// .list__item {
//   display: flex;
//   align-items: center;
//   padding: 10px 0;
//   + .list__item {
//     border-top: 1px solid rgba(0, 0, 0, 0.07);
//   }
// }

// .list__leading {
//   width: 30px;
//   height: 30px;
//   border-radius: 50%;
//   background-color: red;
//   margin-right: 10px;
//   + .list__content {
//     // padding-left: 0;
//   }
// }

.list__trailing {
  display: flex;
  align-items: center;
}

.list__content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  // padding: 15px 10px;
}

.list__label {
  padding-right: 10px;
}

</style>