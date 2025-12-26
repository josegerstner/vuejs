<script setup>
import { useMediosPagosStore } from '@/stores/mediosPagos'
import { computed } from 'vue';

const store = useMediosPagosStore()

const lista = computed(() => store.filteredMediosPagos)
</script>

<template>
  <div class="row g-3">
    <div
      v-for="medio in lista"
      :key="medio.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3"
    >
      <div class="card h-100 text-center shadow-sm">
        <div class="card-body">
          <h6 class="card-title">
            {{ medio.tipoNombre }}
          </h6>
          <p class="card-text mb-1">
            {{ medio.financiera }}
          </p>
          <small class="text-muted">
            {{ medio.banco }}
          </small>
        </div>
      </div>
    </div>
  </div>
</template>
