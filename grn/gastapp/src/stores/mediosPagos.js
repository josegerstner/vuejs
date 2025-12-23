import { defineStore } from 'pinia'
import { medios_pagos } from '@/data/db.js'

function normalize(text) {
  return text
    ?.toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function safeNormalize(value) {
  return normalize(value ?? '')
}

export const useMediosPagosStore = defineStore('mediosPagos', {
  state: () => ({
    mediosPagos: medios_pagos,
    searchQuery: ''
  }),

  getters: {
    filteredMediosPagos(state) {
      const q = safeNormalize(state.searchQuery)

      if (!q) return state.mediosPagos

      return state.mediosPagos.filter(m => {
        return (
            normalize(m.financiera ?? '').includes(q) ||
            normalize(m.banco ?? '').includes(q) ||
            normalize(m.nombre ?? '').includes(q)
        )
      })
    }
  }
})