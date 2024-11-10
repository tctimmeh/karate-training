import { ref } from 'vue'
import { defineStore } from 'pinia'
import styleData from 'assets/styles/shorin-ryu-seibukan/shorin-ryu-seibukan.json'

export const useStyleStore = defineStore('style', () => {
  const sections = ref(styleData.sections)
  const moves = ref(styleData.moves)
  const dojoKun = ref(styleData.dojo_kun)
  const kihonRenshu = ref(styleData.kihon_renshu)

  return {
    styleData, sections, moves, dojoKun, kihonRenshu,
  }
})
