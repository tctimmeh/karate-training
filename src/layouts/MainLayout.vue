<template>
  <q-layout view="lHh Lpr lFf" class="bg-blue-grey-1">
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="q-mr-sm"
          @click="toggleLeftDrawer"
        />

        <q-separator vertical dark inset />

        <q-btn
          flat
          stretch
          to="/"
        >
          Karate Training
        </q-btn>

        <q-space />

        <q-img
          src="~assets/img/shorin-ryu-seibukan-logo-clear.png"
          fit="scale-down"
          width="45px"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList = [
  {
    title: 'Dojo Kun',
    icon: 'school',
    link: '/dojo-kun',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
