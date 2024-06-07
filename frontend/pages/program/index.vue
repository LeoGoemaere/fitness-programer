<script setup lang="ts">

</script>

<template>
  <div>
    <h1>Program</h1>
    <div class="container-el">
      <UFormGroup color="primary" class="flex-1" label="My program" :ui="{ label: { base: 'text-primary-500' } }">
        <USelect
          color="primary"
          size="lg"
          :options="['531', 'GZCL', 'Natural Hypertrophie']"
        ></USelect>
      </UFormGroup>
      <UFormGroup class="mt-2 flex-1" label="Program variation">
        <USelect
          :options="['Novice', 'Intermediaire', 'Advanced']"
        ></USelect>
      </UFormGroup>
    </div>
    <div class="mt-5 text-sm">
      <p class="font-semibold mb-2">Program description</p>
      <div></div>
      <div class="description">
        <div class="image"></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius tincidunt diam quis venenatis. Mauris ultricies mauris nec dolor viverra vehicula in sed orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi luctus augue sit amet hendrerit pretium. Nam aliquet metus egestas, efficitur justo sit amet, suscipit ipsum. Duis lacus lectus, facilisis ullamcorper purus sed, pharetra sagittis sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin sagittis mi at fermentum maximus. Ut vestibulum gravida dui, non tincidunt leo auctor in. Ut sed mauris a est ornare porttitor. Nullam venenatis, mauris sit amet aliquam aliquet, est tortor tincidunt metus, in ullamcorper nisl nibh nec justo. Donec bibendum accumsan sapien, sed sodales mi aliquam ut. Duis aliquet convallis dui, vitae rutrum elit ullamcorper sit amet. Sed hendrerit iaculis ante, quis venenatis enim vehicula et. Fusce lobortis ultrices posuere. Duis vulputate pharetra tempor.</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-el {
  max-width: 250px;
  margin: auto;
}
.description {
  position: relative;
}

.image {
  width: 100px;
  height: 100px;
  background-color: red;
  float: left;
  margin-right: 5px;
}
</style>