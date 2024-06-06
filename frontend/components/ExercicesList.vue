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
    <h1>Pectoraux</h1>

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
    <exercice-tags :items="[{label: 'test', color: 'orange'}, {label: 'test', color: 'orange'}]"></exercice-tags>

    <div class="c-accordion">
      <UAccordion :items="items" :ui="{ container: 'c-accordion__container mb-3', item: { padding: 'p-2', size: '' } }">
        <template #default="{ item, index, open }">
          <UButton color="gray" variant="ghost" class="c-accordion-heading" :class="{ 'c-accordion-heading--active': open }" :ui="{}">
            <template #leading>
              <div class="c-accordion__leading">
                <div class="exercice-image"></div>
              </div>
            </template>
            <div class="c-accordion-heading__content truncate p-3">
              <div class="c-accordion-heading__left">
                <span>{{ item.label }}</span>
              </div>
              <div class="c-accordion-heading__trailing">
                <UChip position="top-left" size="xl" text="RM" color="primary">
                  <UButton color="primary" size="2xs" variant="soft" icon="i-heroicons-plus-circle">
                    5kg
                  </UButton>
                </UChip>
                <UButton class="ml-2" size="2xs" color="gray" icon="i-solar-menu-dots-bold" variant="soft" />
                <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="c-accordion-heading__chevron"
                />
              </div>
            </div>
          </UButton>
        </template>
        <template #item="{ item }">

          <exercice-max></exercice-max>

          <exercice-tags class="my-5" title="Tags" :items="[{label: 'test', color: 'orange'}, {label: 'test', color: 'orange'}]"></exercice-tags>
        </template>
      </UAccordion>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.exercice-image {
  width: 50px;
  height: 100%;
  background-color:rgb(137, 143, 161);
}

</style>