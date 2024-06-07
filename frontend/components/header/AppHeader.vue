<script setup lang="ts">
interface Props {
  title: string
  contextLabel?: string
}

// Declarations des props
withDefaults(defineProps<Props>(), {
});

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <Teleport v-if="isMounted" to="#header-teleport-target">
    <header class="header">
      <div class="header__inner">
        <div>
          <h1>{{ title }}</h1>
        </div>
        <div class="header__right">
          <span class="header__info header__info--primary">531</span>
          <span class="header__info">Light template</span>
          <span class="header__info header__info--tertiary">Week 1</span>
        </div>
      </div>
      <span v-if="contextLabel" class="header__context">
        <UBadge :ui="{ rounded: 'rounded-full' }" color="primary" variant="subtle" size="md">{{ contextLabel }}</UBadge>
      </span>
    </header>
  </Teleport>
</template>

<style lang="scss" scoped>
.header {
  padding: 15px 20px;
  background-color: rgb(var(--color-primary-500));
  color: white;
  box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 5);
  position: relative;
  height: var(--header-height);
  display: flex;
}

.header__inner {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}

.header__right {
  text-align: right;
  font-size: 12px
}

.header__info {
  + .header__info {
    margin-top: 2px;
    display: block;
  }
}

.header__info--primary {
  font-size: 14px;
  font-weight: 600;
}

.header__info--tertiary {
  font-weight: 600;
}

.header__context {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>

