<script setup>
import { useMediosPagosStore } from '@/stores/mediosPagos'

const store = useMediosPagosStore()
</script>

<template>
  <div class="card h-100">
    <div class="card-body p-0">
      <ul class="list-group list-group-horizontal-lg list-group-vertical h-100">
        <li
          v-for="medio in store.filteredMediosPagos"
          :key="medio.id"
          class="list-group-item flex-fill"
        >
          {{ medio.nombre }} {{ medio.financiera }} – {{ medio.banco }}
        </li>
      </ul>
    </div>
  </div>
</template>
