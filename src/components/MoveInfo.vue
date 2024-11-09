<template>
  <q-card bordered class="column">
    <q-card-section class="text-h4">
      {{ move.name }}
    </q-card-section>
    <q-card-section class="text-subtitle1 text-weight-light q-pt-none">
      {{ move.description }}
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  move: Object,
})
</script>

<style>
</style>
