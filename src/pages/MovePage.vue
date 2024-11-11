<template>
  <q-page column>
    <move-info class="col-grow" :move="move" flat />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStyleStore } from 'stores/style'
import MoveInfo from 'components/MoveInfo.vue'

const route = useRoute()
const styleData = useStyleStore()

const moveId = ref(route.params.moveId)
const move = ref(styleData.moves[moveId.value])

</script>

<style lang="scss" scoped>
</style>
