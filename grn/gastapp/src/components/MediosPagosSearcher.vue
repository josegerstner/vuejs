<script setup>
import { useMediosPagosStore } from '@/stores/mediosPagos'

const store = useMediosPagosStore()
</script>

<template>
  <input
    class="form-control mb-4"
    type="search"
    placeholder="Buscar..."
    v-model="store.searchQuery"
  />
</template>
