<script setup lang="ts">
const items = ref([{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  checked: false,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
},
{
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}])

function check(item, index, open) {
  items.value[index].checked = !item.checked
}
</script>

<template>
  <UAccordion :items="items" class="setlist" :ui="{ container: 'setlist__container', item: { padding: 'p-0' } }">
    <template #default="{ item, index, open }">
      <UButton color="gray" variant="ghost" class="setlist__button" :class="{ 'setlist__button--active': open, 'setlist__button--check': items[index].checked }" :ui="{}">
        <template #leading>
          <div @click.stop="check(item, index, open)" class="p-3">
            <UCheckbox color="primary" :model-value="items[index].checked" :ui="{}" />
          </div>
        </template>
        <div class="setlist__heading truncate p-3 pl-0" :class="{ 'setlist__heading--check': items[index].checked }">
          <div class="heading__left">
            <span>1. Bench</span>
          </div>
          <div class="heading__right">
            <UButton
              class="setlist__options mr-3"
              icon="i-solar-refresh-outline"
              size="xs"
              color="gray"
              variant="soft">
            </UButton>
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
      <set-item :check="true"></set-item>
      <set-item></set-item>
      <set-item></set-item>
      <UButton
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
</template>

<style lang="scss">
.setlist__container {
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  + .setlist__container {
    margin-top: 20px;
  }
}

.setlist__button {
  padding: 0;
  width: 100%;
  border-radius: 8px;
}

.setlist__button--active {
  background-color: rgb(var(--color-gray-100)) !important;
  border-radius: 8px 8px 0 0;
}

.setlist__button--check {
  background-color: rgb(var(--color-primary-50)) !important;
}

.setlist__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.heading__right {
  display: flex;
  align-items: center;
}

</style>

