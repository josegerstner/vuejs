import { defineStore } from 'pinia'
import { medios_pagos, tipo_medio_pago } from '@/data/db.js'

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
    tipos: tipo_medio_pago,
    searchQuery: ''
  }),

  // getters: {
  //   filteredMediosPagos(state) {
  //     const q = safeNormalize(state.searchQuery)

  //     if (!q) return state.mediosPagos

  //     return state.mediosPagos.filter(m => {
  //       return (
  //           normalize(m.financiera ?? '').includes(q) ||
  //           normalize(m.banco ?? '').includes(q) ||
  //           normalize(m.nombre ?? '').includes(q)
  //       )
  //     })
  //   }
  // }
  getters: {
    // JOIN: agrega el nombre del tipo de medio de pago
    mediosPagosConTipo(state) {
      const tiposMap = new Map(
        state.tipos.map(t => [t.id, t.nombre])
      )

      return state.mediosPagos.map(m => ({
        ...m,
        tipoNombre: tiposMap.get(m.tipo_medio_pago_id) ?? 'Desconocido'
      }))
    },

    filteredMediosPagos(state) {
      const q = safeNormalize(state.searchQuery)
      if (!q) return this.mediosPagosConTipo

      return this.mediosPagosConTipo.filter(m => {
        return (
          safeNormalize(m.financiera).includes(q) ||
          safeNormalize(m.banco).includes(q) ||
          safeNormalize(m.tipoNombre).includes(q)
        )
      })
    }
  }
})