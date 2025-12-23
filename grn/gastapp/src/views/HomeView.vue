<script setup>
  import { ref, computed } from 'vue'
  import MediosPagosSearcher from '@/components/MediosPagosSearcher.vue';
  import MediosPagosList from '../components/MediosPagosList.vue';
  import { categorias, medios_pagos, gastos } from "@/data/db.js";
  import { useTestStore } from '@/stores/testStore'
  
  const search = ref('')

  const mediosFiltrados = computed(() => {
    if (!search.value) return medios_pagos

    const q = normalize(search.value)

    //esto funca
    // return medios_pagos.filter(m =>
    //   normalize(m.categoria).includes(q)
    // )
    return medios_pagos.filter(m =>
      [
        m.categoria,
        m.empresa,
        m.banco
      ].some(field =>
        normalize(field).includes(q)
      )
    )
  })

  function normalize(text) {
    return text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
  }

  function onSearch(value) {
    search.value = value
  }
</script>

<template>
  <main class="container pt-4">
    <MediosPagosSearcher @search="onSearch" />
    <MediosPagosList :items="mediosFiltrados" />
  </main>
</template>
