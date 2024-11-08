<template>
  <q-page>
    <template v-if="currentMove > -1">
      <div
        class="column items-center"
      >
        <div class="text-center text-h4 q-my-xl">
          Kihon Renshu
        </div>

        <q-btn
          @click="resetQuiz"
          color="primary"
          size="xl"
          push
        >
          Begin
        </q-btn>

        <div class="text-center q-mt-xl text-body2 text-weight-light">
          Practice the Kihon Renshu from start to finish.
        </div>
      </div>
    </template>

    <template v-else-if="setComplete">
      <div class="column items-center q-gutter-xl q-pa-xl">
        <div class="text-center text-h4">
          You did it!!
        </div>

        <q-btn
          color="positive"
          size="lg"
          push
          to="/"
        >
          Home
        </q-btn>
      </div>
    </template>

    <template v-else>
      <div
        class="move-panel self-stretch q-pa-md text-center"
        @click.stop="nextMove"
        v-touch-swipe.right="prevMove"
        v-touch-swipe.left="nextMove"
      >
        <div class="q-mt-xl">
          <div class="text-h4 q-mb-lg">
            {{ currentMove.name }}
          </div>
          <div class="text-subtitle1 text-weight-light">
            {{ currentMove.description }}
          </div>
        </div>
      </div>
    </template>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import styleData from 'assets/styles/shorin-ryu-seibukan.json'

const currentMoveIndex = ref(-1)
const setComplete = ref(false)

const currentMove = computed(() => {
  if (currentMoveIndex.value < 0) {
    return null
  }
  const moveId = styleData.kihon_renshu[currentMoveIndex.value]
  return styleData.moves[moveId]
})

function resetQuiz() {
  currentMoveIndex.value = 0
  setComplete.value = false
}

function nextMove() {
  currentMoveIndex.value += 1
  if (currentMoveIndex.value >= styleData.kihon_renshu.length) {
    setComplete.value = true
  }
}

function prevMove() {
  currentMoveIndex.value -= 1
}
</script>

<style>
.move-panel {
  min-height: inherit;
}
</style>
