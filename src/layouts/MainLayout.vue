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
        <q-item-label header>
          Karate Training
        </q-item-label>

        <q-item
          v-for="section in styleData.sections"
          :key="section.title"
          class="bg-belt"
          :class="[`bg-belt-${section.color}`]"
          clickable
          :to="section.path"
        >
          <q-item-section
            v-if="section.icon"
            avatar
          >
            <q-icon :name="section.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-weight-bold">{{ section.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue';
import styleData from 'assets/styles/shorin-ryu-seibukan.json'

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
