import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import styleData from 'assets/styles/shorin-ryu-seibukan.json'

export const useStyleStore = defineStore('style', () => {
  const info = ref(styleData.info)
  const sections = ref(styleData.sections)
  const moves = ref(styleData.moves)
  const dojoKun = ref(styleData.dojo_kun)
  const tags = ref(styleData.tags)
  const workouts = ref(styleData.workouts)

  const imagePath = computed(() => `/public/styles/${info.value.id}/img`)

  return {
    styleData, info, sections, moves, dojoKun, workouts, imagePath, tags,
  }
})
