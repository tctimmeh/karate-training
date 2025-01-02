<template>
  <q-page>
    <template v-if="currentMoveIndex == -1">
      <div
        class="column items-center"
      >
        <div class="text-center text-h4 q-mt-xl q-mb-md">
          Kihon Renshu
        </div>

        <div class="q-mb-lg text-body2">
          <div>
            First learn the forms and movements of karate
          </div>
          <div class="text-right">
          - Chotoku Kyan
          </div>
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
          Execute all junbi undo and kihon renshu from start to finish.
        </div>
      </div>
    </template>

    <template v-else-if="workoutComplete">
      <div class="column items-center q-gutter-xl q-pa-xl text-center">
        <div class="text-h4">
          Great Job!
        </div>

        <div class="text-subtitle1 text-weight-light">
          You have reached the end of kihon renshu.
        </div>

        <q-btn
          color="positive"
          size="lg"
          push
          to="/"
        >
          Return Home
        </q-btn>
      </div>
    </template>

    <template v-else>
      <div class="move-panel column">
        <q-linear-progress
          instant-feedback
          size="20px"
          color="blue-5"
          :value="progressPercent"
        >
          <div class="absolute-full flex flex-center text-caption text-dark">
            {{ currentMoveIndex + 1 }} of {{ workout.length }}
          </div>
        </q-linear-progress>
        <move-info
          class="col"
          :move="currentMove"
          @click.stop="nextMove"
          v-touch-swipe.right="prevMove"
          v-touch-swipe.left="nextMove"
          center
        />
      </div>
    </template>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import MoveInfo from 'components/MoveInfo.vue'
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()

const workout = ref(styleData.kihonRenshu)
const currentMoveIndex = ref(-1)
const workoutComplete = ref(false)

const progressPercent = computed(() => (currentMoveIndex.value + 1) / workout.value.length)

const currentMove = computed(() => {
  if (currentMoveIndex.value < 0) {
    return null
  }
  const moveId = workout.value[currentMoveIndex.value]
  return styleData.moves[moveId]
})

function resetQuiz() {
  currentMoveIndex.value = 0
  workoutComplete.value = false
}

function nextMove() {
  currentMoveIndex.value += 1
  if (currentMoveIndex.value >= workout.value.length) {
    workoutComplete.value = true
  }
}

function prevMove() {
  currentMoveIndex.value -= 1
}
</script>

<style lang="scss" scoped>
.move-panel {
  min-height: inherit;
}
</style>
