<template>
  <q-card
    bordered
    class="column"
    :class="{'text-center': center}"
  >
    <q-card-section>
      <div :class="titleClasses">
        {{ move.name }}
      </div>
      <div :class="descriptionClasses">
        {{ move.description }}
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section
      v-if="images && move.imageSets"
      class="text-center"
    >
      <q-tabs
        v-model="imageSetName"
        align="left"
        dense
        :breakpoint="0"
      >
        <q-tab
          v-for="(imageSet, imageSetKey) in move.imageSets"
          :key="imageSetKey"
          :name="imageSetKey"
          @click.stop=""
        >
          {{ imageSet.name }}
        </q-tab>
      </q-tabs>

      <q-carousel
        v-if="carousel"
        v-model="imageNum"
        arrows
        infinite
        swipable
        control-color="secondary"
        animated
        transition-next="slide-left"
        transition-prev="slide-right"
      >
        <q-carousel-slide
          v-for="imageIdx in imageSet.count" :key="imageIdx" :name="imageIdx">
          <q-img :src="imagePath(imageIdx)" height="375px" fit="contain" :draggable="false" />
        </q-carousel-slide>
      </q-carousel>
      <div
        v-else
        class="row q-py-md justify-center q-gutter-md"
      >
        <div v-for="imageIdx in imageSet.count" :key="imageIdx">
          <q-img :src="imagePath(imageIdx)" width="120px" :draggable="false" />
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()

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
  images: {
    type: Boolean,
    required: false,
    default: true,
  },
  carousel: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const imageSetName = ref()
const imageSet = ref()
const imageNum = ref()

const imagePath = (idx) => `${styleData.imagePath}/moves/${props.move.id}/${imageSetName.value}-${idx}.jpeg`

watch(() => props.move, () => {
  imageSetName.value = props.move.coverImage?.set
  imageSet.value = props.move.imageSets?.[imageSetName?.value]
  imageNum.value = props.move.coverImage?.num
}, { immediate: true })

watch(imageSetName, async (newSetName) => {
  imageSet.value = props.move.imageSets?.[newSetName]
  imageNum.value = 1
})

const titleClasses = computed(() => {
  const classes = []
  classes.push('q-pb-none')
  if (props.list) {
    classes.push('text-body text-weight-bold')
  } else {
    classes.push('text-h5')
  }
  return classes
})

const descriptionClasses = computed(() => {
  const classes = []
  classes.push('q-pt-none')
  classes.push('text-weight-light')
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
