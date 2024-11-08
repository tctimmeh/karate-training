<template>
  <q-page padding class="column q-gutter-md">
    <q-btn
      class="text-black"
    >
      Kihon Quiz
    </q-btn>
    <q-btn
      color="yellow-6"
      class="text-black"
    >
      Kihon Renshu
    </q-btn>
    <q-btn
      color="orange-6"
      class="text-black"
    >
      Zenshin Kotai
    </q-btn>
    <q-btn
      color="green-6"
      class="text-black"
    >
      Ippon Kumite
    </q-btn>
    <q-btn
      color="blue-8"
      class="text-black"
    >
      Kata
    </q-btn>
    <q-btn
      color="brown-7"
      to="/dojo-kun"
    >
      Dojo Kun
    </q-btn>
    <q-btn
      color="black"
    >
      ???
    </q-btn>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage',
});
</script>

<style>
.q-btn {
  min-height: 4em;
}
</style>
