<template>
  <q-page padding>
    <div>
      <move-info
        v-for="move in filteredMoves"
        :key="move.name"
        :move="move"
        list
      />
    </div>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import MoveInfo from 'components/MoveInfo.vue'
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()

const filteredMoves = computed(() => Object.values(styleData.moves))
</script>

<style lang="scss" scoped>
</style>
