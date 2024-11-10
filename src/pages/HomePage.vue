<template>
  <q-page class="column q-gutter-sm q-pt-sm">
    <q-btn
      v-for="section in styleData.sections"
      :key="section.title"
      square
      class="bg-belt text-bold text-body1"
      :class="itemClass(section)"
      :to="section.path"
    >
      {{ section.title }}
    </q-btn>
  </q-page>
</template>

<script setup>
// import styleData from 'assets/styles/shorin-ryu-seibukan/shorin-ryu-seibukan.json'
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()

defineOptions({
  name: 'IndexPage',
});

function itemClass(section) {
  const classes = [`bg-belt-${section.color}`]
  return classes
}
</script>

<style lang="scss" scoped>
</style>
