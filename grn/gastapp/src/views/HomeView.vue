<script setup>
  import MediosPagosSearcher from '@/components/MediosPagosSearcher.vue';
  import MediosPagosList from '../components/MediosPagosList.vue';
  import { categorias, medios_pagos, gastos } from "@/data/db.js";
  import { useTestStore } from '@/stores/testStore'
  
  console.log('medios_pagos', medios_pagos)
</script>

<template>
  <main class="container pt-4">
    <MediosPagosSearcher />
    <MediosPagosList />
  </main>
</template>
