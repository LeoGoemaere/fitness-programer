<script setup lang="ts">
const items = ref([{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  checked: false,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}])

interface Props {
  supersetUp?: boolean
  supersetDown?: boolean
}

const isPopinOpen = ref(false)
// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  supersetUp: false,
  supersetDown: false,
});


function check(item, index, open) {
  items.value[index].checked = !item.checked
}
</script>

<template>
  <div class="c-accordion" :class="{ 'c-accordion--top-radiusless': supersetUp, 'c-accordion--bottom-radiusless': supersetDown }">
      
    <UAccordion :items="items" :ui="{ container: 'c-accordion__container', item: { padding: 'p-0' } }">
      <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost" class="c-accordion-heading" :class="{ 'c-accordion-heading--active': open, 'c-accordion-heading--check': items[index].checked }" :ui="{}">
          <template #leading>
            <div @click.stop="check(item, index, open)" class="c-accordion__leading p-3">
              <UCheckbox color="primary" :model-value="items[index].checked" :ui="{}" />
            </div>
          </template>
          <div class="c-accordion-heading__content">
            <div class="c-accordion-heading__left">
              <span>1. Bench</span>
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
        <set-item :check="true"></set-item>
        <set-item></set-item>
        <set-item></set-item>
        <UButton
          @click="isPopinOpen = true"
          icon="i-heroicons-pencil-square"
          size="sm"
          color="primary"
          variant="soft"
          label="Add set"
          class="m-3"
          :trailing="false"
        />
      </template>
    </UAccordion>

    <edition-set-popin v-model="isPopinOpen"></edition-set-popin>
  </div>
</template>

<style lang="scss" scoped>
</style>

