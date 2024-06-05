<script setup lang="ts">
const rm = ref(0)
const tm = ref(0)
const rmAdd = ref(0)
const test = null

const items = ref([
  {
    label: 'Soulevé de Terre de la mort qui tue',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
  },
  {
    label: 'Soulevé de terre',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
  },
  {
    label: 'Press',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
  },
  {
    label: 'Ecarté haltères',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
  },
  {
    label: 'Spider curl',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
  },
  {
    label: 'Crunch',
    icon: 'i-heroicons-information-circle',
    defaultOpen: false,
  },
])

const tags = ['531', 'GZCL']
const selectedTags = ref([])
</script>

<template>
  <div>
    <h1>Exercices</h1>

    <div class="flex">
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="Search..."
      />
      <USelectMenu class="ml-2" icon="i-heroicons-adjustments-horizontal" v-model="selectedTags" :options="tags" multiple placeholder="Tags" />
    </div>
    <!-- <UButtonGroup size="sm" orientation="horizontal">
    </UButtonGroup> -->
    <!-- <div class="filter-tags">
      <UInput
        icon="i-heroicons-magnifying-glass-20-solid"
        size="sm"
        color="white"
        :trailing="false"
        placeholder="Search..."
        class="mb-3"
      />
      <USelectMenu icon="i-heroicons-adjustments-horizontal" v-model="selectedTags" :options="tags" multiple placeholder="Filtrer par tags" />
    </div> -->
    <p>Tags</p>
    <div class="tags">
      <div class="tag">
        <UBadge :ui="{ rounded: 'rounded-full' }" label="531" color="sky" />
      </div>
      <div class="tag">
        <UBadge :ui="{ rounded: 'rounded-full' }" label="GZCL" color="indigo" />
      </div>
    </div>
    <div class="test">
      <UAccordion :items="items" :ui="{ wrapper: 'accordion-wrapper', container: 'training-exercice__container mb-3', item: { padding: 'p-2', size: '' } }">
        <template #default="{ item, index, open }">
          <UButton color="gray" variant="ghost" class="training-exercice__button" :class="{ 'training-exercice__button--active': open, 'training-exercice__button--check': items[index].checked }" :ui="{}">
            <!-- <template #leading>
              <div class="exercice-image">
                
              </div>
            </template> -->
            <div class="training-exercice__heading truncate p-3">
              <div class="heading__left">
                <span>{{ item.label }}</span>
              </div>
              <div class="heading__right">
                <UChip position="top-left" size="xl" text="RM" color="primary">
                  <UButton color="primary" size="2xs" variant="soft" icon="i-heroicons-plus-circle">
                    5kg
                  </UButton>
                </UChip>
                <UButton class="ml-2" size="2xs" color="gray" icon="i-solar-menu-dots-bold" variant="soft" />
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
                />
              </div>
            </div>
          </UButton>
        </template>
        <template #item="{ item }">
          <div class="flex">
            <div class="flex">
              <span class="tm-label">Répetition max</span>
              <UInput v-model="rm" :ui="{ rounded: 'rounded-s-none' }">
                <template #trailing>
                  <span class="text-gray-500 dark:text-gray-400 text-xs">Kg</span>
                </template>
              </UInput>
            </div>
            <div class="flex justify-center items-center">
              <UIcon class="mx-1" size="2xs" name="i-heroicons-arrows-right-left" />
            </div>
            <div class="flex">
              <span class="tm-label tm-label--tm">Training max</span>
              <UInput v-model="tm" :ui="{ rounded: 'rounded-s-none' }">
                <template #trailing>
                  <span class="text-gray-500 dark:text-gray-400 text-xs">Kg</span>
                </template>
              </UInput>
            </div>
          </div>
          <div class="tags">
            <div class="tag">
              <UBadge :ui="{ rounded: 'rounded-full' }" label="531" color="sky" />
            </div>
            <div class="tag">
              <UBadge :ui="{ rounded: 'rounded-full' }" label="GZCL" color="indigo" />
            </div>
          </div>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.test {
  display: flex;
  flex-wrap: wrap;
}

.card-test {
  // flex: 1 1 50%;
  // max-width: 50%;
  padding: 10px;
}

.add-weight {
  max-width: 200px;
}

.tm-label {
  font-size: 10px;
  display: flex;
  align-items: center;
  background-color: rgb(var(--color-primary-500));
  border-radius: 8px 0 0 8px;
  color: white;
  padding: 6px;
  // width: 100px;
}

.tm-label--tm {
  background-color: rgb(var(--color-gray-400));
}

.test-item {
  line-height: normal;
}

// .training-exercice__container {
//   + .training-exercice__container {
//     margin-top: 10px;
//   }
// }

.exercice-image {
  width: 50px;
  height: 100%;
  background-color:rgb(137, 143, 161);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 15px -5px 0 -5px;
}

.tag {
  padding: 5px;
}

.filter-tags {
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
}
</style>