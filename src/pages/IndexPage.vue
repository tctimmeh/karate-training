<template>
  <q-page padding>
    <!-- <div>
      <move-info
        v-for="move in filteredMoves"
        :key="move.name"
        :move="move"
        list
      />
    </div> -->
    <q-list separator>
      <q-item
        v-for="move in filteredMoves"
        :key="move.key"
        :to="`/moves/${move.key}`"
        clickable
      >
        <q-item-section>
          <q-item-label class="text-weight-bold">{{ move.name }}</q-item-label>
          <q-item-label caption>{{ move.description }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
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
