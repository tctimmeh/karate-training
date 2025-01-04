<template>
  <q-page>
    <template v-if="currentMoveIndex == -1">
      <div
        class="column items-center q-pa-lg q-gutter-md"
      >
        <q-btn
          v-for="workout in workouts"
          :key="workout.name"
          class="self-stretch"
          @click="startWorkout(workout)"
          size="lg"
        >
          {{ workout.name }}
        </q-btn>
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
          size="24px"
          color="cyan-3"
          :value="progressPercent"
        >
          <div class="absolute-full flex flex-center text-subtitle2 text-dark">
            {{ currentMoveIndex + 1 }} of {{ moves.length }}
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

const workouts = ref(styleData.workouts)
const moves = ref(null)
const currentMoveIndex = ref(-1)
const workoutComplete = ref(false)

const progressPercent = computed(() => (currentMoveIndex.value + 1) / moves.value.length)

const currentMove = computed(() => {
  if (currentMoveIndex.value < 0) {
    return null
  }
  const moveId = moves.value[currentMoveIndex.value]
  return styleData.moves[moveId]
})

function startWorkout(newWorkout) {
  moves.value = newWorkout.moves
  currentMoveIndex.value = 0
  workoutComplete.value = false
}

function nextMove() {
  currentMoveIndex.value += 1
  if (currentMoveIndex.value >= moves.value.length) {
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
