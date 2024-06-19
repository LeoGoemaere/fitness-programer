<script setup lang="ts">
interface Props {
  active?: boolean
  selected?: boolean
  label: string
  imgUrl?: string
}

interface Emit {
  (e: 'change', selected: boolean): void
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
  active: false,
  selected: false,
});

// Declarations des emits
const emit = defineEmits<Emit>();

// Declarations des slots
const slots = useSlots();

const hasActionSlot = computed(() => {
  return !!slots.action;
});

function toggleItem () {
  emit('change', !props.selected)
}
</script>

<template>
  <li
    class="itemlv1"
    :class="{
      'itemlv1--active': props.active,
      'itemlv1--selected': props.selected,
    }">
    <div @click="toggleItem" class="headinglv1">
      <ListItemLv1Content
        :label="props.label"
        :imgUrl="props.imgUrl"
      >
      </ListItemLv1Content>
      <UIcon
        class="itemlv1__icon"
        name="i-heroicons-chevron-right-20-solid"
      />
    </div>
    <div class="itemlv1__layer">
      <div class="layerlv1">
        <div class="layerlv1__heading">
          <div class="layerlv1__back">
            <UButton
              @click="toggleItem"
              icon="i-heroicons-chevron-left-20-solid"
              size="xl"
              color="primary"
              variant="link"
              :trailing="false"
              :padded="false"
            />
          </div>
          <div class="layerlv1__title">{{ label }}</div>
          <div v-if="hasActionSlot" class="layerlv1__action">
            <slot name="action" />
          </div>
        </div>

        <!-- On met un v-if car il peut y avoir beaucoup d'elements dans le DOM,
        ce qui peut faire ramer le navigateur -->
        <div class="itemlv1__inner" v-if="selected">
          <slot></slot>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
// TODO: Lock scroll quand layer ouvert
.itemlv1 {
  + .itemlv1 {
    border-top: 1px solid rgba(0, 0, 0, 0.07);
  }
}

.itemlv1--active {
  .headinglv1 {
    color: var(--color-success);
    font-weight: 600;
  }
}

.itemlv1--selected {
  .itemlv1__layer {
    transform: translateX(0);
  }
  .itemlv1__icon {
    transform: rotate(180deg);
  }
}

.headinglv1 {
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-radius: 4px;
  position: relative;
  text-decoration: none;
}

.itemlv1__icon {
  display: flex;
  transition: transform .3s ease-out;
}

.layerlv1__heading {
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
}

.layerlv1__title {
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: currentColor;
  background: none;
  border: none;
  width: 100%;
  position: sticky;
  top: 0;
  padding: var(--page-spacing-y) var(--page-spacing-x);
  background-color: white;
  cursor: pointer;
  &::before {
    display: block;
    margin-right: 8px;
    font-size: 16px;
  }
}

.layerlv1__action,
.layerlv1__back {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  align-items: center;
}

.layerlv1__back {
  left: var(--page-spacing-x);
}
.layerlv1__action {
  right: var(--page-spacing-x);
}

.itemlv1__layer {
  position: fixed;
  left: 0;
  right: 0;
  top: var(--header-height);
  bottom: 0;
  transform: translateX(100%);
  background-color: #fff;
  height: 100%;
  max-height: calc(100dvh - var(--tabbar-height) - var(--header-height));
  overflow: auto;
  overscroll-behavior: contain;
  transition: transform .2s ease-out;
  z-index: 10;
}

.itemlv1__inner {
  padding: 5px var(--page-spacing-x) 0;
}
</style>