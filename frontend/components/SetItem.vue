<script setup lang="ts">
interface Props {
  check?: boolean,
}

// Declarations des props
withDefaults(defineProps<Props>(), {
  check: false
});

const items = [
  [
    {
      label: 'Edit',
      icon: 'i-heroicons-pencil-square',
      click: () => {
        console.log('Edit')
        isEditionPopinOpen.value = true
      }
    },
    {
      label: 'Delete',
      icon: 'i-heroicons-trash',
      labelClass: 'text-red-500',
      iconClass: 'text-red-500',
      click: () => {
        console.log('Delete')
      }
    }
  ]
]

const isEditionPopinOpen = ref(false)
</script>

<template>
  <div class="setitem p-3" :class="{ 'setitem--check': check }">
    <div class="setitem__left">
      <span class="setitem__counter">1</span>
      <set-perf class="setitem__perf"></set-perf>
    </div>
    <div class="setitem__right">
      <div class="setitem__label">Un label</div>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton
          class="setitem__options mx-2"
          icon="i-solar-menu-dots-bold"
          size="2xs"
          color="gray"
          variant="soft">
        </UButton>
      </UDropdown>
      <UIcon
        v-if="check"
        class="setitem__check"
        name="i-solar-check-read-outline"
      />
    </div>
    <edition-set-popin v-model="isEditionPopinOpen"></edition-set-popin>
  </div>
</template>

<style lang="scss" scoped>
.setitem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px;
  + .setitem {
    border-top: 1px solid rgba(0, 0, 0, 0.07);
  }
}

.setitem--check {
  &::before {
    content: '';
    border-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: .7;
    background-color: white;
  }
}

.setitem__left,
.setitem__right {
  display: flex;
  align-items: center
}
.setitem__counter {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(var(--color-gray-300));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.setitem__perf {
  margin-left: 10px;
}

.setitem__check {
  color: rgb(var(--color-primary-500));
}
</style>

