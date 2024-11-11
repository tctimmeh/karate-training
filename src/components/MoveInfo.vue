<template>
  <q-card bordered class="column" :class="{'text-center': center}">
    <q-card-section :class="titleClasses">
      {{ move.name }}
    </q-card-section>

    <q-card-section :class="descriptionClasses" class="text-weight-light">
      {{ move.description }}
    </q-card-section>

    <q-card-section>
      <q-img
      />
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  move: {
    type: Object,
    required: true,
  },
  list: {
    type: Boolean,
    required: false,
    default: false,
  },
  center: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const titleClasses = computed(() => {
  const classes = []
  if (props.list) {
    classes.push('text-body text-weight-bold')
    classes.push('q-pb-none')
  } else {
    classes.push('text-h4')
  }
  return classes
})

const descriptionClasses = computed(() => {
  const classes = []
  classes.push('q-pt-none')
  if (props.list) {
    classes.push('text-body')
  } else {
    classes.push('text-subtitle1')
  }
  return classes
})
</script>

<style>
</style>
