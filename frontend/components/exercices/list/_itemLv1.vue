<script setup lang="ts">
interface Props {
  active?: boolean
  selected?: boolean
  label: string
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
      <ListItemLv1Content :label="props.label"></ListItemLv1Content>
      <UIcon
        class="itemlv1__icon"
        name="i-heroicons-chevron-right-20-solid"
      />
    </div>
    <div class="itemlv1__layer">
      <div class="layerlv1">
        <div class="layerlv1__heading">
          <UButton
              @click="toggleItem"
              icon="i-heroicons-chevron-left-20-solid"
              size="xl"
              color="primary"
              variant="link"
              :trailing="false"
            />
            <div class="layerlv1__title">{{ label }}</div>
            <UButton
                @click="toggleItem"
                icon="i-heroicons-plus-circle"
                size="xl"
                color="primary"
                variant="link"
                :trailing="false"
              />
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
  padding: 10px 0;
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
  padding: 20px;
  z-index: 10;
  background-color: white;
  cursor: pointer;
  &::before {
    display: block;
    margin-right: 8px;
    font-size: 16px;
  }
}

.itemlv1__layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  transform: translateX(-100%);
  background-color: #fff;
  height: 100%;
  overflow: auto;
  overscroll-behavior: contain;
  transition: transform .3s ease-out;
  z-index: 10;
}

.itemlv1__inner {
  padding: 5px 20px 0;
}
</style>