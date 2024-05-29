<script setup lang="ts">
interface Items {
  id: string | number
  label: string
  checked: boolean
}

interface Props {
  items: Items[],
  modelValue: Items
}

interface Emit {
  (e: 'update:modelValue', data: Items): void
}
// Declarations des emits
const emit = defineEmits<Emit>();

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  items: () => ([])
});

const selectedItem = ref(props.items[0])

onMounted(() => {
  const activeItem = props.items.find(item => item.id === props.modelValue.id)
  if (activeItem) {
    selectedItem.value = activeItem
  }
})

</script>

<template>
  <div class="training-selector mb-5 mx-auto">
    <USelectMenu color="gray" @update:modelValue="emit('update:modelValue', $event)" v-model="selectedItem" :options="props.items" selected-icon="i-solar-check-read-outline" :uiMenu="{
      option: {
        padding: 'p-0 w-full',
        container: 'w-full',
        color: 'bg-transparent',
        selected: 'p-0',
        selectedIcon: {
          base: 'hidden'
        }
      }
    }">
      <template #option="{ option, selected }">
        <div
          class="training-selector__option p-1.5"
          :class="{
            'training-selector__option--selected': selected,
            'training-selector__option--checked': option.checked
          }">
          <div class="option__left">
            {{ option.label }}
          </div>
          <div class="option__right">
            <template v-if="option.checked">
              <span class="mr-3">Done</span>
              <UIcon name="i-solar-check-circle-outline" />
            </template>
            <template v-else-if="selected">
              <span class="mr-3">En cours</span>
              <UIcon name="i-solar-dumbbell-large-minimalistic-linear" />
            </template>
          </div>
        </div>
      </template>
      <template #default>
        <UButton
          :color="selectedItem.checked ? 'primary' : 'gray'"
          variant="outline"
          class="training-selector__label"
          :ui="{ rounded: 'rounded-full' }"
        >
          <div class="flex items-center">
            <UIcon v-if="selectedItem.checked" class="mr-1" name="i-solar-check-circle-outline" />
            <UIcon v-else class="mr-1" name="i-solar-dumbbell-large-minimalistic-linear" />
            {{ selectedItem.label }}
          </div>
          <div class="flex items-center">
            <template v-if="selectedItem.checked">
              <span class="mr-3">Done</span>
            </template>
            <template v-else>
              <span class="mr-3">En cours</span>
            </template>
            <UIcon name="i-heroicons-chevron-down-20-solid" />
          </div>
        </UButton>
      </template>
      <template #label>
        <div
          class="training-selector__label"
          :class="{
            'training-selector__label--selected': selectedItem,
            'training-selector__label--checked': selectedItem.checked
          }"
        >
          <UIcon v-if="selectedItem.checked" class="mr-3" name="i-solar-check-circle-outline" />
          {{ selectedItem.label }}
        </div>
      </template>
    </USelectMenu>
  </div>
</template>

<style lang="scss" scoped>
.training-selector {
}
.training-selector__option {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
}
.training-selector__option--checked {
  color: rgb(var(--color-primary-500));
}
.training-selector__option--selected {
  background-color: rgb(var(--color-gray-100));
  &.training-selector__option--checked {
    background-color: rgb(var(--color-primary-100));
    color: rgb(var(--color-primary-500));
  }
}

.option__right {
  display: flex;
  align-items: center;
}

.training-selector__label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>

