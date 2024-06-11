<script lang="ts" setup>
interface Props {
  label: string
}

// Declarations des props
const props = withDefaults(defineProps<Props>(), {
});
import abs from '~/assets/images/muscles/abs.png'
import back from '~/assets/images/muscles/back.png'
import calves from '~/assets/images/muscles/calves.png'
import chest from '~/assets/images/muscles/chest.png'
import forearms from '~/assets/images/muscles/forearms.png'
import glutes from '~/assets/images/muscles/glutes.png'
import shoulders from '~/assets/images/muscles/shoulders.png'
import triceps from '~/assets/images/muscles/triceps.png'
import biceps from '~/assets/images/muscles/biceps.png'
import quads from '~/assets/images/muscles/quads.png'
import trapezius from '~/assets/images/muscles/trapezius.png'
import neck from '~/assets/images/muscles/neck.png'
import hamstrings from '~/assets/images/muscles/hamstrings.png'
import abductors from '~/assets/images/muscles/abductors.png'
import adductors from '~/assets/images/muscles/adductors.png'
import lumbars from '~/assets/images/muscles/lumbars.png'

// TODO: Optimize images + lazyload ?
function getMuscleImage(muscleName: string) {
  switch (muscleName.toLocaleLowerCase()) {
    case 'abs':
      return abs
    case 'back':
      return back
    case 'calves':
      return calves
    case 'chest':
      return chest
    case 'forearms':
      return forearms
    case 'glutes':
      return glutes
    case 'lumbars':
      return lumbars
    case 'shoulders':
      return shoulders
    case 'triceps':
      return triceps
    case 'biceps':
      return biceps
    case 'quads':
      return quads
    case 'trapezius':
      return trapezius
    case 'neck':
      return neck
    case 'adductors':
      return adductors
    case 'abductors':
      return abductors
    case 'hamstrings':
      return hamstrings
  }
}
</script>

<template>
  <div class="headinglv1__content">
    <div class="headinglv1__visual">
      <img class="headinglv1__img" :src="getMuscleImage(props.label)" />
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