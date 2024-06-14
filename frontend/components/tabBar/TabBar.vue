<script setup lang="ts">
</script>

<!-- Inspiration: https://codepen.io/raj457036/pen/LYYbjjB -->
<template>
  <ul class="tabbar">
    <li class="tabbar__item">
      <NuxtLink class="tabbar__link" activeClass="tabbar__link--active" :to="{ name: 'exercices' }">
        <span class="tabbar__label">Exercices</span>
        <div class="tabbar__icon">
          <UIcon name="i-solar-dumbbell-large-minimalistic-linear" />
        </div>
      </NuxtLink>
    </li>
    <li class="tabbar__item">
      <NuxtLink class="tabbar__link" activeClass="tabbar__link--active" :to="{ name: 'training' }">
        <span class="tabbar__label">Training</span>
        <div class="tabbar__icon">
          <UIcon name="i-solar-calendar-mark-linear" />
        </div>
      </NuxtLink>
    </li>
    <li class="tabbar__item">
      <NuxtLink class="tabbar__link" activeClass="tabbar__link--active" :to="{ name: 'program' }">
        <span class="tabbar__label">Program</span>
        <div class="tabbar__icon">
          <UIcon name="i-solar-settings-outline" />
        </div>
      </NuxtLink>
    </li>
    
  </ul>
</template>

<style lang="scss">
.tabbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 30;
  height: var(--tabbar-height);

  display: flex;
  padding: 5px;
  justify-content: center;
  box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.2);
  background-color: white;
}

.tabbar__item {
  width: 100px;
  height: 100%;
}

.tabbar__link {
  height: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  transition: background 0.3s ease-in-out;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50px;
    border-bottom: none;
    background-color: rgb(var(--color-primary-500));
    bottom: 0;
    opacity: 0;
    transform: translateY(100%);
    transition: all 0.3s ease-in-out;
  }
}

.tabbar__link--active {
  background-color: rgba(0, 0, 0, 0.07);
  &::before {
    content: "";
    opacity: 1;
    transform: translateY(50%);
    transition: all 0.3s ease-in-out;
  }
}

.tabbar__label {
  margin-bottom: 10px;
  font-size: 12px;
}

.tabbar__icon {
  font-size: 24px;
}

</style>