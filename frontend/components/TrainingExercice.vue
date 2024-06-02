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
  <div class="training-exercice" :class="{ 'training-exercice--superset-up': supersetUp, 'training-exercice--superset-down': supersetDown }">
      
    <UAccordion :items="items" :ui="{ container: 'training-exercice__container', item: { padding: 'p-0' } }">
      <template #default="{ item, index, open }">
        <UButton color="gray" variant="ghost" class="training-exercice__button" :class="{ 'training-exercice__button--active': open, 'training-exercice__button--check': items[index].checked }" :ui="{}">
          <template #leading>
            <div @click.stop="check(item, index, open)" class="p-3">
              <UCheckbox color="primary" :model-value="items[index].checked" :ui="{}" />
            </div>
          </template>
          <div class="training-exercice__heading truncate p-3 pl-0" :class="{ 'training-exercice__heading--check': items[index].checked }">
            <div class="heading__left">
              <span>1. Bench</span>
            </div>
            <div class="heading__right">
              <UButton
                class="training-exercice__options mr-3"
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

<style lang="scss">
.training-exercice {
  position: relative;
}

.training-exercice--superset-up {
  .training-exercice__container {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: none;
  }
  .training-exercice__button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
.training-exercice--superset-down {
  .training-exercice__container {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .training-exercice__button {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.training-exercice__container {
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 8px;
}

.training-exercice__button {
  padding: 0;
  width: 100%;
  border-radius: 8px;
}

.training-exercice__button--active {
  background-color: rgb(var(--color-gray-100)) !important;
  border-radius: 8px 8px 0 0;
}

.training-exercice__button--check {
  background-color: rgb(var(--color-primary-50)) !important;
}

.training-exercice__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
}

.training-exercice__heading--check {
  text-decoration: line-through;
}

.heading__right {
  display: flex;
  align-items: center;
}

</style>

