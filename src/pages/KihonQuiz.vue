<template>
  <q-page padding>
    <template v-if="shuffledMoves == null">
      <div
        class="column items-center"
      >
        <div class="text-center text-h4 q-my-xl">
          Kihon Quiz
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
          Identify each of the kihon moves by their japanese name.
        </div>
      </div>
    </template>

    <template v-else-if="shuffledMoves.length <= 0">
      <div class="column items-center q-gutter-xl q-pa-xl text-center">
        <div class="text-h4">
          Great Job!
        </div>

        <div class="text-body1">
          You got {{ numCorrect }} of {{ totalMoves }}
        </div>

        <q-btn
          @click="resetQuiz"
          color="primary"
          size="lg"
          push
        >
          Start Over
        </q-btn>
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
      <div
        class="move-panel column q-gutter-md text-center q-pt-lg"
        v-touch-swipe.left="nextMove"
      >
        <div class="overline">{{ shuffledMoves.length }} Left</div>
        <div class="text-body1">What is...</div>
        <div class="text-h5">{{ currentMove.name }}</div>
        <q-btn
          v-if="!revealAnswer"
          color="accent"
          @click="showAnswer"
        >
          Show Answer
        </q-btn>
        <div
          v-if="revealAnswer"
          class="text-h5"
        >
          {{ currentMove.description }}
        </div>

        <q-btn
          class="q-mt-xl"
          color="positive"
          @click="nextMove"
        >
          Got It
        </q-btn>
      </div>
    </template>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()

const shuffledMoves = ref()
const revealAnswer = ref(false)
const numCorrect = ref(0)

function shuffle(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const totalMoves = computed(() => Object.values(styleData.moves).length)

const currentMove = computed(() => {
  if (shuffledMoves.value?.length <= 0) {
    return null
  }
  return shuffledMoves.value[0]
})

function resetQuiz() {
  shuffledMoves.value = [...Object.values(styleData.moves)]
  shuffle(shuffledMoves.value)
  numCorrect.value = 0
}

function showAnswer() {
  revealAnswer.value = true
}

function nextMove() {
  shuffledMoves.value.shift()
  if (!revealAnswer.value) {
    numCorrect.value++
  }
  revealAnswer.value = false
}

</script>

<style lang="scss" scoped>
.move-panel {
  min-height: inherit;
}
</style>
