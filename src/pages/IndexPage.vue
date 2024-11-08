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
import styleData from 'assets/styles/shorin-ryu-seibukan.json'

defineOptions({
  name: 'IndexPage',
});

function itemClass(section) {
  const classes = [`bg-belt-${section.color}`]
  return classes
}
</script>

<style>
.bg-belt {
  height: 4rem;
  background-size: 200px;
  background-position-y: -5px;
  text-shadow: 2px 2px black;
  color: white;
}

.bg-belt-yellow {
  background-image: url(src/assets/img/yellow-belt-texture.png);
}
.bg-belt-orange {
  background-image: url(src/assets/img/orange-belt-texture.png);
}
.bg-belt-green {
  background-image: url(src/assets/img/green-belt-texture.png);
}
.bg-belt-blue {
  background-image: url(src/assets/img/blue-belt-texture.png);
}
.bg-belt-purple {
  background-image: url(src/assets/img/purple-belt-texture.png);
}
.bg-belt-brown {
  background-image: url(src/assets/img/brown-belt-texture.png);
}
.bg-belt-black {
  background-image: url(src/assets/img/black-belt-texture.png);
}
</style>
