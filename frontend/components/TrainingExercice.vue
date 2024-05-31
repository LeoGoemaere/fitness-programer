<script setup lang="ts">
const items = ref([{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  defaultOpen: true,
  checked: false,
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}])

interface Props {
  isSuperset: boolean
  color1?: string | null
  color2?: string | null
  // color3: string
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  isSuperset: false,
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
  <UAccordion :items="items" class="setlist" :class="{ 'setlist--superset': props.isSuperset }" :ui="{ container: 'setlist__container', item: { padding: 'p-0' } }">
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
@keyframes rotate {
	100% {
		transform: rotate(1turn);
    // rotate: 1turn;
	}
}
// $color1: #399953;
// $color2: #fbb300;
// $color3: #d53e33;
// $color4: #377af5;
// $color1: #fbb300;
// $color2: #fbb300;
// $color3: blue;
// $color4: blue;
.setlist {
  // --color-1: rgb(var(--color-primary-500));
  // --color-2: #399953;
  // --color-3: #d53e33;
  // --color-4: #377af5;
  --color-1: v-bind(color1 || color2);
  --color-2: v-bind(color2 || color1);
  // --color-3: v-bind( || color2 || colo);
  // --color-4: #377af5;
  position: relative;
  padding: 2px;
  overflow: hidden;
  border-radius: 8px;
  &::before {
    content: '';
    // background-image: transparent;
    opacity: 0;
    transition: opacity .5s ease-out;
  }
}

.setlist--superset {
  &::before {
		// content: '';
		position: absolute;
		z-index: -2;
    top: 50%;
    left: 50%;
    min-width: 400px;
    min-height: 400px;
    translate: -50% -50%;
		width: 200%;
		height: 200%;
		background-color: var(--color-1);
		background-repeat: no-repeat;
		background-size: 50% 50%, 50% 50%;
		background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    opacity: 1;
    // Si animation
		background-image: linear-gradient(var(--color-1), var(--color-1)), linear-gradient(var(--color-1), var(--color-1)), linear-gradient(var(--color-2), var(--color-2)), linear-gradient(var(--color-2), var(--color-2));
    // animation: rotate 4s linear infinite;
	}
}
$animation-duration: .1s;
.setlist__container {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.07);
  // border-color: rgb(var(--color-primary-500));
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

