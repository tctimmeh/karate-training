<template>
  <q-page padding>
    <q-list separator>
      <q-item
        v-for="move in filteredMoves"
        :key="move.id"
        :to="`/moves/${move.id}`"
        clickable
      >
        <q-item-section>
          <q-item-label class="text-weight-bold">{{ move.name }}</q-item-label>
          <q-item-label caption>{{ move.description }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label v-for="tag in move.tags" :key="tag">
            <q-badge :color="`${styleData.tags[tag].color}-8`">
              {{ styleData.tags[tag].name }}
            </q-badge>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script setup>
import { computed } from 'vue'
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()

const filteredMoves = computed(() => {
  let moves = Object.values(styleData.moves)
  moves = moves.filter((a) => true) // a.tags.includes('junbi'))
  moves.sort((a, b) => a.name.localeCompare(b.name))
  return moves
})
</script>

<style lang="scss" scoped>
</style>
