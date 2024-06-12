<script lang="ts" setup>
interface Props {
  label: string
  imgUrl?: string
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});
</script>

<template>
  <div class="headinglv1__content">
    <div v-if="imgUrl" class="headinglv1__visual">
      <div class="headinglv1__img">
        <img class="headinglv1__img" :src="imgUrl" />
      </div>
    </div>
    <div class="headinglv1__inner">
      <div class="itemlv1__label">{{ props.label }}</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.headinglv1__content {
  display: flex;
  align-items: center;
}

.headinglv1__visual {
  margin-right: 8px;
  display: flex;
  width: 40px;
  height: 40px;
}

.headinglv1__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>