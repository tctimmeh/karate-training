<template>
  <q-page
    class="column items-center q-my-md"
    padding
  >
    <div class="text-h5 text-weight-bold q-mb-lg">
      Dojo Kun
    </div>

    <div
      v-for="stanza in styleData.dojoKun"
      :key="stanza.phrase"
      class="text-center q-mb-md"
    >
      <div class="text-body1 text-weight-medium dojo-kun-phrase">
        {{ stanza.phrase }}
      </div>
      <div class="text-body2 text-weight-light">
        {{ stanza.english }}
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useStyleStore } from 'stores/style'

const styleData = useStyleStore()
</script>

<style>
.dojo-kun-phrase {
  font-size: 120%;
}
</style>
