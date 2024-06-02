<script setup lang="ts">
const items = ref([{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  checked: false,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}])

interface Props {
  supersetUp: boolean
  supersetDown: boolean
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  supersetUp: false,
  supersetDown: false,
  // color1: 'primary',
  // color2: 'primary',
  // color3: 'primary'
});

// TODO: Renommer le fichier en SetList au singulier

function check(item, index, open) {
  items.value[index].checked = !item.checked
}
</script>

<template>
  <div class="setlist">
    <!-- <UChip position="top-right" size="2xl" text="Coucou">
      <UButton icon="i-heroicons-inbox" color="gray" />
    </UChip> -->

    <div v-if="props.supersetUp || props.supersetDown" class="setlist__superset">
      <span>Superset</span>
      <UIcon
      v-if="supersetUp"
      size="xs"
      name="i-heroicons-arrow-up-20-solid"
    />
      <UIcon
        v-if="supersetDown"
        size="xs"
        name="i-heroicons-arrow-down-20-solid"
        />
    </div>
      
    <span v-if="props.supersetUp || props.supersetDown" class="setlist__superset-color1"></span>
    <!-- <span v-if="color2" class="setlist__superset-color2"></span> -->
    <UAccordion :items="items" class="setlist__inner" :ui="{ container: 'setlist__container', item: { padding: 'p-0' } }">
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

  </div>
</template>

<style lang="scss">
.setlist {
  position: relative;
  // overflow: hidden;
  border-radius: 8px;
}

.setlist__superset {
  $height: 16px;
  position: absolute;
  display: inline-flex;
  align-items: center;
  top: 0;
  left: 10px;
  // transform: translate(-50%, -50%);
  // right: 20px;
  transform: translateY(-50%);
  background-color: rgb(var(--color-primary-500));
  height: $height;
  border-radius: $height / 2;
  color: white;
  padding: 4px;
  font-size: 12px;
  line-height: $height;
  border: 1px solid white;
  z-index: 1;
}

.setlist__inner {
  position: relative;
  padding: 2px;
}
.setlist__superset-color1,
.setlist__superset-color2 {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: rgb(var(--color-primary-500));
}

.setlist__superset-color1 {
  top: 0;
  // background-color: var(--color-1);
  // + .setlist__superset-color2 {
  //   height: 50%;
  // }
}
// .setlist__superset-color2 {
//   bottom: 0;
//   background-color: var(--color-2);
// }

.setlist__container {
  background-color: white;
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

.setlist__heading--check {
  text-decoration: line-through;
}

.heading__right {
  display: flex;
  align-items: center;
}

</style>

