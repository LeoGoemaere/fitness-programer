<script setup lang="ts">
</script>

<template>
  <div class="perf">
    <div class="perf__reps">4 to 8</div>
    <div class="perf__reps-label ml-1">reps</div>
    <div class="perf__at mx-1">@</div>
    <div class="perf__weight">100</div>
    <div class="perf__unit ml-1">kg</div>
  </div>
</template>

<style lang="scss" scoped>
.perf {
  display: flex;
}

.perf__reps {
  color: rgb(var(--color-primary-500));
}

.perf__weight {
  font-weight: 600;
}
</style>

